import { noop } from 'lodash';
import ContentLoader from 'react-content-loader';
import clsx from 'clsx';
import Tabs from 'src/components-new/tabs';
import { TableCell, TableRow } from './base/Table';
import ButtonGroup from './base/ButtonGroup';
import SortDropDown from './SortDropDown';
import SearchTextBox from './base/SearchTextBox';
import Pagination from './base/Pagination';

function TableList({
  headers,
  data,
  onRowClick = noop,
  isLoading = false,
  sortOptions = [],
  actions = null,
  getId = noop,
  searchPlaceholder = 'Search',
  searchKey,
  setSearchKey,
  onSearch = null,
  onSort,
  sortValue,
  isPrev,
  isNext,
  isOnBoarding,
  isHeaderAction,
  onBoardingView,
  activePage = null,
  onPageChange,
  filter,
  filters = null,
  onFilter,
}) {
  function renderSearchBox() {
    if (isLoading) {
      return (
        <ContentLoader height={40} width={230}>
          <rect rx={8} ry={8} width="100%" height="100%" />
        </ContentLoader>
      );
    }
    if (onSearch === null) {
      return;
    }
    return (
      <SearchTextBox
        maxLength={20}
        width="230px"
        placeholder={searchPlaceholder}
        onChange={(value) => onSearch(value)}
        value={searchKey}
        setValue={setSearchKey}
      />
    );
  }

  function renderSortButton() {
    if (sortOptions.length === 0) {
      return;
    }
    if (isLoading) {
      return (
        <ContentLoader height={40} width={100}>
          <rect rx={8} ry={8} width="100%" height="100%" />
        </ContentLoader>
      );
    }
    return (
      <SortDropDown
        value={sortValue}
        options={sortOptions}
        selected={sortOptions[0]}
        onChange={onSort}
      />
    );
  }

  function renderHeaders() {
    return (
      <thead>
        {headers.map((h) => (
          <th width={h.width} align={h.align}>{h.name}</th>
        ))}
      </thead>
    );
  }

  function renderColumn(header, row) {
    if (header.render) {
      return <TableCell>{header.render(row)}</TableCell>;
    }
    return <TableCell />;
  }

  function renderRows() {
    if (isLoading) {
      const loaders = [];
      for (let i = 0; i < 5; i += 1) {
        loaders.push(
          <TableRow key={i}>
            {headers.map(() => (
              <TableCell>
                <ContentLoader height={15} width="100%">
                  <rect rx={4} ry={4} width="100%" height={15} />
                </ContentLoader>
              </TableCell>
            ))}
          </TableRow>,
        );
      }
      return loaders;
    }
    return data.map((d) => (
      <TableRow
        key={getId(d)}
        id={getId(d)}
        onClick={() => onRowClick(d)}
      >
        {headers.map((h) => renderColumn(h, d))}
      </TableRow>
    ));
  }

  function renderPages() {
    if (activePage === null || isLoading) {
      return null;
    }
    if (isPrev === false && isNext === false) {
      return null;
    }
    return (
      <Pagination
        activePage={activePage}
        onPageChange={onPageChange}
        isPrev={isPrev}
        isNext={isNext}
      />
    );
  }

  function renderActions() {
    if (actions === null) {
      return;
    }
    if (isLoading) {
      return (
        <ContentLoader height={40} width={100}>
          <rect rx={8} ry={8} width="100%" height="100%" />
        </ContentLoader>
      );
    }
    return actions;
  }

  function renderFilters() {
    if (filters === null) {
      return;
    }
    if (isLoading) {
      const loaders = [];
      for (let i = 0; i < 5; i += 1) {
        loaders.push(
          <ContentLoader height={30} width={120} style={{ borderRadius: '50px' }}>
            <rect rx={8} ry={8} width="100%" height="100%" />
          </ContentLoader>,
        );
      }
      return <div style={{ marginBottom: 16, columnGap: 10 }} className="flex">{loaders}</div>;
    }
    return (
      <div style={{ marginBottom: 16 }}>
        <Tabs
          items={filters}
          activeItemKey={filter.key}
          onChange={onFilter}
          isRounded
        />
      </div>
    );
  }

  return (
    <div className={clsx('ui-table', {
      'ui-table--clickable': !isLoading && !!onRowClick,
    })}
    >
      <div className="ui-table-actions">
        <div className="ui-table-actions__left">{isHeaderAction && renderSearchBox()}</div>
        <div className="ui-table-actions__right">
          {isHeaderAction && (
            <ButtonGroup>
              {renderSortButton()}
              {renderActions()}
            </ButtonGroup>
          )}
        </div>
      </div>
      {isHeaderAction && renderFilters()}
      {isOnBoarding ? onBoardingView
        : (
          <>
            <table>
              {renderHeaders()}
              <tbody>{renderRows()}</tbody>
            </table>
            {renderPages()}
          </>
        )}
    </div>
  );
}

export default TableList;
