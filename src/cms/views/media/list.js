import React, { Component } from 'react';
import { Link, cloudinaryUrl, gql, graphql, withApollo } from 'olymp';
import { Affix, Spin, Cascader, Menu, Icon } from 'antd';
import sortBy from 'lodash/sortBy';
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
};

const getNode = (tree, tags) => {
  if (tags.length) {
    const nextTree = (tree.children || []).filter(item => item.label === tags[0])[0];
    if (nextTree) return getNode(nextTree, tags.filter((tag, index) => index));
  } return tree;
};

const attributes = 'id, url, tags, colors, width, height, createdAt, caption, source, format';
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
    onTagsFilterChange: React.PropTypes.func,
    onSolutionFilterChange: React.PropTypes.func,
    onSourceFilterChange: React.PropTypes.func,
    onTypeFilterChange: React.PropTypes.func,
    onResetFilters: React.PropTypes.func,
    onSortByChange: React.PropTypes.func,
    onShowAll: React.PropTypes.func,
    tags: React.PropTypes.arrayOf(React.PropTypes.string),
    solution: React.PropTypes.arrayOf(React.PropTypes.string),
    source: React.PropTypes.arrayOf(React.PropTypes.string),
    type: React.PropTypes.arrayOf(React.PropTypes.string),
    sortByState: React.PropTypes.arrayOf(React.PropTypes.string),
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      items: React.PropTypes.arrayOf(React.PropTypes.object),
    }),
  };

  static defaultProps = {
    tags: [],
    solution: [],
    source: [],
  }

  onUploadClick = () => {
    // todo: const { dropzone } = this.refs;
    // dropzone.open();
  };

  render() {
    const { onImageChange, onTagsFilterChange, onSolutionFilterChange, onSourceFilterChange, onTypeFilterChange, onResetFilters, onSortByChange, onShowAll, showAll, tags, solution, source, type, sortByState, uploadLink } = this.props;
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

    // Quellen-Filter
    if (source && source.length) {
      filteredItems = filteredItems.filter(item => item.source === source[0] || (!item.source && source[0] === 'Keine Quelle'));
    }

    // Type-Filter
    if (type && type.length) {
      filteredItems = filteredItems.filter(item => item.format === type[0] || type[0] === 'Andere');
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

      case 'Hinzugefügt':
        sortByKey = item => item.createdAt;
        break;

      default:
        sortByKey = 'label';
    }
    sortByKey = [sortByKey];

    if (loading || !filteredItems) return <Spin />;

    // Bisher gefilterte Ergebnisse zwischenspiechern für "Alle-Ansicht"
    // (dort kann man nicht nach tags filtern, aber nach dem Rest)
    const preFilteredItems = filteredItems;

    // Bilder aus allen Unterordnern holen
    const getDirectory = ({ label, images, children }) => {
      const allImages = [...images];
      const getAllImages = children => children && children.length ? children.forEach((image) => {
        image.images.forEach(item => allImages.push(item));
        getAllImages(image.children);
      }) : undefined;
      getAllImages(children);

      // Bilder solange wiederholen, bis auf jeden Fall 9 Bilder im Ordner angezeigt werden
      const dirImages = [];
      const fillWithImages = images => {
        images.map(image => dirImages.push(image));
        if (dirImages.length < 9) {
          fillWithImages(images);
        }
      };
      fillWithImages(allImages.filter((item, index) => index < 9));

      return (
        <div key={label} className="card card-block directory" onClick={() => onTagsFilterChange([...tags.filter(tag => tag !== label), label])}>
          <div className="overlay">
            <h6>{label}<br /><small>({allImages.length})</small></h6>
          </div>
          <div className="boxed">
            {dirImages.map(({ url }, index) => (
              <img key={index} alt={url} src={cloudinaryUrl(url, { width: 100, height: 100 })} />
            ))}
          </div>
        </div>
      );
    };

    const tree = getTagTree(filteredItems);
    const currentNode = getNode(tree, tags);
    const directories = currentNode && currentNode.children ? sortBy(currentNode.children, 'label').map(getDirectory) : undefined;

    const images = currentNode && currentNode.images ? sortBy(showAll ? preFilteredItems : currentNode.images, sortByKey).map(
      item => ({
        ...item,
        src: item.url,
        thumbnail: cloudinaryUrl(item.url, { maxWidth: 500, maxHeight: 500 }),
        thumbnailWidth: 100,
        thumbnailHeight: 100 * (item.height / item.width),
      })
    ).map((item, index) => (
      <div key={index} className={`card card-block file ${false ? 'selected' : ''}`} onClick={() => onImageChange(item)}>
        <img alt={item.caption} className="boxed" src={item.thumbnail} />
        {
          item.format === 'pdf' ? (
            <span className="label">
              <Icon type="file-pdf" />
            </span>
          ) : undefined
        }
      </div>
    )) : undefined;

    // Auflösungen/Quellen zusammensuchen
    const solutions = {};
    const sources = {};
    const types = {};
    const getOtherFilters = (tree) => {
      (tree.images || []).forEach(item => {
        const solution = item.width * item.height < 500000 ? 'Niedrige Auflösung' : 'Hohe Auflösung';
        if (!solutions[solution]) {
          solutions[solution] = 0;
        }
        solutions[solution] += 1;

        const source = item.source || 'Keine Quelle';
        if (!sources[source]) {
          sources[source] = 0;
        }
        sources[source] += 1;

        const type = item.format || 'Andere';
        if (!types[type]) {
          types[type] = 0;
        }
        types[type] += 1;
      });

      (tree.children || []).forEach(item => getOtherFilters(item));
    };
    getOtherFilters(currentNode);

    return (
      <div className="olymp-media">
        <Affix>
          <Menu
            selectedKeys={['0']}
            mode="horizontal"
            theme="dark"
            className="olymp-submenu"
          >
            <Menu theme="dark">
              <Menu.Item key="tags">
                <Cascader
                  options={sortBy(tree.children, 'label')}
                  defaultValue={tags}
                  value={tags}
                  changeOnSelect
                  onChange={onTagsFilterChange}
                >
                  <span>{tags && tags.length ? tags.join(' > ') : 'Tags'}</span>
                </Cascader>
                {tags && tags.length ? <i className="anticon anticon-cross-circle" style={{ paddingLeft: '5px' }} onClick={() => onTagsFilterChange()} /> : undefined}
              </Menu.Item>

              <Menu.Item key="solution">
                <Cascader
                  options={[
                    ...Object.keys(solutions).map(key => ({
                      value: key,
                      label: `${key} (${solutions[key]})`,
                    })),
                  ]}
                  defaultValue={solution}
                  value={solution}
                  onChange={onSolutionFilterChange}
                >
                  <span>{solution && solution.length ? solution[0] : 'Auflösung'}</span>
                </Cascader>
                {solution && solution.length ? <i className="anticon anticon-cross-circle" style={{ paddingLeft: '5px' }} onClick={() => onSolutionFilterChange([])} /> : undefined}
              </Menu.Item>

              <Menu.Item key="source">
                <Cascader
                  options={[
                    ...Object.keys(sources).map(key => ({
                      value: key,
                      label: `${key} (${sources[key]})`,
                    })),
                  ]}
                  defaultValue={source}
                  value={source}
                  onChange={onSourceFilterChange}
                >
                  <span>{source && source.length ? source[0] : 'Quelle'}</span>
                </Cascader>
                {source && source.length ? <i className="anticon anticon-cross-circle" style={{ paddingLeft: '5px' }} onClick={() => onSourceFilterChange([])} /> : undefined}
              </Menu.Item>

              <Menu.Item key="type">
                <Cascader
                  options={[
                    ...Object.keys(types).map(key => ({
                      value: key,
                      label: `${key} (${types[key]})`,
                    })),
                  ]}
                  defaultValue={type}
                  value={type}
                  onChange={onTypeFilterChange}
                >
                  <span>{type && type.length ? type[0] : 'Typ'}</span>
                </Cascader>
                {type && type.length ? <i className="anticon anticon-cross-circle" style={{ paddingLeft: '5px' }} onClick={() => onTypeFilterChange([])} /> : undefined}
              </Menu.Item>

              <Menu.Item key="sortBy" style={{ float: 'right' }}>
                <Cascader
                  options={[
                    {
                      value: 'Name',
                      label: 'Name',
                    },
                    {
                      value: 'Hinzugefügt',
                      label: 'Hinzugefügt',
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
                  ]}
                  onChange={onSortByChange}
                >
                  <span>{sortByState && sortByState.length ? sortByState[0] : 'Name'}</span>
                </Cascader>
              </Menu.Item>
              <Menu.Item key="add" style={{ float: 'right' }}>
                {uploadLink && uploadLink(
                  <span><Icon type="plus" />Hinzufügen</span>
                )}
              </Menu.Item>
              {/* <Menu.Item style={{ float: 'right', color: 'red' }} key="delete">
                <Icon type="delete" />Löschen
              </Menu.Item>
              <Menu.Item style={{ float: 'right' }} key="select">
                <Icon type="select" />Auswählen
              </Menu.Item> */}
            </Menu>
          </Menu>
        </Affix>

        <div className="olymp-container">
          { showAll || tags.length ? (
            <div className="card card-block directory" onClick={/* onResetFilters */() => onTagsFilterChange([...tags].slice(0, -1))}>
              <div className="overlay">
                <h6><i className="fa fa-rotate-left" /></h6>
              </div>
              <div className="boxed">
                {tree.images.filter((item, index) => index < 9).map(({ id, url }) => (
                  <img key={id} alt={url} src={cloudinaryUrl(url, { width: 100, height: 100 })} />
                ))}
              </div>
            </div>
          ) : (
            <div className="card card-block directory" onClick={() => onShowAll()}>
              <div className="overlay">
                <h6>Alle<br /><small>({items.length})</small></h6>
              </div>
              <div className="boxed">
                {tree.images.filter((item, index) => index < 9).map(({ id, url }) => (
                  <img key={id} alt={url} src={cloudinaryUrl(url, { width: 100, height: 100 })} />
                ))}
              </div>
            </div>
          ) }

          {!showAll ? directories : null}
          {images}
          <div style={{ clear: 'both' }} />
        </div>
      </div>
    );
  }
}
