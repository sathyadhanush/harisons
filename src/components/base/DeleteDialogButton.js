import React, { useState } from 'react';
import Button from 'components/base/Button';
import Dialog from './Dialog';

function DeleteDialogButton({ handleSubmit }) {
  const [open, setOpen] = useState();
  return (
    <>
      <Button onClick={() => setOpen(true)}><ion-icon name="trash-outline" /></Button>
      <Dialog
        isOpen={open}
        onCancel={() => setOpen(false)}
        onConfirm={() => {
          setOpen(false);
          handleSubmit();
        }}
        title="Delete"
        content="Did you want delete this?"
        confirmLabel="Delete"
        isNegative
      />
    </>
  );
}

export default DeleteDialogButton;
