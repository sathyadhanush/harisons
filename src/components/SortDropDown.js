import PropTypes from 'prop-types';
import Button from 'src/components-new/button';
import ChoiceList from './base/ChoiceList';
import Popover from './base/Popover';

const Icon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.14219 22L7.14219 4" stroke="black" strokeWidth="2" />
    <path d="M2.8285 7.75736L7.07114 3.51472L11.3138 7.75736" stroke="black" strokeWidth="2" />
    <path d="M16.1716 2V20" stroke="black" strokeWidth="2" />
    <path d="M20.4853 16.2426L16.2426 20.4853L12 16.2426" stroke="black" strokeWidth="2" />
  </svg>
);

function SortDropDown({
  value,
  options = [],
  // selected,
  onChange,
}) {
  function getSortBySection() {
    return (
      <ChoiceList
        value={value}
        label="Sort by"
        name="sort"
        choices={options}
        onChange={onChange}
      />
    );
  }

  return (
    <div className="flex-column">
      <Popover
        width={200}
        className="ui-sort"
        trigger={(
          <Button
            icon={Icon}
            label="Sort"
          />
        )}
        placements={['bottom', 'bottom-end']}
      >
        {getSortBySection()}
      </Popover>
    </div>
  );
}

SortDropDown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })).isRequired,
  selected: PropTypes.shape({
    order: PropTypes.string,
    by: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SortDropDown;
