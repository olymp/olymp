import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { isEqual } from 'lodash';
import { SplitView } from 'olymp-ui';
import { queryMedias, cloudinaryRequest, cloudinaryRequestDone } from '../gql';
import { Dragzone, Gallery } from '../components';
import ListSidebar from './list';
import SelectionSidebar from './selection';

@queryMedias
@cloudinaryRequest
@cloudinaryRequestDone
class CloudinaryView extends Component {
  state = {
    selected: [],
    selection: 0,
    uploading: [],
    search: undefined,
    filter: [],
    filteredItems: null,
  };

  componentWillReceiveProps = props => {
    const { selected: stateSelected } = this.state;
    const { selected } = props;

    if (
      !isEqual(
        stateSelected.map(item => item.id).sort(),
        selected.map(item => item.id).sort()
      )
    ) {
      this.setState({ selected });
    }
  };

  getUploadPops = () => {
    const { data, done, refetchKey } = this.props;
    const { uploading } = this.state;
    const saveProgress = file =>
      this.setState({
        uploading: [
          ...this.state.uploading.filter(x => x.name !== file.name),
          {
            name: file.name,
            percent: file.percent,
            size: file.size,
            status: file.status,
            response: file.response,
          },
        ],
      });

    if (!data || !data.cloudinaryRequest) {
      return {};
    }

    const { apiKey, signature, timestamp, url } = data.cloudinaryRequest;
    return {
      showUploadList: false,
      multiple: true,
      data: {
        api_key: apiKey,
        signature,
        timestamp,
      },
      action: url,
      onChange: ({ file, fileList, event }) => {
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
              done({ id: response.id, token: signature }).then(({ data }) => {
                // remove file from uploading
                this.setState({
                  uploading: uploading.filter(x => x.name !== file.name),
                });
                if (data && data.cloudinaryRequestDone) {
                  this.onSelect([
                    { id: data.cloudinaryRequestDone.id, crop: undefined },
                  ]);
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
    };
  };

  onSelect = (selections, index, e) => {
    const { multi, handleSelection } = this.props;
    let selected = [...this.state.selected];

    selections.forEach(({ id: selectionId }) => {
      const itemIndex = selected.findIndex(({ id }) => id === selectionId);
      if (itemIndex < 0) {
        if (multi && e && e.shiftKey) {
          selected.push({ id: selectionId, crop: undefined }); // select multi
        } else {
          selected = [{ id: selectionId, crop: undefined }]; // select single
        }
      } else {
        selected.splice(itemIndex, 1); // remove/deselect
      }
    });

    handleSelection(selected, this);
  };

  onClick = (id, i, e) => {
    const { handleSelection } = this.props;
    const { selected } = this.state;
    const index = selected.findIndex(({ id: selectedId }) => selectedId === id);

    if (index < 0) {
      this.setState({ selection: selected.length });
      this.onSelect([{ id, crop: undefined }], i, e);
    } else {
      this.setState({ selection: index });
      handleSelection([{ id, crop: undefined }], this);
    }
  };

  onRemove = id => {
    const { selected, selection } = this.state;
    const index = selected.findIndex(({ id: itemId }) => itemId === id);

    if (
      index < selection ||
      (index === selection && index === selected.length - 1)
    ) {
      this.setState({ selection: selection - 1 });
    }

    this.onSelect([{ id, crop: undefined }]);
  };

  render() {
    const { onClose, format, onSelect } = this.props;
    const { selected, search, filter, uploading } = this.state;
    const selection =
      this.state.selection >= 0 && this.state.selection < selected.length
        ? this.state.selection
        : 0;

    const items = !format
      ? this.props.items
      : this.props.items.filter(x => x.format === format);
    const filteredItems = this.state.filteredItems || items;

    return (
      <SplitView background>
        <ListSidebar
          items={items}
          upload={this.getUploadPops()}
          onClose={onClose}
          filter={filter}
          onFilter={(filter, filteredItems) =>
            this.setState({ filter, filteredItems })}
          search={search}
          onSearch={search => this.setState({ search })}
        />
        <Dragzone
          uploading={uploading}
          clickable={false}
          {...this.getUploadPops()}
        >
          <Gallery
            onClick={this.onClick}
            onRemove={this.onRemove}
            selected={selected}
            items={filteredItems}
          />
        </Dragzone>
        <SelectionSidebar
          items={selected
            .map(x => items.find(item => item.id === x.id))
            .filter(x => x)}
          activeItem={selected[selection]}
          onClick={index => this.setState({ selection: index })}
          onRemove={this.onRemove}
          onCancel={() => this.onSelect(selected)}
          onSelect={onSelect}
        />
      </SplitView>
    );
  }
}
CloudinaryView.propTypes = {
  onClose: PropTypes.func,
  handleSelection: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      crop: PropTypes.arrayOf(PropTypes.number),
    })
  ),
  format: PropTypes.string,
  multi: PropTypes.bool,
};
CloudinaryView.defaultProps = {
  handleSelection: (selected, x) => x.setState({ selected }),
  onSelect: undefined,
  onClose: undefined,
  selected: [],
  items: [],
  multi: true,
  format: undefined,
};
export default CloudinaryView;
