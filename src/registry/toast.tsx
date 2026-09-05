// @ts-nocheck
import React, { useState } from 'react';
import { Button, Toast, useToast } from '@nofinite/nui';
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
  const { show } = useToast();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        variant="outline"
        onClick={() => show('Standard Notification', { variant: 'default', description: 'This is a standard toast notification.' })}
      >
        Default Toast
      </Button>

      <Button
        variant="primary"
        onClick={() => show('Project Saved!', { variant: 'success', description: 'All your recent changes have been saved.' })}
      >
        Success Toast
      </Button>

      <Button
        variant="outline"
        className="text-red-500 border-red-500/30 hover:bg-red-500/10"
        onClick={() => show('Connection Lost', { variant: 'error', description: 'Could not connect to the remote server.' })}
      >
        Error Toast
      </Button>
    </div>
  );
}
