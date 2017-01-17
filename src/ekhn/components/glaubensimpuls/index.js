import React, { Component } from 'react';
import { graphql, gql, gqlLoader } from 'olymp';
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
@gqlLoader('glaubensimpuls')
export default class GlaubensimpulsBlock extends Component {
  render() {
    const { data, style } = this.props;
    const { tags } = data.glaubensimpuls;
    const bild = data.glaubensimpuls.small;
    const styles = {
      margin: '1.5em 0',
      ...style
    };

    return (
      <div style={styles}>
        <Image value={bild} width="100%" />
        <h5 style={{ marginBottom: '1rem' }}>{bild.caption}</h5>
        <Tags tags={tags} />
      </div>
    );
  }
}
