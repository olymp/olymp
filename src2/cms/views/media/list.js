import React, { Component } from 'react';
import { Link, cloudinaryUrl, gql, graphql, withApollo } from 'olymp';
import { getImages, getColors } from './utils';
import { Spin, Cascader, Menu } from 'antd';
import { sortBy } from 'lodash';
import './style.less';

export const OptionalLink = ({ to, onClick, arg, ...rest }) => {
  if (to && typeof to === 'function' && to(arg)) return <Link {...rest} to={to(arg)} />;
  else if (to && typeof to !== 'function') return <Link {...rest} to={to} />;
  return <a href="javascript:;" onClick={() => onClick(arg)} {...rest} />;
};

const getTagTree = (images) => {
  let tree = {};
  const createTreeItem = (image, treeNode, iterateTags, prevTags = []) => {
    const tempTreeNode = { ...treeNode };

    iterateTags.forEach((currentTag) => {
      // Wenn nicht vorhanden, neuen Knoten im Tree anlegen
      if (!tempTreeNode[currentTag]) {
        tempTreeNode[currentTag] = {
          label: currentTag,
          value: currentTag,
          childrenAsObj: {},
          images: [],
        };
      }

      const nextTags = iterateTags.filter(tag => tag !== currentTag);
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
      children[key].children = mapOverTree(children[key].childrenAsObj);
      return children[key];
    });
  };

  return {
    children: mapOverTree(tree),
    images: images.filter(image => !image.tags.length),
  };
};

const getNode = (tree, tags) => {
  if (tags.length) {
    const nextTree = tree.children.filter(item => item.label === tags[0])[0];
    if (nextTree) return getNode(nextTree, tags.filter((tag, index) => index));
  } return tree;
};

const attributes = 'id, url, tags, colors, width, height';
@withApollo
@graphql(gql`
  query fileList {
    items: fileList {
      ${attributes}
    }
  }
`)
export default class MediaList extends Component {
  static propTypes = {
    onImageChange: React.PropTypes.func,
    onTagsChange: React.PropTypes.func,
    tags: React.PropTypes.arrayOf(React.PropTypes.string),
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      items: React.PropTypes.arrayOf(React.PropTypes.object),
    }),
  };

  static defaultProps = {
    tags: [],
  }

  onUploadClick = () => {
    // todo: const { dropzone } = this.refs;
    // dropzone.open();
  };

  render() {
    const { onImageChange, onTagsChange, tags } = this.props;
    const { loading, items } = this.props.data;

    if (loading || !items) return <Spin />;

    const getDirectory = ({ label, images, children }) => {
      const allImages = [...images];
      const getAllImages = children => children.forEach((image) => {
        image.images.forEach(item => allImages.push(item));
        getAllImages(image.children);
      });
      getAllImages(children);

      return (
        <div key={label} className="card card-block directory" onClick={() => onTagsChange([...tags, label])}>
          <div className="overlay">
            <h6>{label}</h6>
          </div>
          <div className="boxed">
            {allImages.filter((item, index) => index < 9).map(({ id, url }) => (
              <img key={id} alt={url} src={cloudinaryUrl(url, { width: 100, height: 100 })} />
            ))}
          </div>
        </div>
      );
    };

    const tree = getTagTree(items);
    const currentNode = getNode(tree, tags);
    const directories = currentNode && currentNode.children ? sortBy(currentNode.children, 'label').map(getDirectory) : undefined;

    const images = currentNode && currentNode.images ? currentNode.images.map(item => ({
      ...item,
      src: item.url,
      thumbnail: cloudinaryUrl(item.url, { maxWidth: 500, maxHeight: 500 }),
      thumbnailWidth: 100,
      thumbnailHeight: 100 * (item.height / item.width),
      caption: item.comment,
    })).map((item, index) => (
      <div key={index} className="card card-block file" onClick={() => onImageChange(item)}>
        <img alt={item.caption} className="boxed" src={item.thumbnail} />
      </div>
    )) : undefined;

    const displayRender = (labels, selectedOptions) => labels.map((label, i) => (
      <span key={selectedOptions[i].value}>{label}</span>
    ));

    return (
      <div className="olymp-media">
        <Menu
          selectedKeys={['0']}
          mode="horizontal"
          theme="dark"
          style={{ fontSize: '13px', lineHeight: '38px', position: 'fixed', top: '48px', left: 0, width: '100%', zIndex: 1 }}
        >
          <Menu theme="dark" style={{ width: '80%', maxWidth: '1600px', minWidth: '1200px', margin: '0 auto', lineHeight: '38px' }}>
            <Menu.Item key="0">
              <Cascader
                options={sortBy(tree.children, 'label')}
                defaultValue={tags}
                value={tags}
                changeOnSelect
                onChange={onTagsChange}
                displayRender={displayRender}
                placeholder={'Tags auswählen'}
                style={{ width: '400px' }}
              />
            </Menu.Item>
          </Menu>
        </Menu>

        { tags.length ? (
          <div className="card card-block directory">
            <div className="overlay">
              <a href="javascript:;" onClick={() => onTagsChange([])}>
                <h6><i className="fa fa-rotate-left" /></h6>
              </a>
            </div>
            <div className="boxed">
              {tree.images.filter((item, index) => index < 9).map(({ id, url }) => (
                <img key={id} alt={url} src={cloudinaryUrl(url, { width: 100, height: 100 })} />
              ))}
            </div>
          </div>
        ) : undefined }

        {directories}
        {images}
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}
