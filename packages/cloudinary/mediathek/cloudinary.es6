import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { withPropsOnChange } from 'recompose';
import { SplitView } from 'olymp-ui';
import { queryMedias, cloudinaryRequest, cloudinaryRequestDone } from '../gql';
import { withRedux, withActions } from './redux';
import { getDirectories } from './directory';
import Gallery from './gallery';
import Dragzone from '../components/dragzone';
import Sidebar from './sidebar';

const getItems = items =>
  items.map(item => ({
    ...item,
    tags: !item.tags || !item.tags.length ? ['Ohne Schlagworte'] : item.tags,
  }));

@withRedux
@queryMedias
@withPropsOnChange(['items'], ({ items }) => ({ items: getItems(items) }))
@cloudinaryRequest
@cloudinaryRequestDone
@withActions
@withPropsOnChange(
  ['tags', 'items', 'format', 'search', 'folder', 'sortByName'],
  ({ tags, items, setTags, folder, setFolder, search, format, sortByName }) =>
    getDirectories({
      items,
      tags,
      setTags,
      setFolder,
      folder,
      search,
      format,
      sortByName,
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
    addSelection,
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
        beforeUpload: () => {
          setSelection([]);
        },
        onChange: ({ file }) => {
          if (file.status === 'uploading' && file.percent < 100) {
            // save upload-state to state
            saveProgress(file);
          } else if (file.status === 'done') {
            // Write data in DB
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
              if (data && data.cloudinaryRequestDone) {
                addSelection(data.cloudinaryRequestDone.id);
                refetchKey();

                // show message if a file uploaded
                saveProgress(file);
                message.success(`${file.name} erfolgreich hochgeladen.`);
              }
              // remove file from uploading
              setUploading(uploading.filter(x => x.name !== file.name));
            });
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
    items: PropTypes.arrayOf(PropTypes.object),
    filteredItems: PropTypes.arrayOf(PropTypes.object),
    selectedIds: PropTypes.arrayOf(PropTypes.string),
    onClose: PropTypes.func,
    onChange: PropTypes.func,
    addSelection: PropTypes.func,
    removeSelection: PropTypes.func,
    setSelection: PropTypes.func,
    format: PropTypes.string,
    multi: PropTypes.bool,
  };

  static defaultProps = {
    items: [],
    filteredItems: [],
    selectedIds: [],
    multi: true,
    onClose: undefined,
    onChange: undefined,
    addSelection: undefined,
    removeSelection: undefined,
    setSelection: undefined,
    format: undefined,
  };

  onClick = (id, e) => {
    const {
      selectedIds,
      addSelection,
      removeSelection,
      setSelection,
      multi,
    } = this.props;

    if (multi && e.shiftKey) {
      if (selectedIds.findIndex(sId => sId === id) === -1) {
        addSelection(id);
      } else {
        removeSelection(id);
      }
    } else {
      setSelection([id]);
    }
  };

  render() {
    const {
      items,
      filteredItems,
      onClose,
      goBack,
      directories,
      upload,
      shortId,
      onChange,
      uploading,
      removeSelection,
      selected,
    } = this.props;

    return (
      <SplitView background>
        <Sidebar
          directories={directories}
          upload={upload}
          onClose={onClose}
          goBack={goBack}
          items={items}
          selected={selected}
          onChange={onChange}
        />
        <Dragzone uploading={uploading} clickable={false} {...upload}>
          <Gallery
            key={shortId}
            items={filteredItems}
            onClick={this.onClick}
            onRemove={removeSelection}
          />
        </Dragzone>
      </SplitView>
    );
  }
}
export default CloudinaryView;
