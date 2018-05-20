import React, { Component } from 'react';
import { gql, graphql, toArray, CloudinaryImage, withItems, cn } from 'olymp';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import Carousel from '../../components/carousel';

/* @graphql(gql`
  query netzwerkList {
    items: netzwerkList(sort: { name: DESC }, query: { state: { eq: PUBLISHED } }) {
      id name website farbe bild { url, width, height, crop } tags
    }
  }
`, {
  options: () => ({ }),
})*/
@useGenericBlock({
  category: 'Karte',
  label: 'Netzwerke',
  editable: false,
  props: ['title', 'size', 'typeName'],
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
      icon: 'at',
      type: 'set-typename',
      toggle: () => {
        const { setData, getData } = props;
        const typeName = window.prompt('Typ', getData('typeName'));
        setData({ typeName });
      },
    },
  ],
})
@withItems()
export default class GZNetzwerke extends Component {
  static defaultProps = { size: 1 };
  renderItem = (
    { slug, website, peak, kurz, name, farbe, id, tags, bild },
    index
  ) => (
    <a
      href={website}
      rel="noopener noreferrer"
      className={cn(
        'col-md-2 text-center grayscale',
        !index && `offset-md-${6 - this.props.items.length}`
      )}
      key={id}
    >
      {/* <h5 className="mb-0 gz-simple-header"><b>{name}</b></h5>*/}
      <CloudinaryImage
        className="grayscale p-2"
        value={bild}
        options={{ width: 200, height: 200, mode: 'pad' }}
        width="100%"
        height="auto"
      />
      <b>{name}</b>
      <br />
      <small>{tags.join(', ')}</small>
    </a>
  );
  render() {
    const { children, title, items, router, size } = this.props;
    return (
      <div
        style={{ backgroundColor: 'rgba(245, 245, 245, 0.66)' }}
        className="pb-1 mt-2 mb-3"
      >
        <GenericBlock
          {...this.props}
          className="container text-center"
          toolbarStyle={{ marginLeft: -11, marginRight: -11 }}
        >
          {title && <small className="pt-1 mb-0">{title}</small>}
          <div className="row">
            {items && items.filter(x => x.bild).map(this.renderItem)}
          </div>
        </GenericBlock>
      </div>
    );
  }
}
