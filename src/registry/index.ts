import dynamic from "next/dynamic";
import React from "react";

export const registry: Record<string, { component: React.ComponentType<any>; code: string }> = {
  "accordion": {
    component: dynamic(() => import("./accordion"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Accordion 
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
      />`
  },
  "alert": {
    component: dynamic(() => import("./alert"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Alert variant="info" title="Note">
        A new version of NUI is available.
      </Alert>
      <Alert variant="danger" title="Error">
        Failed to save changes. Please try again.
      </Alert>`
  },
  "attachment": {
    component: dynamic(() => import("./attachment"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Attachment name="financial_report_2026.pdf" size="2.4 MB" />`
  },
  "avatar": {
    component: dynamic(() => import("./avatar"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Avatar fallback="NF" />
      <Avatar fallback="JD" status="online" />
      <Avatar fallback="AL" status="busy" />`
  },
  "badge": {
    component: dynamic(() => import("./badge"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>`
  },
  "breadcrumbs": {
    component: dynamic(() => import("./breadcrumbs"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
  return (
    <Breadcrumbs 
      data={[
        { label: 'Home', href: '/' },
        { label: 'Components', href: '/nui/getting-started' },
        { label: 'Breadcrumbs' }
      ]}
    />
  );
}`
  },
  "button": {
    component: dynamic(() => import("./button"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>`
  },
  "calendar": {
    component: dynamic(() => import("./calendar"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Calendar value={date} onChange={setDate} />`
  },
  "card": {
    component: dynamic(() => import("./card"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
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
}`
  },
  "carousel": {
    component: dynamic(() => import("./carousel"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Carousel>
        <div key="1" className="h-40 rounded-lg border border-default bg-surface flex items-center justify-center font-semibold">
          Slide 1
        </div>
        <div key="2" className="h-40 rounded-lg border border-default bg-surface flex items-center justify-center font-semibold">
          Slide 2
        </div>
        <div key="3" className="h-40 rounded-lg border border-default bg-surface flex items-center justify-center font-semibold">
          Slide 3
        </div>
      </Carousel>`
  },
  "checkbox": {
    component: dynamic(() => import("./checkbox"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<div className="flex items-center gap-2">
        <Checkbox id="c1" defaultChecked />
        <label htmlFor="c1" className="text-sm font-medium">Accept terms and conditions</label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="c2" />
        <label htmlFor="c2" className="text-sm font-medium">Subscribe to newsletter</label>
      </div>`
  },
  "chip": {
    component: dynamic(() => import("./chip"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Chip variant="default">Design</Chip>
      <Chip variant="primary">Development</Chip>
      <Chip variant="outline">Product</Chip>`
  },
  "clipboard": {
    component: dynamic(() => import("./clipboard"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<code className="text-xs font-mono bg-subtle p-2 rounded border border-default">
        npm install @nofinite/nui
      </code>
      <Clipboard value="npm install @nofinite/nui" />`
  },
  "codeblock": {
    component: dynamic(() => import("./codeblock"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<CodeBlock code="const greeting = 'Hello, NUI!';
console.log(greeting);" language="typescript" />`
  },
  "collapsible": {
    component: dynamic(() => import("./collapsible"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<div className="flex items-center justify-between">
        <h4 className="font-semibold text-sm">Collapsible Section</h4>
        <Button size="sm" variant="ghost" onClick={() => setOpen(!open)}>
          {open ? 'Hide' : 'Show'}
        </Button>
      </div>
      <Collapsible open={open}>
        <p className="mt-3 text-sm text-muted border-t border-default pt-3">
          This content smoothly reveals and hides with strict accessibility states.
        </p>
      </Collapsible>`
  },
  "colorpicker": {
    component: dynamic(() => import("./colorpicker"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<ColorPicker value={color} onChange={setColor} />
      <span className="text-sm font-mono">{color}</span>`
  },
  "combobox": {
    component: dynamic(() => import("./combobox"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Combobox 
        data={[
          { label: 'Next.js', value: 'next' },
          { label: 'React', value: 'react' },
          { label: 'Vite', value: 'vite' },
          { label: 'TypeScript', value: 'ts' }
        ]}
        value={selected}
        onChange={setSelected}
        placeholder="Select framework..."
      />`
  },
  "contextmenu": {
    component: dynamic(() => import("./contextmenu"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
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
}`
  },
  "data-display-1": {
    component: dynamic(() => import("./data-display-1"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
  ]}
  data={data}
  rowKey="id"
/>;`
  },
  "data-display-10": {
    component: dynamic(() => import("./data-display-10"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table 
  columns={[
    { key: 'name', title: 'Name', sortable: true },
    { key: 'salary', title: 'Salary', sortable: true },
  ]}
  rows={employees}
/>`
  },
  "data-display-11": {
    component: dynamic(() => import("./data-display-11"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table 
  columns={[
    { key: 'name', title: 'Name' },
    {
      key: 'status',
      title: 'Status',
      render: (row) => <Badge>{row.status}</Badge>,
    },
  ]}
  rows={data}
/>`
  },
  "data-display-12": {
    component: dynamic(() => import("./data-display-12"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table  selectable rows={data} columns={columns} />`
  },
  "data-display-13": {
    component: dynamic(() => import("./data-display-13"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table 
  page={page}
  onPageChange={setPage}
  pageSize={20}
  rows={data}
  columns={columns}
/>`
  },
  "data-display-14": {
    component: dynamic(() => import("./data-display-14"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table 
  rows={data}
  columns={columns}
  renderRowActions={(row) => (
    <>
      <Button onClick={() => edit(row)}>Edit</Button>
      <Button variant="danger" onClick={() => remove(row)}>
        Delete
      </Button>
    </>
  )}
/>`
  },
  "data-display-15": {
    component: dynamic(() => import("./data-display-15"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table  rows={data} columns={columns} />                     // Default
<Table  selectable rows={data} columns={columns} />          // Selectable
<Table  disablePagination rows={data} columns={columns} />   // Static grid
<Table  renderRowActions={actions} rows={data} columns={columns} /> // Action grid`
  },
  "data-display-16": {
    component: dynamic(() => import("./data-display-16"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Avatar src="https://example.com/avatar.jpg" alt="John Doe" />;`
  },
  "data-display-17": {
    component: dynamic(() => import("./data-display-17"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Avatar name="John Doe" />`
  },
  "data-display-18": {
    component: dynamic(() => import("./data-display-18"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Avatar name="John Doe" fallbackIcon={<svg>...</svg>} />`
  },
  "data-display-19": {
    component: dynamic(() => import("./data-display-19"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Avatar name="Jane Smith" status="online" />`
  },
  "data-display-2": {
    component: dynamic(() => import("./data-display-2"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'age', label: 'Age', sortable: true },
  ]}
  data={data}
  rowKey="id"
/>`
  },
  "data-display-20": {
    component: dynamic(() => import("./data-display-20"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Avatar loading />`
  },
  "data-display-21": {
    component: dynamic(() => import("./data-display-21"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<AvatarGroup max={3} size="md">
  <Avatar name="Alice" />
  <Avatar name="Bob" />
  <Avatar name="Charlie" />
  <Avatar name="Diana" /> {/* Will appear as "+1" */}
</AvatarGroup>;`
  },
  "data-display-3": {
    component: dynamic(() => import("./data-display-3"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table
  columns={[
    {
      key: 'status',
      label: 'Status',
      render: (row) => <Badge>{row.status}</Badge>,
    },
  ]}
  data={data}
  rowKey="id"
/>`
  },
  "data-display-4": {
    component: dynamic(() => import("./data-display-4"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table
  columns={[
    {
      key: 'price',
      label: 'Price',
      sortable: true,
      sortFn: (a, b) => a.price - b.price,
    },
  ]}
  data={data}
  rowKey="id"
/>`
  },
  "data-display-5": {
    component: dynamic(() => import("./data-display-5"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table columns={[{ key:'name', label:'Name', sortable:true }]} />
<Table columns={[{ key:'name', label:'Name' }]} />`
  },
  "data-display-6": {
    component: dynamic(() => import("./data-display-6"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table columns={[{ key:'amount', label:'Amount', align:'right' }]} />
<Table columns={[{ key:'status', label:'Status', align:'center' }]} />`
  },
  "data-display-7": {
    component: dynamic(() => import("./data-display-7"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table columns={[{ key:'avatar', label:'User', render:(r)=> <Avatar /> }]} />
<Table columns={[{ key:'name', label:'Name' }]} />`
  },
  "data-display-8": {
    component: dynamic(() => import("./data-display-8"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table data={[]} />
<Table emptyText="Nothing found" />`
  },
  "data-display-9": {
    component: dynamic(() => import("./data-display-9"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table 
  columns={[
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'role', title: 'Role' },
  ]}
  rows={users}
/>;`
  },
  "datepicker": {
    component: dynamic(() => import("./datepicker"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<DatePicker placeholder="Select appointment date" />`
  },
  "daterangepicker": {
    component: dynamic(() => import("./daterangepicker"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<DateRangePicker placeholder="Select date range" />`
  },
  "dialog": {
    component: dynamic(() => import("./dialog"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Button variant="primary" onClick={() => setOpen(true)}>Open Dialog</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Confirmation">
        <p className="text-sm text-muted mb-4">Are you sure you want to proceed with this action?</p>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
        </div>
      </Modal>`
  },
  "divider": {
    component: dynamic(() => import("./divider"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<div>Top Content</div>
      <Divider />
      <div>Bottom Content</div>`
  },
  "drawer": {
    component: dynamic(() => import("./drawer"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Button variant="outline" onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} title="Side Drawer" position="right">
        <div className="p-4 text-sm text-muted">
          Drawer content with smooth slide animation and focus trap.
        </div>
      </Drawer>`
  },
  "dropdown": {
    component: dynamic(() => import("./dropdown"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
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
}`
  },
  "emptystate": {
    component: dynamic(() => import("./emptystate"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<EmptyState 
        title="No documents found" 
        description="Get started by creating your first document in this workspace."
      />`
  },
  "fileuploader": {
    component: dynamic(() => import("./fileuploader"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<FileUploader onUpload={(files) => console.log(files)} />`
  },
  "form": {
    component: dynamic(() => import("./form"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
  return (
    <Form className="w-full max-w-sm flex flex-col gap-4">
      <Input placeholder="Full Name" />
      <Input type="email" placeholder="Email Address" />
      <Button variant="primary">Submit</Button>
    </Form>
  );
}`
  },
  "hovercard": {
    component: dynamic(() => import("./hovercard"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
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
}`
  },
  "image": {
    component: dynamic(() => import("./image"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
  return (
    <Image 
      src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80" 
      alt="Abstract gradient" 
      className="rounded-lg h-36 w-full object-cover" 
    />
  );
}`
  },
  "indicators-and-buttons-22": {
    component: dynamic(() => import("./indicators-and-buttons-22"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Badge>New</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="outline">Outline</Badge>`
  },
  "indicators-and-buttons-23": {
    component: dynamic(() => import("./indicators-and-buttons-23"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Badge count={5} />
<Badge count={120} max={99} />  {/* Displays 99+ */}`
  },
  "indicators-and-buttons-24": {
    component: dynamic(() => import("./indicators-and-buttons-24"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Badge dot variant="success" />`
  },
  "indicators-and-buttons-25": {
    component: dynamic(() => import("./indicators-and-buttons-25"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Badge pill variant="primary">
  Premium
</Badge>`
  },
  "indicators-and-buttons-26": {
    component: dynamic(() => import("./indicators-and-buttons-26"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Badge onClick={() => alert('Clicked!')} variant="primary">
  Click Me
</Badge>

<Badge href="https://example.com" variant="primary">
  Go to Link
</Badge>`
  },
  "indicators-and-buttons-27": {
    component: dynamic(() => import("./indicators-and-buttons-27"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Badge iconLeft={<Icon />} iconRight={<Icon />} variant="success">
  Messages
</Badge>`
  },
  "indicators-and-buttons-28": {
    component: dynamic(() => import("./indicators-and-buttons-28"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<BadgeGroup max={3}>
  <Badge variant="success">Online</Badge>
  <Badge variant="warning">Away</Badge>
  <Badge variant="danger">Busy</Badge>
  <Badge variant="primary">Admin</Badge>
</BadgeGroup>;`
  },
  "indicators-and-buttons-29": {
    component: dynamic(() => import("./indicators-and-buttons-29"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Progress value={40} />;`
  },
  "indicators-and-buttons-30": {
    component: dynamic(() => import("./indicators-and-buttons-30"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Progress indeterminate />`
  },
  "indicators-and-buttons-31": {
    component: dynamic(() => import("./indicators-and-buttons-31"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Progress size="sm" value={20} />
<Progress size="md" value={40} />
<Progress size="lg" value={70} />`
  },
  "indicators-and-buttons-32": {
    component: dynamic(() => import("./indicators-and-buttons-32"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Progress value={70} variant="success" />
<Progress value={50} variant="warning" />
<Progress value={30} variant="danger" />`
  },
  "indicators-and-buttons-33": {
    component: dynamic(() => import("./indicators-and-buttons-33"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Progress value={30} max={60} />`
  },
  "indicators-and-buttons-34": {
    component: dynamic(() => import("./indicators-and-buttons-34"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Progress value={40} />                         // Default
<Progress variant="success" value={70} />       // Success
<Progress variant="warning" value={50} />       // Warning
<Progress variant="danger" value={30} />        // Danger
<Progress indeterminate />                      // Loading`
  },
  "indicators-and-buttons-35": {
    component: dynamic(() => import("./indicators-and-buttons-35"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Alert>This is an informational message.</Alert>;`
  },
  "indicators-and-buttons-36": {
    component: dynamic(() => import("./indicators-and-buttons-36"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Alert title="Network Error">
  Unable to connect to the server. Please try again.
</Alert>`
  },
  "indicators-and-buttons-37": {
    component: dynamic(() => import("./indicators-and-buttons-37"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Alert variant="success" title="Success">
  Your data has been saved successfully.
</Alert>

<Alert variant="warning" title="Warning">
  Your subscription will expire in 3 days.
</Alert>

<Alert variant="error" title="Error">
  Failed to process your request.
</Alert>`
  },
  "indicators-and-buttons-38": {
    component: dynamic(() => import("./indicators-and-buttons-38"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Alert
  variant="info"
  title="Reminder"
  closable
  onClose={() => console.log('Alert closed')}
>
  Don’t forget to check your inbox.
</Alert>`
  },
  "input": {
    component: dynamic(() => import("./input"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Input placeholder="Default input..." />
      <Input placeholder="Disabled input" disabled />`
  },
  "inputs-and-forms-39": {
    component: dynamic(() => import("./inputs-and-forms-39"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Input />
<Input inputSize="sm" />
<Input inputSize="lg" />
<Input error="Invalid" />
<Input leftIcon={<Icon />} />
<Input rightIcon={<Icon />} />`
  },
  "inputs-and-forms-40": {
    component: dynamic(() => import("./inputs-and-forms-40"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Checkbox label="Accept terms" />

<Checkbox defaultChecked label="Subscribed" />

<Checkbox checked={true} label="Controlled checkbox" />`
  },
  "inputs-and-forms-41": {
    component: dynamic(() => import("./inputs-and-forms-41"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Checkbox indeterminate label="Select all" />`
  },
  "inputs-and-forms-42": {
    component: dynamic(() => import("./inputs-and-forms-42"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onChange={setChecked}
  label="Enable notifications"
/>;`
  },
  "inputs-and-forms-43": {
    component: dynamic(() => import("./inputs-and-forms-43"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Checkbox disabled label="Disabled option" />`
  },
  "inputs-and-forms-44": {
    component: dynamic(() => import("./inputs-and-forms-44"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Checkbox />                    // Unchecked
<Checkbox defaultChecked />     // Checked
<Checkbox indeterminate />      // Indeterminate
<Checkbox disabled />           // Disabled`
  },
  "inputs-and-forms-45": {
    component: dynamic(() => import("./inputs-and-forms-45"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<RadioGroup defaultValue="apple">
  <RadioGroup.Item value="apple" />
  <RadioGroup.Item value="banana" />
  <RadioGroup.Item value="orange" />
</RadioGroup>;`
  },
  "inputs-and-forms-46": {
    component: dynamic(() => import("./inputs-and-forms-46"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `const [value, setValue] = useState('apple');

<RadioGroup value={value} onChange={setValue}>
  <RadioGroup.Item value="apple" />
  <RadioGroup.Item value="banana" />
</RadioGroup>;`
  },
  "inputs-and-forms-47": {
    component: dynamic(() => import("./inputs-and-forms-47"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<RadioGroup orientation="horizontal" defaultValue="a">
  <RadioGroup.Item value="a" />
  <RadioGroup.Item value="b" />
  <RadioGroup.Item value="c" />
</RadioGroup>`
  },
  "inputs-and-forms-48": {
    component: dynamic(() => import("./inputs-and-forms-48"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<RadioGroup disabled defaultValue="a">
  <RadioGroup.Item value="a" />
  <RadioGroup.Item value="b" />
</RadioGroup>`
  },
  "inputs-and-forms-49": {
    component: dynamic(() => import("./inputs-and-forms-49"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<RadioGroup defaultValue="a" />                      // Vertical (default)
<RadioGroup orientation="horizontal" />              // Horizontal
<RadioGroup disabled />                              // Disabled
<RadioGroup value="a" />                             // Controlled`
  },
  "inputs-and-forms-50": {
    component: dynamic(() => import("./inputs-and-forms-50"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
  return <Rating defaultValue={3} />;
}`
  },
  "inputs-and-forms-51": {
    component: dynamic(() => import("./inputs-and-forms-51"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `const [value, setValue] = useState(4);

<Rating value={value} onChange={setValue} />;`
  },
  "inputs-and-forms-52": {
    component: dynamic(() => import("./inputs-and-forms-52"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Rating defaultValue={3.5} allowHalf />`
  },
  "inputs-and-forms-53": {
    component: dynamic(() => import("./inputs-and-forms-53"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Rating value={4.2} readOnly />`
  },
  "inputs-and-forms-54": {
    component: dynamic(() => import("./inputs-and-forms-54"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Rating icon={<HeartOutline />} iconFilled={<HeartFilled />} />`
  },
  "inputs-and-forms-55": {
    component: dynamic(() => import("./inputs-and-forms-55"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Rating size="sm" />
<Rating size="md" />
<Rating size="lg" />`
  },
  "inputs-and-forms-56": {
    component: dynamic(() => import("./inputs-and-forms-56"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<FileUploader onChange={(files) => console.log(files)} />;`
  },
  "inputs-and-forms-57": {
    component: dynamic(() => import("./inputs-and-forms-57"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<FileUploader />
<FileUploader multiple />
<FileUploader disabled />
<FileUploader accept="image/*" />
<FileUploader maxSize={2097152} />`
  },
  "kbd": {
    component: dynamic(() => import("./kbd"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<span className="text-sm text-muted">Press</span>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <span className="text-sm text-muted">to open command palette</span>`
  },
  "layout-and-structure-58": {
    component: dynamic(() => import("./layout-and-structure-58"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Card>
  <Card.Header>Card Title</Card.Header>
  <Card.Body>
    This is the card content area where you can place text or elements.
  </Card.Body>
</Card>;`
  },
  "layout-and-structure-59": {
    component: dynamic(() => import("./layout-and-structure-59"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Card>
  <Card.Header>Project</Card.Header>

  <Card.Body>Manage project details and tasks.</Card.Body>

  <Card.Footer>
    <Button size="sm">Edit</Button>
    <Button size="sm" variant="outline">
      View
    </Button>
  </Card.Footer>
</Card>`
  },
  "layout-and-structure-60": {
    component: dynamic(() => import("./layout-and-structure-60"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Card clickable onClick={() => console.log('Clicked')}>
  <Card.Header>Interactive Card</Card.Header>
  <Card.Body>Entire card behaves like a button.</Card.Body>
</Card>`
  },
  "layout-and-structure-61": {
    component: dynamic(() => import("./layout-and-structure-61"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Card hover>
  <Card.Header>Hover Card</Card.Header>
  <Card.Body>Card elevates visually on hover.</Card.Body>
</Card>`
  },
  "layout-and-structure-62": {
    component: dynamic(() => import("./layout-and-structure-62"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Card>
  <Card.Header>Pricing</Card.Header>

  <Card.Body>Basic plan features</Card.Body>

  <Card.Divider />

  <Card.Footer>
    <Button variant="primary">Upgrade</Button>
  </Card.Footer>
</Card>`
  },
  "layout-and-structure-63": {
    component: dynamic(() => import("./layout-and-structure-63"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Accordion
  items={[
    {
      id: 'faq1',
      title: 'Do you offer refunds?',
      content: 'Yes, refunds are available within 30 days.',
    },
    {
      id: 'faq2',
      title: 'Do you provide customer support?',
      content: 'Absolutely! Support is 24/7.',
    },
  ]}
/>;`
  },
  "layout-and-structure-64": {
    component: dynamic(() => import("./layout-and-structure-64"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Accordion
  defaultOpenId="faq1"
  items={[
    {
      id: 'faq1',
      title: 'Do you offer refunds?',
      content: 'Yes, refunds are available within 30 days.',
    },
    {
      id: 'faq2',
      title: 'Do you provide customer support?',
      content: 'Absolutely! Support is 24/7.',
    },
  ]}
/>`
  },
  "layout-and-structure-65": {
    component: dynamic(() => import("./layout-and-structure-65"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Accordion
  multiple
  items={[
    {
      id: 'faq1',
      title: 'Do you offer refunds?',
      content: 'Yes, refunds are available within 30 days.',
    },
    {
      id: 'faq2',
      title: 'Do you provide customer support?',
      content: 'Absolutely! Support is 24/7.',
    },
  ]}
/>`
  },
  "layout-and-structure-66": {
    component: dynamic(() => import("./layout-and-structure-66"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Tabs defaultValue="account">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="password">Password</Tabs.Trigger>
  </Tabs.List>

  <Tabs.Content value="account">Account content</Tabs.Content>
  <Tabs.Content value="password">Password content</Tabs.Content>
</Tabs>;`
  },
  "layout-and-structure-67": {
    component: dynamic(() => import("./layout-and-structure-67"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `const [tab, setTab] = useState('account');

<Tabs value={tab} onChange={setTab}>
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
  </Tabs.List>

  <Tabs.Content value="account">Account</Tabs.Content>
  <Tabs.Content value="billing">Billing</Tabs.Content>
</Tabs>;`
  },
  "layout-and-structure-68": {
    component: dynamic(() => import("./layout-and-structure-68"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Tabs defaultValue="a">
  <Tabs.List>
    <Tabs.Trigger value="a">A</Tabs.Trigger>
    <Tabs.Trigger value="b" disabled>
      B
    </Tabs.Trigger>
  </Tabs.List>

  <Tabs.Content value="a">Content A</Tabs.Content>
</Tabs>`
  },
  "layout-and-structure-69": {
    component: dynamic(() => import("./layout-and-structure-69"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Tabs defaultValue="tab1">
  <Tabs.List>
    {items.map((i) => (
      <Tabs.Trigger key={i} value={i}>
        {i}
      </Tabs.Trigger>
    ))}
  </Tabs.List>
</Tabs>`
  },
  "layout-and-structure-70": {
    component: dynamic(() => import("./layout-and-structure-70"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Tabs defaultValue="a" />
<Tabs value="a" onChange={()=>{}} />`
  },
  "layout-and-structure-71": {
    component: dynamic(() => import("./layout-and-structure-71"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Tabs.Trigger value="a" />
<Tabs.Trigger value="b" disabled />`
  },
  "layout-and-structure-72": {
    component: dynamic(() => import("./layout-and-structure-72"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Tabs.List />
<Tabs.List className="scrollable" />`
  },
  "layout-and-structure-73": {
    component: dynamic(() => import("./layout-and-structure-73"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Tabs.Content value="a" />
<Tabs.Content value="b" />`
  },
  "layout-and-structure-74": {
    component: dynamic(() => import("./layout-and-structure-74"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Container size="sm" />
<Container size="xl" />
<div className="flex"  direction="column" />
<div className="flex"  justify="between" />
<div className="grid"  columns={3} />
<div className="grid"  columns="auto-fit" />
<div className="grid"  columns="auto-fill" />`
  },
  "layout": {
    component: dynamic(() => import("./layout"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
  return (
    <Container className="p-6 border border-dashed border-default rounded-lg text-center">
      <p className="text-sm font-semibold">Container Component (Max width with responsive gutters)</p>
    </Container>
  );
}`
  },
  "link": {
    component: dynamic(() => import("./link"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Link href="#internal" className="text-primary hover:underline">Internal Link</Link>
      <Link href="https://github.com" target="_blank" className="text-muted hover:text-default">External Link ↗</Link>`
  },
  "megamenu": {
    component: dynamic(() => import("./megamenu"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<MegaMenu>
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
      </MegaMenu>`
  },
  "modal": {
    component: dynamic(() => import("./modal"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Button variant="primary" onClick={() => setOpen(true)}>Launch Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Modal Window">
        <p className="text-sm text-muted">Accessible modal dialog with backdrop blur and ESC handler.</p>
      </Modal>`
  },
  "multiselect": {
    component: dynamic(() => import("./multiselect"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<MultiSelect 
        options={[
          { label: 'React', value: 'react' },
          { label: 'TypeScript', value: 'ts' },
          { label: 'Tailwind CSS', value: 'tw' },
          { label: 'Next.js', value: 'next' }
        ]}
        placeholder="Select tags..."
      />`
  },
  "navigation-75": {
    component: dynamic(() => import("./navigation-75"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Settings' },
  ]}
/>;`
  },
  "navigation-76": {
    component: dynamic(() => import("./navigation-76"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Breadcrumbs
  items={[
    { label: 'Home', onClick: () => console.log('Home') },
    { label: 'Profile', onClick: () => console.log('Profile') },
    { label: 'Edit Profile' },
  ]}
/>`
  },
  "navigation-77": {
    component: dynamic(() => import("./navigation-77"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Breadcrumbs
  maxItems={4}
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/electronics' },
    { label: 'Mobiles', href: '/mobiles' },
    { label: 'iPhone 15' },
  ]}
/>`
  },
  "navigation-78": {
    component: dynamic(() => import("./navigation-78"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Breadcrumbs
  separator="/"
  items={[
    { label: 'Home', href: '/' },
    { label: 'Docs', href: '/docs' },
    { label: 'Breadcrumbs' },
  ]}
/>`
  },
  "navigation-79": {
    component: dynamic(() => import("./navigation-79"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Link href="/docs">Documentation</Link>;`
  },
  "navigation-80": {
    component: dynamic(() => import("./navigation-80"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Link variant="default">Default</Link>
<Link variant="primary">Primary</Link>
<Link variant="muted">Muted</Link>
<Link variant="danger">Danger</Link>`
  },
  "navigation-81": {
    component: dynamic(() => import("./navigation-81"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Link underline="hover">Hover underline</Link>
<Link underline="always">Always underline</Link>
<Link underline="none">No underline</Link>`
  },
  "navigation-82": {
    component: dynamic(() => import("./navigation-82"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Link href="https://example.com" isExternal>
  External resource
</Link>`
  },
  "navigation-83": {
    component: dynamic(() => import("./navigation-83"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `'use client';


<Link asChild>
  <NextLink href="/card">Go to card</NextLink>
</Link>;`
  },
  "navigation-84": {
    component: dynamic(() => import("./navigation-84"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `'use client';


<Button asChild variant="primary">
  <NextLink href="/dashboard">Go to Dashboard</NextLink>
</Button>;`
  },
  "navigation-85": {
    component: dynamic(() => import("./navigation-85"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Pagination page={1} total={10} onChange={setPage} />;`
  },
  "navigation-86": {
    component: dynamic(() => import("./navigation-86"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Pagination page={page} total={50} siblings={2} onChange={setPage} />`
  },
  "navigation-87": {
    component: dynamic(() => import("./navigation-87"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Pagination page={page} total={10} disabled onChange={setPage} />`
  },
  "navigation-88": {
    component: dynamic(() => import("./navigation-88"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Pagination page={page} total={10} onChange={setPage} />                 // Default
<Pagination siblings={2} page={page} total={100} onChange={setPage} />   // Extended window
<Pagination disabled page={page} total={10} onChange={setPage} />        // Disabled
<Pagination className="custom" page={page} total={10} onChange={setPage} /> // Styled`
  },
  "navigation-89": {
    component: dynamic(() => import("./navigation-89"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<MegaMenu />
<MegaMenu.Trigger />
<MegaMenu.Content />`
  },
  "nuiprovider": {
    component: dynamic(() => import("./nuiprovider"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<p className="text-sm font-medium">NUIProvider is active and managing themes globally.</p>`
  },
  "numberinput": {
    component: dynamic(() => import("./numberinput"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<NumberInput defaultValue={10} min={0} max={100} step={1} />`
  },
  "overlays-and-dialogs-90": {
    component: dynamic(() => import("./overlays-and-dialogs-90"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Modal open />
<Modal disableEsc />
<Modal disableClickOutside />`
  },
  "overlays-and-dialogs-91": {
    component: dynamic(() => import("./overlays-and-dialogs-91"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Drawer position="right" />
<Drawer position="left" />
<Drawer position="top" />
<Drawer position="bottom" />
<Drawer disableEsc />
<Drawer disableClickOutside />`
  },
  "overlays-and-dialogs-92": {
    component: dynamic(() => import("./overlays-and-dialogs-92"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Popover>
  <Popover.Trigger>
    <Button>Open</Button>
  </Popover.Trigger>

  <Popover.Content>Popover content</Popover.Content>
</Popover>;`
  },
  "overlays-and-dialogs-93": {
    component: dynamic(() => import("./overlays-and-dialogs-93"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Popover>
  <Popover.Trigger>
    <Button>Open</Button>
  </Popover.Trigger>

  <Popover.Content placement="top">Top popover</Popover.Content>
</Popover>`
  },
  "overlays-and-dialogs-94": {
    component: dynamic(() => import("./overlays-and-dialogs-94"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Popover>
  <Popover.Trigger>
    <Button>Open</Button>
  </Popover.Trigger>

  <Popover.Content>
    <Popover.Close>
      <Button>Close</Button>
    </Popover.Close>
  </Popover.Content>
</Popover>`
  },
  "overlays-and-dialogs-95": {
    component: dynamic(() => import("./overlays-and-dialogs-95"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Popover defaultOpen>
  <Popover.Trigger>
    <Button>Open</Button>
  </Popover.Trigger>

  <Popover.Content>Default open popover</Popover.Content>
</Popover>`
  },
  "overlays-and-dialogs-96": {
    component: dynamic(() => import("./overlays-and-dialogs-96"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Popover>...</Popover>                                      // Default
<Popover defaultOpen>...</Popover>                          // Open
<Popover.Content placement="top" />                         // Top
<Popover.Content placement="left" />                        // Left
<Popover.Content placement="right" />                       // Right`
  },
  "overlays-and-dialogs-97": {
    component: dynamic(() => import("./overlays-and-dialogs-97"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<HoverCard>
  <HoverCard.Trigger>
    <button>User</button>
  </HoverCard.Trigger>

  <HoverCard.Content>User preview</HoverCard.Content>
</HoverCard>;`
  },
  "overlays-and-dialogs-98": {
    component: dynamic(() => import("./overlays-and-dialogs-98"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<HoverCard />
<HoverCard openDelay={400} />
<HoverCard closeDelay={100} />
<HoverCard.Content placement="top" />
<HoverCard.Content placement="bottom" />`
  },
  "overlays-and-dialogs-99": {
    component: dynamic(() => import("./overlays-and-dialogs-99"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Dropdown.Menu align="start" />
<Dropdown.Menu align="end" />
<Dropdown.Item />
<Dropdown.Item className="nui-text-danger" />`
  },
  "pagination": {
    component: dynamic(() => import("./pagination"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
  const [page, setPage] = useState(1);
  return (
    <Pagination total={10} page={page} onChange={setPage} />
  );
}`
  },
  "passwordinput": {
    component: dynamic(() => import("./passwordinput"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<PasswordInput placeholder="Enter your password..." />`
  },
  "pickers-and-selects-1": {
    component: dynamic(() => import("./pickers-and-selects-1"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Combobox
  options={[
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" }
  ]}
/>`
  },
  "pickers-and-selects-10": {
    component: dynamic(() => import("./pickers-and-selects-10"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<DatePicker
  formatDisplay={(d) => \`\${d.getDate()}/\${d.getMonth() + 1}/\${d.getFullYear()}\`}
/>`
  },
  "pickers-and-selects-11": {
    component: dynamic(() => import("./pickers-and-selects-11"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<DatePicker />
<DatePicker disabled />
<DatePicker value="2026-10-24" />`
  },
  "pickers-and-selects-12": {
    component: dynamic(() => import("./pickers-and-selects-12"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<DateRangePicker onChange={(r) => console.log(r)} />`
  },
  "pickers-and-selects-13": {
    component: dynamic(() => import("./pickers-and-selects-13"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<DateRangePicker value={range} onChange={setRange} />`
  },
  "pickers-and-selects-14": {
    component: dynamic(() => import("./pickers-and-selects-14"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<DateRangePicker
  minDate="2026-01-01"
  maxDate="2026-12-31"
  onChange={(r) => console.log(r)}
/>`
  },
  "pickers-and-selects-15": {
    component: dynamic(() => import("./pickers-and-selects-15"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<DateRangePicker
  formatDisplay={(d) => \`\${d.getDate()}/\${d.getMonth() + 1}/\${d.getFullYear()}\`}
/>`
  },
  "pickers-and-selects-16": {
    component: dynamic(() => import("./pickers-and-selects-16"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<DateRangePicker nameFrom="startDate" nameTo="endDate" />`
  },
  "pickers-and-selects-17": {
    component: dynamic(() => import("./pickers-and-selects-17"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<DateRangePicker />
<DateRangePicker disabled />
<DateRangePicker value={{ from: "2026-10-01", to: "2026-10-10" }} />`
  },
  "pickers-and-selects-2": {
    component: dynamic(() => import("./pickers-and-selects-2"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `const [value, setValue] = useState("");

<Combobox
  value={value}
  onChange={setValue}
  options={options}
/>`
  },
  "pickers-and-selects-3": {
    component: dynamic(() => import("./pickers-and-selects-3"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Combobox
  leftIcon={<Icon />}
  rightIcon={<Icon />}
  options={options}
/>`
  },
  "pickers-and-selects-4": {
    component: dynamic(() => import("./pickers-and-selects-4"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Combobox
  options={options}
  renderOption={(opt, active) => (
    <span style={{ fontWeight: active ? 600 : 400 }}>
      {opt.label}
    </span>
  )}
/>`
  },
  "pickers-and-selects-5": {
    component: dynamic(() => import("./pickers-and-selects-5"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Combobox
  options={options}
  filter={(input, option) =>
    option.label.toLowerCase().startsWith(input.toLowerCase())
  }
/>`
  },
  "pickers-and-selects-6": {
    component: dynamic(() => import("./pickers-and-selects-6"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Combobox options={options} />              // Default combobox
<Combobox disabled options={options} />     // Disabled combobox
<Combobox leftIcon={<Icon />} />            // With icons
<Combobox renderOption={() => {}} />        // Custom rendered options`
  },
  "pickers-and-selects-7": {
    component: dynamic(() => import("./pickers-and-selects-7"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<DatePicker onChange={(date) => console.log(date)} />`
  },
  "pickers-and-selects-8": {
    component: dynamic(() => import("./pickers-and-selects-8"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `const [date, setDate] = useState('2026-10-24');

<DatePicker value={date} onChange={setDate} />;`
  },
  "pickers-and-selects-9": {
    component: dynamic(() => import("./pickers-and-selects-9"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<DatePicker
  minDate="2026-01-01"
  maxDate="2026-12-31"
  onChange={(d) => console.log(d)}
/>`
  },
  "pininput": {
    component: dynamic(() => import("./pininput"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<PinInput length={4} />`
  },
  "popover": {
    component: dynamic(() => import("./popover"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
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
}`
  },
  "progress": {
    component: dynamic(() => import("./progress"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Progress value={65} />`
  },
  "radiogroup": {
    component: dynamic(() => import("./radiogroup"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
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
}`
  },
  "rating": {
    component: dynamic(() => import("./rating"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Rating value={val} onChange={setVal} max={5} />
      <span className="text-sm text-muted font-medium">{val} of 5</span>`
  },
  "resizable": {
    component: dynamic(() => import("./resizable"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
  return (
    <Resizable className="h-36 w-full max-w-md border border-default rounded-lg p-4 bg-surface flex items-center justify-center">
      <span className="text-sm text-muted">Drag handle to resize me</span>
    </Resizable>
  );
}`
  },
  "scrollarea": {
    component: dynamic(() => import("./scrollarea"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
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
}`
  },
  "segmentedcontrol": {
    component: dynamic(() => import("./segmentedcontrol"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
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
}`
  },
  "select": {
    component: dynamic(() => import("./select"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Select 
        data={[
          { label: 'Light Theme', value: 'light' },
          { label: 'Dark Theme', value: 'dark' },
          { label: 'System Default', value: 'system' }
        ]}
        defaultValue="system"
        placeholder="Select theme..."
      />`
  },
  "skeleton": {
    component: dynamic(() => import("./skeleton"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Skeleton className="w-12 h-12 rounded-full" />
      <div className="flex-1 flex flex-col gap-2">
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-3 w-1/2 rounded" />
      </div>`
  },
  "slider": {
    component: dynamic(() => import("./slider"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Slider value={val} onChange={setVal} min={0} max={100} step={1} />
      <div className="text-right text-xs text-muted font-mono">{val[0]}%</div>`
  },
  "spinner": {
    component: dynamic(() => import("./spinner"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />`
  },
  "statcard": {
    component: dynamic(() => import("./statcard"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<StatCard 
        label="Monthly Active Users" 
        value="128,490" 
        change="+14.2%" 
        positive 
      />`
  },
  "stepper": {
    component: dynamic(() => import("./stepper"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Stepper 
        active={active} 
        onChange={setActive}
        data={['Account', 'Profile', 'Confirmation']} 
      />`
  },
  "switch": {
    component: dynamic(() => import("./switch"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Switch defaultChecked id="sw1" />
      <label htmlFor="sw1" className="text-sm font-medium">Automatic Backups</label>`
  },
  "table": {
    component: dynamic(() => import("./table"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Table 
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'role', label: 'Role' },
          { key: 'status', label: 'Status' }
        ]} 
        data={data} 
        rowKey="id" 
      />`
  },
  "tabs": {
    component: dynamic(() => import("./tabs"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Tabs defaultValue="overview">
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
      </Tabs>`
  },
  "textarea": {
    component: dynamic(() => import("./textarea"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Textarea placeholder="Type your feedback or comments here..." rows={4} />`
  },
  "timeline": {
    component: dynamic(() => import("./timeline"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Timeline 
        data={[
          { id: '1', title: 'Repository Created', time: '2 days ago', status: 'default' },
          { id: '2', title: 'v3.0 Released', time: 'Yesterday', status: 'primary' }
        ]} 
      />`
  },
  "timepicker": {
    component: dynamic(() => import("./timepicker"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<TimePicker placeholder="Select time" />`
  },
  "timerangepicker": {
    component: dynamic(() => import("./timerangepicker"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<TimeRangePicker placeholder="Select time range" />`
  },
  "toast": {
    component: dynamic(() => import("./toast"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<Button variant="outline" onClick={() => alert('Toast triggered')}>
        Trigger Notification
      </Button>`
  },
  "tooltip": {
    component: dynamic(() => import("./tooltip"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
  return (
    <Tooltip content="Tooltip information">
      <Button variant="outline">Hover over me</Button>
    </Tooltip>
  );
}`
  },
  "transferlist": {
    component: dynamic(() => import("./transferlist"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<span className="text-sm font-semibold text-muted">TransferList Component</span>`
  },
  "treeview": {
    component: dynamic(() => import("./treeview"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<TreeView data={items} />`
  },
  "video": {
    component: dynamic(() => import("./video"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<VideoPlayer src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />`
  },
  "virtuallist": {
    component: dynamic(() => import("./virtuallist"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `<span className="text-sm font-semibold text-muted">VirtualList (High performance rendering)</span>`
  },
  "watermark": {
    component: dynamic(() => import("./watermark"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: `export default function Example() {
  return (
    <Watermark text="CONFIDENTIAL">
      <div className="h-40 w-80 rounded-lg border border-default p-4 flex items-center justify-center text-sm text-muted">
        Protected Document Container
      </div>
    </Watermark>
  );
}`
  }
};
