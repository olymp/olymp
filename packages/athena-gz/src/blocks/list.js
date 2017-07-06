import React, { Component } from 'react';
import { Link, withRouter, graphql, gql, sortBy } from 'olymp';
import { createComponent, Grid } from 'olymp-fela';
import { H2 } from '../components';

const Item = createComponent(
  ({ theme, farbe, hovered }) => ({
    clearfix: true,
    color: hovered ? farbe || theme.color : theme.dark2,
    onHover: {
      color: farbe || theme.color,
    },
    '> span': {
      float: 'left',
    },
    '> span:last-child': {
      float: 'right',
      marginRight: theme.space4,
    },
  }),
  ({
    className,
    slug,
    name,
    kurz,
    einrichtung,
    telefon,
    onMouseEnter,
    onMouseLeave,
  }) =>
    (<li>
      <Link
        className={className}
        to={slug || '/'}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span>
          {kurz || name}
        </span>
        <span>
          {einrichtung || telefon}
        </span>
      </Link>
    </li>),
  p => Object.keys(p)
);

@withRouter
@graphql(
  gql`
    query einrichtungList {
      items: einrichtungList(query: { state: { eq: PUBLISHED } }) {
        id
        slug
        image {
          url
        }
        telefon
        farbe
        name
        title
        fachrichtungen
        personen {
          id
          name
        }
      }
    }
  `,
  {
    options: () => ({}),
  }
)
class VerzeichnisBlock extends Component {
  state = { hover: undefined };

  onMouseLeave = () => {
    this.setState({ hover: null });
  };

  onMouseOver = item => () => {
    this.setState({ hover: item.einrichtungId || item.id });
  };

  renderSection = (title, items = []) =>
    (<Grid.Item medium={1}>
      <H2>
        {title}
      </H2>

      <ul>
        {items.map(item =>
          (<Item
            {...item}
            onMouseEnter={this.onMouseOver(item)}
            onMouseLeave={this.onMouseLeave}
            hovered={this.state.hover === (item.einrichtungId || item.id)}
          />)
        )}
      </ul>
    </Grid.Item>);

  render() {
    const { attributes, children, data } = this.props;
    const personen = [];
    const spezial = [];

    if (!data.items || !data.items.length) {
      return <div />;
    }

    data.items.forEach((item) => {
      if (item.personen) {
        item.personen.forEach(person =>
          personen.push({
            ...person,
            einrichtungId: item.id,
            farbe: item.farbe,
            einrichtung: item.kurz || item.name,
            slug: item.slug,
          })
        );
      }
      if (item.fachrichtungen) {
        item.fachrichtungen.forEach(leistung =>
          spezial.push({
            id: leistung,
            name: leistung,
            einrichtungId: item.id,
            farbe: item.farbe,
            einrichtung: item.kurz || item.name,
            slug: item.slug,
          })
        );
      }
    });

    return (
      <Grid size={3} {...attributes}>
        {this.renderSection(
          'Einrichtungen',
          sortBy(data.items, x => x.name || x.title)
        )}
        {this.renderSection('Spezialitäten', sortBy(spezial, 'name'))}
        {this.renderSection('Ärzte & Dienstleister', sortBy(personen, 'name'))}
        {children}
      </Grid>
    );
  }
}

export default {
  key: 'GZK.Collections.VerzeichnisBlock',
  label: 'Verzeichnis',
  category: 'Collections',
  editable: false,
  component: VerzeichnisBlock,
};
