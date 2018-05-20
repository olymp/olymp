import React, { Component, PropTypes } from 'react';
import {
  useBlockBase,
  useGenericBlock,
  useBlockToolbar,
  GenericBlock,
  Block,
} from 'olymp/slate';
import { Image, MediaModal } from 'olymp/cms';
import Carousel from '../../components/carousel';

const defaultImage = 'whoa.jpg';
const actions = props => [
  {
    type: 'image.url',
    icon: 'th-list',
    toggle: () => {
      const { setData } = props;
      setData({ showMedia: true });
    },
    active: false,
  },
  {
    icon: 'heading',
    type: 'set-title',
    toggle: () => {
      const { setData, getData } = props;
      const title = window.prompt('Titel', getData('title'));
      setData({ title });
    },
  },
  {
    icon: 'expand',
    type: 'set-size',
    toggle: () => {
      const { setData, getData } = props;
      setData({ size: getData('size') === 2 ? 1 : 2 });
    },
  },
];

@useGenericBlock({
  label: 'Bilder',
  category: 'Karte',
  editable: false,
  props: ['title', 'size', 'image', 'showMedia'],
  actions,
})
export default class GzCardImages extends Component {
  static defaultProps = { title: 'Video', size: 1, image: defaultImage };
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    getData: PropTypes.func,
  };
  renderItem = ({ slug, peak, kurz, name, farbe, id }) => ({
    original,
    srcSet,
  }) => (
    <div className="image-gallery-image gz-image-box">
      <img src={original} srcSet={srcSet} />
      {/* <Link to={`/artikel${slug}`} className="gz-image-content" style={{ backgroundColor: farbe }}>{name}</Link>*/}
    </div>
  );
  render() {
    const {
      children,
      title,
      url,
      editor,
      setData,
      getData,
      showMedia,
      image,
      size,
      ...rest
    } = this.props;
    const items =
      image &&
      Array.isArray(image) &&
      image.map(item => ({
        url: item.url,
        crop: item.crop,
        render: this.renderItem(item),
      }));
    return (
      <GenericBlock
        {...rest}
        className={`gz-big-element col-md-${4 * size}`}
        toolbarStyle={{ marginLeft: -11, marginRight: -11 }}
      >
        <h2>{title}</h2>
        <Carousel items={items} slideInterval={7500} ratio={1.5 * size} />
        {children}
        {showMedia && (
          <MediaModal
            id={!!image && image.id}
            multi
            onChange={image => setData({ showMedia: undefined, image })}
            onClose={() => setData({ showMedia: undefined })}
          />
        )}
      </GenericBlock>
    );
  }
}
