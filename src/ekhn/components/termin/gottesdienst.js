import React, { Component } from 'react';
import { graphql, gql, DataLoader } from 'olymp';
import { moment } from 'olymp/locale-de';
import Gottesdienst from './index';

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
    const { className, style, data } = this.props;
    const { gottesdienste } = data;

    const items = (gottesdienste || []).map((gottesdienst) => {
      return {
        ...gottesdienst,
        name: gottesdienst.name || 'Gottesdienst',
        start: gottesdienst.datum,
        // farbe: gottesdienst.hervorheben ? '#FCEFEE' : null,
        className: gottesdienst.hervorheben ? 'special' : null,
        additional: gottesdienst.abendmahl || gottesdienst.kindergottesdienst ? (
          <p style={{ margin: 0 }}>
            Mit
            {gottesdienst.abendmahl ? <span> Abendmahl</span> : null}
            {gottesdienst.abendmahl && gottesdienst.kindergottesdienst ? <span> und</span> : null}
            {gottesdienst.kindergottesdienst ? <span> KiGo</span> : null}
          </p>
        ) : null,
      };
    });

    return (
      <DataLoader className={className} style={style} isEmpty={data.gottesdienste} placeholder="Keine Gottesdienste vorhanden">
        <Gottesdienst items={items} />
      </DataLoader>
    );
  }
}
