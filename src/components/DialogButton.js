/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import Dialog from './base/Dialog';
import Button from './base/Button';

function DialogButton({
  appearance = 'primary',
  name,
  onSubmit,
  title,
  content,
  confirmLabel,
  dialogProps,
}) {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(true);
  }
  return (
    <>
      <Button appearance={appearance} onClick={handleClick}>{name}</Button>
      <Dialog
        isOpen={open}
        onCancel={() => setOpen(false)}
        onConfirm={() => {
          setOpen(false);
          onSubmit();
        }}
        isNegative
        title={title}
        content={content}
        confirmLabel={confirmLabel}
        {...dialogProps}
      />
    </>
  );
}

export default DialogButton;
