import Checkbox from 'components/base/Checkbox';
import TextInput from 'components/base/TextInput';
import { noop } from 'lodash';
import ContentLoader from 'react-content-loader';
import Model from 'src/model/Model';
import 'src/scss/resourcelist.scss';

function ResourceList({
  items = [],
  selectedItems = [],
  onSelect = null,
  onSearch = null,
  isLoading = false,
  renderItem = noop,
}) {
  function isSelected(item) {
    if (selectedItems.includes(item)) {
      return true;
    }
    if (item instanceof Model) {
      return selectedItems.findIndex((sItem) => sItem.getId() === item.getId()) !== -1;
    }
    return false;
  }

  function handleChange(event, item) {
    const { checked } = event.target;
    if (checked) {
      onSelect([...selectedItems, item]);
    } else {
      onSelect(selectedItems.filter((selectedItem) => {
        if (selectedItem instanceof Model) {
          return selectedItem.getId() !== item.getId();
        }
        return selectedItem !== item;
      }));
    }
  }

  function renderLoaders() {
    const content = [];
    for (let i = 0; i < 5; i += 1) {
      content.push(
        <div className="ui-resourcelist__item" key={i}>
          <ContentLoader height={10} width="100%">
            <rect rx="3" ry="3" width="100%" height={10} />
          </ContentLoader>
        </div>,
      );
    }
    return content;
  }

  function renderItems() {
    return (
      <div className="ui-resourcelist__items">
        {items.map((item) => (
          <div className="ui-resourcelist__item">
            {onSelect && (
              <Checkbox
                isChecked={isSelected(item)}
                onChange={(event) => handleChange(event, item)}
              />
            )}
            {renderItem({ item })}
          </div>
        ))}
      </div>
    );
  }

  function renderSearch() {
    return (
      <TextInput
        iconPrefix={<ion-icon name="search-outline" />}
        placeholder="Search"
        className="ui-resourcelist__search"
        onChange={onSearch}
      />
    );
  }

  return (
    <div className="ui-resourcelist">
      {onSearch !== null && renderSearch()}
      {isLoading ? renderLoaders() : renderItems()}
    </div>
  );
}

export default ResourceList;
