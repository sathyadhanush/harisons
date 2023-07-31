import clsx from 'clsx';

function ButtonGroup({ className, children }) {
  return (
    <div className={clsx('ui-button-group', className)}>
      {children}
    </div>
  );
}

export default ButtonGroup;
