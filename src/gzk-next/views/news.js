import React, { Component } from 'react';
import { Link, graphql, gql, withItem, withAuth, Helmet } from 'olymp';
import { Spin } from 'antd';
import { Image, SlateMate } from 'olymp/cms';
import { Gateway } from 'react-gateway';
import moment from 'moment';

const fieldNames = 'id, art, date, name, extrakt, slug, text, bild { height, width, url, crop }';
@withAuth
@graphql(gql`
  query termin($slug: String) {
    termin(query: { slug: { eq: $slug } }) {
      ${fieldNames}
    }
  }
`, {
  options: ({ location }) => ({ variables: { slug: location.pathname.split('/news')[1] } }),
})
@withItem({ typeName: 'termin', fieldNames })
export default class News extends Component {
  render() {
    const { item, auth, location, save, patch } = this.props;
    const readOnly = !auth.user || auth.user.einrichtung;
    if (!item) return <Spin size="large" />;
    // style="border-bottom-right-radius:130px;200px;"
    return (
      <div>
        <Helmet
          title={item.name}
          meta={item.peak ? [
            { property: 'og:image', content: item.peak },
          ] : []}
        />
        {!readOnly ? <Gateway into="button1">
          <a href="javascript:;" onClick={save}>
            News speichern
          </a>
        </Gateway> : null}
        {!readOnly ? <Gateway into="button2">
          <Link to={{ ...location, query: { '@Termin': item.id } }}>
            News bearbeiten
          </Link>
        </Gateway> : null}
        <style>{getStyle(item.farbe || '#FFA210')}</style>
        <div className="frontend-editor mt-2 mb-1">
          <div className="gz-element">
            <div style={{ position: 'relative' }}>
              <Link to="/news" style={{ position: 'absolute', left: '-140px', textAlign: 'right' }}>
                <i className="fa fa-arrow-left" /><br /> Zurück zu News
              </Link>
              {item.bild ? <div style={{ float: 'left' }}>
                <Image container className="mr-1" value={item.bild} width={100} height={130} cloudinary={{ width: 200, height: 260 }} />
              </div> : null}
              {item.art && <h1 className="gz-simple-header">{item.art[0]}{item.art.toLowerCase().substr(1)}</h1>}
              <h5 className="card-title mb-0 gz-simple-header">{item.name}</h5>
              <small>
                <b>{moment(item.date).utcOffset('+01:00').format('DD. MMMM YYYY HH:mm').replace(' 00:00', '')}</b>
                {item.tags && item.tags.length ? (
                  <b style={{ float: 'right' }}>
                    {item.tags.join(', ')}
                  </b>
                ) : null}
              </small>
              {item.extrakt && <p className="mt-1"><b>{item.extrakt}</b></p>}
            </div>
          </div>
        </div>
        <SlateMate className="frontend-editor mb-3" value={item.text} onChange={text => patch({ text })} readOnly={readOnly} />
      </div>
    );
  }
}

const getStyle = color => `
#frontend {
  border-top-color: ${color}!important;
}
#frontend p a {
  color: ${color}!important;
}
#frontend .bg-secondary, .iconized-list i:hover span, .nav-pills.tabbed-pills a:hover, .panel-title a:hover, .section-title:before, .taxo-list a:hover {
  background-color: ${color}!important;
}
#frontend .bg-primary, .iconized-list i, .page-header h1, .panel-title a, .social-links a:hover, .tabbed-pills a, .taxo-list a:hover, .widget-title, footer.primary a {
  color: ${color}!important;
}
#frontend header.navbar {
  border-top: 2px solid ${color}!important;
}
#frontend .widget-title {
  border-bottom-color: ${color}!important;
}
#frontend .text-title{
  color: ${color}!important;
}
#frontend .bg-secondary,
#frontend .section-title:before,
#frontend .icon-holder,
#frontend .suscribe-form .btn-primary:hover,
#frontend .carousel-controls-inset > div[class],
#frontend mark.highlight-sec,
#frontend .testimonials-list a:hover.list-group-item,
#frontend .panel-title a:hover,
#frontend .nav-pills.tabbed-pills a:hover,
#frontend .iconized-list a:hover span,
#frontend .taxo-list a:hover,
#frontend .post-meta,
#frontend .post-date-holder .date-meta,
#frontend .table-striped > tbody > tr > td.task:hover,
#frontend .table-striped > tbody > tr > th.task:hover,
#frontend .chart-labels.default:before {
  background-color: ${color} !important;
}
.navbar-toggle .icon-bar, .social-links a:hover, mark.highlight-pri, .bg-primary, .testimonials-list a.list-group-item, .panel-title a, .tabbed-pills a, .iconized-list a span, .table-striped > tbody > tr > td.task, .table-striped > tbody > tr > th.task, .doctor-item figure, .chart-labels.primary:before {
  color: ${color}!important;
}
.navbar-toggle .icon-bar, .social-links a:hover, mark.highlight-pri, .bg-primary, .testimonials-list a.list-group-item, .panel-title a, .tabbed-pills a, .iconized-list a span, .table-striped>tbody>tr>td.task, .table-striped>tbody>tr>th.task, .doctor-item figure, .chart-labels.primary:before {
  color: ${color}!important;
}
#frontend .logo-big{
  fill: ${color}!important;
}
#frontend .logo-sub{
  fill: ${color}!important;
}
#frontend a:hover {
  color: ${color}!important;
}
#frontend .panel-link a{
  color: ${color}!important;
}
#frontend .home-container .caption.text {
  background-color: ${color}!important;
}
body #frontend .bg-secondary, html #frontend .bg-secondary, body #frontend .iconized-list a:hover span, html #frontend .iconized-list a:hover span, body #frontend .nav-pills.tabbed-pills a:hover, html #frontend .nav-pills.tabbed-pills a:hover, body #frontend .panel-title a:hover, html #frontend .panel-title a:hover, body #frontend .section-title:before, html #frontend .section-title:before, body #frontend .taxo-list a:hover, html #frontend .taxo-list a:hover {
  background-color: ${color} !important;
}
body #frontend h1:before, html #frontend h1:before, body #frontend h2:before, html #frontend h2:before, body #frontend h3:before, html #frontend h3:before, body #frontend h4:before, html #frontend h4:before, body #frontend h5:before, html #frontend h5:before {
  background-color: ${color} !important;
}
`;
