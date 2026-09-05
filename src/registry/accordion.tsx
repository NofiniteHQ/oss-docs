// @ts-nocheck
import React, { useState } from 'react';
import { Accordion } from '@nofinite/nui';
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
}
