import dynamic from "next/dynamic";
import React from "react";

export const registry: Record<string, { component: React.ComponentType<any>; code: string }> = {
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
  }
};
