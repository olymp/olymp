import React, { Component } from 'react';
import { Spin, Button } from 'antd';
import { gql, graphql, withRouter } from 'olymp';
import sortBy from 'lodash/sortBy';
import capitalize from 'lodash/upperFirst';
import { Modal } from '../../components';
import Detail from './detail';
import DetailMulti from './detail-multi';
import Sidebar from './list-sidebar';
import List from './list';
import Upload from './upload';
import Crop, { CropSelect } from './crop';

const fieldNames =
  'id, url, tags, colors, width, height, createdAt, caption, source, format';
const ACTIVE_COLOR = '#EEE';

@graphql(gql`
  query fileList {
    items: fileList {
      ${fieldNames}
    }
  }
`)
@withRouter
export default class MediaView extends Component {
  cropImages = {};
  state = {
    tags: [],
    selected: [],
    aspect: 0,
  };

  getNode = images => {
    const { tags } = this.state;
    const tree = {};

    (images || []).forEach(image => {
      (image.tags || []).forEach(tag => {
        const isActive = tags.findIndex(x => x === tag) !== -1;

        if (!tree[tag]) {
          tree[tag] = {
            name: !isActive ? capitalize(tag) : `'${capitalize(tag)}' aufheben`,
            onClick: () =>
              this.setState({
                tags: !isActive ? [...tags, tag] : tags.filter(x => x !== tag),
              }),
            color: isActive && ACTIVE_COLOR,
            isActive,
            image,
            images: [],
            tags: [...image.tags],
          };
        }

        tree[tag].images.push(image);
        tree[tag].tags = [
          ...tree[tag].tags,
          ...image.tags.filter(
            x => tree[tag].tags.findIndex(y => y === x) === -1
          ),
        ];
        tree[tag].description = `${tree[tag].images.length} Bilder mit ${tree[
          tag
        ].tags.length} Schlagworten`;
      });
    });

    return tree;
  };

  onClose = () => {
    const { id, onClose, router, location } = this.props;
    if (onClose) onClose();
    if (id)
      router.push({
        pathname: location.pathname,
        query: { ...location.query, '@media': null },
      });
  };

  onClick = (item, isActive) => {
    const { id, router, location, onChange, multi } = this.props;
    const selected = [...this.state.selected];

    if (id && !selected.length) {
      selected.push(id);
    }

    if (multi) {
      this.setState({
        selected: !isActive
          ? [...selected, item.id]
          : selected.filter(x => x !== item.id),
      });

      if (!onChange)
        router.replaceWith({
          pathname: location.pathname,
          query: { ...location.query, '@media': null },
        });
    } else if (onChange) {
      this.setState({ selected: !isActive ? [item.id] : [] });
    } else {
      router.push({
        pathname: location.pathname,
        query: { ...location.query, '@media': item.id },
      });
    }
  };

  onSaveCrop = () => {
    const { data, onChange, onClose, multi } = this.props;
    const { items } = data;
    const { selected } = this.state;
    const result = selected.map(
      id => this.cropImages[id] || items.find(x => x.id === id)
    );
    onChange(multi ? result : result[0]);
  };

  render() {
    const { data, onChange, onClose, multi } = this.props;
    const { selected, tags, aspect } = this.state;
    const { items, loading } = data;

    let currentNode = this.getNode(items || []);
    let images = items;
    tags.forEach(tag => {
      if (
        currentNode &&
        currentNode[tag] &&
        currentNode[tag].images &&
        currentNode[tag].images.length
      ) {
        images = currentNode[tag].images;
        currentNode = this.getNode(images, currentNode);
      }
    });

    const directories = sortBy(
      Object.keys(currentNode).map(key => currentNode[key]),
      image => image.name /* image.length */
    );

    if (directories.filter(x => x.isActive).length) {
      directories.unshift({
        name: 'Alle Tags aufheben',
        onClick: () => this.setState({ tags: [] }),
        isActive: true,
      });
    }

    let detail;
    if (selected.length && onChange) {
      // crop one or more
      detail = (
        <div>
          <h3>{selected.length > 1 ? 'Bilder' : 'Bild'} zurechtschneiden</h3>
          <CropSelect
            value={aspect}
            onChange={aspect => this.setState({ aspect })}
            style={{ width: '100%', marginBottom: '1rem' }}
          />

          {selected.map(id =>
            <div key={id}>
              <Crop
                item={this.cropImages[id] || items.find(x => x.id === id)}
                onChange={image => (this.cropImages[id] = image)}
                aspect={aspect}
              />
            </div>
          )}
          <div style={{ clear: 'both', float: 'right', marginTop: '1rem' }}>
            <Button key="submit" type="primary" onClick={this.onSaveCrop}>
              Übernehmen
            </Button>&nbsp;
            <Button onClick={this.onClose}>Abbrechen</Button>
          </div>
          <div style={{ clear: 'both' }} />
        </div>
      );
    } else if (selected.length > 1 && !onChange) {
      // batch edit items
      detail = (
        <div>
          <h3>{selected.length} Bilder ausgewählt</h3>
          <DetailMulti
            images={selected.map(x => items.find(item => item.id === x))}
            deselect={id =>
              this.setState({ selected: selected.filter(x => x !== id) })}
            onClose={this.onClose}
          />
        </div>
      );
    } else if (selected.length === 1) {
      // edit one
      detail = selected.map(id =>
        <div key={id}>
          <h3>Bild bearbeiten</h3>
          <Detail id={id} onClose={this.onClose} />
        </div>
      );
    } else {
      // none selected
      detail = (
        <div>
          <h3>Bild auswählen oder hochladen</h3>
          <Upload modal={false} onClose={() => console.log('jo')} />
          <div style={{ float: 'right', marginTop: '1rem' }}>
            {!!onChange && <Button onClick={this.onClose}>Abbrechen</Button>}
          </div>
          <div style={{ clear: 'both' }} />
        </div>
      );
    }

    return (
      <Modal onClose={onClose}>
        <Sidebar
          items={directories}
          isLoading={loading}
          noChangeAllowed={!!onChange}
        />
        <div className="col-md-8 py-1 px-0" style={{ minHeight: 400 }}>
          <div className="container olymp-container pr-0">
            {loading
              ? <Spin size="large" />
              : <List
                  selected={selected}
                  onClick={this.onClick}
                  images={images}
                  multi={multi}
                />}
          </div>
        </div>
        <div
          style={{
            position: 'fixed',
            height: '100%',
            overflowY: 'auto',
            width: 'calc((100% - 340px) / 3)',
            right: 0,
          }}
        >
          <div className="p-1">
            {detail}
          </div>
        </div>
      </Modal>
    );
  }
}
