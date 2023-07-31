import { useState } from 'react';
import { toaster } from 'evergreen-ui';
import AccountForm from './AccountForm';

function Component() {
  const [state, setState] = useState(null);

  async function handleSubmit(values) {
    toaster.success('Account updated sucessfully', { id: 'message' });
  }

  return (
    <AccountForm
      account={state}
      onSubmit={handleSubmit}
    />
  );
}

export { Component };
