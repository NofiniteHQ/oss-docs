// @ts-nocheck
import React, { useState } from 'react';
import { Button, Modal } from '@nofinite/nui';
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

export default function Example() {
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
}
