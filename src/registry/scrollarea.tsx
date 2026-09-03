// @ts-nocheck
import React, { useState } from 'react';
import { ScrollArea } from '@nofinite/nui';
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
}
