import React from 'react';
import { Table, CodeBlock } from '@nofinite/nui';
import propsData from '@/data/component-props.json';

export interface PropsTableProps {
  name: string;
}

export function PropsTable({ name }: PropsTableProps) {
  const componentProps = (propsData as any)[name];

  if (!componentProps || componentProps.length === 0) {
    return <div className="text-muted text-sm my-4">No props found for {name}.</div>;
  }

  return (
    <div className="w-full overflow-x-auto my-6 border border-default rounded-lg shadow-sm">
      <table className="w-full text-left border-collapse text-sm">
        <thead className="bg-subtle/50 border-b border-default">
          <tr>
            <th className="px-4 py-3.5 font-semibold text-default whitespace-nowrap">Prop</th>
            <th className="px-4 py-3.5 font-semibold text-default whitespace-nowrap">Type</th>
            <th className="px-4 py-3.5 font-semibold text-default whitespace-nowrap">Default</th>
            <th className="px-4 py-3.5 font-semibold text-default">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-default bg-page">
          {componentProps.map((prop: any) => (
            <tr key={prop.name} className="transition-colors hover:bg-subtle/30">
              <td className="px-4 py-3.5 align-top">
                <code className="text-primary font-mono text-xs">{prop.name}</code>
                {prop.required && <span className="ml-1 text-danger text-[10px] font-bold" title="Required">*</span>}
              </td>
              <td className="px-4 py-3.5 align-top">
                <code className="text-muted font-mono text-[11px] whitespace-pre-wrap">{prop.type}</code>
              </td>
              <td className="px-4 py-3.5 align-top">
                {prop.defaultValue ? (
                  <code className="text-muted font-mono text-[11px]">{prop.defaultValue}</code>
                ) : (
                  <span className="text-muted/50">—</span>
                )}
              </td>
              <td className="px-4 py-3.5 align-top text-muted text-[13px] whitespace-pre-wrap">
                {prop.description || <span className="text-muted/50">—</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
