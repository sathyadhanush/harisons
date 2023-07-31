import { noop } from 'lodash';
import Popover from './base/Popover';
import ActionList from './base/ActionList';
import Badge from './base/Badge';

function StatusDropDown({ items = [], selected, onChange = noop }) {
  function getActionListItems() {
    return items.filter((item) => item !== selected)
      .map((item) => ({
        ...item,
        onClick: () => onChange(item),
      }));
  }

  return (
    <Popover trigger={(
      <button type="button" className="ui-dropdown">
        <Badge status={selected.status}>{selected.label}</Badge>
        <ion-icon class="ui-dropdown__caret" name="caret-down-outline" />
      </button>
    )}
    >
      <ActionList items={getActionListItems()} />
    </Popover>
  );
}

export default StatusDropDown;
