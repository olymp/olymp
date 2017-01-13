import React, { Component, Children } from 'react';
import { cn, withRouter, Link, slugify } from 'olymp';

export class AccordionItem extends Component {
  render() {
    return null;
  }
}

@withRouter()
export default class Accordion extends Component {
  static Item = AccordionItem;

  render() {
    const { children, location, name } = this.props;
    const { pathname, query } = location;
    const active = location.query && location.query[name];

    const items = Children.toArray(children).map((item) => {
      const { title, children } = item.props;
      const slug = slugify(title, true);
      return (
        <div className="panel panel-default" key={slug}>
          <div className="panel-title">
            <Link to={{ pathname, query: { ...query, [name]: active != slug ? slug : undefined } }}>
              {title}
              <i className="fa pull-right fa-caret-down" style={{ paddingTop: 4 }} />
            </Link>
          </div>
          <div className="collapse panel-collapse in">
            <div className={cn('panel-body', { hidden: active != slug })}>
              {children}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {items}
      </div>
    );
  }
}
