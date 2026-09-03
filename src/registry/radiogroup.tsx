// @ts-nocheck
import React, { useState } from 'react';
import { RadioGroup } from '@nofinite/nui';
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
}
