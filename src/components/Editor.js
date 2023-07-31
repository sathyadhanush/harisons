import Quill from 'quill';
import { useEffect, useRef } from 'react';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { noop } from 'lodash';
import 'src/scss/editor.scss';

function Editor({
  name,
  height,
  value = '',
  onChange = noop,
  error,
}) {
  const instance = useRef();

  /** @type {React.MutableRefObject<HTMLDivElement>} */
  const $container = useRef();
  /** @type {React.MutableRefObject<HTMLDivElement>} */
  const $editor = useRef();

  useEffect(() => {
    if (instance.current) {
      return;
    }
    instance.current = new Quill($container.current, {
      theme: 'snow',
    });
    $editor.current = $container.current.querySelector('.ql-editor');
    $editor.current.innerHTML = value;
    instance.current.on('text-change', () => {
      onChange({
        target: {
          name,
          value: $editor.current.innerHTML,
        },
      });
    });
  }, []);

  useEffect(() => {
    function handleEditorFocus(event) {
      event.target.parentElement.classList.add('ql-container--focused');
    }
    function handleOutSideClick(event) {
      if ($container.current.contains(event.target)) {
        return;
      }
      $editor.current.parentElement.classList.remove('ql-container--focused');
    }
    $editor.current.addEventListener('click', handleEditorFocus);
    window.addEventListener('click', handleOutSideClick);
    return () => {
      $editor.current.removeEventListener('click', handleEditorFocus);
      window.removeEventListener('click', handleOutSideClick);
    };
  }, []);

  return (
    <>
      <div style={{ height }} ref={$container} />
      {error && <div className="ui-textinput__error">{error}</div>}
    </>
  );
}

export default Editor;
