import { useState } from 'react';
import ChoiceList from './base/ChoiceList';
import Popover from './base/Popover';
import Dialog from './base/Dialog';
import FormFieldGroup from './FormFieldGroup';
import FormField from './FormField';

export const REPORTS_SORT_OPTION = [
  { label: 'Lifetime', value: 'lifetime' },
  { label: 'Today', value: 'today' },
  { label: 'Last 7 days', value: 'last-7-days' },
  { label: 'Last 30 days', value: 'last-30-days' },
  { label: 'Last 3 months', value: 'last-3-months' },
  { label: 'Last 6 months', value: 'last-6-months' },
  { label: 'Last 1 year', value: 'last-1-year' },
  { label: 'Custom range', value: 'custom-range' },
];

function ReportsDropDown({
  value,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function renderDialogContent() {
    return (
      <FormFieldGroup>
        <FormField
          label="Start date"
          type="date"
          name="validFrom"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
        <FormField
          label="End date"
          type="date"
          name="validTill"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </FormFieldGroup>
    );
  }

  function renderCustomRageDilaog() {
    return (
      <Dialog
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onConfirm={() => {
          setIsOpen(false);
        }}
        title="Select custom range"
        content={renderDialogContent()}
      />
    );
  }

  function getSortBySection() {
    return (
      <ChoiceList
        value={value}
        label="Sort by"
        name="sort"
        choices={REPORTS_SORT_OPTION}
        onChange={(v) => {
          if (v === 'custom-range') {
            setIsOpen(true);
          }
          onChange(v);
        }}
      />
    );
  }

  return (
    <>
      {renderCustomRageDilaog()}
      <div className="flex-column">
        <Popover
          width={200}
          className="ui-sort"
          trigger={(
            <div
              className="flex-center ui-border-container"
              style={{
                padding: '5px 10px',
                columnGap: '5px',
                cursor: 'pointer',
                borderRadius: '20px',
              }}
            >
              {REPORTS_SORT_OPTION.find((model) => model.value === value).label}
              <ion-icon name="chevron-down-outline" style={{ fontSize: '15px' }} />
            </div>
          )}
          placements={['bottom', 'bottom-end']}
        >
          {getSortBySection()}
        </Popover>
      </div>
    </>
  );
}

export default ReportsDropDown;
