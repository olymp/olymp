import React, { Component } from 'react';
import { Spin } from 'antd';
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

  getNode = (tree, tags) => {
    if (tags.length) {
      const nextTree = (tree.children || []).find(item => item.label === tags[0]);
      if (nextTree) return this.getNode(nextTree, tags.filter((tag, index) => index));
    }

    return tree;
  }

  // Bilder aus allen Unterordnern holen
  getDirectory = (node) => {
    const { label, children = [] } = node;
    const { tags } = this.state;
    const isActive = tags.findIndex(tag => tag === label) !== -1;
    const allImages = this.getDirectoryImages(node);

    return {
      name: capitalize(label),
      description: `${allImages.length} Bilder in ${children.length + 1} Ordnern`,
      image: allImages[0], // allImages[Math.floor(Math.random() * allImages.length)],
      onClick: () => this.setState(
        { tags: !isActive ? [...tags, label] : tags.filter(tag => tag !== label) }
      ),
      color: isActive && ACTIVE_COLOR,
      isActive,
    };
  }

  getDirectoryImages = (node) => {
    let arr = [...node.images];

    if (Array.isArray(node.children)) {
      node.children.map((childNode) => {
        const childNodeImages = this.getDirectoryImages(childNode);

        arr = arr.concat(
          childNodeImages.filter(image => arr.findIndex(x => x.id === image.id) === -1)
        );
      });
    }

    return arr;
  }

  getTagTree = (images) => {
    let tree = {};
    const createTreeItem = (image, treeNode, iterateTags, prevTags = []) => {
      const tempTreeNode = { ...treeNode };

      (iterateTags || []).forEach((currentTag) => {
        // Wenn nicht vorhanden, neuen Knoten im Tree anlegen
        if (!tempTreeNode[currentTag]) {
          tempTreeNode[currentTag] = {
            label: currentTag,
            value: currentTag,
            childrenAsObj: {},
            images: [],
          };
        }

        const nextTags = (iterateTags || []).filter(tag => tag !== currentTag);
        if (nextTags.length === 0) {
          tempTreeNode[currentTag].images.push(image);
        } else {
          tempTreeNode[currentTag].childrenAsObj = createTreeItem(
            image, tempTreeNode[currentTag].childrenAsObj, nextTags, [...prevTags, currentTag]
          );
        }
      });

      return tempTreeNode;
    };

    images.forEach((image) => {
      tree = createTreeItem(image, tree, image.tags);
    });

    const mapOverTree = (children) => {
      return Object.keys(children).map((key) => {
        const newChildren = { ...children[key] };
        const mapper = mapOverTree(newChildren.childrenAsObj);

        if (mapper.length) {
          newChildren.children = mapper;
        }

        return newChildren;
      });
    };

    return {
      children: mapOverTree(tree),
      images: images.filter(image => !image.tags || !image.tags.length),
    };
  }

  render() {
    const { data, location, router, onChange } = this.props;
    const { selected, tags, selectable } = this.state;
    const { items, loading } = data;
    const id = (!!selected.length && selected[0]) || this.props.id;

    const tree = this.getTagTree(items || []);
    const currentNode = this.getNode(tree, tags);

    let directories = tags.length ? [
      {
        name: 'Zurück',
        description: `zu '${tags.slice(0, -1).join('/') || 'Übersicht'}'`,
        image: null,
        color: GOBACK_COLOR,
        onClick: () => this.setState({ tags: tags.slice(0, -1) }),
      },
    ] : [];
    directories = [
      // ...(tree.children.map(this.getDirectory).filter(item => item.isActive)),
      ...directories,
      ...(currentNode && !!currentNode.children && sortBy(currentNode.children, item => capitalize(item.label)).map(this.getDirectory)),
    ];

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
              images={this.getDirectoryImages(currentNode)}
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
                  </div>
                )
            )}
          </div>
        </div>
      </Modal>
    );
  }
}
