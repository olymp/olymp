import React, { Component } from 'react';
import { withRouter, withAuth, Link } from 'olymp';
import { SlateMate, Image } from 'olymp/cms';
import { Pagination } from 'antd';
import capitalize from 'lodash/upperFirst';
import MasonryLayout from 'react-masonry-component';
import Tags from './tags';
import './items.less';

class ItemSmall extends Component {
  render() {
    const { id, header, subheader, shortText, more, leading, bild, tags, location, identifier } = this.props;
    const { pathname, query } = location;

    return (
      <div className={`item ${leading ? 'leading' : ''}`}>
        <div className="row">
          <div className="info pr-0 col-xl-4 col-md-5 hidden-sm-down">
            {bild ? <Image className="header" width="100%" value={bild} cloudinary={{ maxWidth: 300 }} lightbox /> : null}
            {shortText ? <Tags tags={tags} /> : null}
          </div>

          <div className="text col-xl-8 col-md-7 col-xs-12">
            {bild && bild.url ? (
              <Image width="100%" ratio={0.5} value={bild} className="hidden-md-up mb-1" cloudinary={{ maxWidth: 700 }} lightbox>
                {bild.caption || bild.source ? (
                  <div>{bild.caption}<span style={{ float: 'right' }}>{bild.source}</span></div>
                ) : undefined}
              </Image>
            ) : undefined}

            {header ? <h2 className="mt-0">{header}</h2> : null}
            {subheader ? <div className="subheader">{subheader}</div> : null}
            {shortText ? <SlateMate key={id} value={shortText} readOnly className="slate" /> : <Tags tags={tags} />}

            {more ? (
              <p>
                <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: id } }}>
                  <i className="fa fa-angle-double-right" /> {more}
                </Link>
              </p>
            ) : undefined}
          </div>
        </div>
      </div>
    );
  }
}

class ItemLarge extends Component {
  render() {
    const { id, header, subheader, text, bild, tags, location, identifier, leading, more } = this.props;
    const { pathname, query } = location;

    let ratio = 0.5;
    if (bild) {
      const width = bild.crop && bild.crop.length ? bild.crop[0] : bild.width;
      const height = bild.crop && bild.crop.length ? bild.crop[1] : bild.height;
      ratio = height / width;
      ratio = ratio > 0.66 ? 0.66 : ratio;
    }

    return (
      <div>
        <div className="item full">
          { bild && bild.url ? (
            <Image width="100%" ratio={ratio || 0.5} value={bild} lightbox cloudinary={{ maxWidth: 1000 }}>
              {bild.caption || bild.source ? (
                <div>{bild.caption}<span style={{ float: 'right' }}>{bild.source}</span></div>
              ) : undefined}
            </Image>
          ) : undefined}

          <div className={`text ${leading ? 'leading' : ''}`}>
            <h2>{header}</h2>
            {subheader ? <div className="subheader">{subheader}</div> : null}

            {text ? <SlateMate key={id} value={text} className="mt-1" readOnly /> : null}

            {(!query || !query[capitalize(identifier)]) && more ? (
              <p style={{ marginBottom: '2rem' }}>
                <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: id } }}>
                  <i className="fa fa-angle-double-right" /> {more}
                </Link>
              </p>
            ) : undefined}

            <Tags tags={tags} />
          </div>
        </div>

        {query && query[capitalize(identifier)] ? (
          <Link to={{ pathname, query: { ...query, [capitalize(identifier)]: null } }}>
            <i className="fa fa-angle-double-left" /> Zurück zur Übersicht
          </Link>
        ) : undefined}
      </div>
    );
  }
}

@withAuth
@withRouter
export default class Items extends Component {
  render() {
    const { items, masonry, router, location, identifier = 'item', selectedId, auth, pageSize = 10, className, style } = this.props;
    const { pathname, query } = location;
    const page = query ? parseInt(query.page || 1, 10) : 1;
    const steps = query ? parseInt(query.steps || 10, 10) : pageSize;

    if (!items) {
      return (
        <div className="items">
          <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem' }}>
            <i className="fa fa-refresh fa-spin fa-fw" />
          </h1>
        </div>
      );
    }

    // Edit-Button
    if (auth && auth.user) {
      items.forEach((item) => {
        const edit = (
          <Link to={{ pathname, query: { ...query, [`@${capitalize(identifier)}`]: item.id } }}>
            <i className="fa fa-pencil" /> Bearbeiten
          </Link>
        );

        item.subheader = <span>{item.subheader}<br />{edit}</span>;
      });
    }

    const queryId = location && location.query ? location.query[capitalize(identifier)] : undefined;
    const selectedItem = selectedId || queryId ?
      items.find(x => x.id === (selectedId || queryId)) :
        undefined;
    if (selectedItem) {
      return selectedItem ? (
        <div className="items">
          <ItemLarge
            {...selectedItem}
            location={location}
            identifier={identifier}
          />
        </div>
      ) : <div />;
    }

    const masonryWrapper = (children, isMasonry) => isMasonry ? (
      <MasonryLayout
        className="items masonry"
        options={{ columnWidth: '.item', itemSelector: '.item', gutter: 16 }}
      >
        {children}
      </MasonryLayout>
    ) : (
      <div className="items">{children}</div>
    );
    const content = items && items.length ? masonryWrapper((
      items.slice((page - 1) * steps, page * steps).map((item, index) => item.leading && !index ?
        <ItemLarge
          {...item}
          location={location}
          identifier={identifier}
          key={index}
        /> :
        <ItemSmall
          {...item}
          location={location}
          identifier={identifier}
          key={index}
        />
      )
    ), masonry) : (
        <div className="items">
          <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem' }}>Keine Einträge vorhanden</h1>
        </div>
      );

    return (
      <div className={className} style={style}>
        {content}

        {steps < items.length ? (
          <Pagination
            current={page}
            total={items.length}
            pageSize={steps}
            onChange={current =>
              router.push({ pathname, query: { ...query, page: current } }
            )}
            showSizeChanger
            onShowSizeChange={(current, pageSize) =>
              router.push({ pathname, query: { ...query, page: current, steps: pageSize } }
            )}
            style={{ clear: 'both' }}
          />
        ) : null}
      </div>
    );
  }
}
