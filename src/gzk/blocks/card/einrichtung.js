import React, { Component } from 'react';
import { gql, graphql, Link } from 'olymp';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import Carousel from '../../components/carousel';

@graphql(
  gql`
    query einrichtungList {
      items: einrichtungList(
        sort: { name: ASC }
        query: { state: { eq: PUBLISHED } }
      ) {
        id
        name
        slug
        farbe
        peak {
          url
          width
          height
          crop
        }
        telefon
      }
    }
  `,
  {
    /* eslint-disable */
    options: () => ({}),
  }
)
@useGenericBlock({
  category: 'Karte',
  label: 'Einrichtung',
  editable: false,
  props: ['title', 'size'],
  actions: props => [
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
        const { setData, getData, size } = props;
        setData({ size: size === 1 ? 2 : 1 });
      },
    },
  ],
})
export default class GzCardArtikel extends Component {
  static defaultProps = { title: 'Einrichtungen', size: 1 };
  onImageClick = slug => () => this.props.router.push(slug);
  renderItem = ({ slug, peak, kurz, name, farbe, id }) => ({
    original,
    srcSet,
  }) => {
    return (
      <div className="image-gallery-image gz-image-box">
        <img src={original} srcSet={srcSet} />
        <Link
          to={slug}
          className="gz-image-content"
          style={{ backgroundColor: farbe }}
        >
          {kurz || name}
        </Link>
      </div>
    );
  };
  render() {
    const { children, title, data, router, size } = this.props;

    const items =
      data &&
      data.items &&
      data.items.filter(x => x.peak).map(item => ({
        url: item.peak.url,
        render: this.renderItem(item),
      }));

    return (
      <GenericBlock
        {...this.props}
        className={`gz-big-element col-md-${4 * size}`}
        toolbarStyle={{ marginLeft: -11, marginRight: -11 }}
      >
        <h2>{title}</h2>
        <Carousel
          items={items}
          slideInterval={6000}
          ratio={1.5 * this.props.size}
        />
      </GenericBlock>
    );
  }
}
