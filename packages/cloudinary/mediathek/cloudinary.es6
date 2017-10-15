import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { withPropsOnChange } from 'recompose';
import { SplitView } from 'olymp-ui';
import shortID from 'shortid';
import { intersection, orderBy, last, groupBy } from 'lodash';
import { queryMedias, cloudinaryRequest, cloudinaryRequestDone } from '../gql';
import { withRedux, withActions } from './redux';
import Gallery from '../components/vgallery';
import Sidebar from './sidebar';

const getItems = items =>
  items.map(item => ({
    ...item,
    tags: !item.tags || !item.tags.length ? ['Ohne Schlagworte'] : item.tags,
  }));

const getTags = (items, search) => {
  const tags = { 'Ohne Schlagworte': [] };
  items.forEach(item => {
    if (!item.tags.length) {
      tags['Ohne Schlagworte'].push(item);
    } else {
      item.tags.forEach(tag => {
        if (search && tag.toLowerCase().indexOf(search.toLowerCase()) === -1) {
          return;
        }
        if (!tags[tag]) {
          tags[tag] = [];
        }
        tags[tag].push(item);
      });
    }
  });
  return tags;
};

const getDirectories = ({
  items,
  tags: filter,
  setTags,
  folder,
  setFolder,
  search,
  format,
}) => {
  const folders = {};
  items.forEach(item => {
    if (format && item.format !== format) {
      return;
    }
    const app =
      item.publicId && item.publicId.indexOf('/') !== -1
        ? item.publicId.split('/')[0]
        : 'gzk';
    const folder = item.folder ? `${app}/${item.folder}` : `${app}/Allgemein`;
    if (!folders[folder]) {
      folders[folder] = [];
    }
    folders[folder].push(item);
  });

  if (!folder) {
    const directories = Object.keys(folders).map(name => {
      const label = last(name.split('/').filter(x => x));
      return {
        active: false,
        disabled: false,
        group: name.substr(0, name.length - label.length - 1).toUpperCase(),
        onClick: () => setFolder(name),
        label,
        description: folders[name].length,
        image: folders[name][0],
        countFilter: folders[name].length,
        countAll: folders[name].length,
        key: name,
      };
    });
    return {
      goBack: null,
      shortId: shortID.generate(),
      directories: groupBy(
        orderBy(directories, ['countFilter'], ['desc']),
        'group',
      ),
      filteredItems: items,
    };
  }

  items = folders[folder] || [];
  const tags = getTags(items, search);
  const directories = Object.keys(tags).map(tag => {
    const active = !!filter.find(x => x === tag);
    const filteredTags = !active
      ? [...filter, tag]
      : filter.filter(x => x !== tag);
    const filteredItems = items.filter(
      item =>
        intersection(item.tags, filteredTags).length === filteredTags.length,
    );
    const countFilter = (getTags(filteredItems)[tag] || []).length;
    const countAll = tags[tag].length;
    const disabled = !countFilter;
    const text = `${countAll} Dateien`;

    const label = last(tag.split('/').filter(x => x));
    return {
      active,
      disabled,
      group:
        label !== tag
          ? tag.substr(0, tag.length - label.length - 1)
          : 'Allgemein',
      onClick: () => setTags(filteredTags),
      label,
      description:
        countFilter === countAll ? text : `${countFilter} von ${text}`,
      image: tags[tag][0],
      countFilter,
      countAll,
      key: tag,
    };
  });

  return {
    goBack: filter.length
      ? () => setTags(filter.slice(0, -1))
      : () => setFolder(),
    shortId: shortID.generate(),
    directories: groupBy(
      orderBy(directories, ['countFilter'], ['desc']),
      'group',
    ),
    filteredItems: items.filter(
      item => intersection(item.tags, filter).length === filter.length,
    ),
  };
};

@withRedux
@queryMedias
@withPropsOnChange(['items'], ({ items }) => ({ items: getItems(items) }))
@cloudinaryRequest
@cloudinaryRequestDone
@withActions
@withPropsOnChange(
  ['tags', 'items', 'format', 'search', 'folder'],
  ({ tags, items, setTags, folder, setFolder, search, format }) =>
    getDirectories({
      items,
      tags,
      setTags,
      setFolder,
      folder,
      search,
      format,
    }),
)
@withPropsOnChange(
  ['uploading', 'cloudinaryRequest', 'folder', 'tags'],
  ({
    cloudinaryRequest,
    done,
    folder: folder2,
    tags,
    refetchKey,
    setUploading,
    uploading,
    setSelection,
  }) => {
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
              uploading.forEach(f => {
                const response = { ...file.response };
                response.id = response.public_id;
                done({
                  id: response.id,
                  token: signature,
                  tags,
                  folder: folder2
                    ? folder2
                        .split('/')
                        .filter((x, i) => i !== 0)
                        .join('/')
                    : null,
                }).then(({ data }) => {
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
      items,
      filteredItems,
      onClose,
      setSearch,
      goBack,
      directories,
      search,
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
          items={items}
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
