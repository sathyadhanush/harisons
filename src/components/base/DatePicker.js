import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../scss/DatePicker.scss';
import TextInput from './TextInput';

const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function DatePicker({ label, value, onChange }) {
  function renderHeader({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) {
    return (
      <div className="react-datepicker__header-navigation">
        <button
          type="button"
          disabled={prevMonthButtonDisabled}
          className="react-datepicker__header-navigation--previous"
          onClick={decreaseMonth}
        >
          <ion-icon name="chevron-back-outline" />
        </button>
        <div className="react-datepicker__header-navigation--month">
          <span>{Months[date.getMonth()]}</span>
          <span style={{ marginLeft: 5 }}>{date.getFullYear()}</span>
        </div>
        <button
          type="button"
          disabled={nextMonthButtonDisabled}
          className="react-datepicker__header-navigation--next"
          onClick={increaseMonth}
        >
          <ion-icon name="chevron-forward-outline" />
        </button>
      </div>
    );
  }

  return (
    <ReactDatePicker
      renderCustomHeader={renderHeader}
      showPopperArrow={false}
      onChange={onChange}
      selected={value}
      customInput={(
        <TextInput
          iconPrefix={<ion-icon style={{ verticalAlign: 'middle' }} name="calendar-outline" />}
          label={label}
          readOnly
        />
      )}
    />
  );
}

export default DatePicker;
