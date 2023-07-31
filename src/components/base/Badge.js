import 'components/scss/Badge.scss';

function Badge({ status = 'default', children }) {
  return (
    <div className={`ui-badge ui-badge--${status}`}>
      {children}
    </div>
  );
}

export default Badge;
