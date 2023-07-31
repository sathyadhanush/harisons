import { useState } from 'react';
import Tooltip from './Tooltip';

function Upload({ url: _url, icon = 'storefront', onChange }) {
  const [url, setUrl] = useState(_url);

  function handleUpload(event) {
    const [file] = event.target.files;
    setUrl(URL.createObjectURL(file));
    onChange(file);
  }

  function handleRemove() {
    setUrl(null);
    onChange(null);
  }

  if (url) {
    return (
      <div className="ui-upload ui-upload--selected">
        <img className="ui-upload__image" src={url} alt="logo" />
        <div className="ui-upload__overlay">
          <Tooltip title="Remove" placement="bottom">
            <ion-icon name="close-circle" class="ui-upload__remove" onClick={handleRemove} />
          </Tooltip>
        </div>
      </div>
    );
  }

  return (
    <div className="ui-upload">
      <Tooltip title="Upload">
        <input
          type="file"
          className="ui-upload__input"
          onChange={handleUpload}
        />
      </Tooltip>
      <ion-icon class="ui-upload__icon" name={icon} />
    </div>
  );
}

export default Upload;
