// @ts-nocheck
import React, { useState } from 'react';
import { Slider } from '@nofinite/nui';
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
  const [val, setVal] = useState([50]);
  return (
    <div className="w-full max-w-xs flex flex-col gap-2">
      <Slider value={val} onChange={setVal} min={0} max={100} step={1} />
      <div className="text-right text-xs text-muted font-mono">{val[0]}%</div>
    </div>
  );
}
