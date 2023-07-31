import PropTypes from 'prop-types';
import 'src/scss/dropzone.scss';

function DropZone({
  accept = '*',
  hint = null,
  multiple = true,
  onChange,
}) {
  return (
    <div className="ui-dropzone">
      <input
        className="ui-dropzone__input"
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={onChange}
      />
      <div className="ui-dropzone__icon">
        <ion-icon name="cloud-upload-outline" />
      </div>
      {hint && <div className="ui-dropzone__hint">{hint}</div>}
      <div className="ui-dropzone__action">Browse files</div>
    </div>
  );
}

DropZone.propTypes = {
  accept: PropTypes.string,
  hint: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default DropZone;
