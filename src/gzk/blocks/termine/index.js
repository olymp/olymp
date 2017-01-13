import React, { Component } from 'react';
import { Link, withRouter, graphql, gql, cn } from 'olymp';
import { useBlockBase, useGenericBlock, GenericBlock, Block } from 'olymp/slate';
import { Image } from 'olymp/cms';

import moment from 'moment';
import capitalize from 'lodash/upperFirst';
import take from 'lodash/take';

const List = ({ list, title, location }) => {
  const { pathname, query } = location;
  return (
    <div className="widget">
      <h2 className="section-title mb-0">{title}</h2>
      <div className="list-group">
        {list.map(item => (
          <Link className="list-group-item" key={item.id} to={`/news${item.slug}`}>
            <b>{moment(item.date).utcOffset('+01:00').format('DD. MMMM')} <small>{moment(item.date).utcOffset('+01:00').format('HH:mm').replace('00:00', '')}</small></b>
            <br />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
const News = ({ item, highlight }) => {
  return (
    <div className="gz-panel mb-2" style={{ borderBottomRightRadius: '110px', width: '100%' }}>
      <div className="card-block">
        <div>
          {item.bild ? <div style={{ float: 'left' }}>
            <Image container className="mr-1" value={item.bild} width={100} />
          </div> : null}
          <h2 className="card-title mb-0 gz-simple-header">{item.name}</h2>
          <small>
            <b>
              {capitalize(item.art.replace('PRESSE', 'PRESSEARTIKEL').toLowerCase())}
              {item.art.indexOf('P') === 0 ? ' vom ' : ' am '}
              {moment(item.date).format('DD. MMMM YYYY HH:mm').replace(' 00:00', '')}
            </b>
            {item.tags && item.tags.length ? (
              <b style={{ float: 'right' }}>
                {item.tags.join(', ')}
              </b>
            ) : null}
          </small>
        </div>
        {item.extrakt && <p className="mt-1">{item.extrakt}</p>}
        <Link className="btn btn-secondary mt-1" to={`/news${item.slug}`}>Mehr erfahren</Link>
      </div>
    </div>
  );
};

const attributes = 'id name art slug extrakt date bild { url, crop, width, height } ort tags';
@withRouter
@graphql(gql`
  query terminList {
    items: terminList(sort: { date: DESC }, query: { state: { eq: PUBLISHED } }) {
      ${attributes}
    }
  }
`, {
  options: () => ({ }),
})
@useGenericBlock({
  category: 'Spezial',
  label: 'Termine',
  editable: false,
  actions: props => [{
    icon: 'plus',
    type: 'add-termin',
    toggle: () => {
      props.router.push({
        pathname: window.location.pathname,
        query: { '@Termin': null },
      });
    },
  }],
})
export default class TermineBlock extends Component {
  render() {
    const { attributes, isFocused, children, style, data, location } = this.props;
    const { pathname, query } = location;
    // const src = getData('src');

    if (data.loading || !data.items) return <div>Lädt...</div>;

    const anstehend = data.items.filter(x => ['VORTRAG', 'VERANSTALTUNG'].includes(x.art) && moment().isBefore(x.date));
    const zuletzt = take(data.items.filter(x => ['VORTRAG', 'VERANSTALTUNG'].includes(x.art) && !moment().isBefore(x.date)), 5);
    const publikationen = take(data.items.filter(x => ['PUBLIKATION'].includes(x.art)), 4);
    const presse = take(data.items.filter(x => ['PRESSE'].includes(x.art)), 4);
    return (
      <GenericBlock {...this.props} className="gz-big-element" style={{ width: '100%' }}>
        {children}
        <div className="row" style={{ ...style, margin: 'auto -15px', position: 'relative' }}>
          <aside className="col-sm-4 col-sm-pull-8">
            <div className="list-unstyled">
              <div>
                {anstehend.length ? <List title="Vorträge & Veranstaltungen" list={anstehend} location={location} /> : null}
                {!anstehend.length && zuletzt.length ? <List title="Vorträge & Veranstaltungen" list={zuletzt} location={location} /> : null}
                {publikationen.length ? <List title="Publikationen" list={publikationen} location={location} /> : null}
                {presse.length ? <List title="Presse" list={presse} location={location} /> : null}
              </div>
            </div>
          </aside>
          <section className="col-sm-8 col-sm-push-4">
            {data.items.map(item => <News item={item} key={item.id} />)}
          </section>
        </div>
      </GenericBlock>
    );
  }
}
