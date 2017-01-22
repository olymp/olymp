import React, { Component } from 'react';
import { Spin } from 'antd';
import { gql, graphql, Modal } from 'olymp';
import sortBy from 'lodash/sortBy';
import capitalize from 'lodash/upperFirst';
// import Detail from './detail';
import Sidebar from './list-sidebar';
import List from './list';

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
    console.log(tags);

    if (tags.length) {
      const nextTree = (tree.children || []).find(item => item.label === tags[0]);
      if (nextTree) return this.getNode(nextTree, tags.filter((tag, index) => index));
    }

    return tree;
  }

  // Bilder aus allen Unterordnern holen
  getDirectory = ({ label, images, children = [] }) => {
    const allImages = [...images];
    const getAllImages = children => children.forEach((image) => {
      image.images.forEach(item => allImages.push(item));
      getAllImages(image.children || []);
    });
    getAllImages(children);

    return {
      name: capitalize(label),
      description: `${allImages.length} Bilder in ${children.length + 1} Ordnern`,
      image: allImages[Math.floor(Math.random() * allImages.length)],
      onClick: () => this.setState({ tags: ['Beitrag'] }),
    };
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
        const test = mapOverTree(children[key].childrenAsObj);

        if (test.length) {
          children[key].children = test;
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
    const { data } = this.props;
    const { tags } = this.state;
    const { items, loading } = data;

    const tree = this.getTagTree(items || []);

    const currentNode = this.getNode(tree, tags);
    const directories = currentNode && currentNode.children ? sortBy(currentNode.children, item => capitalize(item.label)).map(this.getDirectory) : undefined;

    console.log(currentNode);

    return (
      <Modal>
        <Sidebar
          items={directories}
          isLoading={loading}
        />
        {loading ? <Spin /> : (
          <List
            images={tree.images}
          />
        )}
        {/* <Detail typeName={typeName} collection={collection} attributes={attributes} location={location} id={id} refetch={refetch} query={this.props.query} /> */}
      </Modal>
    );
  }
}
