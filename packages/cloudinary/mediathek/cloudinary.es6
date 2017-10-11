import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { withStateHandlers, withPropsOnChange } from 'recompose';
import { SplitView } from 'olymp-ui';
import shortID from 'shortid';
import { intersection, upperFirst, orderBy } from 'lodash';
import { queryMedias, cloudinaryRequest, cloudinaryRequestDone } from '../gql';
import Gallery from '../components/vgallery';
import Sidebar from './sidebar';

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

const getDirectories = ({ items, tags: filter, setTags, folder, setFolder, search, format }) => {
  if (format) {
    items = items.filter(x => x.format === format);
  }

  const folders = {};
  items.forEach((item) => {
    const app =
      item.publicId && item.publicId.indexOf('/') !== -1 ? item.publicId.split('/')[0] : 'gzk';
    const folder = item.folder ? `[${app}] ${item.folder}` : `[${app}]`;
    if (!folders[folder]) {
      folders[folder] = [];
    }
    folders[folder].push(item);
  });

  if (!folder) {
    const directories = Object.keys(folders).map(name => ({
      active: false,
      disabled: false,
      onClick: () => setFolder(name),
      label: upperFirst(name),
      description: folders[name].length,
      image: folders[name][0],
      countFilter: folders[name].length,
      countAll: folders[name].length,
      key: name,
    }));
    return {
      goBack: null,
      shortId: shortID.generate(),
      directories: orderBy(directories, ['countFilter'], ['desc']),
      filteredItems: items,
    };
  }
  items = (folders[folder] || []).map(item => ({
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
    const countFilter = (getTags(filteredItems, null, [])[tag] || []).length;
    const countAll = tags[tag].length;
    const disabled = !countFilter;
    const text = `${countAll} Dateien`;

    return {
      active,
      disabled,
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
    goBack: filter.length ? () => setTags(filter.slice(0, -1)) : () => setFolder(),
    shortId: shortID.generate(),
    directories: orderBy(directories, ['countFilter'], ['desc']),
    filteredItems: items.filter(item => intersection(item.tags, filter).length === filter.length),
  };
};

@queryMedias
@cloudinaryRequest
@cloudinaryRequestDone
@withStateHandlers(
  () => ({
    tags: [],
    folder: null,
    search: null,
    uploading: [],
    selectedIds: [],
    activeId: null,
    tab: '',
  }),
  {
    setTab: () => tab => ({ tab }),
    addSelection: ({ selectedIds }) => id => ({
      selectedIds: [...selectedIds, id],
      activeId: id,
      tab: 'select',
    }),
    setSelection: () => selectedIds => ({ selectedIds, activeId: selectedIds[0], tab: 'select' }),
    removeSelection: ({ selectedIds }) => (id) => {
      const newIds = selectedIds.filter(x => x !== id);
      return {
        selectedIds: newIds,
        activeId: newIds[newIds.length - 1],
      };
    },
    setActive: () => active => ({ active }),
    setTags: () => tags => ({ tags }),
    setFolder: () => folder => ({ folder }),
    setSearch: () => search => ({ search }),
    setUploading: () => uploading => ({ uploading }),
  },
)
@withPropsOnChange(
  ['tags', 'items', 'format', 'search', 'folder'],
  ({ tags, items, setTags, folder, setFolder, search, format }) =>
    getDirectories({ items, tags, setTags, setFolder, folder, search, format }),
)
@withPropsOnChange(
  ['uploading', 'cloudinaryRequest'],
  ({ cloudinaryRequest, done, refetchKey, setUploading, uploading, setSelection }) => {
    const saveProgress = file =>
      setUploading([
        ...uploading.filter(x => x.name !== file.name),
        {
          name: file.name,
          percent: file.percent,
          size: file.size,
          status: file.status,
          response: file.response,
        },
      ]);

    console.log(cloudinaryRequest);
    if (!cloudinaryRequest) {
      return {};
    }

    const { apiKey, signature, timestamp, url, folder } = cloudinaryRequest;
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
                    setSelection([data.cloudinaryRequestDone.id]);
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
  },
)
@withPropsOnChange(['selectedIds', 'items'], ({ selectedIds, items }) => ({
  selectedItems: selectedIds.map(x => items.find(item => item.id === x)).filter(x => x),
}))
class CloudinaryView extends Component {
  static propTypes = {
    onClose: PropTypes.func,
    onChange: PropTypes.func,
    selection: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        crop: PropTypes.arrayOf(PropTypes.number),
      }),
    ),
    format: PropTypes.string,
    multi: PropTypes.bool,
  };
  static defaultProps = {
    selection: [],
    items: [],
    multi: true,
  };

  onClick = (id, e) => {
    const { selection, addSelection, setSelection, setActive } = this.props;
    const exists = selection.indexOf(id) !== -1;
    if (!exists) {
      if (e.shiftKey) {
        addSelection(id);
      } else {
        setSelection([id]);
      }
    } else {
      setActive(id);
    }
  };

  render() {
    const {
      selectedItems,
      filteredItems,
      onClose,
      setSearch,
      goBack,
      directories,
      search,
      activeId,
      setActive,
      selectedIds,
      removeSelection,
      setTab,
      tab,
      tags,
      upload,
      shortId,
      onChange,
    } = this.props;

    return (
      <SplitView background>
        <Sidebar
          directories={directories}
          upload={upload}
          tags={tags}
          search={search}
          onClose={onClose}
          goBack={goBack}
          setSearch={setSearch}
          items={selectedItems}
          activeId={activeId}
          onClick={setActive}
          onRemove={removeSelection}
          tab={tab}
          setTab={setTab}
          onChange={onChange}
        />
        <div>
          <Gallery
            key={shortId}
            selectedIds={selectedIds}
            items={filteredItems}
            onClick={this.onClick}
            onRemove={removeSelection}
          />
        </div>
      </SplitView>
    );
  }
}
// * /<Dragzone uploading={uploading} clickable={false} {...upload}> */}
// * </Dragzone> */}
export default CloudinaryView;
