import React, { Component } from 'react';
import { graphql, gql, Image } from 'olymp';
import { DataLoader } from 'olymp/cms-core';
import Tags from '../../components/tags';

@graphql(gql`
  query glaubensimpuls {
    glaubensimpuls: glaubensimpuls {
      thumb {
        url
        width
        height
        caption
        source
      }
      small {
        url
        width
        height
        caption
        source
      }
      large {
        url
        width
        height
        caption
        source
      }
      tags
    }
  }
`)
export default class GlaubensimpulsBlock extends Component {
  render() {
    const { data, style, className, isBlock } = this.props;
    const { tags } = data.glaubensimpuls || {};
    const bild = (data.glaubensimpuls || {}).small;
    const { caption } = (bild || {});

    return (
      <DataLoader className={className} style={style} isEmpty={data.glaubensimpuls} placeholder="Kein Glaubensimpuls vorhanden" loading="Glaubensimpuls wird geladen">
        <Image value={bild} lightbox width="100%" />
        {!isBlock && (
          <div className="glaubensimpuls_content">
            <h5 style={{ marginBottom: '1rem' }}>{caption}</h5>
            <Tags tags={tags} />
          </div>
        )}
      </DataLoader>
    );
  }
}
