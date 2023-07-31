import 'src/scss/thumbnail.scss';

function Thumbnail({
  size = 'medium',
  source = null,
  onRemove = null,
  className = '',
}) {
  return (
    <div className={`ui-thumbnail ui-thumbnail--${size} ${className}`}>
      {source === null
        ? <ion-icon class="ui-thumbnail__placeholder" name="image" />
        : <img src={source} className="ui-thumbnail__image" alt="" />}
      {onRemove && (
        <ion-icon onClick={onRemove} class="ui-thumbnail__remove" name="close-circle" />
      )}
      <div className="ui-thumbnail__overlay" />
    </div>
  );
}

export default Thumbnail;
