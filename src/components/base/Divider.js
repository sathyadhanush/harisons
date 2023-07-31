import 'components/scss/Divider.scss';

function Divider({ type }) {
  if (type === 'vertical') {
    return (
      <div className="ui-vertiacl-divider" />
    );
  }
  return (
    <div className="ui-divider" />
  );
}
export default Divider;
