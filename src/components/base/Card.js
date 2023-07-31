import clsx from 'clsx';

function Card({ children, className, ...restProps }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={clsx('ui-card', className)} {...restProps}>
      {children}
    </div>
  );
}

export default Card;
