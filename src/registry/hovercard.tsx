// @ts-nocheck
import React, { useState } from 'react';
import { Card, HoverCard } from '@nofinite/nui';
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
}
