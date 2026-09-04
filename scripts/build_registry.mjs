import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REGISTRY_DIR = path.resolve(__dirname, '../src/registry');
const INDEX_FILE = path.join(REGISTRY_DIR, 'index.ts');

const VALID_NUI_EXPORTS = new Set([
  'Accordion', 'Alert', 'Attachment', 'Avatar', 'Badge', 'Breadcrumbs', 'Button', 
  'Calendar', 'Card', 'Carousel', 'Checkbox', 'Chip', 'Clipboard', 'CodeBlock', 
  'Collapsible', 'ColorPicker', 'Combobox', 'ContextMenu', 'DatePicker', 'DateRangePicker', 
  'DialogProvider', 'useDialog', 'Divider', 'Drawer', 'Dropdown', 'EmptyState', 
  'FileUploader', 'Form', 'HoverCard', 'Image', 'Input', 'Kbd', 'Container', 'Link', 
  'MegaMenu', 'Modal', 'MultiSelect', 'NUIProvider', 'useTheme', 'NumberInput', 
  'Pagination', 'PasswordInput', 'PinInput', 'Popover', 'Progress', 'RadioGroup', 
  'Rating', 'Resizable', 'ScrollArea', 'SegmentedControl', 'Select', 'Skeleton', 
  'Slider', 'Spinner', 'StatCard', 'Stepper', 'Switch', 'Table', 'Tabs', 'Textarea', 
  'Timeline', 'TimePicker', 'TimeRangePicker', 'Toast', 'ToastProvider', 'useToast', 
  'Tooltip', 'TransferList', 'TreeView', 'VideoPlayer', 'VirtualList', 'Watermark',
  'cn', 'nui'
]);

const ALL_68_COMPONENTS = [
  'button', 'badge', 'chip', 'kbd', 'nuiprovider', 'watermark',
  'accordion', 'card', 'collapsible', 'divider', 'layout', 'resizable', 'scrollarea',
  'checkbox', 'colorpicker', 'fileuploader', 'form', 'input', 'numberinput', 'passwordinput', 'pininput', 'radiogroup', 'rating', 'slider', 'switch', 'textarea',
  'calendar', 'combobox', 'datepicker', 'daterangepicker', 'multiselect', 'select', 'timepicker', 'timerangepicker',
  'breadcrumbs', 'link', 'megamenu', 'pagination', 'segmentedcontrol', 'stepper', 'tabs', 'treeview',
  'contextmenu', 'dialog', 'drawer', 'dropdown', 'hovercard', 'modal', 'popover', 'tooltip',
  'alert', 'progress', 'skeleton', 'spinner', 'toast',
  'attachment', 'avatar', 'carousel', 'clipboard', 'codeblock', 'emptystate', 'image', 'statcard', 'table', 'timeline', 'transferlist', 'video', 'virtuallist'
];

const COMPONENT_DEFAULT_DEMOS = {
  button: `export default function Example() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}`,
  badge: `export default function Example() {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  );
}`,
  chip: `export default function Example() {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <Chip variant="default">Design</Chip>
      <Chip variant="primary">Development</Chip>
      <Chip variant="outline">Product</Chip>
    </div>
  );
}`,
  kbd: `export default function Example() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted">Press</span>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <span className="text-sm text-muted">to open command palette</span>
    </div>
  );
}`,
  nuiprovider: `export default function Example() {
  return (
    <div className="p-4 rounded-lg border border-default bg-surface text-center">
      <p className="text-sm font-medium">NUIProvider is active and managing themes globally.</p>
    </div>
  );
}`,
  watermark: `export default function Example() {
  return (
    <Watermark text="CONFIDENTIAL">
      <div className="h-40 w-80 rounded-lg border border-default p-4 flex items-center justify-center text-sm text-muted">
        Protected Document Container
      </div>
    </Watermark>
  );
}`,
  accordion: `export default function Example() {
  return (
    <div className="w-full max-w-md">
      <Accordion 
        defaultOpenId="item-1"
        data={[
          {
            id: 'item-1',
            title: 'What is NUI?',
            content: 'NUI is a set of accessible, composable UI primitives for React.'
          },
          {
            id: 'item-2',
            title: 'How is it styled?',
            content: 'Styling is completely driven by Nuicss semantic tokens.'
          }
        ]}
      />
    </div>
  );
}`,
  card: `export default function Example() {
  return (
    <Card hover className="max-w-sm">
      <Card.Header>
        <h4 className="font-bold text-lg">Analytics Overview</h4>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-muted">Track user engagement and retention across all features.</p>
      </Card.Body>
      <Card.Footer>
        <Button size="sm" variant="primary">View Details</Button>
      </Card.Footer>
    </Card>
  );
}`,
  collapsible: `export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full max-w-sm rounded-lg border border-default p-4 bg-surface">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-sm">Collapsible Section</h4>
        <Button size="sm" variant="ghost" onClick={() => setOpen(!open)}>
          {open ? 'Hide' : 'Show'}
        </Button>
      </div>
      <Collapsible open={open}>
        <p className="mt-3 text-sm text-muted border-t border-default pt-3">
          This content smoothly reveals and hides with strict accessibility states.
        </p>
      </Collapsible>
    </div>
  );
}`,
  divider: `export default function Example() {
  return (
    <div className="w-full max-w-md flex flex-col gap-4">
      <div>Top Content</div>
      <Divider />
      <div>Bottom Content</div>
    </div>
  );
}`,
  layout: `export default function Example() {
  return (
    <Container className="p-6 border border-dashed border-default rounded-lg text-center">
      <p className="text-sm font-semibold">Container Component (Max width with responsive gutters)</p>
    </Container>
  );
}`,
  resizable: `export default function Example() {
  return (
    <Resizable className="h-36 w-full max-w-md border border-default rounded-lg p-4 bg-surface flex items-center justify-center">
      <span className="text-sm text-muted">Drag handle to resize me</span>
    </Resizable>
  );
}`,
  scrollarea: `export default function Example() {
  return (
    <ScrollArea className="h-40 w-72 rounded-lg border border-default p-4 bg-surface">
      <div className="flex flex-col gap-2 text-sm text-muted">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="py-1 border-b border-default last:border-0">
            Scrollable item #{i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`,
  checkbox: `export default function Example() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="c1" defaultChecked />
        <label htmlFor="c1" className="text-sm font-medium">Accept terms and conditions</label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="c2" />
        <label htmlFor="c2" className="text-sm font-medium">Subscribe to newsletter</label>
      </div>
    </div>
  );
}`,
  colorpicker: `export default function Example() {
  const [color, setColor] = useState('#2563eb');
  return (
    <div className="flex items-center gap-4">
      <ColorPicker value={color} onChange={setColor} />
      <span className="text-sm font-mono">{color}</span>
    </div>
  );
}`,
  fileuploader: `export default function Example() {
  return (
    <div className="w-full max-w-sm">
      <FileUploader onUpload={(files) => console.log(files)} />
    </div>
  );
}`,
  form: `export default function Example() {
  return (
    <Form className="w-full max-w-sm flex flex-col gap-4">
      <Input placeholder="Full Name" />
      <Input type="email" placeholder="Email Address" />
      <Button variant="primary">Submit</Button>
    </Form>
  );
}`,
  input: `export default function Example() {
  return (
    <div className="w-full max-w-sm flex flex-col gap-3">
      <Input placeholder="Default input..." />
      <Input placeholder="Disabled input" disabled />
    </div>
  );
}`,
  numberinput: `export default function Example() {
  return (
    <div className="w-full max-w-xs">
      <NumberInput defaultValue={10} min={0} max={100} step={1} />
    </div>
  );
}`,
  passwordinput: `export default function Example() {
  return (
    <div className="w-full max-w-sm">
      <PasswordInput placeholder="Enter your password..." />
    </div>
  );
}`,
  pininput: `export default function Example() {
  return (
    <div className="flex justify-center">
      <PinInput length={4} />
    </div>
  );
}`,
  radiogroup: `export default function Example() {
  return (
    <RadioGroup defaultValue="1" className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <RadioGroup.Item value="1" id="r1" />
        <label htmlFor="r1" className="text-sm">Standard Shipping (3-5 days)</label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroup.Item value="2" id="r2" />
        <label htmlFor="r2" className="text-sm">Express Shipping (1-2 days)</label>
      </div>
    </RadioGroup>
  );
}`,
  rating: `export default function Example() {
  const [val, setVal] = useState(4);
  return (
    <div className="flex items-center gap-2">
      <Rating value={val} onChange={setVal} max={5} />
      <span className="text-sm text-muted font-medium">{val} of 5</span>
    </div>
  );
}`,
  slider: `export default function Example() {
  const [val, setVal] = useState([50]);
  return (
    <div className="w-full max-w-xs flex flex-col gap-2">
      <Slider value={val} onChange={setVal} min={0} max={100} step={1} />
      <div className="text-right text-xs text-muted font-mono">{val[0]}%</div>
    </div>
  );
}`,
  switch: `export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <Switch defaultChecked id="sw1" />
      <label htmlFor="sw1" className="text-sm font-medium">Automatic Backups</label>
    </div>
  );
}`,
  textarea: `export default function Example() {
  return (
    <div className="w-full max-w-sm">
      <Textarea placeholder="Type your feedback or comments here..." rows={4} />
    </div>
  );
}`,
  calendar: `export default function Example() {
  const [date, setDate] = useState('2026-09-03');
  return (
    <div className="p-3 border border-default rounded-lg bg-surface flex justify-center">
      <Calendar value={date} onChange={setDate} />
    </div>
  );
}`,
  combobox: `export default function Example() {
  const [selected, setSelected] = useState('');
  return (
    <div className="w-full max-w-xs">
      <Combobox 
        data={[
          { label: 'Next.js', value: 'next' },
          { label: 'React', value: 'react' },
          { label: 'Vite', value: 'vite' },
          { label: 'TypeScript', value: 'ts' }
        ]}
        value={selected}
        onChange={setSelected}
        placeholder="Select framework..."
      />
    </div>
  );
}`,
  datepicker: `export default function Example() {
  return (
    <div className="w-full max-w-xs">
      <DatePicker placeholder="Select appointment date" />
    </div>
  );
}`,
  daterangepicker: `export default function Example() {
  return (
    <div className="w-full max-w-sm">
      <DateRangePicker placeholder="Select date range" />
    </div>
  );
}`,
  multiselect: `export default function Example() {
  return (
    <div className="w-full max-w-xs">
      <MultiSelect 
        options={[
          { label: 'React', value: 'react' },
          { label: 'TypeScript', value: 'ts' },
          { label: 'Tailwind CSS', value: 'tw' },
          { label: 'Next.js', value: 'next' }
        ]}
        placeholder="Select tags..."
      />
    </div>
  );
}`,
  select: `export default function Example() {
  return (
    <div className="w-full max-w-xs">
      <Select 
        data={[
          { label: 'Light Theme', value: 'light' },
          { label: 'Dark Theme', value: 'dark' },
          { label: 'System Default', value: 'system' }
        ]}
        defaultValue="system"
        placeholder="Select theme..."
      />
    </div>
  );
}`,
  timepicker: `export default function Example() {
  return (
    <div className="w-full max-w-xs">
      <TimePicker placeholder="Select time" />
    </div>
  );
}`,
  timerangepicker: `export default function Example() {
  return (
    <div className="w-full max-w-sm">
      <TimeRangePicker placeholder="Select time range" />
    </div>
  );
}`,
  breadcrumbs: `export default function Example() {
  return (
    <Breadcrumbs 
      data={[
        { label: 'Home', href: '/' },
        { label: 'Components', href: '/nui/getting-started' },
        { label: 'Breadcrumbs' }
      ]}
    />
  );
}`,
  link: `export default function Example() {
  return (
    <div className="flex gap-4">
      <Link href="#internal" className="text-primary hover:underline">Internal Link</Link>
      <Link href="https://github.com" target="_blank" className="text-muted hover:text-default">External Link ↗</Link>
    </div>
  );
}`,
  megamenu: `export default function Example() {
  return (
    <div className="w-full max-w-md p-4 border border-default rounded-lg bg-surface flex justify-center">
      <MegaMenu>
        <MegaMenu.Item value="products">
          <MegaMenu.Trigger>Products ▾</MegaMenu.Trigger>
          <MegaMenu.Content>
            <div className="p-4 w-56 flex flex-col gap-2">
              <MegaMenu.Link href="#">Component Primitives</MegaMenu.Link>
              <MegaMenu.Link href="#">Design Tokens</MegaMenu.Link>
            </div>
          </MegaMenu.Content>
        </MegaMenu.Item>
        <MegaMenu.Viewport />
      </MegaMenu>
    </div>
  );
}`,
  pagination: `export default function Example() {
  const [page, setPage] = useState(1);
  return (
    <Pagination total={10} page={page} onChange={setPage} />
  );
}`,
  segmentedcontrol: `export default function Example() {
  const [mode, setMode] = useState('grid');
  return (
    <SegmentedControl 
      value={mode} 
      onChange={setMode} 
      options={[
        { label: 'Grid', value: 'grid' },
        { label: 'List', value: 'list' },
        { label: 'Table', value: 'table' }
      ]} 
    />
  );
}`,
  stepper: `export default function Example() {
  const [active, setActive] = useState(1);
  return (
    <div className="w-full max-w-md">
      <Stepper 
        active={active} 
        onChange={setActive}
        data={['Account', 'Profile', 'Confirmation']} 
      />
    </div>
  );
}`,
  tabs: `export default function Example() {
  return (
    <div className="w-full max-w-md">
      <Tabs defaultValue="overview">
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="api">API</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview" className="p-4 border border-default rounded-b-lg">
          Overview panel content
        </Tabs.Content>
        <Tabs.Content value="api" className="p-4 border border-default rounded-b-lg">
          API panel content
        </Tabs.Content>
      </Tabs>
    </div>
  );
}`,
  treeview: `export default function Example() {
  const items = [
    { id: '1', label: 'src', children: [
      { id: '2', label: 'components' },
      { id: '3', label: 'styles.css' }
    ]},
    { id: '4', label: 'package.json' }
  ];
  return (
    <div className="w-64 border border-default rounded-lg p-3 bg-surface">
      <TreeView data={items} />
    </div>
  );
}`,
  contextmenu: `export default function Example() {
  return (
    <ContextMenu 
      items={[
        { label: 'Reload Application', onSelect: () => console.log('reload') },
        { label: 'Inspect Element', onSelect: () => console.log('inspect') }
      ]}
    >
      <div className="w-64 h-32 border border-dashed border-default rounded-lg flex items-center justify-center text-sm text-muted bg-surface cursor-context-menu">
        Right click inside this area
      </div>
    </ContextMenu>
  );
}`,
  dialog: `export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setOpen(true)}>Open Dialog</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Confirmation">
        <p className="text-sm text-muted mb-4">Are you sure you want to proceed with this action?</p>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
        </div>
      </Modal>
    </div>
  );
}`,
  drawer: `export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="outline" onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} title="Side Drawer" position="right">
        <div className="p-4 text-sm text-muted">
          Drawer content with smooth slide animation and focus trap.
        </div>
      </Drawer>
    </div>
  );
}`,
  dropdown: `export default function Example() {
  return (
    <Dropdown
      data={[
        { label: 'Edit Profile', onClick: () => console.log('Edit') },
        { label: 'Account Settings', onClick: () => console.log('Settings') },
        { type: 'separator' },
        { label: 'Sign Out', danger: true, onClick: () => console.log('Sign Out') }
      ]}
    >
      <Button variant="outline">Options ▾</Button>
    </Dropdown>
  );
}`,
  hovercard: `export default function Example() {
  return (
    <HoverCard>
      <HoverCard.Trigger>
        <span className="text-primary font-semibold underline cursor-pointer">@nofinite</span>
      </HoverCard.Trigger>
      <HoverCard.Content className="p-4 w-64">
        <h4 className="font-bold text-sm">Nofinite OSS</h4>
        <p className="text-xs text-muted mt-1">High-velocity React primitives and semantic token toolkits.</p>
      </HoverCard.Content>
    </HoverCard>
  );
}`,
  modal: `export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setOpen(true)}>Launch Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Modal Window">
        <p className="text-sm text-muted">Accessible modal dialog with backdrop blur and ESC handler.</p>
      </Modal>
    </div>
  );
}`,
  popover: `export default function Example() {
  return (
    <Popover>
      <Popover.Trigger>
        <Button variant="outline">Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content className="p-4 max-w-xs">
        <h4 className="font-bold text-sm mb-1">Popover Details</h4>
        <p className="text-xs text-muted">Positioned relative to trigger element with collision handling.</p>
      </Popover.Content>
    </Popover>
  );
}`,
  tooltip: `export default function Example() {
  return (
    <Tooltip content="Tooltip information">
      <Button variant="outline">Hover over me</Button>
    </Tooltip>
  );
}`,
  alert: `export default function Example() {
  return (
    <div className="w-full max-w-md flex flex-col gap-3">
      <Alert variant="info" title="Note">
        A new version of NUI is available.
      </Alert>
      <Alert variant="danger" title="Error">
        Failed to save changes. Please try again.
      </Alert>
    </div>
  );
}`,
  progress: `export default function Example() {
  return (
    <div className="w-full max-w-sm flex flex-col gap-3">
      <Progress value={65} />
    </div>
  );
}`,
  skeleton: `export default function Example() {
  return (
    <div className="w-full max-w-sm flex items-center gap-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <div className="flex-1 flex flex-col gap-2">
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-3 w-1/2 rounded" />
      </div>
    </div>
  );
}`,
  spinner: `export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  );
}`,
  toast: `export default function Example() {
  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={() => alert('Toast triggered')}>
        Trigger Notification
      </Button>
    </div>
  );
}`,
  attachment: `export default function Example() {
  return (
    <div className="w-full max-w-sm">
      <Attachment name="financial_report_2026.pdf" size="2.4 MB" />
    </div>
  );
}`,
  avatar: `export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <Avatar fallback="NF" />
      <Avatar fallback="JD" status="online" />
      <Avatar fallback="AL" status="busy" />
    </div>
  );
}`,
  carousel: `export default function Example() {
  return (
    <div className="w-full max-w-md">
      <Carousel>
        <div key="1" className="h-40 rounded-lg border border-default bg-surface flex items-center justify-center font-semibold">
          Slide 1
        </div>
        <div key="2" className="h-40 rounded-lg border border-default bg-surface flex items-center justify-center font-semibold">
          Slide 2
        </div>
        <div key="3" className="h-40 rounded-lg border border-default bg-surface flex items-center justify-center font-semibold">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
}`,
  clipboard: `export default function Example() {
  return (
    <div className="flex items-center gap-2">
      <code className="text-xs font-mono bg-subtle p-2 rounded border border-default">
        npm install @nofinite/nui
      </code>
      <Clipboard value="npm install @nofinite/nui" />
    </div>
  );
}`,
  codeblock: `export default function Example() {
  return (
    <div className="w-full max-w-md">
      <CodeBlock code="const greeting = 'Hello, NUI!';\nconsole.log(greeting);" language="typescript" />
    </div>
  );
}`,
  emptystate: `export default function Example() {
  return (
    <div className="w-full max-w-md">
      <EmptyState 
        title="No documents found" 
        description="Get started by creating your first document in this workspace."
      />
    </div>
  );
}`,
  image: `export default function Example() {
  return (
    <Image 
      src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80" 
      alt="Abstract gradient" 
      className="rounded-lg h-36 w-full object-cover" 
    />
  );
}`,
  statcard: `export default function Example() {
  return (
    <div className="w-full max-w-xs">
      <StatCard 
        label="Monthly Active Users" 
        value="128,490" 
        change="+14.2%" 
        positive 
      />
    </div>
  );
}`,
  table: `export default function Example() {
  const data = [
    { id: '1', name: 'Alice Cooper', role: 'Engineer', status: 'Active' },
    { id: '2', name: 'Bob Dylan', role: 'Designer', status: 'Active' },
    { id: '3', name: 'Charlie Watts', role: 'Product Manager', status: 'Away' }
  ];
  return (
    <div className="w-full max-w-md">
      <Table 
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'role', label: 'Role' },
          { key: 'status', label: 'Status' }
        ]} 
        data={data} 
        rowKey="id" 
      />
    </div>
  );
}`,
  timeline: `export default function Example() {
  return (
    <div className="w-full max-w-sm">
      <Timeline>
        <Timeline.Item title="Repository Created" time="2 days ago" />
        <Timeline.Item title="v3.0 Released" time="Yesterday" active />
      </Timeline>
    </div>
  );
}`,
  transferlist: `export default function Example() {
  return (
    <div className="w-full max-w-md p-4 border border-default rounded-lg bg-surface text-center">
      <span className="text-sm font-semibold text-muted">TransferList Component</span>
    </div>
  );
}`,
  video: `export default function Example() {
  return (
    <div className="w-full max-w-md">
      <VideoPlayer src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
    </div>
  );
}`,
  virtuallist: `export default function Example() {
  return (
    <div className="w-full max-w-sm h-48 border border-default rounded-lg p-2 bg-surface">
      <span className="text-sm font-semibold text-muted">VirtualList (High performance rendering)</span>
    </div>
  );
}`
};

function ensureAllComponentsHaveRegistryFiles() {
  console.log('Ensuring all 68 components have dedicated registry snippet files...');
  for (const comp of ALL_68_COMPONENTS) {
    const filePath = path.join(REGISTRY_DIR, `${comp}.tsx`);
    if (!fs.existsSync(filePath)) {
      const demoBody = COMPONENT_DEFAULT_DEMOS[comp] || `export default function Example() { return <div>${comp} Example</div>; }`;
      
      const usedImports = new Set();
      for (const validComp of VALID_NUI_EXPORTS) {
        if (demoBody.includes(`<${validComp}`) || demoBody.includes(`${validComp}.`)) {
          usedImports.add(validComp);
        }
      }
      if (usedImports.size === 0) usedImports.add('Button');

      const content = `// @ts-nocheck
import React, { useState } from 'react';
import { ${Array.from(usedImports).join(', ')} } from '@nofinite/nui';
import * as FaIcons from 'react-icons/fa';

${demoBody}
`;
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Created registry demo for: ${comp}`);
    }
  }
}

function cleanRegistry() {
  ensureAllComponentsHaveRegistryFiles();

  console.log('Sanitizing and rebuilding all registry snippet files...');
  const files = fs.readdirSync(REGISTRY_DIR).filter(f => f.endsWith('.tsx') && f !== 'index.ts');

  const entries = [];

  for (const file of files) {
    const fullPath = path.join(REGISTRY_DIR, file);
    const raw = fs.readFileSync(fullPath, 'utf-8');

    // Extract function Example
    const funcMatch = raw.match(/(export\s+(?:default\s+)?function\s+Example[\s\S]*)$/);
    let funcBody = '';

    if (funcMatch) {
      funcBody = funcMatch[1].trim();
    } else {
      funcBody = `export default function Example() {\n  return <div>Component Example</div>;\n}`;
    }

    funcBody = funcBody.replace(/import\s+[^;]+;/g, '');
    funcBody = funcBody.replace(/<DataGrid\b/g, '<Table ').replace(/<\/DataGrid>/g, '</Table>');
    funcBody = funcBody.replace(/<Flex\b/g, '<div className="flex gap-2" ').replace(/<\/Flex>/g, '</div>');
    funcBody = funcBody.replace(/<Grid\b/g, '<div className="grid grid-cols-2 gap-2" ').replace(/<\/Grid>/g, '</div>');
    funcBody = funcBody.replace(/<CommandPalette\b/g, '<Combobox ').replace(/<\/CommandPalette>/g, '</Combobox>');

    const usedImports = new Set();
    for (const comp of VALID_NUI_EXPORTS) {
      if (
        funcBody.includes(`<${comp}`) ||
        funcBody.includes(`${comp}.`) ||
        new RegExp(`\\b${comp}\\b`).test(funcBody)
      ) {
        usedImports.add(comp);
      }
    }
    if (usedImports.size === 0) {
      usedImports.add('Button');
    }

    const fileContent = `// @ts-nocheck
import React, { useState } from 'react';
import { ${Array.from(usedImports).join(', ')} } from '@nofinite/nui';
import * as FaIcons from 'react-icons/fa';

const data = [
  { id: '1', name: 'Alice', age: 28, status: 'Active', price: 99.99 },
  { id: '2', name: 'Bob', age: 34, status: 'Inactive', price: 149.50 },
  { id: '3', name: 'Charlie', age: 22, status: 'Active', price: 29.99 },
];
const employees = data;
const items = ['Item 1', 'Item 2', 'Item 3'];
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];
const date = new Date();
const r = { start: new Date(), end: new Date() };

${funcBody}
`;

    fs.writeFileSync(fullPath, fileContent, 'utf-8');

    const key = file.replace(/\.tsx$/, '');
    const returnMatch = funcBody.match(/return\s*\(\s*<div[^>]*>([\s\S]*?)<\/div>\s*\);/);
    let codeSnippet = '';
    if (returnMatch) {
      codeSnippet = returnMatch[1].trim();
    } else {
      codeSnippet = funcBody;
    }

    const safeCode = codeSnippet.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

    entries.push(`  "${key}": {
    component: dynamic(() => import("./${key}"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: \`${safeCode}\`
  }`);
  }

  const indexContent = `import dynamic from "next/dynamic";
import React from "react";

export const registry: Record<string, { component: React.ComponentType<any>; code: string }> = {
${entries.join(',\n')}
};
`;

  fs.writeFileSync(INDEX_FILE, indexContent, 'utf-8');
  console.log(`Successfully built registry with ${files.length} snippet items in ${INDEX_FILE}`);
}

cleanRegistry();
