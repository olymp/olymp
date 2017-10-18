import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { sortBy } from 'olymp-utils';
import { withRouter } from 'olymp-router';
import { PrefetchLink as Link } from 'olymp-cms';
import { withEdit, withCreate } from 'olymp-collection';
import { createComponent, Grid } from 'olymp-fela';
import { H2 } from '../components';

const Item = withEdit('org')(
  createComponent(
    ({ theme, color, hovered }) => ({
      position: 'relative',
      paddingX: theme.space1,
      fontSize: '94%',
      onBefore: {
        color: `${color || theme.color} !important`,
      },
      '> a': {
        clearfix: true,
        color: hovered ? color || theme.color : theme.dark2,
        onHover: {
          color: color || theme.color,
        },
        '> span': {
          float: 'left',
          whiteSpace: 'nowrap',
          overflowX: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '50%',
        },
        '> span:last-child': {
          opacity: 0.85,
          fontSize: '90%',
          float: 'right',
          marginRight: theme.space4,
          whiteSpace: 'nowrap',
          overflowX: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '38%',
        },
      },
    }),
    ({
      className,
      slug,
      name,
      kurz,
      org,
      telefon,
      onMouseEnter,
      onMouseLeave,
    }) => (
      <li className={className}>
        <Link
          to={slug || '/'}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <span>{kurz || name}</span>
          <span>{org || telefon}</span>
        </Link>
      </li>
    ),
    p => Object.keys(p)
  )
);

@withRouter
@graphql(
  gql`
    query orgList {
      items: orgList(query: { state: { eq: PUBLISHED } }) {
        id
        slug
        image {
          id
          url
        }
        telefon
        color
        name
        title
        fachrichtungen
        persons {
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
@withCreate('org')
class VerzeichnisBlock extends Component {
  state = { hover: undefined };

  onMouseLeave = () => {
    this.setState({ hover: null });
  };

  onMouseOver = item => () => {
    this.setState({ hover: item.orgId || item.id });
  };

  renderSection = (title, items = []) => (
    <Grid.Item medium={1}>
      <H2>{title}</H2>

      <ul>
        {items.map(item => (
          <Item
            {...item}
            onMouseEnter={this.onMouseOver(item)}
            onMouseLeave={this.onMouseLeave}
            hovered={this.state.hover === (item.orgId || item.id)}
            key={item.key || item.id}
          />
        ))}
      </ul>
    </Grid.Item>
  );

  render() {
    const { attributes, children, data } = this.props;
    const persons = [];
    const spezial = [];

    if (!data.items || !data.items.length) {
      return <div />;
    }

    data.items.forEach(item => {
      if (item.persons) {
        item.persons.forEach(person =>
          persons.push({
            ...person,
            id: item.id,
            key: `${item.id}-${person.id}`,
            orgId: item.id,
            color: item.color,
            org: item.kurz || item.name,
            slug: item.slug,
          })
        );
      }
      if (item.fachrichtungen) {
        item.fachrichtungen.forEach(leistung =>
          spezial.push({
            id: item.id,
            key: `${item.id}-${leistung}`,
            name: leistung,
            orgId: item.id,
            color: item.color,
            org: item.kurz || item.name,
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
        {this.renderSection('Ärzte & Dienstleister', sortBy(persons, 'name'))}
        {children}
      </Grid>
    );
  }
}

export default {
  type: 'GZK.Collections.VerzeichnisBlock',
  label: 'Verzeichnis',
  category: 'Daten',
  isVoid: true,
  kind: 'block',
  component: VerzeichnisBlock,
};
