import React, { Component } from 'react';
import { graphql, gql } from 'olymp';
import { Image } from 'olymp/cms';
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
`, {
  options: () => ({ }),
})
export default class GlaubensimpulsBlock extends Component {
  render() {
    const { data, style } = this.props;

    if (!data || !data.glaubensimpuls) {
      return (
        <div style={{ margin: '1.5em 0', width: '100%' }}>
          <h1 style={{ textAlign: 'center', display: 'block', padding: '2rem' }}>
            <i className="fa fa-refresh fa-spin fa-fw" />
          </h1>
        </div>
      );
    }

    const { tags } = data.glaubensimpuls;
    const bild = data.glaubensimpuls.small;
    const styles = {
      margin: '1.5em 0',
      ...style
    };

    return (
      <div style={styles}>
        <Image value={bild} width="100%" />
        {/* <h5>{bild.caption}</h5>
        <Tags tags={tags} /> */}
      </div>
    );
  }
}
