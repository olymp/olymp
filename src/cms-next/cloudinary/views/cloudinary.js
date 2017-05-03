import React, { Component, PropTypes } from 'react';
import { Upload, message } from 'antd';
import { isEqual } from 'lodash';
import { queryMedias, cloudinaryRequest, cloudinaryRequestDone } from '../gql';
import { SplitView } from '../../style';
import DragZone from '../dragzone';
import Gallery from '../gallery';
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
    filteredItems: [],
  };

  componentWillReceiveProps = props => {
    const { selected: stateSelected } = this.state;
    const { selected } = props;

    if (!isEqual(stateSelected.sort(), selected.sort())) {
      this.setState({ selected });
    }
  }

  getUploadPops = () => {
    const { data, done } = this.props;
    const { uploading } = this.state;
    const saveProgress = file => this.setState({
      uploading: [
        ...this.state.uploading.filter(x => x.name !== file.name),
        {
          name: file.name,
          percent: file.percent,
          size: file.size,
          status: file.status,
          response: file.response,
        },
      ]
    });

    if (!data || !data.cloudinaryRequest) return {};

    const { apiKey, signature, timestamp, url } = data.cloudinaryRequest;
    return {
      showUploadList: false,
      multiple: true,
      data: {
        api_key: apiKey,
        signature: signature,
        timestamp: timestamp,
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
            uploading.forEach(file => {
              const response = {...file.response};
              response.id = response.public_id;
              done({ id: response.id, token: signature }).then(data => {
                // remove file from uploading
                this.setState({ uploading: uploading.filter(x => x.name !== file.name) });

                // BENI, HIER GEHT NICHT!!!
                console.log(data, file);
                if (data && data.cloudinaryRequestDone) {
                  console.log('onSelect');
                  this.onSelect([cloudinaryRequestDone.id]);
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
  }

  onSelect = (selectionIds, index, e) => {
    const { multi, handleSelection } = this.props;
    let selected = [...this.state.selected];

    selectionIds.forEach((selectionId) => {
      const itemIndex = selected.findIndex(item => item === selectionId);
      if (itemIndex < 0) {
        if (multi && e && e.shiftKey) {
          selected.push(selectionId); // select multi
        } else {
          selected = [selectionId]; // select single
        }
      } else {
        selected.splice(itemIndex, 1); // remove/deselect
      }
    });

    handleSelection(selected, this);
  }

  onClick = (id, i, e) => {
    const { selected } = this.state;
    const index = selected.findIndex(selectedId => selectedId === id);

    if (index < 0) {
      this.setState({ selection: selected.length });
      this.onSelect([id], i, e);
    } else {
      this.setState({ selection: index });
    }
  }

  onRemove = id => {
    const { selected, selection } = this.state;
    const index = selected.findIndex(itemId => itemId === id);

    if (index < selection || (index === selection && index === selected.length - 1)) {
      this.setState({ selection: selection - 1 });
    }

    this.onSelect([id]);
  }

  render() {
    const { onClose, deviceWidth, format, onSelect } = this.props;
    const { selected, search, filter, filteredItems, uploading } = this.state;
    const selection = this.state.selection >= 0 && this.state.selection < selected.length ? this.state.selection : 0;

    let items = this.props.items;
    if (format) {
      items = items.filter(x => x.format === format);
    }

    return (
      <SplitView deviceWidth={deviceWidth}>
        <ListSidebar
          items={items}
          upload={this.getUploadPops()}
          onClose={onClose}
          filter={filter}
          onFilter={(filter, filteredItems) => this.setState({ filter, filteredItems })}
          search={search}
          onSearch={search => this.setState({ search })}
        />

        <DragZone uploading={uploading} clickable={false} {...this.getUploadPops()}>
          <Gallery
            onClick={this.onClick}
            selected={selected}
            items={filteredItems}
          />
        </DragZone>

        <SelectionSidebar
          items={selected.map(x => items.find(item => item.id === x)).filter(x => x)}
          activeItemId={selected[selection]}
          onClick={index => this.setState({ selection: index })}
          onRemove={this.onRemove}
          onCancel={() => this.onSelect(selected)}
          onSelect={onSelect}
        />
      </SplitView>
    );
  }
};
CloudinaryView.propTypes = {
  onClose: PropTypes.func,
  handleSelection: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.string),
  format: PropTypes.string,
  multi: PropTypes.bool,
};
CloudinaryView.defaultProps = {
  handleSelection: (selected, x) => x.setState({ selected }),
  selected: [],
  items: [],
  multi: true,
};
export default CloudinaryView;
