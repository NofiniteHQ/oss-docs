// @ts-nocheck
import React, { useState } from 'react';
import { Button, Collapsible } from '@nofinite/nui';
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
}
