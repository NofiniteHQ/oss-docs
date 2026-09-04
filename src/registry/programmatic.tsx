// @ts-nocheck
import React, { useState } from 'react';
import { Alert, Button, Modal, Toast, useToast, nui } from '@nofinite/nui';
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
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'alert',
    isDanger: false,
    resolve: null,
  });

  // Imperative programmatic API adapter
  const nui = {
    confirm: (message, options) => {
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
      return new Promise((resolve) => {
        setDialogState({
          isOpen: true,
          title: options?.title || 'Notification',
          message,
          type: 'alert',
          confirmText: options?.confirmText || 'OK',
          resolve,
        });
      });
    },
    success: (msg, opts) => show(msg, { variant: 'success', ...opts }),
    error: (msg, opts) => show(msg, { variant: 'error', ...opts }),
    warn: (msg, opts) => show(msg, { variant: 'warning', ...opts }),
    toast: (msg, opts) => show(msg, { variant: 'default', ...opts }),
  };

  const handleClose = (result) => {
    if (dialogState.resolve) dialogState.resolve(result);
    setDialogState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleConfirm = async () => {
    const ok = await nui.confirm('Are you sure you want to permanently delete this project? This cannot be undone.', {
      title: 'Delete Project',
      confirmText: 'Yes, Delete',
      cancelText: 'Cancel',
      isDanger: true,
    });
    if (ok) {
      nui.success('Project deleted successfully.');
    } else {
      nui.toast('Action cancelled.');
    }
  };

  const handleAlert = async () => {
    await nui.alert('Your production deployment completed with 0 errors.', {
      title: 'Deployment Successful',
      confirmText: 'Done',
    });
  };

  return (
    <div className="flex flex-wrap gap-3 items-center justify-center p-2">
      <Button variant="danger" onClick={handleConfirm}>
        Trigger Confirm
      </Button>

      <Button variant="primary" onClick={handleAlert}>
        Trigger Alert
      </Button>

      <Button
        variant="outline"
        onClick={() => nui.success('Workspace updated', { description: 'All environment variables synced.' })}
      >
        Success Toast
      </Button>

      <Button
        variant="outline"
        className="text-red-500 border-red-500/30 hover:bg-red-500/10"
        onClick={() => nui.error('Deployment Failed', { description: 'Network timeout during artifact upload.' })}
      >
        Error Toast
      </Button>

      <Button
        variant="outline"
        className="text-amber-500 border-amber-500/30 hover:bg-amber-500/10"
        onClick={() => nui.warn('API Rate Limit', { description: '85% of your monthly quota has been reached.' })}
      >
        Warning Toast
      </Button>

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
