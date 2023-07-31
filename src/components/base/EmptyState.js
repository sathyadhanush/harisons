import 'src/scss/emptystate.scss';

function EmptyState({
  image,
  icon,
  heading,
  description,
  actions,
}) {
  return (
    <div className="ui-emptystate">
      {image && <img className="ui-emptystate__image" alt="" src={image} />}
      {icon && <div className="ui-emptystate__image">{icon}</div>}
      {heading && <div className="ui-emptystate__heading">{heading}</div>}
      {description && <div className="ui-emptystate__description">{description}</div>}
      {actions && <div className="ui-emptystate__actions">{actions}</div>}
    </div>
  );
}

export default EmptyState;
