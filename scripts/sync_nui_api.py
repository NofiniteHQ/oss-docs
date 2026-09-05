import os
import re

nui_docs_path = r"d:\stack\packages\nui\docs\components"
app_nui_path = r"d:\oss-docs\src\app\nui"

def main():
    if not os.path.exists(nui_docs_path):
        print(f"Error: {nui_docs_path} does not exist.")
        return
        
    for filename in os.listdir(nui_docs_path):
        if filename.endswith(".md"):
            comp_name = filename[:-3]
            raw_path = os.path.join(nui_docs_path, filename)
            
            with open(raw_path, 'r', encoding='utf-8') as f:
                raw_content = f.read()
            
            # Extract everything from "## API / Props" onwards
            api_idx = raw_content.find("## API / Props")
            if api_idx == -1:
                continue
                
            api_content = raw_content[api_idx:]
            
            # Replace ## API / Props with ## API
            api_content = api_content.replace("## API / Props", "## API")
            
            mdx_path = os.path.join(app_nui_path, comp_name, "page.mdx")
            if os.path.exists(mdx_path):
                with open(mdx_path, 'r', encoding='utf-8') as f:
                    mdx_content = f.read()
                
                # Replace everything from ## Props onwards
                mdx_api_idx = mdx_content.find("## Props")
                if mdx_api_idx != -1:
                    new_mdx = mdx_content[:mdx_api_idx] + api_content
                    with open(mdx_path, 'w', encoding='utf-8') as f:
                        f.write(new_mdx)
                    print(f"Updated {comp_name}")
                else:
                    print(f"No ## Props section in {comp_name}")

if __name__ == "__main__":
    main()
