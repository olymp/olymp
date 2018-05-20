import React, { Component } from 'react';
import { gql, graphql, Link } from 'olymp';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import Carousel from '../../components/carousel';

@graphql(
  gql`
    query artikelList {
      items: artikelList(
        sort: { date: DESC }
        query: { state: { eq: PUBLISHED } }
      ) {
        id
        name
        slug
        farbe
        bild {
          url
          width
          height
          crop
        }
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
  label: 'Artikel',
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
  ],
})
export default class GzCardArtikel extends Component {
  static defaultProps = { title: 'Magazin', size: 1 };
  onImageClick = slug => () => this.props.router.push(`/artikel${slug}`);
  renderItem = ({ slug, peak, kurz, name, farbe, id }) => ({
    original,
    srcSet,
  }) => {
    return (
      <div className="image-gallery-image gz-image-box">
        <img src={original} srcSet={srcSet} />
        <Link
          to={`/artikel${slug}`}
          className="gz-image-content"
          style={{ backgroundColor: farbe }}
        >
          {name}
        </Link>
      </div>
    );
  };
  render() {
    const { children, title, data, router, size } = this.props;
    const items =
      data &&
      data.items &&
      data.items.filter(x => x.bild).map(item => ({
        url: item.bild.url,
        render: this.renderItem(item),
      }));
    return (
      <GenericBlock
        {...this.props}
        className="gz-big-element col-md-4"
        toolbarStyle={{ marginLeft: -11, marginRight: -11 }}
      >
        <h2>{title}</h2>
        <Carousel
          items={items}
          slideInterval={7500}
          ratio={1.5 * this.props.size}
        />
      </GenericBlock>
    );
  }
}
