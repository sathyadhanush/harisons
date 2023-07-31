import { useState } from 'react';
import Button from './button';

function DialogButton({ label, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button label={label} onClick={() => setIsOpen(false)} />
      {isOpen && content}
    </>
  );
}

export default DialogButton;
