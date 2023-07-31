import clsx from 'clsx';
import 'components/scss/Dialog.scss';
import Button from 'src/components-new/button';
import ButtonGroup from './ButtonGroup';
import Portal from './Portal';

function Dialog({
  isOpen,
  title,
  content,
  height = 'auto',
  confirmLabel = 'Save',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel = () => { },
  size = 'medium',
  hasFooter = true,
  isNegative = false,
}) {
  if (!isOpen) {
    return null;
  }
  function renderFooter() {
    if (!hasFooter) {
      return;
    }
    return (
      <div className="ui-dialog__footer">
        <ButtonGroup>
          <Button onClick={onCancel} label={cancelLabel} />
          {onConfirm && (
            <Button
              isAsync={!!onConfirm.then}
              appearance={isNegative ? 'negative' : 'primary'}
              onClick={onConfirm}
              label={confirmLabel}
            />
          )}
        </ButtonGroup>
      </div>
    );
  }

  return (
    <Portal>
      <div className="ui-overlay" />
      <div className={clsx('ui-dialog', `ui-dialog--${size}`)} style={{ height }}>
        <div className="ui-dialog__header">
          {title && <div className="ui-dialog__title">{title}</div>}
          {onCancel && (
            <div className="ui-dialog__close" onClick={onCancel}>
              <ion-icon name="close-outline" />
            </div>
          )}
        </div>
        <div className="ui-dialog__body">{content}</div>
        {renderFooter()}
      </div>
    </Portal>
  );
}

export function ListDialog({
  isOpen,
  title,
  content,
  onConfirm,
  confirmLabel = 'Save',
  hasFooter = true,
  isNegative = false,
  onCancel = () => { },
}) {
  if (!isOpen) {
    return null;
  }
  function renderFooter() {
    if (!hasFooter) {
      return;
    }
    return (
      <div className="ui-dialog__footer">
        {onConfirm && <Button appearance={isNegative ? 'negative' : 'primary'} onClick={onConfirm}>{confirmLabel}</Button>}
      </div>
    );
  }

  return (
    <Portal>
      <div className="ui-overlay" />
      <div className="ui-dialog">
        <div className="ui-dialog__header">
          {title && <div className="ui-dialog__title">{title}</div>}
          <ion-icon
            class="ui-dialog__close"
            name="close-outline"
            onClick={onCancel}
          />
        </div>
        <div className="ui-dialog__body">{content}</div>
        {renderFooter()}
      </div>
    </Portal>
  );
}

export default Dialog;
