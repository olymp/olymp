import React, { Component } from 'react';
import { Link, graphql, gql, withItem, withAuth, Helmet } from 'olymp';
import { Spin } from 'antd';
import { Image, SlateMate } from 'olymp-cms';
import { Gateway } from 'react-gateway';

const fieldNames =
  'id, name, farbe, extrakt, slug, text, bild { height, width, url, crop }';
@withAuth
@graphql(
  gql`
  query artikel($slug: String) {
    artikel(query: { slug: { eq: $slug } }) {
      ${fieldNames}
    }
  }
`,
  {
    options: ({ location }) => ({
      variables: { slug: location.pathname.split('/artikel')[1] },
    }),
  }
)
@withItem({ typeName: 'artikel', fieldNames })
export default class Artikel extends Component {
  render() {
    const { item, auth, location, save, patch } = this.props;
    const readOnly = !auth.user || auth.user.org;
    if (!item) { return <Spin size="large" />; }

    const meta = [
      {
        name: 'description',
        content:
          item.extrakt || 'Ein neuer Artikel in unserem Gesundheitsmagazin!',
      },
    ];
    if (item.image) { meta.push({ property: 'og:image', content: item.image.url }); }
    // style="border-bottom-right-radius:130px;200px;"
    return (
      <div>
        <Helmet title={item.name} meta={meta} />
        {!readOnly
          ? <Gateway into="button1">
            <a href="javascript:;" onClick={save}>
                Artikel speichern
              </a>
          </Gateway>
          : null}
        {!readOnly
          ? <Gateway into="button2">
            <Link to={{ ...location, query: { '@Artikel': item.id } }}>
                Artikel bearbeiten
              </Link>
          </Gateway>
          : null}
        <style>{getStyle(item.farbe || '#FFA210')}</style>
        {item.bild
          ? <Image
            height={400}
            lightbox
            onImageClick={({ showLightbox }) => showLightbox()}
            showMediathek={false}
            container="div"
            value={item.bild}
            className="gz-image-box"
          >
            <div
              className="gz-image-content"
              style={{ backgroundColor: item.farbe }}
            >
              <h1>{item.name}</h1>
              <p>{item.extrakt}</p>
            </div>
          </Image>
          : <div className="page-header panel">
            <div className="container">
              <h1 className="pull-left">{item.name}</h1>
              <ol className="breadcrumb pull-left">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="active">
                  {item.name}
                  {item.extrakt}
                </li>
              </ol>
            </div>
          </div>}
        <div className="container">
          <div className="row">
            <aside className="col-sm-4" />
            <div className="col-sm-8">
              <SlateMate
                className="frontend-editor mt-2 mb-3"
                value={item.text}
                onChange={text => patch({ text })}
                readOnly={readOnly}
              />
            </div>
          </div>
        </div>
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
