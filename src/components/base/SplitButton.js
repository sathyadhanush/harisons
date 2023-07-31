import clsx from 'clsx';
import 'components/scss/Button.scss';
import { Popover, Position } from 'evergreen-ui';
import { noop } from 'lodash';
import { useState } from 'react';
import Menu from './Menu';

function SplitButton({
  className,
  appearance = 'primary',
  actions = [],
  onClick = noop,
}) {
  const [isSecondaryActionOpen, setIsSecondaryActionOpen] = useState(false);

  function renderSecondaryActionsButton() {
    return (
      <div
        className="ui-button__secondary"
        onClick={() => setIsSecondaryActionOpen(true)}
      >
        <ion-icon name="caret-down-sharp" />
      </div>
    );
  }

  return (
    <Popover
      isShown={isSecondaryActionOpen}
      position={Position.BOTTOM_LEFT}
      onClose={() => setIsSecondaryActionOpen(false)}
      content={(
        <Menu
          items={actions.slice(1)}
          onClick={onClick}
        />
      )}
    >
      <button
        type="button"
        className={clsx(className, 'ui-button', 'ui-button--split', {
          'ui-button--primary': appearance = 'primary',
        })}
      >
        <div
          onMouseDown={() => onClick(actions[0])}
        >
          {actions[0].label}

        </div>
        {renderSecondaryActionsButton()}
      </button>
    </Popover>
  );
}

export default SplitButton;
