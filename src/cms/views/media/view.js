import React, { Component } from 'react';
import { Spin, Button } from 'antd';
import { gql, graphql, withRouter } from 'olymp';
import sortBy from 'lodash/sortBy';
import capitalize from 'lodash/upperFirst';
import Modal from '../modal';
import Detail from './detail';
import DetailMulti from './detail-multi';
import Sidebar from './list-sidebar';
import List from './list';
import ListMini from './list-mini';
import Upload from './upload';
import Crop from './crop';

const attributes = 'id, url, tags, colors, width, height, createdAt, caption, source, format';
const ACTIVE_COLOR = '#EEE';

@graphql(gql`
  query fileList {
    items: fileList {
      ${attributes}
    }
  }
`)
@withRouter
export default class MediaView extends Component {
  state = {
    tags: [],
    selected: [],
  };

  getNode = (images) => {
    const { tags } = this.state;
    const tree = {};

    images.forEach((image) => {
      (image.tags || []).forEach((tag) => {
        const isActive = tags.findIndex(x => x === tag) !== -1;

        if (!tree[tag]) {
          tree[tag] = {
            name: !isActive ? capitalize(tag) : `'${capitalize(tag)}' entfernen`,
            onClick: () => this.setState(
              { tags: !isActive ? [...tags, tag] : tags.filter(x => x !== tag) }
            ),
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
          ...image.tags.filter(x => tree[tag].tags.findIndex(y => y === x) === -1),
        ];
        tree[tag].description = `${tree[tag].images.length} Bilder mit ${tree[tag].tags.length} Schlagworten`;
      });
    });

    return tree;
  }

  onClose = () => {
    const { id, onClose, router, location } = this.props;
    const { selected } = this.state;

    this.setState({ selected: [] });

    if (onClose) onClose();
    if (id) router.push({ pathname: location.pathname, query: { ...location.query, '@mediathek': null } });
  }

  onClick = (item, isActive) => {
    const { id, router, location, onChange, multi } = this.props;
    const selected = ([...this.state.selected]);

    if (id && !selected.length) {
      selected.push(id);
    }

    if (multi) {
      this.setState(
        { selected: !isActive ? [...selected, item.id] : selected.filter(x => x !== item.id) }
      );

      if (!onChange) router.replaceWith({ pathname: location.pathname, query: { ...location.query, '@mediathek': null } });
    } else if (onChange) {
      this.setState(
        { selected: !isActive ? [item.id] : [] }
      );
    } else {
      router.push({ pathname: location.pathname, query: { ...location.query, '@mediathek': item.id } });
    }
  }

  render() {
    const { data, onChange, onClose, multi } = this.props;
    const { selected, tags } = this.state;
    const { items, loading } = data;

    const id = (!!selected && selected[0]) || this.props.id;

    let currentNode = this.getNode(items || []);
    let images = items;
    tags.forEach((tag) => {
      images = currentNode[tag].images;
      currentNode = this.getNode(images, currentNode);
    });

    const directories = sortBy(
      Object.keys(currentNode).map(key => currentNode[key]),
      image => image.name /* image.length */
    );

    return (
      <Modal onClose={onClose}>
        <Sidebar
          items={directories}
          isLoading={loading}
          noChangeAllowed={!!onChange}
        />
        <div className="container olymp-container pr-0">
          <div className="col-md-8 py-1 px-0" style={{ minHeight: 400 }} >
            {loading ? <Spin /> : (
              <List
                selected={selected && selected.length ? selected : [id]}
                onClick={this.onClick}
                images={images}
                multi={multi}
              />
            )}
          </div>
          <div className="col-md-4 py-1">
            {
              selected.length > 1 ? (
                onChange ? (
                  <div>
                    <h3>{selected.length} Bilder ausgewählt</h3>
                    <ListMini
                      images={selected.map(x => items.find(item => item.id === x))}
                      deselect={id => this.setState({ selected: selected.filter(x => x !== id) })}
                    />

                    <div style={{ clear: 'both', float: 'right', marginTop: '1rem' }}>
                      <Button key="submit" type="primary" size="large" onClick={() => onChange(images.filter(x => selected.findIndex(y => x.id === y) !== -1))}>
                        Übernehmen
                      </Button>&nbsp;
                      <Button onClick={this.onClose}>Abbrechen</Button>
                    </div>

                    <div style={{ clear: 'both' }} />
                  </div>
                ) : (
                  <div>
                    <h3>{selected.length} Bilder ausgewählt</h3>
                    <DetailMulti
                      images={selected.map(x => items.find(item => item.id === x))}
                      deselect={id => this.setState({ selected: selected.filter(x => x !== id) })}
                      onClose={this.onClose}
                    />
                    <ListMini
                      images={selected.map(x => items.find(item => item.id === x))}
                      deselect={id => this.setState({ selected: selected.filter(x => x !== id) })}
                    />
                  </div>
                )
              ) : (
                id ? (
                  onChange ? (
                    <div>
                      <h3>Bild zurechtschneiden</h3>
                      <Crop
                        onChange={onChange}
                        onClose={this.onClose}
                        id={id}
                      />
                    </div>
                  ) : (
                    <div>
                      <h3>Bild bearbeiten</h3>
                      <Detail
                        id={id}
                        onClose={this.onClose}
                      />
                    </div>
                  )
                ) : (
                  <div>
                    <h3>Bild auswählen oder hochladen</h3>
                    <Upload modal={false} onClose={() => console.log('jo')} />

                    <div style={{ float: 'right', marginTop: '1rem' }}>
                      {!!onChange && <Button onClick={this.onClose}>Abbrechen</Button>}
                    </div>
                    <div style={{ clear: 'both' }} />
                  </div>
                )
              )
            }
          </div>
        </div>
      </Modal>
    );
  }
}
