import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { withState, withPropsOnChange } from 'recompose';
import { SplitView } from 'olymp-ui';
import { intersection, upperFirst } from 'lodash';
import { queryMedias, cloudinaryRequest, cloudinaryRequestDone } from '../gql';
import { Dragzone, Gallery } from '../components';
import ListSidebar from './list';
import SelectionSidebar from './selection';

const getTags = (items, search, filter) => {
  const tags = { 'Ohne Schlagworte': [] };

  const addTag = (tag, item) => {
    if (!tags[tag]) {
      tags[tag] = [];
    }
    tags[tag].push(item);
  };

  items.forEach((item) => {
    if (!item.tags.length) {
      tags['Ohne Schlagworte'].push(item);
    } else {
      item.tags.forEach((tag) => {
        if (!search || tag.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
          tag = tag.split('/');
          if (tag.length === 1) {
            addTag(tag, item);
          } else {
            for (let i = 0; i < tag.length; i++) {
              const t = tag.slice(0, i + 1).join('/');
              const index = filter.indexOf(t);
              if (index === -1) {
                addTag(t, item);
                break;
              }
            }
          }
        }
      });
    }
  });

  return tags;
};

const getDirectories = ({ items, tags: filter, setTags, search, format }) => {
  if (format) {
    items = items.filter(x => x.format === format);
  }
  items = items.map(item => ({
    ...item,
    tags: !item.tags || !item.tags.length ? ['Ohne Schlagworte'] : item.tags,
  }));

  const tags = getTags(items, search, filter);
  const directories = Object.keys(tags).map((tag) => {
    const active = !!filter.find(x => x === tag);
    const filteredTags = !active ? [...filter, tag] : filter.filter(x => x !== tag);
    const filteredItems = items.filter(
      item => intersection(item.tags, filteredTags).length === filteredTags.length,
    );
    const countFilter = (getTags(filteredItems)[tag] || []).length;
    const countAll = tags[tag].length;
    const disabled = !countFilter;
    const text = `${countAll} Dateien`;

    return {
      active,
      disabled,
      items: filteredItems,
      onClick: () => setTags(filteredTags),
      label: upperFirst(tag),
      description: countFilter === countAll ? text : `${countFilter} von ${text}`,
      image: tags[tag][0],
      countFilter,
      countAll,
      key: tag,
    };
  });
  return {
    directories,
    filteredItems: items.filter(item => intersection(item.tags, filter).length === filter.length),
  };
};

@queryMedias
@cloudinaryRequest
@cloudinaryRequestDone
@withState('tags', 'setTags', [])
@withState('search', 'setSearch', null)
@withState('uploading', 'setUploading', [])
@withPropsOnChange(
  ['tags', 'items', 'format', 'search'],
  ({ tags, items, setTags, search, format }) =>
    getDirectories({ items, tags, setTags, search, format }),
)
@withPropsOnChange(['uploading'], ({ data, done, refetchKey, setUploading, uploading }) => {
  const saveProgress = file =>
    setUploading([
      ...this.state.uploading.filter(x => x.name !== file.name),
      {
        name: file.name,
        percent: file.percent,
        size: file.size,
        status: file.status,
        response: file.response,
      },
    ]);

  if (!data || !data.cloudinaryRequest) {
    return {};
  }

  const { apiKey, signature, timestamp, url, folder } = data.cloudinaryRequest;
  return {
    upload: {
      showUploadList: false,
      multiple: true,
      data: {
        api_key: apiKey,
        signature,
        timestamp,
        folder,
      },
      action: url,
      onChange: ({ file }) => {
        if (file.status === 'uploading') {
          // save upload-state to state
          saveProgress(file);
        } else if (file.status === 'done') {
          if (uploading.find(x => x.name === file.name) !== file.status) {
            // show message if a file uploaded
            saveProgress(file);
            message.success(`${file.name} erfolgreich hochgeladen.`);
          }

          if (!uploading.find(file => file.percent < 100)) {
            // Write data in DB
            uploading.forEach((f) => {
              const response = { ...file.response };
              response.id = response.public_id;
              done({ id: response.id, token: signature }).then(({ data }) => {
                // remove file from uploading
                setUploading(uploading.filter(x => x.name !== file.name));
                if (data && data.cloudinaryRequestDone) {
                  this.onSelect([{ id: data.cloudinaryRequestDone.id, crop: undefined }]);
                  refetchKey();
                }
              });
            });
          }
        } else if (file.status === 'error') {
          console.log('error');
          message.error(`${file.name} file upload failed.`);
        }
      },
    },
  };
})
@withState('selection', 'setSelection', [])
@withState('active', 'setActive', null)
@withPropsOnChange(['selection'], ({ selection, items }) => ({
  selectedItems: selection.map(x => items.find(item => item.id === x.id)).filter(x => x),
}))
class CloudinaryView extends Component {
  static propTypes = {
    onClose: PropTypes.func,
    handleSelection: PropTypes.func,
    onSelect: PropTypes.func,
    selected: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        crop: PropTypes.arrayOf(PropTypes.number),
      }),
    ),
    format: PropTypes.string,
    multi: PropTypes.bool,
  };
  static defaultProps = {
    onSelect: undefined,
    onClose: undefined,
    selected: [],
    items: [],
    multi: true,
    format: undefined,
  };

  handleSelection = (selection) => {
    const { setSelection, handleSelection } = this.props;
    setSelection(selection);
    if (handleSelection) {
      handleSelection(selection);
    }
  };

  onSelect = (selections, isPush) => {
    const { multi, selection } = this.props;
    let selected = [...selection];

    selections.forEach(({ id: selectionId }) => {
      const itemIndex = selected.findIndex(({ id }) => id === selectionId);
      if (itemIndex < 0) {
        if (multi && isPush) {
          selected.push({ id: selectionId, crop: undefined }); // select multi
        } else {
          selected = [{ id: selectionId, crop: undefined }]; // select single
        }
      } else {
        selected.splice(itemIndex, 1); // remove/deselect
      }
    });

    this.handleSelection(selected);
  };

  onClick = (id, e) => {
    const { selection, setActive } = this.props;
    const index = selection.findIndex(({ id: selectedId }) => selectedId === id);
    if (index === -1) {
      setActive(selection.length);
      this.onSelect([{ id, crop: undefined }], e.shiftKey);
    } else {
      setActive(index);
      this.handleSelection([{ id, crop: undefined }]);
    }
  };

  onRemove = (id) => {
    const { selected, selection } = this.state;
    const index = selected.findIndex(({ id: itemId }) => itemId === id);

    if (index < selection || (index === selection && index === selected.length - 1)) {
      this.setState({ selection: selection - 1 });
    }

    this.onSelect([{ id, crop: undefined }]);
  };

  render() {
    const {
      selectedItems,
      filteredItems,
      onClose,
      setSearch,
      selection,
      setTags,
      uploading,
      directories,
      search,
      active,
      setActive,
      tags,
      upload,
    } = this.props;

    return (
      <SplitView background>
        <ListSidebar
          directories={directories}
          upload={upload}
          tags={tags}
          search={search}
          onClose={onClose}
          setTags={setTags}
          setSearch={setSearch}
        />
        <Dragzone uploading={uploading} clickable={false} {...upload}>
          <Gallery
            key={filteredItems.length}
            selection={selection}
            items={filteredItems}
            onClick={this.onClick}
            onRemove={this.onRemove}
          />
        </Dragzone>
        <SelectionSidebar
          items={selectedItems}
          active={active}
          onClick={index => this.setState({ selection: index })}
          onRemove={this.onRemove}
          // onCancel={() => this.onSelect(selected)}
          onSelect={setActive}
        />
      </SplitView>
    );
  }
}
export default CloudinaryView;
