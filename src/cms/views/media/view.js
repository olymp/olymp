import React, { Component } from 'react';
import { Spin, Button } from 'antd';
import { gql, graphql, Modal, withRouter } from 'olymp';
import sortBy from 'lodash/sortBy';
import capitalize from 'lodash/upperFirst';
import Detail from './detail';
import DetailMulti from './detail-multi';
import Sidebar from './list-sidebar';
import List from './list';
import Upload from './upload';
import Crop from './crop';

const attributes = 'id, url, tags, colors, width, height, createdAt, caption, source, format';
const ACTIVE_COLOR = '#EEE';
const GOBACK_COLOR = '#333';

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
    selectable: false,
  };

  getNode = (images) => {
    const { tags } = this.state;
    const tree = {};

    images.forEach((image) => {
      image.tags.forEach((tag) => {
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

  render() {
    const { id, data, location, router, onChange } = this.props;
    const { selected, tags, selectable } = this.state;
    const { items, loading } = data;

    let currentNode = this.getNode(items || []);
    let images = items;
    tags.forEach((tag) => {
      images = currentNode[tag].images;
      currentNode = this.getNode(images, currentNode);
    });

    const directories = sortBy(
      Object.keys(currentNode).map(key => currentNode[key]),
      'name' /* images.length */
    ); /* tags.length ? [
      {
        name: 'Zurück',
        description: `zu '${tags.slice(0, -1).join('/') || 'Übersicht'}'`,
        image: null,
        color: GOBACK_COLOR,
        onClick: () => this.setState({ tags: tags.slice(0, -1) }),
      },
      ...Object.keys(currentNode).map(key => currentNode[key]),
    ] : Object.keys(currentNode).map(key => currentNode[key]); */

    return (
      <Modal>
        <Sidebar items={directories} isLoading={loading} />
        <div className="container olymp-container pr-0">
          {loading ? <Spin className="col-md-8 py-1 px-0" style={{ minHeight: 400 }} /> : (
            <List
              selected={selected && selected.length ? selected : [id]}
              className="col-md-8 py-1 px-0"
              onClick={
                selectable ?
                  (item, isActive) => this.setState(
                    { selected: !isActive ? [...selected, item.id] : selected.filter(x => x !== item.id) }
                  ) :
                    item => router.push({ pathname: location.pathname, query: { ...location.query, '@mediathek': item.id } })
              }
              images={images}
            />
          )}
          <div className="col-md-4 py-1">
            {selectable || selected.length ? (
              <div>
                <h3>{selected.length} Bilder ausgewählt</h3>
                <DetailMulti
                  images={selected.map(x => items.find(item => item.id === x))}
                  deselect={id => this.setState({ selected: selected.filter(x => x !== id) })}
                  onClose={() => this.setState({ selected: [], selectable: false })}
                />
              </div>
              ) : (
                id ? (
                  onChange ? (
                    <div>
                      <h3>Bild zurechtschneiden</h3>
                      <Crop onChange={onChange} id={id} />
                    </div>
                  ) : (
                    <div>
                      <h3>Bild bearbeiten</h3>
                      <Detail
                        id={id}
                        onClose={() => router.push({ pathname: location.pathname, query: { ...location.query, '@mediathek': null } })}
                      />
                    </div>
                  )
                ) : (
                  <div>
                    <h3>Bild auswählen oder hochladen</h3>
                    <Upload modal={false} onClose={() => console.log('jo')} />

                    <div style={{ float: 'right', marginTop: '1rem' }}>
                      <Button onClick={() => this.setState({ selectable: true })} type="primary">Mehrere auswählen</Button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </Modal>
    );
  }
}
