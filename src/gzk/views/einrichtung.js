import React, { Component } from 'react';
import { Link, graphql, gql, cloudinaryUrl, withItem, withAuth, Helmet } from 'olymp';
import { SlateMate, Image } from 'olymp/cms';
import { Gateway } from 'react-gateway';
import Accordion from '../components/accordion2';

const AccordionItem = Accordion.Item;

const attributes = `id, name, kurz, art, farbe, slug, slogan, willkommen, etage, freifeld, zeiten, eMail, fax, telefonPrivat, telefon,
  website, peak { url, width, height, crop }, logo { url, width, height, crop }, fachrichtungen, tags, aesthetik { id, name, link, text }, vorsorgen { id, name, link, text }, leistungen { id, name, link, text },
  personen { id, name, beschreibung, bild { url, width, height, crop }, telefon, fax, eMail, text }, text`;
@graphql(gql`
  query einrichtung($id: String!) {
    einrichtung(id: $id) {
      ${attributes}
    }
  }
`, {
  options: ({ id }) => ({ variables: { id } }),
})
@withItem({ name: 'einrichtung', attributes })
@withAuth
export default class Praxis extends Component {
  render() {
    const { item, location, patch, save, auth } = this.props;
    const tage = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    if (!item) return <span>Lädt...</span>;
    const readOnly = !auth || !auth.user || (auth.user.einrichtung && auth.user.einrichtung !== item.id);
    // console.log(item.personen);
    return (
      <div>
        <Helmet
          title={item.name}
          meta={item.peak ? [
            { property: 'og:image', content: item.peak },
            { name: 'keywords', content: item.tags },
          ] : []}
        />
        {!readOnly ? <Gateway into="button1">
          <a href="javascript:;" onClick={save}>
            Einrichtung speichern
          </a>
        </Gateway> : null}
        {!readOnly ? <Gateway into="button2">
          <Link to={{ ...location, query: { '@Einrichtung': item.id } }}>
            Praxis bearbeiten
          </Link>
        </Gateway> : null}
        <style>{getStyle(item.farbe || '#FFA210')}</style>
        {item.peak ?
          <Image style={{ height: 400 }} cloudinary={{ height: 400 }} lightbox onImageClick={({ showLightbox }) => showLightbox()} showMediathek={false} container="div" value={item.peak} className="gz-image-box mb-2">
            <div className="gz-image-content" style={{ backgroundColor: item.farbe }}>
              <h1>{item.slogan}</h1>
              <p>{item.willkommen}</p>
            </div>
          </Image> : <div className="page-header panel">
          <div className="container">
            <h1 className="pull-left">{item.name}</h1>
            <ol className="breadcrumb pull-left">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">
                {item.name || item.slogan}
                {item.willkommen}
              </li>
            </ol>
          </div>
        </div>}
        <div className="container">
          <div className="row">
            <aside className="col-sm-4">
              <ul className="list-unstyled">
                <li className="widget">
                  {item.logo ?
                    <h4><figure className="mb-1">
                      <img src={cloudinaryUrl(item.logo.url, item.logo, item.logo.crop)} className="img-responsive" alt />
                    </figure></h4> : <h4>
                      {item.name}
                    </h4>}
                  <ul className="list-unstyled iconized-list mb-1">
                    {item.etage ? <li><i className="fa fa-home" /> Etage: {item.etage}</li> : null}
                    {item.telefon ? <li><i className="fa fa-phone" /> Telefon: {item.telefon}</li> : null}
                    {item.telefonPrivat ? <li><i className="fa fa-phone" /> Privatpatienten: {item.telefonPrivat}</li> : null}
                    {item.fax ? <li><i className="fa fa-fax" /> Fax: {item.fax}</li> : null}
                    {item.eMail ? <li><i className="fa fa-envelope-o" /> E-Mail: {item.eMail}</li> : null}
                    {item.website ? <li><a href={item.website} target="_blank"><i className="fa fa-link" /><bold style={{color: item.farbe}}> Eigene Website besuchen</bold></a></li> : null}
                  </ul>
                </li>
                {((item.zeiten && item.zeiten.length) || item.freifeld) ? <li className="widget">
                  <h4>Öffnungszeiten</h4>
                  <ul className="list-unstyled bulleted-list iconized-list">
                    {(item.zeiten || []).map((zeit, index) => <li key={index} style={{display: zeit ? 'block' : 'none'}}>
                      <i className="fa fa-icon" />{tage[index]}.&nbsp;{zeit}
                    </li>)}
                  </ul>
                  {item.freifeld ? <i>{item.freifeld}</i> : null}
                </li> : null}
                {item.leistungen && item.leistungen.length ? <li className="widget">
                  <h4>Leistungsangebot</h4>
                  <Accordion name="leistungsangebot">
                    {item.leistungen.map(leistung =>
                      <AccordionItem key={leistung.id} title={leistung.name}>
                        <div>
                          <SlateMate value={leistung.text} readOnly />
                        </div>
                      </AccordionItem>
                    )}
                  </Accordion>
                </li> : null}
                {item.vorsorgen && item.vorsorgen.length ? <li className="widget">
                  <h4>Vorsorge</h4>
                  <Accordion name="vorsorge">
                    {item.vorsorgen.map(leistung =>
                      <AccordionItem key={leistung.id} title={leistung.name}>
                        <div>
                          <SlateMate value={leistung.text} readOnly />
                        </div>
                      </AccordionItem>
                    )}
                  </Accordion>
                </li> : null}
                {item.aesthetik && item.aesthetik.length ? <li className="widget">
                  <h4>Ästhetik</h4>
                  <Accordion name="ästhetik">
                    {item.aesthetik.map(leistung =>
                      <AccordionItem key={leistung.id} title={leistung.name}>
                        <div>
                          <SlateMate value={leistung.text} readOnly />
                        </div>
                      </AccordionItem>
                    )}
                  </Accordion>
                </li> : null}
                <li>
                  <br />
                </li>
                {(item.personen || []).filter(p => p.text || p.beschreibung).map(person => <li key={person.id} className="widget">
                  {person.bild ? <div className="col-md-4 pl-0">
                    <Image value={person.bild} style={{ width: 100, height: 100 }} cloudinary={{ width: 200, height: 200 }} />
                  </div> : null}
                  <h5>
                    <a href={person.link || 'javascript:;'} target="_blank">{person.name}</a>
                  </h5>
                  {person.beschreibung
                    ? <p>{person.beschreibung}</p>
                    : person.text
                    ? <SlateMate value={person.text} readOnly />
                    : null
                  }
                  <ul className="list-unstyled iconized-list">
                    {person.telefon ? <li><i className="fa fa-phone" /> Telefon: {person.telefon}</li> : null}
                    {person.fax ? <li><i className="fa fa-phone" /> Fax: {person.fax}</li> : null}
                    {person.eMail ? <li><i className="fa fa-envelope-o" /> E-Mail: {person.eMail}</li> : null}
                  </ul>
                </li>)}
              </ul>
            </aside>
            <div className="col-sm-8">
              <SlateMate className="frontend-editor" value={item.text} onChange={text => patch({ text })} readOnly={readOnly} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const getStyle = color => `
.frontend {
  border-top-color: ${color}!important;
}
.frontend p a {
  color: ${color}!important;
}
.frontend .bg-secondary, .iconized-list i:hover span, .nav-pills.tabbed-pills a:hover, .panel-title a:hover, .section-title:before, .taxo-list a:hover {
  background-color: ${color}!important;
}
.frontend .bg-primary, .iconized-list i, .page-header h1, .panel-title a, .social-links a:hover, .tabbed-pills a, .taxo-list a:hover, .widget-title, footer.primary a {
  color: ${color}!important;
}
.frontend header.navbar {
  border-top: 2px solid ${color}!important;
}
.frontend .widget-title {
  border-bottom-color: ${color}!important;
}
.frontend .text-title{
  color: ${color}!important;
}
.frontend .bg-secondary,
.frontend .section-title:before,
.frontend .icon-holder,
.frontend .suscribe-form .btn-primary:hover,
.frontend .carousel-controls-inset > div[class],
.frontend mark.highlight-sec,
.frontend .testimonials-list a:hover.list-group-item,
.frontend .panel-title a:hover,
.frontend .nav-pills.tabbed-pills a:hover,
.frontend .iconized-list a:hover span,
.frontend .taxo-list a:hover,
.frontend .post-meta,
.frontend .post-date-holder .date-meta,
.frontend .table-striped > tbody > tr > td.task:hover,
.frontend .table-striped > tbody > tr > th.task:hover,
.frontend .chart-labels.default:before {
  background-color: ${color} !important;
}
.navbar-toggle .icon-bar, .social-links a:hover, mark.highlight-pri, .bg-primary, .testimonials-list a.list-group-item, .panel-title a, .tabbed-pills a, .iconized-list a span, .table-striped > tbody > tr > td.task, .table-striped > tbody > tr > th.task, .doctor-item figure, .chart-labels.primary:before {
  color: ${color}!important;
}
.navbar-toggle .icon-bar, .social-links a:hover, mark.highlight-pri, .bg-primary, .testimonials-list a.list-group-item, .panel-title a, .tabbed-pills a, .iconized-list a span, .table-striped>tbody>tr>td.task, .table-striped>tbody>tr>th.task, .doctor-item figure, .chart-labels.primary:before {
  color: ${color}!important;
}
.frontend .logo-big{
  fill: ${color}!important;
}
.frontend .logo-sub{
  fill: ${color}!important;
}
.frontend a:hover {
  color: ${color}!important;
}
.frontend .panel-link a{
  color: ${color}!important;
}
.frontend .home-container .caption.text {
  background-color: ${color}!important;
}
body .frontend .bg-secondary, html .frontend .bg-secondary, body .frontend .iconized-list a:hover span, html .frontend .iconized-list a:hover span, body .frontend .nav-pills.tabbed-pills a:hover, html .frontend .nav-pills.tabbed-pills a:hover, body .frontend .panel-title a:hover, html .frontend .panel-title a:hover, body .frontend .section-title:before, html .frontend .section-title:before, body .frontend .taxo-list a:hover, html .frontend .taxo-list a:hover {
  background-color: ${color} !important;
}
body .frontend h1:before, html .frontend h1:before, body .frontend h2:before, html .frontend h2:before, body .frontend h3:before, html .frontend h3:before, body .frontend h4:before, html .frontend h4:before, body .frontend h5:before, html .frontend h5:before {
  background-color: ${color} !important;
}
`;
