import { Spinner as EvergreenSpinner } from 'evergreen-ui';

function MySpinner(props) {
  return <div />;
}

const Spinner = window.useNewComponents ? MySpinner : EvergreenSpinner;

export default Spinner;
