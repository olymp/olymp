import React, { Component } from 'react';
import { Link, cloudinaryUrl, gql, graphql, withApollo } from 'olymp';
import { getColors } from './utils';
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
      const test = mapOverTree(children[key].childrenAsObj);

      if (test.length) {
        children[key].children = test;
      }

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

  state = {
    solution: [],
    sortByState: [],
  }

  onUploadClick = () => {
    // todo: const { dropzone } = this.refs;
    // dropzone.open();
  };

  render() {
    const { solution, sortByState } = this.state;
    const { onImageChange, onTagsChange, tags } = this.props;
    const { loading, items } = this.props.data;

    let filteredItems;

    // Auflösungs-Filter
    const solutionString = solution && solution.length ? solution[0] : undefined;
    switch (solutionString) {
      case 'Hohe Auflösung':
        filteredItems = items.filter(item => item.height * item.width > 500000);
        break;

      case 'Niedrige Auflösung':
        filteredItems = items.filter(item => item.height * item.width <= 500000);
        break;

      default:
        filteredItems = items;
    }

    // Sortierung
    let sortByKey = sortByState && sortByState.length ? sortByState[0] : undefined;
    switch (sortByKey) {
      case 'Name':
        sortByKey = 'label';
        break;

      case 'Auflösung':
        sortByKey = item => item.height * item.width;
        break;

      case 'Höhe':
        sortByKey = item => item.height;
        break;

      case 'Breite':
        sortByKey = item => item.width;
        break;

      case 'Anzahl Tags':
        sortByKey = item => item.tags.count;
        break;

      case 'Zuletzt hinzugefügt':
        sortByKey = item => item.tags.count; // todo!
        break;

      default:
        sortByKey = 'label';
    }
    sortByKey = [sortByKey];

    if (loading || !filteredItems) return <Spin />;

    const getDirectory = ({ label, images, children }) => {
      const allImages = [...images];
      const getAllImages = children => children && children.length ? children.forEach((image) => {
        image.images.forEach(item => allImages.push(item));
        getAllImages(image.children);
      }) : undefined;
      getAllImages(children);

      return (
        <div key={label} className="card card-block directory" onClick={() => onTagsChange([...tags, label])}>
          <div className="overlay">
            <h6>{label}<br /><small>({allImages.length})</small></h6>
          </div>
          <div className="boxed">
            {allImages.filter((item, index) => index < 9).map(({ id, url }) => (
              <img key={id} alt={url} src={cloudinaryUrl(url, { width: 100, height: 100 })} />
            ))}
          </div>
        </div>
      );
    };

    const tree = getTagTree(filteredItems);
    const currentNode = getNode(tree, tags);
    const directories = currentNode && currentNode.children ? sortBy(currentNode.children, sortByKey).map(getDirectory) : undefined;

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

    return (
      <div className="olymp-media">
        <Menu
          selectedKeys={['0']}
          mode="horizontal"
          theme="dark"
          style={{ fontSize: '13px', lineHeight: '38px', position: 'fixed', top: '48px', left: 0, width: '100%', zIndex: 1 }}
        >
          <Menu theme="dark" style={{ width: '80%', maxWidth: '1600px', minWidth: '1200px', margin: '0 auto', lineHeight: '38px' }}>
            <Menu.Item key="tags">
              <Cascader
                options={sortBy(tree.children, sortByKey)}
                defaultValue={tags}
                value={tags}
                changeOnSelect
                onChange={onTagsChange}
              >
                <span>{tags && tags.length ? tags.join(' > ') : 'Tags'}</span>
              </Cascader>
            </Menu.Item>

            <Menu.Item key="solution">
              <Cascader
                options={[
                  {
                    value: 'Hohe Auflösung',
                    label: 'Hohe Auflösung',
                  },
                  {
                    value: 'Niedrige Auflösung',
                    label: 'Niedrige Auflösung',
                  },
                ]}
                onChange={selection => this.setState({ solution: selection })}
              >
                <span>{solution && solution.length ? solution[0] : 'Auflösung'}</span>
              </Cascader>
            </Menu.Item>

            <Menu.Item key="source">
              <Cascader
                options={(tree.children)}
                defaultValue={tags}
                value={tags}
                changeOnSelect
                onChange={onTagsChange}
              >
                <span>{tags && tags.length ? tags.join(' > ') : 'Quelle'}</span>
              </Cascader>
            </Menu.Item>

            <Menu.Item key="color">
              <Cascader
                options={(tree.children)}
                defaultValue={tags}
                value={tags}
                changeOnSelect
                onChange={onTagsChange}
              >
                <span>{tags && tags.length ? tags.join(' > ') : 'Farbe'}</span>
              </Cascader>
            </Menu.Item>

            <Menu.Item key="sortBy" style={{ float: 'right' }}>
              <Cascader
                options={[
                  {
                    value: 'Name',
                    label: 'Name',
                  },
                  {
                    value: 'Zuletzt Hinzugefügt',
                    label: 'Zuletzt Hinzugefügt',
                  },
                  {
                    value: 'Auflösung',
                    label: 'Auflösung',
                  },
                  {
                    value: 'Höhe',
                    label: 'Höhe',
                  },
                  {
                    value: 'Breite',
                    label: 'Breite',
                  },
                  {
                    value: 'Anzahl Tags',
                    label: 'Anzahl Tags',
                  },
                ]}
                onChange={selection => this.setState({ sortByState: selection })}
              >
                <span>{sortByState && sortByState.length ? sortByState[0] : 'Sortierung'}</span>
              </Cascader>
            </Menu.Item>
          </Menu>
        </Menu>

        { tags.length ? (
          <div className="card card-block directory" onClick={() => onTagsChange([])}>
            <div className="overlay">
              <h6><i className="fa fa-rotate-left" /></h6>
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
