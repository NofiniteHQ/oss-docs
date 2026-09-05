import os
import glob
import re

SOURCE_DIR = r"d:\stack\packages\nui\docs\components"
DEST_DIR = r"d:\oss-docs\src\app\nui"

def escape_html(match):
    text = match.group(0)
    # Only escape things that look like HTML tags
    text = re.sub(r'<([a-zA-Z0-9]+)>', r'`<\1>`', text)
    text = re.sub(r'</([a-zA-Z0-9]+)>', r'`</\1>`', text)
    return text

def main():
    md_files = glob.glob(os.path.join(SOURCE_DIR, "*.md"))
    
    count = 0
    for md_path in md_files:
        basename = os.path.basename(md_path)
        comp_name = os.path.splitext(basename)[0]
        
        dest_folder = os.path.join(DEST_DIR, comp_name)
        if not os.path.exists(dest_folder):
            os.makedirs(dest_folder)
            
        dest_file = os.path.join(dest_folder, "page.mdx")
        
        if os.path.exists(dest_file):
            continue
            
        print(f"Porting {comp_name}...")
        
        with open(md_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Add ComponentPreview import
        content = "import { ComponentPreview } from '@/components/ComponentPreview';\n\n" + content
        
        # Next.js MDX parser crashes on raw HTML in tables, like <button> or <div>.
        # We need to escape them by wrapping in backticks.
        content = re.sub(r'\|.*\|', escape_html, content)
        
        with open(dest_file, 'w', encoding='utf-8') as f:
            f.write(content)
            
        count += 1
        
    print(f"Successfully ported {count} missing NUI documentation pages.")
            
if __name__ == "__main__":
    main()
