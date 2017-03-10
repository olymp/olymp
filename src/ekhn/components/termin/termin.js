import React, { Component } from 'react';
import { graphql, gql, DataLoader } from 'olymp';
import { moment } from 'olymp/locale-de';
import Termin from './index';

const now = +moment();

@graphql(gql`
  query termine {
    termine: terminList(sort: {start: ASC}, limit: 5, query: {
      and: [
        { state: { eq: PUBLISHED } },
        { or: [
          {start: {gte: ${now}}},
          {ende: {gte: ${now}}}
        ]}
      ]
    }) {
      id
      name
      start
      ende
      kommentar
      ganztaegig
      farbe
    }
  }
`)
export default class TerminBlock extends Component {
  render() {
    const { className, style, data } = this.props;
    const { termine } = data;

    return (
      <DataLoader className={className} style={style} isEmpty={data.termine} placeholder="Keine Termine vorhanden" loading="Termine werden geladen">
        <Termin items={termine} />
      </DataLoader>
    );
  }
}
