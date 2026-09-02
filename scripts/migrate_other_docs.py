import os
import shutil

src_base = r"d:\oss-docs\docs"
dest_base = r"d:\oss-docs\src\app"

packages = ["locale", "nuicss", "utils", "markon"]

def get_layout_content(pkg):
    return f"""import React from 'react';
import {{ DocsLayout }} from '@/components/DocsLayout';
import {{ getDocsNavigation }} from '@/utils/nav';

export default function {pkg.capitalize()}DocsLayout({{ children }}: {{ children: React.ReactNode }}) {{
  const navData = getDocsNavigation('{pkg}');
  return <DocsLayout navData={{navData}}>{{children}}</DocsLayout>;
}}
"""

def migrate():
    for pkg in packages:
        src_dir = os.path.join(src_base, pkg)
        dest_dir = os.path.join(dest_base, pkg)
        
        if not os.path.exists(src_dir):
            continue
            
        os.makedirs(dest_dir, exist_ok=True)
        
        # Write layout.tsx
        with open(os.path.join(dest_dir, "layout.tsx"), "w", encoding="utf-8") as f:
            f.write(get_layout_content(pkg))
            
        # Walk and copy
        for root, dirs, files in os.walk(src_dir):
            for file in files:
                if file == "_category_.json":
                    continue
                if file.endswith(".md") or file.endswith(".mdx"):
                    rel_dir = os.path.relpath(root, src_dir)
                    
                    if file == "index.md" or file == "index.mdx":
                        if rel_dir == ".":
                            target_dir = dest_dir
                        else:
                            target_dir = os.path.join(dest_dir, rel_dir)
                    else:
                        page_name = file[:file.rfind(".")]
                        if rel_dir == ".":
                            target_dir = os.path.join(dest_dir, page_name)
                        else:
                            target_dir = os.path.join(dest_dir, rel_dir, page_name)
                            
                    os.makedirs(target_dir, exist_ok=True)
                    target_file = os.path.join(target_dir, "page.mdx")
                    
                    src_file = os.path.join(root, file)
                    shutil.copy2(src_file, target_file)
                    print(f"Copied {src_file} -> {target_file}")

if __name__ == "__main__":
    migrate()
