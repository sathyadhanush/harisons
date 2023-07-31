import clsx from 'clsx';

const BoxStyle = {
  SHADOW: 'ui-box--shadowed',
  BORDER: 'ui-box--bordered',
  PADDING_SMALL: 'ui-box--padding-sm',
  ROUNDED_SMALL: 'ui-box--rounded-sm',
  ROUNDED: 'ui-box--rounded-md',
};

function Box({
  styles = [],
  children = null,
}) {
  return (
    <div className={clsx('ui-box', ...styles)}>
      {children}
    </div>
  );
}

Box.Style = BoxStyle;

export default Box;
