import React, { Component } from 'react';
import { Link, withRouter, graphql, gql } from 'olymp';
import { useGenericBlock, GenericBlock } from 'olymp-slate';

const fieldNames =
  'id slug image { url } telefon farbe name title personen { id name } leistungen { id name }';
@withRouter
@graphql(
  gql`
  query einrichtungList {
    items: einrichtungList {
      ${fieldNames}
    }
  }
`,
  {
    options: () => ({}),
  }
)
@useGenericBlock({
  label: 'Telefonnummern',
  editable: false,
})
export default class BlockEinrichtungen extends Component {
  state = {};
  onClick = (e) => {
    e.preventDefault();
    const { setData } = this.props;
    setData({ src: '...' });
  };
  onMouseLeave = () => {
    this.setState({ hover: null });
  };
  onMouseOver = item => () => {
    this.setState({ hover: item.einrichtungId || item.id });
  };
  renderImage = (item, size) =>
    (<div className="pl-1 pr-1 gz-height-250" key={item.id}>
      <Image
        onImageClick={() => this.props.router.push(item.slug)}
        value={item.image}
        container="div"
        height="100%"
        width="100%"
        className="gz-image-box"
        cloudinary={{ width: 300 * 1.2 * size, height: 250 }}
      >
        <Link
          to={item.slug}
          className="gz-image-content"
          style={{ backgroundColor: item.farbe }}
        >
          {item.name}
        </Link>
      </Image>
    </div>);
  renderItem = (item) => {
    const style = {};
    if (this.state.hover === (item.einrichtungId || item.id)) {
      style.color = item.farbe || '#8EBC45';
    }
    return (
      <li className="clearfix" key={item.id} style={{ fontSize: '80%' }}>
        <Link
          style={style}
          to={item.slug || '/'}
          onMouseEnter={this.onMouseOver(item)}
          onMouseLeave={this.onMouseLeave}
        >
          <span className="pull-left">{item.name}</span>
          <span className="pull-right">{item.einrichtung || item.telefon}</span>
        </Link>
      </li>
    );
  };
  render() {
    const { children, data } = this.props;

    return (
      <GenericBlock
        {...this.props}
        className="gz-element"
        style={{ width: '100%' }}
      >
        <ul className="gz-styled-list">
          {data.items && data.items.map(this.renderItem)}
        </ul>
        {children}
      </GenericBlock>
    );
  }
}
