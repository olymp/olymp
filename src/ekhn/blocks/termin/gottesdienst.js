import React, { Component } from 'react';
import { graphql, gql } from 'olymp';
import { moment } from 'olymp/locale-de';
import Mini from './mini';

@graphql(gql`
  query gottesdienste {
  gottesdienste: gottesdienstList(sort: {datum: ASC}, limit: 5, query: {
    and: [
      { state: { eq: PUBLISHED } },
      { datum: {gte: ${moment().format('x')}} }
    ]
  }) {
    id
    name
    datum
    kommentar
    hervorheben
    abendmahl
    kindergottesdienst
    bild {
      url
      width
      height
      crop
      caption
      source
    }
    keinTermin
    tags
  }
}
`, {
  options: () => ({ }),
})
export default class GottesdienstBlock extends Component {
  render() {
    const { data } = this.props;
    const { gottesdienste } = data;

    (gottesdienste || []).forEach((gottesdienst) => {
      gottesdienst.name = gottesdienst.name || 'Gottesdienst';
      gottesdienst.start = gottesdienst.datum;
      if (gottesdienst.hervorheben) gottesdienst.farbe = '#FCEFEE';
      gottesdienst.additional = gottesdienst.abendmahl || gottesdienst.kindergottesdienst ? (
        <p style={{ margin: 0 }}>
          Mit
          {gottesdienst.abendmahl ? <span> Abendmahl</span> : null}
          {gottesdienst.abendmahl && gottesdienst.kindergottesdienst ? <span> und</span> : null}
          {gottesdienst.kindergottesdienst ? <span> KiGo</span> : null}
        </p>
      ) : null;
    });

    return <Mini items={gottesdienste} />;
  }
}
