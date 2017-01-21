import React, { Component } from 'react';
import { graphql, gql } from 'olymp';
import moment from 'moment';

const defaultLosung = {
  datum: '2016-01-01T00:00:00',
  tag: 'Freitag',
  sonntag: 'Neujahr',
  losung: {
    text: 'Danket dem Herrn aller Herren, der allein große Wunder tut, denn seine Güte währet ewiglich.',
    vers: 'Psalm 136,3.4',
  },
  lehr: {
    text: 'Dem, der überschwänglich tun kann über alles hinaus, was wir bitten oder verstehen, nach der Kraft, die in uns wirkt, dem sei Ehre in der Gemeinde und in Christus Jesus zu aller Zeit, von Ewigkeit zu Ewigkeit! Amen.',
    vers: 'Epheser 3,20-21',
  },
};

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
    const { data = {} } = this.props;
    const { losung = defaultLosung } = data;
    const { datum, tag, sonntag, losung: losungObj, lehr: lehrObj } = losung;

    return (
      <div className="losung block">
        <h3 style={{ margin: 0 }}>Die Losungen</h3>
        {/* <h6 style={{ margin: 0, marginTop: -10 }}>
          {sonntag || tag},<br />
          {moment(datum).format('DD. MMMM YYYY')}
        </h6> */}

        <div style={{ padding: '0 3px' }}>
          <p>
            {`"${losungObj.text}"`}
          </p>

          <h6 style={{ marginTop: -10, marginBottom: 0 }}>
            {` - ${losungObj.vers}`}
          </h6>
        </div>

        <div style={{ padding: '0 3px' }}>
          <p>
            {`"${lehrObj.text}"`}
          </p>

          <h6 style={{ marginTop: -10, marginBottom: 0 }}>
            {` - ${lehrObj.vers}`}
          </h6>
        </div>

        <h6 style={{ marginTop: 0 }}>
          <a href="https://www.herrnhuter.de" target="_blank" rel="noopener noreferrer">© Evangelische Brüder-Unität – Herrnhuter Brüdergemeinde</a><br />
        </h6>
        <h6 style={{ marginTop: -10 }}>
          <a href="https://www.losungen.de" target="_blank" rel="noopener noreferrer">Weitere Informationen finden Sie hier.</a>
        </h6>
      </div>
    );
  }
}
