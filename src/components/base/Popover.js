import {
  useFloating,
  FloatingPortal,
  useClick,
  useInteractions,
  useDismiss,
  offset,
  autoPlacement,
  autoUpdate,
} from '@floating-ui/react';
import clsx from 'clsx';
import { useState } from 'react';

function Popover({
  children,
  trigger,
  width = 'max-content',
  className,
  placements = ['bottom-start'],
  isCloseOnClick = true,
}) {
  const [open, setOpen] = useState(false);
  const {
    x, y, strategy, refs, context,
  } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: placements[0],
    whileElementsMounted: autoUpdate,
    middleware: [offset(10), autoPlacement({
      allowedPlacements: placements,
    })],
  });
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click, dismiss,
  ]);

  function renderPopover() {
    if (!open) {
      return;
    }
    return (
      <FloatingPortal id="floating-ui-portal">
        <div
          className={clsx('ui-popover', className)}
          ref={refs.setFloating}
          onClick={() => {
            if (isCloseOnClick) {
              setOpen(false);
            }
          }}
          style={{
            width,
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...getFloatingProps()}
        >
          {children}
        </div>
      </FloatingPortal>
    );
  }

  return (
    <>
      <span
        ref={refs.setReference}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...getReferenceProps()}
      >
        {trigger}
      </span>
      {renderPopover()}
    </>
  );
}

export default Popover;
