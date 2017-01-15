import React, { Component } from 'react';
import { graphql, gql } from 'olymp';

@graphql(gql`
  query losung {
    losung: losung {
      datum
      tag
      text
      vers
    }
  }
`)
export default class LosungBlock extends Component {
  render() {
    const { data } = this.props;
    const losung = data && data.losung ? data.losung : {
      datum: '2015-07-21T00:00:00',
      tag: 'Dienstag',
      text: 'Der HERR wird einem jeden seine Gerechtigkeit und Treue vergelten.',
      vers: '1.Samuel 26,23',
    };

    return (
      <div className="losung block">
        <h3 style={{ margin: 0 }}>Die Losung</h3>
        <p>
          {`"${losung.text}"`}
        </p>

        <h4 style={{ marginTop: -10, marginBottom: 0 }}>
          {` - ${losung.vers}`}
        </h4>
      </div>
    );
  }
}
