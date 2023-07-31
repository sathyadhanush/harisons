import clsx from 'clsx';
import { noop } from 'lodash';
import { useState } from 'react';
import ContentLoader from 'react-content-loader';
import ButtonGroup from './base/ButtonGroup';
import SortDropDown from './SortDropDown';
import TextInput from './base/TextInput';
import Tabs from './base/Tabs';

function DataTable({
  data = [],
  columns = [],
  isLoading = false,
  hasPrev = () => false,
  hasNext = () => false,
  onPrev = () => { },
  onNext = () => { },
  onRowClick = noop,
  actions = null,
  sortOptions = [],
  onSearch = null,
  onSort = null,
  filters = [],
  onFilter = noop,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState(filters[0].id);

  function handleRowClick(row) {
    if (onRowClick) {
      onRowClick(row);
    }
  }

  function handleSearch(event) {
    const { value } = event.target;
    setSearchQuery(value);
    onSearch(value);
  }

  function renderSortButton() {
    if (sortOptions.length === 0) {
      return;
    }

    return (
      <SortDropDown
        value={sortOptions.find((option) => option.selected).value}
        options={sortOptions}
        selected={sortOptions[0]}
        onChange={onSort}
      />
    );
  }

  function renderSearchBox() {
    if (onSearch === null) {
      return;
    }
    return (
      <TextInput
        maxLength={20}
        className="ui-table__search"
        iconPrefix={<ion-icon name="search-outline" />}
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
        iconSuffix={searchQuery && (
          <ion-icon
            name="close-outline"
            onClick={async () => {
              await onSearch('');
              setSearchQuery('');
            }}
          />
        )}
      />
    );
  }

  function renderFilters() {
    if (filters.length === 0) {
      return null;
    }
    return (
      <div className="ui-table-filters">
        <Tabs
          isRounded
          tabs={filters}
          onChange={(tab) => {
            setFilter(tab.id);
            onFilter(tab);
          }}
          activeTab={filters.find((f) => f.id === filter)}
        />
      </div>
    );
  }

  function renderActions() {
    if (onSort || actions) {
      return (
        <ButtonGroup>
          {renderSortButton()}
          {actions}
        </ButtonGroup>
      );
    }
  }

  function renderRows() {
    if (isLoading) {
      const loaders = [];
      for (let i = 0; i < 5; i += 1) {
        loaders.push(
          <tr key={i}>
            {columns.map(() => (
              <td>
                <ContentLoader height={15} width="100%">
                  <rect rx={4} ry={4} width="100%" height={15} />
                </ContentLoader>
              </td>
            ))}
          </tr>,
        );
      }
      return loaders;
    }

    return data.map((row) => (
      <tr
        key={row.id}
        onClick={() => handleRowClick(row)}
      >
        {columns.map((column) => (
          <td key={column.id}>{column.render(row)}</td>
        ))}
      </tr>
    ));
  }

  return (
    <>
      <div className="ui-table-actions">
        <div className="ui-table-actions__left">
          {onSearch && renderSearchBox()}
        </div>
        <div className="ui-table-actions__right">
          {renderActions()}
        </div>
      </div>
      {renderFilters()}
      <table
        className={clsx('ui-table', {
          'ui-table--clickable': !!onRowClick,
        })}
      >
        <thead>
          <tr>
            {columns.map((column) => <th key={column.key}>{column.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </>
  );
}

export default DataTable;
