import '../scss/FilterChip.scss';

function FilterChip({ list = [], selectedValue, onClick }) {
  return (
    <div className="flex" style={{ columnGap: '20px' }}>
      {list.map((model) => (
        <div
          className={selectedValue === model.value ? 'ui-filter-chip-selected' : 'ui-filter-chip'}
          onClick={() => onClick(model.value)}
        >
          {model.name}
        </div>
      ))}
    </div>
  );
}

export default FilterChip;
