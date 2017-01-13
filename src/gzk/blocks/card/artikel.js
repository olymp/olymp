import React, { Component } from 'react';
import { gql, graphql, Link } from 'olymp';
import { useBlockBase, useGenericBlock, useBlockToolbar, GenericBlock, Block } from 'olymp/slate';
import { Image } from 'olymp/cms';
import Carousel from '../../components/slider';

@graphql(gql`
  query artikelList {
    items: artikelList(sort: { date: DESC }, query: { state: { eq: PUBLISHED } }) {
      id name slug farbe bild { url, width, height, crop }
    }
  }
`, { /* eslint-disable */
  options: () => ({ }),
})
@useGenericBlock({
  category: 'Karte',
  label: 'Artikel',
  editable: false,
  props: ['title'],
  actions: props => [{
    icon: 'header',
    type: 'set-title',
    toggle: () => {
      const { setData, getData } = props;
      const title = window.prompt('Titel', getData('title'));
      setData({ title });
    },
  }],
})
export default class GzCardArtikel extends Component {
  static defaultProps = { title: 'Magazin', size: 1 };
  onImageClick = (slug) => () => this.props.router.push(`/artikel${slug}`);
  render() {
    const { children, title, data, router, size } = this.props;
    const cloudinary = { width: (300 * 1.2) * size, height: 250 };
    return (
      <GenericBlock {...this.props} className="gz-big-element col-md-4" toolbarStyle={{ marginLeft: -11, marginRight: -11 }}>
        <h2>{title}</h2>
        <Carousel className="mt-1">
          {data.items && data.items.map(({ slug, bild, id, name, farbe }) =>
            <Image onImageClick={this.onImageClick(slug)} value={bild} key={id} container="div" className="gz-image-box gz-height-250" cloudinary={cloudinary}>
              <Link to={`/artikel${slug}`} className="gz-image-content" style={{backgroundColor: farbe}}>{name}</Link>
            </Image>
          )}
        </Carousel>
      </GenericBlock>
    );
  }
}
