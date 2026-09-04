// @ts-nocheck
import React, { useState } from 'react';
import { Alert, Button, Modal, useToast, nui } from '@nofinite/nui';
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
  const [logs, setLogs] = useState([
    '// Click any button below to test the programmatic API in real time'
  ]);
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'alert',
    isDanger: false,
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    resolve: null,
  });

  const addLog = (text) => {
    setLogs((prev) => [...prev.slice(-4), text]);
  };

  // Programmatic API adapter
  const nui = {
    confirm: (message, options) => {
      addLog(`> await nui.confirm("${message}")`);
      return new Promise((resolve) => {
        setDialogState({
          isOpen: true,
          title: options?.title || 'Confirm Action',
          message,
          type: 'confirm',
          isDanger: options?.isDanger || false,
          confirmText: options?.confirmText || 'Confirm',
          cancelText: options?.cancelText || 'Cancel',
          resolve,
        });
      });
    },
    alert: (message, options) => {
      addLog(`> await nui.alert("${message}")`);
      return new Promise((resolve) => {
        setDialogState({
          isOpen: true,
          title: options?.title || 'Alert',
          message,
          type: 'alert',
          confirmText: options?.confirmText || 'OK',
          resolve,
        });
      });
    },
    success: (msg, opts) => {
      addLog(`> nui.success("${msg}")`);
      show(msg, { variant: 'success', ...opts });
    },
    error: (msg, opts) => {
      addLog(`> nui.error("${msg}")`);
      show(msg, { variant: 'error', ...opts });
    },
    warn: (msg, opts) => {
      addLog(`> nui.warn("${msg}")`);
      show(msg, { variant: 'warning', ...opts });
    },
    toast: (msg, opts) => {
      addLog(`> nui.toast("${msg}")`);
      show(msg, { variant: 'default', ...opts });
    },
  };

  const handleClose = (result) => {
    if (dialogState.resolve) {
      dialogState.resolve(result);
      addLog(`< Promise resolved: ${result}`);
    }
    setDialogState((prev) => ({ ...prev, isOpen: false }));
  };

  const testConfirm = async () => {
    const ok = await nui.confirm('Are you sure you want to delete this repository?', {
      title: 'Delete Repository',
      confirmText: 'Yes, Delete',
      cancelText: 'Cancel',
      isDanger: true,
    });
    if (ok) {
      nui.success('Repository deleted successfully.');
    } else {
      nui.toast('Deletion cancelled.');
    }
  };

  const testAlert = async () => {
    await nui.alert('Your production deployment completed with 0 errors.', {
      title: 'Deployment Successful',
      confirmText: 'Done',
    });
  };

  return (
    <div className="w-full flex flex-col gap-4 p-2">
      {/* API Action Triggers */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <Button variant="danger" onClick={testConfirm}>
          Run nui.confirm()
        </Button>

        <Button variant="primary" onClick={testAlert}>
          Run nui.alert()
        </Button>

        <Button
          variant="outline"
          onClick={() => nui.success('Workspace updated', { description: 'All environment variables synced.' })}
        >
          Run nui.success()
        </Button>

        <Button
          variant="outline"
          className="text-red-500 border-red-500/30 hover:bg-red-500/10"
          onClick={() => nui.error('Deployment Failed', { description: 'Network timeout during artifact upload.' })}
        >
          Run nui.error()
        </Button>

        <Button
          variant="outline"
          className="text-amber-500 border-amber-500/30 hover:bg-amber-500/10"
          onClick={() => nui.warn('API Rate Limit', { description: '85% of your quota has been reached.' })}
        >
          Run nui.warn()
        </Button>
      </div>

      {/* Live API Console Output */}
      <div className="w-full bg-subtle/50 border border-default rounded-lg p-3 font-mono text-xs text-muted flex flex-col gap-1">
        <div className="flex items-center justify-between text-[10px] text-muted uppercase tracking-wider border-b border-default/50 pb-1 mb-1">
          <span>Live API Execution Output</span>
          <button onClick={() => setLogs(['// Console cleared'])} className="hover:text-default transition-colors">
            Clear
          </button>
        </div>
        {logs.map((log, i) => (
          <div
            key={i}
            className={log.startsWith('<') ? 'text-primary font-semibold' : log.startsWith('>') ? 'text-default' : 'text-muted'}
          >
            {log}
          </div>
        ))}
      </div>

      <Modal
        open={dialogState.isOpen}
        onClose={() => handleClose(false)}
        title={dialogState.title}
        style={{ maxWidth: '420px' }}
      >
        <p className="text-sm text-muted mb-6 leading-relaxed">{dialogState.message}</p>
        <div className="flex justify-end gap-2">
          {dialogState.type === 'confirm' && (
            <Button variant="outline" onClick={() => handleClose(false)}>
              {dialogState.cancelText || 'Cancel'}
            </Button>
          )}
          <Button
            variant={dialogState.isDanger ? 'danger' : 'primary'}
            onClick={() => handleClose(true)}
          >
            {dialogState.confirmText || 'Confirm'}
          </Button>
        </div>
      </Modal>
    </div>
  );
}
