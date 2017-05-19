import React, { Component } from 'react';
import { Link, withRouter, graphql, gql } from 'olymp';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import { Image } from 'olymp/cms';
import { Spin } from 'antd';
import capitalize from 'lodash/upperFirst';

const fieldNames = 'id name slug farbe bild { url, height, width, crop } extrakt tags';
@withRouter
@graphql(gql`
  query artikelList {
    items: artikelList(sort: { date: DESC }, query: { state: { eq: PUBLISHED } }) {
      ${fieldNames}
    }
    pdfs: fileList(tags: ["GiZ"]) {
      url
      caption
    }
  }
`, {
  options: () => ({ }),
})
@useGenericBlock({
  category: 'Spezial',
  label: 'Magazin',
  editable: false,
  actions: props => [{
    icon: 'list',
    type: 'show-list',
    toggle: () => {
      props.router.push({
        pathname: window.location.pathname,
        query: { '@Termin': null },
      });
    },
  }],
})
export default class MagazinBlock extends Component {
  state = {};
  render() {
    const { children, style, data } = this.props;
    const { items, pdfs } = data;

    if (data.loading || !items) return <Spin size="large" />;
    // Tags ermitteln
    const tags = {};
    items.filter(x => x.tags).forEach(item =>
      item.tags.forEach((tag) => {
        if (!tags[tag]) tags[tag] = [];
        tags[tag].push(item.slug);
      })
    );

    return (
      <GenericBlock {...this.props} className="gz-big-element">
        {children}
        <div className="row" style={{ ...style, margin: 'auto -15px', position: 'relative' }}>
          <aside className="col-sm-4 col-sm-pull-8">
            <div className="list-unstyled">
              <div>
                <div className="widget">
                  <h2 className="section-title">Ausgaben als PDFs</h2>
                  <div className="list-group">
                    {pdfs.map((pdf, i) => (
                      <a className="list-group-item" rel="noopener noreferrer" href={pdf.url} target="_blank" key={i}>
                        Gesund im Zentrum - {pdf.caption}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="widget">
                  <h2 className="section-title">Schlagworte</h2>
                  <ul className="list-unstyled list-inline taxo-list">
                    {
                      Object.keys(tags).map(key => (
                        <li key={key} style={{ marginRight: 5, float: 'left' }}>
                          <a href="javascript:void(0)">{capitalize(key)} ({tags[key].length})</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <section className="col-sm-8 col-sm-push-4">
            <div className="row events-carousel events-no-carousel">
              {items.map(item =>
                <Link to={`/artikel${item.slug}`} className="gz-image-box col-md-4 col-sm-6 col-xs-12 mb-2" key={item.id}>
                  <Image value={item.bild} width="100%" cloudinary={{ width: (300 * 1.2) * 1, height: 250 }} />
                  <span className="gz-image-content" style={{ backgroundColor: item.farbe }}>{item.name}</span>
                </Link>
              )}
            </div>
          </section>
        </div>
      </GenericBlock>
    );
  }
}
