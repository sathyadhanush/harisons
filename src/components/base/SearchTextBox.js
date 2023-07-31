import TextInput from './TextInput';
import '../scss/Search.scss';

function SearchTextBox({
  value, placeholder, onChange, width = 'auto', maxLength = 30,
}) {
  return (
    <TextInput
      maxLength={maxLength}
      width={width}
      className="ui-search"
      iconPrefix={<ion-icon style={{ color: 'gray' }} name="search-outline" />}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      value={value}
      iconSuffix={value?.trim()
        && (
          <ion-icon
            style={{ color: 'gray' }}
            name="close-outline"
            onClick={() => { onChange(''); }}
          />
        )}
    />
  );
}

export default SearchTextBox;
