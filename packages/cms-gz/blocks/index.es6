import { fade } from 'olymp-fela';
import * as Blocks from 'olymp-pages/blocks';
import * as PanelBlocks from './panel';
import * as OrgBlocks from './org';
import * as ArticleBlocks from './article';
import GZKMapsBlock from './maps';
import GZKMagazinBlock from './magazin';
import GZKNewsBlock from './news';
import GZKNumbersBlock from './phone';
import GZKNetworkBlock from './award';
import GZKVerzeichnisBlock from './list';
import GZKTerminBlock from './event';
import GZKNewsDetailBlock from './news-detail';
import GZKBlock from './gzk';

import { getHeaderStyles } from '../components/header';

export default {
  ...Blocks,
  ...PanelBlocks,
  ...OrgBlocks,
  ...ArticleBlocks,
  GZKMapsBlock,
  GZKMagazinBlock,
  GZKNewsBlock,
  GZKNumbersBlock,
  GZKNetworkBlock,
  GZKVerzeichnisBlock,
  GZKTerminBlock,
  GZKNewsDetailBlock,
  GZKBlock,
  GZKHeaderImageBlock: {
    ...Blocks.ImageBlock,
    type: 'GZK.Header.ImageBlock',
    label: 'Bild mit Text',
    category: 'Kopf',
    styles: ({ theme, color = theme.color }) => ({
      position: 'relative',
      overflow: 'hidden',
      '> div:nth-child(1) > div > div': {
        width: '100%',
      },
      '> div:nth-child(2)': {
        backgroundColor: fade(color, 90),
        color: theme.light,
        '> h1': {
          color: theme.light,
        },
        '> h2': {
          color: theme.light,
        },
        '> h3': {
          color: theme.light,
        },
        '> p': {
          color: theme.light,
        },
      },
      ifMediumUp: {
        '> div:nth-child(1) > div > div > img': {
          borderBottomRightRadius: 100,
        },
        '> div:nth-child(2)': {
          width: '66%',
          left: 'auto',
          right: 0,
          backgroundColor: fade(color, 90),
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 100,
          minHeight: 100,
          padding: '1rem 2rem',
        },
      },
      ifSmallDown: {
        paddingX: theme.space2,
        paddingY: theme.space1,
        '> div:nth-child(1) > div > div > img': {
          borderBottomRightRadius: 50,
        },
        '> div:nth-child(2)': {
          width: 'calc(100% - 1rem)',
          borderRadius: theme.borderRadius,
          margin: theme.space2,
          marginBottom: 0,
          padding: theme.space2,
          textAlign: 'center',
          '> h1': {
            fontSize: '1.3rem',
          },
          '> h2': {
            fontSize: '1.3rem',
          },
          '> h3': {
            fontSize: '1.3rem',
          },
        },
      },
    }),
  },
  HeaderBlock: {
    ...Blocks.HeaderBlock,
    type: 'pageHeader',
    styles: ({ theme }) => ({
      ...Blocks.HeaderBlock.styles({ theme }),
      ...getHeaderStyles({ theme }),
    }),
  },
};
