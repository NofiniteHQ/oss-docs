// @ts-nocheck
import React, { useState } from 'react';
import { MegaMenu } from '@nofinite/nui';
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
}
