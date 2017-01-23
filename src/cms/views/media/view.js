import React, { Component } from 'react';
import { Spin, Form, Select, Input, Button } from 'antd';
import { gql, graphql, Modal, withRouter } from 'olymp';
import sortBy from 'lodash/sortBy';
import capitalize from 'lodash/upperFirst';
import FormComponent from './form';
import Sidebar from './list-sidebar';
import List from './list';
import Upload from './upload';
import Crop from './crop';
import { Image } from '../../edits';

const attributes = 'id, url, tags, colors, width, height, createdAt, caption, source, format';
const ACTIVE_COLOR = '#EEE';
const GOBACK_COLOR = '#333';
const SELECTABLE = true;

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
        const mapper = mapOverTree(children[key].childrenAsObj);

        if (mapper.length) {
          children[key].children = mapper;
        }

        return children[key];
      });
    };

    return {
      children: mapOverTree(tree),
      images: images.filter(image => !image.tags || !image.tags.length),
    };
  }

  render() {
    const { data, location, router, onChange } = this.props;
    const { selected, tags } = this.state;
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
      ...(tree.children.map(this.getDirectory).filter(item => item.isActive)),
      ...directories,
      ...(currentNode && !!currentNode.children && sortBy(currentNode.children, item => capitalize(item.label)).map(this.getDirectory)),
    ];

    const Test = Form.create()(
      (props) => {
        const { item, form } = props;
        const { getFieldDecorator } = form;

        return (
          <div style={{ borderBottom: '1px solid #DDD', padding: '1rem 0', marginBottom: '1rem' }}>
            <Form.Item key="source" label="Quelle">
              {getFieldDecorator('source', {
                initialValue: 'item.source',
              })(
                <Input placeholder="Quelle" />
              )}
            </Form.Item>
            <Form.Item key="tags" label="Tags">
              {getFieldDecorator('tags', {
                initialValue: [],
              })(
                <Select {...props} tags searchPlaceholder="Suche ..." />
              )}
            </Form.Item>

            <Button>Speichern</Button>
            <Button>Alle löschen</Button>
          </div>
        );
      }
    );

    return (
      <Modal>
        <Sidebar items={directories} isLoading={loading} />
        <div className="container olymp-container pr-0">
          {loading ? <Spin className="col-md-8 py-1 px-0" style={{ minHeight: 400 }} /> : (
            <List
              selected={selected && selected.length ? selected : [id]}
              className="col-md-8 py-1 px-0"
              onClick={
                SELECTABLE ?
                  (item, isActive) => this.setState(
                    { selected: !isActive ? [...selected, item.id] : selected.filter(x => x !== item.id) }
                  ) :
                    item => router.push({ pathname: location.pathname, query: { ...location.query, '@mediathek': item.id } })
              }
              images={this.getDirectoryImages(currentNode)}
            />
          )}
          <div className="col-md-4 py-1">
            {selected ? (
              <div>
                <h3>{selected.length} Bilder ausgewählt</h3>
                <Test />
                {selected.map(x => (
                  <Image value={items.find(item => item.id === x)} width={60} ratio={1} style={{ marginRight: '.5rem', marginBottom: '.5rem', float: 'left' }} />
                ))}
              </div>
              ) : (
                <div>
                  {!id && <Upload modal={false} onClose={() => console.log('jo')} />}
                  {id && !onChange && <FormComponent id={id} />}
                  {id && onChange && <Crop onChange={onChange} id={id} />}
                </div>
            )}
          </div>
        </div>
      </Modal>
    );
  }
}
