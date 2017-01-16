import React, { Component } from 'react';
import { graphql, gql } from 'olymp';
import { moment } from 'olymp/locale-de';
import Termin from './index';

const now = moment().format('x');

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
`, {
  options: () => ({ }),
})
export default class TerminBlock extends Component {
  render() {
    const { data } = this.props;
    const { termine } = data;

    return <Termin items={termine} />;
  }
}
