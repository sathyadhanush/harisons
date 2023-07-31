import Icons from 'components/Icons';
import 'components/scss/Chip.scss';

function Chip({ children, onClose }) {
  return (
    <div className="ui-chip">
      {children}
      <div className="ui-chip__icon" onClick={onClose}>
        {onClose && Icons.Close}
      </div>
    </div>
  );
}

export default Chip;
