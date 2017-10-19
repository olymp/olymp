import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { createComponent, Grid, Container } from 'olymp-fela';
import { withPropsOnChange, compose } from 'recompose';
import { createUpdateQuery } from 'olymp-router';
import { connect } from 'react-redux';
import { sortBy } from 'lodash';
import tinycolor from 'tinycolor2';
import Map from './map';
import Item from './item';

const H2 = createComponent(
  () => ({
    textAlign: 'center',
  }),
  'h2',
  [],
);

const enhanceData = compose(
  graphql(
    gql`
      query orgList {
        items: orgList(
          query: { state: { eq: PUBLISHED }, lageplan: { null: false } }
        ) {
          id
          name
          color
          etage
          lageplan
        }
      }
    `,
    {
      options: () => ({}),
      props: ({ ownProps, data }) => ({
        ...ownProps,
        items: data.items || [],
      }),
    },
  ),
  withPropsOnChange(['items'], ({ query, updateQuery, ...rest }) => {
    const room = query['@room'];
    const level = room ? room.slice(0, 2) : `l${query['@level'] || '0'}`;
    let etage;
    switch (level) {
      case 'l0':
        etage = 'Erdgeschoss';
        break;

      case 'l1':
        etage = '1. Obergeschoss';
        break;

      case 'l2':
        etage = '2. Obergeschoss';
        break;

      case 'l3':
        etage = '3. Obergeschoss';
        break;

      default:
        etage = 'Erdgeschoss';
    }

    if (room) {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        updateQuery({ '@room': undefined });
      }, 20000);
    }

    let items = [...rest.items];
    // Seminarraum
    items.push({
      id: 1,
      name: 'Seminarraum',
      color: 'red',
      etage: 'Nebengebäude 3. Stock',
      lageplan: 'L3N2',
    });
    // Toiletten
    items.push({
      id: 2,
      name: 'Toiletten',
      color: 'red',
      etage: 'Erdgeschoss',
      lageplan: 'L05',
    });
    // Ästhetik + Hautmedizin privat
    const hautmedizin = items.find(({ id }) => id === 'DztkvIi');
    if (hautmedizin) {
      items.push({
        ...hautmedizin,
        id: 3,
        name: 'Hautmedizin Privat',
        etage: 'Nebengebäude 3. Stock',
        lageplan: 'L3N1',
      });
      items.push({
        ...hautmedizin,
        id: 4,
        name: 'Hautmedizin Ästhetik',
        etage: '1. Stock',
        lageplan: 'L15',
      });
    }
    // Diakonie EG
    const diakonie = items.find(({ id }) => id === 'Yl6KBx');
    if (diakonie) {
      items.push({
        ...diakonie,
        id: 5,
        etage: 'Erdgeschoss',
        lageplan: 'L02',
      });
    }
    items = sortBy(items, 'name');

    // Styles
    const levelStyles = {};
    const pathStyles = {};
    const entryStyles = {};
    items
      .filter(({ lageplan }) => lageplan.includes(level.toUpperCase()))
      .forEach(({ lageplan, color }) => {
        levelStyles[`> #${lageplan.toLowerCase()}`] = {
          '> #room': {
            fill: tinycolor(color)
              .lighten(room === lageplan.toLowerCase() ? 0 : 36)
              .toRgbString(),
            cursor: 'pointer',
            position: 'relative',
          },
          '> #text': {
            fill: room === lageplan.toLowerCase() ? '#FFF' : '#333',
          },
          onHover: {
            '> #room': {
              fill: color,
            },
            '> #text': {
              fill: '#FFF',
            },
          },
        };
        if (room === lageplan.toLowerCase()) {
          pathStyles[`> #${lageplan.toLowerCase()}`] = {
            opacity: 1,
          };
          entryStyles[`> #${lageplan.toLowerCase()}`] = {
            userSelect: 'none',
            animationName: {
              '0%': {
                opacity: 1,
                r: 25,
              },
              '50%': {
                opacity: 0.67,
                r: 75,
              },
              '100%': {
                opacity: 0,
                r: 100,
              },
            },
            animationDuration: '1.2s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          };
        }
      });

    return {
      level,
      room,
      etage,
      items,
      levelStyles,
      pathStyles,
      entryStyles,
    };
  }),
);

const enhanceQuery = connect(
  ({ location }) => ({
    pathname: location.pathname,
    query: location.query,
  }),
  dispatch => ({
    updateQuery: createUpdateQuery(dispatch),
  }),
);

@enhanceQuery
@enhanceData
export default class GZKBlock extends Component {
  displayName = 'GZKBlock';

  render() {
    const {
      attributes,
      className,
      items,
      level,
      room,
      etage,
      updateQuery,
      levelStyles,
      pathStyles,
      entryStyles,
    } = this.props;

    return (
      <Container>
        <Grid size={18} className={className} {...attributes}>
          <Grid.Item medium={7}>
            <ul key={2}>
              {items.map(item => (
                <Item
                  color={item.color}
                  isActive={room === item.lageplan.toLowerCase()}
                  onClick={() =>
                    updateQuery({ '@room': item.lageplan.toLowerCase() })}
                  key={item.id}
                >
                  {item.name} <span>[{item.etage}]</span>
                </Item>
              ))}
            </ul>
          </Grid.Item>
          <Grid.Item medium={11}>
            <H2>{etage}</H2>
            <Map
              setActiveItem={room => updateQuery({ '@room': room })}
              level={level}
              room={room}
              levelStyles={levelStyles}
              pathStyles={pathStyles}
              entryStyles={entryStyles}
            />
          </Grid.Item>
        </Grid>
      </Container>
    );
  }
}
