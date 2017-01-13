import React, { Component } from 'react';
import { gql, graphql, Link } from 'olymp';
import { useBlockBase, useGenericBlock, useBlockToolbar, GenericBlock, Block } from 'olymp/slate';
import { Image } from 'olymp/cms';
import Carousel from '../../components/slider';

@graphql(gql`
  query einrichtungList {
    items: einrichtungList(sort: { name: ASC }, query: { state: { eq: PUBLISHED } }) {
      id name slug farbe peak { url, width, height, crop } telefon
    }
  }
`, { /* eslint-disable */
  options: () => ({ }),
})
@useGenericBlock({
  category: 'Karte',
  label: 'Einrichtung',
  editable: false,
  props: ['title', 'size'],
  actions: props => [{
    icon: 'header',
    type: 'set-title',
    toggle: () => {
      const { setData, getData } = props;
      const title = window.prompt('Titel', getData('title'));
      setData({ title });
    },
  }, {
    icon: 'expand',
    type: 'set-size',
    toggle: () => {
      const { setData, getData, size } = props;
      setData({ size: size === 1 ? 2 : 1 });
    },
  }],
})
export default class GzCardArtikel extends Component {
  static defaultProps = { title: 'Einrichtungen', size: 1 };
  onImageClick = (slug) => () => this.props.router.push(slug);
  render() {
    const { children, title, data, router, size } = this.props;
    const cloudinary = { width: (300 * 1.2) * size, height: 250 };
    return (
      <GenericBlock {...this.props} className={`gz-big-element col-md-${4 * size}`} toolbarStyle={{ marginLeft: -11, marginRight: -11 }}>
        <h2>{title}</h2>
        <Carousel className="mt-1">
          {data.items && data.items.map(({ slug, peak, id, name, farbe, kurz }) =>
            <Image onImageClick={this.onImageClick(slug)} value={peak} key={id} container="div" className="gz-image-box gz-height-250" cloudinary={cloudinary}>
              <Link to={slug} className="gz-image-content" style={{backgroundColor: farbe}}>{kurz || name}</Link>
            </Image>
          )}
        </Carousel>
      </GenericBlock>
    );
  }
}
