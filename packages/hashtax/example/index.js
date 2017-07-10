import React, { Component } from 'react';
import hashtax, { DataProvider } from '../index';
import value from './input.md';

const Hashtax = hashtax(
  {
    bold: ({ value, color, ...props }) =>
      (<b style={{ color }}>
        {value}
      </b>),
    copyright: ({ value, ...props }) =>
      (<span>
        © {value}
      </span>),
    break: ({ text, ...props }) => <br />,
    text: ({ text, ...props }) =>
      (<span>
        {text}
      </span>),
    logo: ({ children, value, ...props }) =>
      <div style={{ ...props, color: value }}>LOGO</div>,
    bild: ({ children, value, alt, color, item, ...props }) =>
      (<a href={value} style={{ color }} alt={alt}>
        BILD
      </a>),
    menu: ({ children, ...props }) =>
      (<div>
        {children}
      </div>),
    'menu-item': ({ children, ...props }) =>
      (<div>
        {children}
      </div>),
    header: ({ children, ...props }) =>
      (<div style={{ border: '1px solid blue' }}>
        {children}
      </div>),
    footer: ({ children, ...props }) =>
      (<div style={{ border: '1px solid red' }}>
        {children}
      </div>),
  },
  {
    deco: WrappedComponent =>
      graphql(gql`
        query einrichtungList {
          items: einrichtungList {
            id
            farbe
            name
            slug
            kurz
            art
          }
        }
      `)(({ children, data, ...rest }) =>
        (<div>
          {(data.items || []).map(item =>
            (<DataProvider item={item} key={item.id}>
              <WrappedComponent {...rest}>
                {children}
              </WrappedComponent>
            </DataProvider>)
          )}
        </div>)
      ),
  }
);

export default class HashtaxExample extends Component {
  state = { value };
  onChange = ({ target }) => this.setState({ value: target.value });
  render() {
    const { value } = this.state;
    return (
      <div style={{ display: 'flex' }}>
        <textarea
          style={{ flex: 1, padding: 20 }}
          value={value}
          onChange={this.onChange}
        />
        <Hashtax
          throttle={500}
          style={{ flex: 1, padding: 20 }}
          value={value}
          name="Hallo"
          link="Tadas"
          obj={{ 1: 123, 2: 234 }}
        />
      </div>
    );
  }
}
