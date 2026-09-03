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
          { id: 'getting-started', label: 'Installation & Setup', href: '/nui/getting-started' }
        ]
      },
      {
        id: 'general-section',
        label: 'General & Actions',
        children: [
          { id: 'general-overview', label: 'Category Overview', href: '/nui/general' },
          { id: 'badge', label: 'Badge', href: '/nui/components/badge' },
          { id: 'button', label: 'Button', href: '/nui/components/button' },
          { id: 'chip', label: 'Chip', href: '/nui/components/chip' },
          { id: 'kbd', label: 'Kbd', href: '/nui/components/kbd' },
          { id: 'nuiprovider', label: 'NUIProvider', href: '/nui/components/nuiprovider' },
          { id: 'watermark', label: 'Watermark', href: '/nui/components/watermark' },
        ]
      },
      {
        id: 'layout-section',
        label: 'Layout & Structure',
        children: [
          { id: 'layout-overview', label: 'Category Overview', href: '/nui/layout-and-structure' },
          { id: 'accordion', label: 'Accordion', href: '/nui/components/accordion' },
          { id: 'card', label: 'Card', href: '/nui/components/card' },
          { id: 'collapsible', label: 'Collapsible', href: '/nui/components/collapsible' },
          { id: 'divider', label: 'Divider', href: '/nui/components/divider' },
          { id: 'layout', label: 'Layout (Container/Grid)', href: '/nui/components/layout' },
          { id: 'resizable', label: 'Resizable', href: '/nui/components/resizable' },
          { id: 'scrollarea', label: 'ScrollArea', href: '/nui/components/scrollarea' },
        ]
      },
      {
        id: 'inputs-section',
        label: 'Inputs & Forms',
        children: [
          { id: 'inputs-overview', label: 'Category Overview', href: '/nui/inputs-and-forms' },
          { id: 'checkbox', label: 'Checkbox', href: '/nui/components/checkbox' },
          { id: 'colorpicker', label: 'ColorPicker', href: '/nui/components/colorpicker' },
          { id: 'fileuploader', label: 'FileUploader', href: '/nui/components/fileuploader' },
          { id: 'form', label: 'Form', href: '/nui/components/form' },
          { id: 'input', label: 'Input', href: '/nui/components/input' },
          { id: 'numberinput', label: 'NumberInput', href: '/nui/components/numberinput' },
          { id: 'passwordinput', label: 'PasswordInput', href: '/nui/components/passwordinput' },
          { id: 'pininput', label: 'PinInput', href: '/nui/components/pininput' },
          { id: 'radiogroup', label: 'RadioGroup', href: '/nui/components/radiogroup' },
          { id: 'rating', label: 'Rating', href: '/nui/components/rating' },
          { id: 'slider', label: 'Slider', href: '/nui/components/slider' },
          { id: 'switch', label: 'Switch', href: '/nui/components/switch' },
          { id: 'textarea', label: 'Textarea', href: '/nui/components/textarea' },
        ]
      },
      {
        id: 'pickers-section',
        label: 'Pickers & Selects',
        children: [
          { id: 'pickers-overview', label: 'Category Overview', href: '/nui/pickers-and-selects' },
          { id: 'calendar', label: 'Calendar', href: '/nui/components/calendar' },
          { id: 'combobox', label: 'Combobox', href: '/nui/components/combobox' },
          { id: 'datepicker', label: 'DatePicker', href: '/nui/components/datepicker' },
          { id: 'daterangepicker', label: 'DateRangePicker', href: '/nui/components/daterangepicker' },
          { id: 'multiselect', label: 'MultiSelect', href: '/nui/components/multiselect' },
          { id: 'select', label: 'Select', href: '/nui/components/select' },
          { id: 'timepicker', label: 'TimePicker', href: '/nui/components/timepicker' },
          { id: 'timerangepicker', label: 'TimeRangePicker', href: '/nui/components/timerangepicker' },
        ]
      },
      {
        id: 'navigation-section',
        label: 'Navigation',
        children: [
          { id: 'navigation-overview', label: 'Category Overview', href: '/nui/navigation' },
          { id: 'breadcrumbs', label: 'Breadcrumbs', href: '/nui/components/breadcrumbs' },
          { id: 'link', label: 'Link', href: '/nui/components/link' },
          { id: 'megamenu', label: 'MegaMenu', href: '/nui/components/megamenu' },
          { id: 'pagination', label: 'Pagination', href: '/nui/components/pagination' },
          { id: 'segmentedcontrol', label: 'SegmentedControl', href: '/nui/components/segmentedcontrol' },
          { id: 'stepper', label: 'Stepper', href: '/nui/components/stepper' },
          { id: 'tabs', label: 'Tabs', href: '/nui/components/tabs' },
          { id: 'treeview', label: 'TreeView', href: '/nui/components/treeview' },
        ]
      },
      {
        id: 'overlays-section',
        label: 'Overlays & Dialogs',
        children: [
          { id: 'overlays-overview', label: 'Category Overview', href: '/nui/overlays-and-dialogs' },
          { id: 'contextmenu', label: 'ContextMenu', href: '/nui/components/contextmenu' },
          { id: 'dialog', label: 'Dialog', href: '/nui/components/dialog' },
          { id: 'drawer', label: 'Drawer', href: '/nui/components/drawer' },
          { id: 'dropdown', label: 'Dropdown', href: '/nui/components/dropdown' },
          { id: 'hovercard', label: 'HoverCard', href: '/nui/components/hovercard' },
          { id: 'modal', label: 'Modal', href: '/nui/components/modal' },
          { id: 'popover', label: 'Popover', href: '/nui/components/popover' },
          { id: 'tooltip', label: 'Tooltip', href: '/nui/components/tooltip' },
        ]
      },
      {
        id: 'feedback-section',
        label: 'Indicators & Feedback',
        children: [
          { id: 'indicators-overview', label: 'Category Overview', href: '/nui/indicators-and-buttons' },
          { id: 'alert', label: 'Alert', href: '/nui/components/alert' },
          { id: 'progress', label: 'Progress', href: '/nui/components/progress' },
          { id: 'skeleton', label: 'Skeleton', href: '/nui/components/skeleton' },
          { id: 'spinner', label: 'Spinner', href: '/nui/components/spinner' },
          { id: 'toast', label: 'Toast', href: '/nui/components/toast' },
        ]
      },
      {
        id: 'data-section',
        label: 'Data Display & Media',
        children: [
          { id: 'data-overview', label: 'Category Overview', href: '/nui/data-display' },
          { id: 'attachment', label: 'Attachment', href: '/nui/components/attachment' },
          { id: 'avatar', label: 'Avatar', href: '/nui/components/avatar' },
          { id: 'carousel', label: 'Carousel', href: '/nui/components/carousel' },
          { id: 'clipboard', label: 'Clipboard', href: '/nui/components/clipboard' },
          { id: 'codeblock', label: 'CodeBlock', href: '/nui/components/codeblock' },
          { id: 'emptystate', label: 'EmptyState', href: '/nui/components/emptystate' },
          { id: 'image', label: 'Image', href: '/nui/components/image' },
          { id: 'statcard', label: 'StatCard', href: '/nui/components/statcard' },
          { id: 'table', label: 'Table', href: '/nui/components/table' },
          { id: 'timeline', label: 'Timeline', href: '/nui/components/timeline' },
          { id: 'transferlist', label: 'TransferList', href: '/nui/components/transferlist' },
          { id: 'video', label: 'VideoPlayer', href: '/nui/components/video' },
          { id: 'virtuallist', label: 'VirtualList', href: '/nui/components/virtuallist' },
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
