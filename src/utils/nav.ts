import fs from 'fs';
import path from 'path';

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  children?: NavItem[];
}

function formatLabel(name: string): string {
  if (name === 'getting-started') return 'Getting Started';
  if (name.toLowerCase() === 'nuicss') return 'NUICSS';
  if (/^v\d+$/i.test(name)) return name.toUpperCase();
  return name.split('-').map(word => word === 'and' ? 'and' : word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function buildTree(dirPath: string, basePath: string): NavItem[] {
  const items: NavItem[] = [];
  
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(dirPath, entry.name);
        const children = buildTree(fullPath, `${basePath}/${entry.name}`);
        
        const hasPage = fs.existsSync(path.join(fullPath, 'page.mdx')) || fs.existsSync(path.join(fullPath, 'page.tsx'));
        
        items.push({
          id: entry.name,
          label: formatLabel(entry.name),
          href: hasPage ? `${basePath}/${entry.name}` : undefined,
          children: children.length > 0 ? children : undefined
        });
      }
    }
    
    items.sort((a, b) => {
      if (a.id === 'getting-started') return -1;
      if (b.id === 'getting-started') return 1;

      // Sort version directories in descending order (e.g. V2 before V1)
      const isVerA = /^v\d+/i.test(a.id);
      const isVerB = /^v\d+/i.test(b.id);
      if (isVerA && isVerB) {
        const numA = parseInt(a.id.replace(/\D/g, ''), 10);
        const numB = parseInt(b.id.replace(/\D/g, ''), 10);
        return numB - numA;
      }
      if (isVerA) return -1;
      if (isVerB) return 1;

      return a.label.localeCompare(b.label);
    });
    
  } catch (error) {
    console.error(`Failed to read directory ${dirPath}:`, error);
  }
  
  return items;
}

export function getDocsNavigation(pkg: string): NavItem[] {
  if (pkg === 'nui') {
    return [
      {
        id: 'getting-started-section',
        label: 'Getting Started',
        children: [
          { id: 'introduction', label: 'Introduction', href: '/nui' },
          { id: 'getting-started', label: 'Installation & Setup', href: '/nui/getting-started' },
          { id: 'programmatic', label: 'Programmatic API (nui.*)', href: '/nui/programmatic' },
          { id: 'nuiprovider', label: 'NUI Provider', href: '/nui/components/nuiprovider' },
          { id: 'theming', label: 'Theming & Design Tokens', href: '/nui/theming' }
        ]
      },
      {
        id: 'general-section',
        label: 'General & Actions',
        children: [
          { id: 'button', label: 'Button', href: '/nui/components/button' },
          { id: 'badge', label: 'Badge', href: '/nui/components/badge' },
          { id: 'chip', label: 'Chip', href: '/nui/components/chip' },
          { id: 'kbd', label: 'Kbd', href: '/nui/components/kbd' },
          { id: 'watermark', label: 'Watermark', href: '/nui/components/watermark' },
        ]
      },
      {
        id: 'layout-section',
        label: 'Layout & Structure',
        children: [
          { id: 'accordion', label: 'Accordion', href: '/nui/components/accordion' },
          { id: 'card', label: 'Card', href: '/nui/components/card' },
          { id: 'collapsible', label: 'Collapsible', href: '/nui/components/collapsible' },
          { id: 'divider', label: 'Divider', href: '/nui/components/divider' },
          { id: 'layout', label: 'Layout (Container/Grid)', href: '/nui/components/layout' },
          { id: 'resizable', label: 'Resizable', href: '/nui/components/resizable' },
          { id: 'scrollarea', label: 'Scroll Area', href: '/nui/components/scrollarea' },
        ]
      },
      {
        id: 'navigation-section',
        label: 'Navigation',
        children: [
          { id: 'breadcrumbs', label: 'Breadcrumbs', href: '/nui/components/breadcrumbs' },
          { id: 'link', label: 'Link', href: '/nui/components/link' },
          { id: 'megamenu', label: 'Mega Menu', href: '/nui/components/megamenu' },
          { id: 'pagination', label: 'Pagination', href: '/nui/components/pagination' },
          { id: 'segmentedcontrol', label: 'Segmented Control', href: '/nui/components/segmentedcontrol' },
          { id: 'stepper', label: 'Stepper', href: '/nui/components/stepper' },
          { id: 'tabs', label: 'Tabs', href: '/nui/components/tabs' },
          { id: 'treeview', label: 'Tree View', href: '/nui/components/treeview' },
        ]
      },
      {
        id: 'inputs-section',
        label: 'Inputs & Forms',
        children: [
          { id: 'checkbox', label: 'Checkbox', href: '/nui/components/checkbox' },
          { id: 'fileuploader', label: 'File Uploader', href: '/nui/components/fileuploader' },
          { id: 'form', label: 'Form', href: '/nui/components/form' },
          { id: 'input', label: 'Input', href: '/nui/components/input' },
          { id: 'numberinput', label: 'Number Input', href: '/nui/components/numberinput' },
          { id: 'passwordinput', label: 'Password Input', href: '/nui/components/passwordinput' },
          { id: 'pininput', label: 'Pin Input', href: '/nui/components/pininput' },
          { id: 'radiogroup', label: 'Radio Group', href: '/nui/components/radiogroup' },
          { id: 'slider', label: 'Slider', href: '/nui/components/slider' },
          { id: 'switch', label: 'Switch', href: '/nui/components/switch' },
          { id: 'textarea', label: 'Textarea', href: '/nui/components/textarea' },
          { id: 'transferlist', label: 'Transfer List', href: '/nui/components/transferlist' },
        ]
      },
      {
        id: 'pickers-section',
        label: 'Pickers & Selects',
        children: [
          { id: 'calendar', label: 'Calendar', href: '/nui/components/calendar' },
          { id: 'colorpicker', label: 'Color Picker', href: '/nui/components/colorpicker' },
          { id: 'combobox', label: 'Combobox', href: '/nui/components/combobox' },
          { id: 'datepicker', label: 'Date Picker', href: '/nui/components/datepicker' },
          { id: 'daterangepicker', label: 'Date Range Picker', href: '/nui/components/daterangepicker' },
          { id: 'multiselect', label: 'Multi Select', href: '/nui/components/multiselect' },
          { id: 'rating', label: 'Rating', href: '/nui/components/rating' },
          { id: 'select', label: 'Select', href: '/nui/components/select' },
          { id: 'timepicker', label: 'Time Picker', href: '/nui/components/timepicker' },
          { id: 'timerangepicker', label: 'Time Range Picker', href: '/nui/components/timerangepicker' },
        ]
      },
      {
        id: 'overlays-section',
        label: 'Overlays & Dialogs',
        children: [
          { id: 'contextmenu', label: 'Context Menu', href: '/nui/components/contextmenu' },
          { id: 'dialog', label: 'Dialog', href: '/nui/components/dialog' },
          { id: 'drawer', label: 'Drawer', href: '/nui/components/drawer' },
          { id: 'dropdown', label: 'Dropdown', href: '/nui/components/dropdown' },
          { id: 'hovercard', label: 'Hover Card', href: '/nui/components/hovercard' },
          { id: 'modal', label: 'Modal', href: '/nui/components/modal' },
          { id: 'popover', label: 'Popover', href: '/nui/components/popover' },
          { id: 'tooltip', label: 'Tooltip', href: '/nui/components/tooltip' },
        ]
      },
      {
        id: 'feedback-section',
        label: 'Indicators & Feedback',
        children: [
          { id: 'alert', label: 'Alert', href: '/nui/components/alert' },
          { id: 'progress', label: 'Progress', href: '/nui/components/progress' },
          { id: 'skeleton', label: 'Skeleton', href: '/nui/components/skeleton' },
          { id: 'spinner', label: 'Spinner', href: '/nui/components/spinner' },
          { id: 'toast', label: 'Toast', href: '/nui/components/toast' },
        ]
      },
      {
        id: 'media-section',
        label: 'Data Display & Media',
        children: [
          { id: 'attachment', label: 'Attachment', href: '/nui/components/attachment' },
          { id: 'avatar', label: 'Avatar', href: '/nui/components/avatar' },
          { id: 'carousel', label: 'Carousel', href: '/nui/components/carousel' },
          { id: 'clipboard', label: 'Clipboard', href: '/nui/components/clipboard' },
          { id: 'codeblock', label: 'Code Block', href: '/nui/components/codeblock' },
          { id: 'table', label: 'Data Table', href: '/nui/components/table' },
          { id: 'emptystate', label: 'Empty State', href: '/nui/components/emptystate' },
          { id: 'image', label: 'Image', href: '/nui/components/image' },
          { id: 'statcard', label: 'Stat Card', href: '/nui/components/statcard' },
          { id: 'timeline', label: 'Timeline', href: '/nui/components/timeline' },
          { id: 'video', label: 'Video Player', href: '/nui/components/video' },
          { id: 'virtuallist', label: 'Virtual List', href: '/nui/components/virtuallist' },
        ]
      }
    ];
  }

  if (pkg === 'nuicss') {
    return [
      {
        id: 'getting-started-section',
        label: 'Getting Started',
        children: [
          { id: 'overview', label: 'Overview', href: '/nuicss' },
          { id: 'installation', label: 'Installation & Setup', href: '/nuicss/installation' },
          { id: 'configuration', label: 'Configuration', href: '/nuicss/configuration' },
        ]
      },
      {
        id: 'core-concepts-section',
        label: 'Core Concepts',
        children: [
          { id: 'architecture', label: 'Architecture & Engine', href: '/nuicss/architecture' },
          { id: 'theming', label: 'Theming & Design Tokens', href: '/nuicss/theming' },
        ]
      },
      {
        id: 'utilities-section',
        label: 'Utilities',
        children: [
          { id: 'layout', label: 'Layout', href: '/nuicss/utilities/layout' },
          { id: 'flex-grid', label: 'Flexbox & Grid', href: '/nuicss/utilities/flex-grid' },
          { id: 'spacing', label: 'Spacing', href: '/nuicss/utilities/spacing' },
          { id: 'sizing', label: 'Sizing', href: '/nuicss/utilities/sizing' },
          { id: 'typography', label: 'Typography', href: '/nuicss/utilities/typography' },
          { id: 'backgrounds-borders', label: 'Backgrounds & Borders', href: '/nuicss/utilities/backgrounds-borders' },
          { id: 'effects-filters', label: 'Effects & Filters', href: '/nuicss/utilities/effects-filters' },
        ]
      }
    ];
  }

  const docsDir = path.join(process.cwd(), 'src', 'app', pkg);
  const nav = buildTree(docsDir, `/${pkg}`);
  
  const hasRootPage = fs.existsSync(path.join(docsDir, 'page.mdx')) || fs.existsSync(path.join(docsDir, 'page.tsx'));
  if (hasRootPage) {
    nav.unshift({
      id: 'overview',
      label: 'Overview',
      href: `/${pkg}`
    });
  }
  
  return nav;
}
