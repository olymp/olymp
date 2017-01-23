import React, { Component } from 'react';
import { Spin } from 'antd';
import { gql, graphql, Modal } from 'olymp';
import sortBy from 'lodash/sortBy';
import capitalize from 'lodash/upperFirst';
import Form from './form';
import Sidebar from './list-sidebar';
import List from './list';
import Upload from './upload';
import Crop from './crop';

const attributes = 'id, url, tags, colors, width, height, createdAt, caption, source, format';

@graphql(gql`
  query fileList {
    items: fileList {
      ${attributes}
    }
  }
`)
export default class MediaView extends Component {
  state = {
    tags: [],
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
    const { label, images, children = [] } = node;
    const { tags } = this.state;
    const index = tags.findIndex(tag => tag === label);
    const allImages = this.getDirectoryImages(node);

    return {
      name: capitalize(label),
      description: `${allImages.length} Bilder in ${children.length + 1} Ordnern`,
      image: allImages[Math.floor(Math.random() * allImages.length)],
      onClick: () => this.setState(
        { tags: (index === -1) ? [...tags, label] : tags.splice(index, 1) }
      ),
      isActive: index !== -1,
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
    const { data, location, onChange } = this.props;
    const { tags } = this.state;
    const { items, loading } = data;
    const id = this.state.selected || this.props.id;

    const tree = this.getTagTree(items || []);
    const currentNode = this.getNode(tree, tags);

    let directories = tags.length ? [
      {
        name: 'Zurück',
        description: `zu '${tags.slice(0, -1).join('/') || 'Übersicht'}'`,
        image: null,
        color: '#DDD',
        onClick: () => this.setState({ tags: tags.slice(0, -1) }),
      },
    ] : [];
    directories = [
      ...directories,
      ...(currentNode && !!currentNode.children && sortBy(currentNode.children, item => capitalize(item.label)).map(this.getDirectory)),
    ];
    return (
      <Modal>
        <Sidebar items={directories} isLoading={loading} />
        <div>
          {loading ? <Spin /> : (
            <List
              className="col-md-8"
              onClick={onChange && (selected => this.setState({ selected: selected.id }))}
              location={location}
              images={this.getDirectoryImages(currentNode)}
            />
          )}
          <div className="col-md-4">
            {!id && <Upload modal={false} onClose={() => console.log('jo')} />}
            {id && !onChange && <Form id={id} />}
            {id && onChange && <Crop onChange={onChange} id={id} />}
          </div>
        </div>
      </Modal>
    );
  }
}
