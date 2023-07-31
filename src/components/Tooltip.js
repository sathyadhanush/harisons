import { useRef } from 'react';
import tippy from 'tippy.js';

function Tooltip({ title, children, placement = 'top' }) {
  const instance = useRef();

  function handleMouseLeave() {
    instance.current.destroy();
  }

  function handleMouseEnter(event) {
    const element = event.target.closest('.ui-tooltip').children[0];
    instance.current = tippy(element, {
      content: title,
      placement,
    });
  }

  return (
    <span
      className="ui-tooltip"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </span>
  );
}

export default Tooltip;
