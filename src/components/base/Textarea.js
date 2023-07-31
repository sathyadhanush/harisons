import { Textarea as EvergreenTextarea } from 'evergreen-ui';

function MyTextarea() {
  return <div />;
}

const Textarea = window.useNewComponents ? MyTextarea : EvergreenTextarea;

export default Textarea;
