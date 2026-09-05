import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import rdts from 'react-docgen-typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NUI_SRC_DIR = path.resolve(__dirname, '../../stack/packages/nui/src/components');
const OUT_FILE = path.resolve(__dirname, '../src/data/component-props.json');

const options = {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  propFilter: (prop) => {
    if (prop.declarations !== undefined && prop.declarations.length > 0) {
      const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
        return !declaration.fileName.includes('node_modules');
      });
      return Boolean(hasPropAdditionalDescription);
    }
    return true;
  },
};

const TSCONFIG_PATH = path.resolve(__dirname, '../../stack/packages/nui/tsconfig.json');

function extractProps() {
  console.log('Extracting props from NUI components...');

  if (fs.existsSync(NUI_SRC_DIR) && fs.existsSync(TSCONFIG_PATH)) {
    const components = rdts.withCustomConfig(TSCONFIG_PATH, options);
    // Find all .tsx files in NUI components directory
    const files = [];
    function findFiles(dir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          findFiles(fullPath);
        } else if (entry.isFile() && fullPath.endsWith('.tsx') && !fullPath.endsWith('.stories.tsx') && !fullPath.endsWith('.test.tsx')) {
          files.push(fullPath);
        }
      }
    }

    findFiles(NUI_SRC_DIR);
    const parsed = components.parse(files);
    
    // Transform into a simple map: ComponentName -> Props
    const output = {};
    parsed.forEach(comp => {
      // comp.displayName usually matches the component name
      if (comp.displayName) {
        output[comp.displayName] = Object.entries(comp.props || {}).map(([name, prop]) => ({
          name,
          description: prop.description || '',
          required: prop.required,
          type: prop.type ? prop.type.name : '',
          defaultValue: prop.defaultValue ? prop.defaultValue.value : null
        }));
      }
    });

    fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
    fs.writeFileSync(OUT_FILE, JSON.stringify(output, null, 2));
    console.log('Saved extracted props to', OUT_FILE);
  } else {
    if (fs.existsSync(OUT_FILE)) {
      console.log('NUI source directory not found (standalone CI/CD build). Using bundled component-props.json.');
    } else {
      fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
      fs.writeFileSync(OUT_FILE, JSON.stringify({}, null, 2));
      console.log('Created empty component-props.json for standalone build.');
    }
  }
}

extractProps();
