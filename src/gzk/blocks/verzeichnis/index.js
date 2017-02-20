import React, { Component } from 'react';
import { Link, withRouter, graphql, gql, sortBy } from 'olymp';
import { useBlockBase, useBlockToolbar } from 'olymp/slate';
import { Image } from 'olymp/cms';
import { Spin } from 'antd';
import Carousel from '../../components/carousel';
import './theme.less';

const fieldNames = 'id slug peak { url } telefon farbe name kurz fachrichtungen personen { name }';
@withRouter
@graphql(gql`
  query einrichtungList {
    items: einrichtungList(query: { state: { eq: PUBLISHED } }) {
      ${fieldNames}
    }
  }
`, {
  options: () => ({ }),
})
@useBlockBase({
  category: 'Spezial',
  label: 'Verzeichnis',
})
@useBlockToolbar({
  remove: true,
  move: true,
  actions: props => [{
    icon: 'plus',
    type: 'add-einrichtung',
    toggle: () => {
      props.router.push({
        pathname: window.location.pathname,
        query: { einrichtung: null },
      });
    },
  }],
})
export default class VerzeichnisBlock extends Component {
  state = {};
  onClick = (e) => {
    e.preventDefault();
    const { setData } = this.props;
    setData({ src: '...' });
  }
  onMouseLeave = () => {
    this.setState({ hover: null });
  }
  onMouseOver = item => () => {
    this.setState({ hover: item.einrichtungId || item.id });
  }
  renderImage = ({ slug, kurz, name, farbe, id }) => ({ original, srcSet }) => (
    <div className="image-gallery-image gz-image-box">
      <img src={original} srcSet={srcSet} />
      <Link to={slug} className="gz-image-content" style={{ backgroundColor: farbe }}>{kurz || name}</Link>
    </div>
    )
  renderItem = (item, i) => {
    const style = {};
    if (this.state.hover === (item.einrichtungId || item.id)) {
      style.color = item.farbe || '#8EBC45';
    }
    return (
      <li className="clearfix" key={i} style={{ fontSize: '80%' }}>
        <Link style={style} to={item.slug || '/'} onMouseEnter={this.onMouseOver(item)} onMouseLeave={this.onMouseLeave}>
          <span className="pull-left">{item.kurz || item.name}</span>
          <span className="pull-right">{item.einrichtung || item.telefon}</span>
        </Link>
      </li>
    );
  };
  renderSection = (index, title, items = []) => {
    const image = this.state[`image${index}`] ? this.state[`image${index}`] : null;
    return (
      <div className="col-sm-4">
        {image && image.peak ? <Link to={image.slug} title={image.name}>
          <Image url={image.peak.url} />
        </Link> : null}
        <h2 className="section-title mt-1">{title}</h2>
        <ul className="gz-styled-list">
          {items.map(this.renderItem)}
        </ul>
      </div>
    );
  }
  render() {
    const { attributes, getData, isFocused, children, style, data } = this.props;
    if (data.loading) return <Spin size="large" />;
    let personen = [],
      spezial = [];
    data.items.forEach((item) => {
      if (item.personen) item.personen.forEach(person => personen.push({ ...person, einrichtungId: item.id, farbe: item.farbe, einrichtung: item.kurz || item.name, slug: item.slug }));
      if (item.fachrichtungen) item.fachrichtungen.forEach(leistung => spezial.push({ id: leistung, name: leistung, einrichtungId: item.id, farbe: item.farbe, einrichtung: item.kurz || item.name, slug: item.slug }));
    });

    const items = data && data.items && data.items.filter(x => x.peak).map(item => ({
      url: item.peak.url,
      render: this.renderImage(item),
    }));

    return (
      <div className="gz-big-element" {...attributes} style={{ width: '100%' }} data-block-active={isFocused}>
        <Carousel items={items} slideInterval={6000} ratio={1.5 * 3} />
        <div className="row" style={{ ...style, margin: 'auto -15px', height: 'auto', position: 'relative' }}>
          {this.renderSection(0, 'Einrichtungen', sortBy(data.items, x => x.kurz || x.name))}
          {this.renderSection(1, 'Spezialitäten', sortBy(spezial, 'name'))}
          {this.renderSection(2, 'Ärzte & Dienstleister', sortBy(personen, 'name'))}
          {children}
        </div>
      </div>
    );
  }
}
