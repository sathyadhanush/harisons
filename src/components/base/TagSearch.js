import { useState, useEffect } from 'react';
import { Label } from 'evergreen-ui';
import Dialog, { ListDialog } from 'components/base/Dialog';
import Chip from './Chip';
import TextInput from './TextInput';
import TagsService from '../../service/TagsService';
import EmptyView from './EmptyView';
// eslint-disable-next-line import/no-cycle
import { ImageWithCheckBoxText } from './AppComponents';
import Loading from './Loading';

let localRows = [];

export default function Tag({
  tags = [], setTags, width, type,
}) {
  const [isOpen, setOpen] = useState(false);
  const [rows, setRows] = useState(null);
  const [value, setValue] = useState('');
  const [selectedRows, setSelectedRows] = useState(tags);

  useEffect(() => {
    if (localRows.length === 0 && isOpen) {
      localRows = tags;
    }
  }, [isOpen]);

  useEffect(() => {
    setRows(null);
    TagsService.getTagsByType({ type, searchKey: value.trim() }).then(setRows);
  }, [value]);

  function handleConfirm() {
    setSelectedRows(localRows);
    setTags(localRows);
    setOpen(false);
    setValue('');
    localRows = [];
  }

  function handleCancel() {
    setOpen(false);
    setValue('');
    localRows = [];
  }

  function handleRowClick(row, isChange) {
    if (isChange) {
      localRows.push(row);
    } else {
      localRows = localRows.filter((t1) => row !== t1);
    }
  }

  function renderSearchBox() {
    if ((rows !== null && rows.length !== 0) || value.trim() !== '') {
      return (
        <TextInput
          iconPrefix={<ion-icon name="search-outline" />}
          placeholder="Search tags"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      );
    }
  }

  function renderList() {
    return (
      <div className="ui-resource-list" style={{ marginTop: 20 }}>
        {rows.map((row) => (
          <ImageWithCheckBoxText
            name={row}
            isSelected={selectedRows.includes(row)}
            onChange={(isChange) => handleRowClick(row, isChange)}
            src={null}
          />
        ))}
      </div>
    );
  }

  function renderView() {
    if (rows === null) {
      return <Loading />;
    }
    if (rows !== null && rows.length === 0) {
      return (
        <EmptyView heading="No tags available" />
      );
    }
    return (renderList());
  }

  function renderTagDialog() {
    return (
      <Dialog
        isOpen={isOpen}
        title="Choose tags"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        content={(
          <>
            {renderSearchBox()}
            {renderView()}
          </>
        )}
      />
    );
  }

  return (
    <>
      {renderTagDialog()}
      <div className="ui-border-container" style={{ width }}>
        <div className="flex-space-between" style={{ marginBottom: '20px' }}>
          {type === 'product'
            ? <div className="ui-form-section__name">Tags</div>
            : <Label fontSize="15px">Tags</Label>}
          <Label onClick={() => setOpen(true)} color="#1885F2" cursor="pointer">Choose</Label>
        </div>
        <TagTextBox
          selectedTagList={selectedRows}
          setSelectedTagList={(t) => {
            localRows = t;
            setSelectedRows(t);
            setTags(t);
          }}
        />
      </div>
    </>
  );
}

function TagTextBox({
  selectedTagList, setSelectedTagList,
}) {
  const [state, setState] = useState('');
  function handleRemove(tag1) {
    const tempTag = selectedTagList.filter((tag) => tag !== tag1);
    setSelectedTagList(tempTag);
  }
  function handleAdd() {
    const sT = selectedTagList;
    sT.push(state.trim());
    setSelectedTagList(sT);
    setState('');
  }

  return (
    <>
      <TextInput
        iconPrefix={<ion-icon style={{ color: 'gray' }} name="search-outline" />}
        placeholder="Create tags"
        value={state}
        onChange={(event) => setState(event.target.value)}
        iconSuffix={
          state.trim() && !selectedTagList.includes(state.trim())
          && <ion-icon name="add-circle-outline" style={{ color: '#1885F2' }} onClick={handleAdd} />
        }
        maxLength={15}
      />
      <div
        className="flex"
        style={{
          flexWrap: 'wrap', rowGap: '10px', columnGap: '10px', marginTop: '20px',
        }}
      >
        {selectedTagList?.map((tag) => (
          <Chip onClose={() => handleRemove(tag)}>{tag}</Chip>
        ))}
      </div>
    </>
  );
}
