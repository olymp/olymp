import { fade } from 'olymp-fela';
import { Blocks } from 'olymp-pages';

import * as PanelBlocks from './panel';
import * as OrgBlocks from './org';
import * as ArticleBlocks from './article';
import GZKMapsBlock from './maps';
// export { default as GZKContainerBlock } from './container';
// export { default as GZKContainerTextBlock } from './container-text';
import GZKMagazinBlock from './magazin';
import GZKNewsBlock from './news';
import GZKNumbersBlock from './phone';
import GZKNetworkBlock from './award';
import GZKVerzeichnisBlock from './list';
import GZKTerminBlock from './event';
import GZKNewsDetailBlock from './news-detail';
import GZKBlock from './gzk';

import { getHeaderStyles } from '../components/header';
// import { default as CarouselBlock } from './carousel';

export default {
  ...Blocks,
  ...PanelBlocks,
  ...OrgBlocks,
  ...ArticleBlocks,
  GZKMapsBlock,
  // GZKHeaderBlock,
  GZKMagazinBlock,
  GZKNewsBlock,
  GZKNumbersBlock,
  GZKNetworkBlock,
  GZKVerzeichnisBlock,
  GZKTerminBlock,
  GZKNewsDetailBlock,
  GZKBlock,
  ImageBlock: {
    ...Blocks.ImageBlock,
    styles: ({ theme, color = theme.color }) => ({
      position: 'relative',
      overflow: 'hidden',
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
      '> div:nth-child(1)': {
        '& .LazyLoad': {
          width: '100%',
          margin: 0,
        },
        /* onAfter: {
          content: '""',
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 100,
          height: 100,
          zIndex: 5,
          backgroundImage: 'url(/img/edge.png)',
          backgroundSize: 'cover',
          ifSmallDown: {
            width: 50,
            height: 50,
          },
        }, */
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
    styles: ({ theme, color }) => ({
      ...Blocks.HeaderBlock.styles({ theme }),
      ...getHeaderStyles({ theme }),
    }),
  },
  /* ColumnsColumnBlock: {
    ...Blocks.ColumnsColumnBlock,
    styles: ({ theme, node }) => ({
      '> div': {
        ...Blocks.ColumnsColumnBlock.styles({ theme })['> div'],
        backgroundColor: node.data.get('bordered', true) && '#FFFFFF',
        boxShadow:
          node.data.get('bordered', true) && '0 1px 5px rgba(45, 45, 45, 0.09)',
      },
    }),
  },
  ContainerBlock: {
    ...Blocks.ContainerBlock,
    styles: ({ theme }) => ({
      backgroundColor: '#FFFFFF',
    }),
  },
  AccordionBlock: {
    ...Blocks.AccordionBlock,
  },
  HeaderBlock: {
    ...Blocks.HeaderBlock,
    type: 'QKG.Template.Header',
    styles: ({ theme }) => ({
      ...Blocks.HeaderBlock.styles({ theme }),
      ...getHeaderStyle({ theme }),
    }),
  },
  BannerBlock: {
    ...Blocks.BannerBlock,
    styles: ({ theme }) => ({
      ...Blocks.BannerBlock.styles({ theme }),
      ...getHeaderStyle({ theme }),
    }),
  }, */
};
