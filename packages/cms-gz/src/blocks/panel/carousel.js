import React from 'react';
import { createComponent, Grid, fade } from 'olymp-fela';
import { Carousel, H1 } from '../../components';

export default createComponent(
  ({ theme }) => ({
    '> .image-gallery': {
      width: '100%',
      '> .image-gallery-content': {
        '> .image-gallery-slide-wrapper': {
          position: 'relative',
          onAfter: {
            content: '""',
            position: 'absolute',
            width: 33,
            height: 33,
            backgroundColor: theme.dark4,
            bottom: 0,
            borderTopLeftRadius: 30,
            right: 0,
          },
          onHover: {
            onAfter: {
              backgroundColor: fade(theme.color),
            },
          },
          '> .image-gallery-swipe': {
            '> .image-gallery-slides': {
              borderBottomRightRadius: 100,
            },
          },
        },
        '> .image-gallery-thumbnails-wrapper': {
          '> .image-gallery-thumbnails': {
            '> .image-gallery-thumbnails-container': {
              '> .image-gallery-thumbnail': {
                borderTopLeftRadius: '67%',
                overflow: 'hidden',
                width: 60,
                borderWidth: 0,
              },
              '> .active': {
                backgroundColor: theme.color,
                '> div': {
                  '> img': {
                    opacity: 0.67,
                  },
                },
              },
            },
          },
        },
      },
    },
  }),
  ({ className, title, size, bordered, ...p }) =>
    (<Grid.Item
      mini={12}
      medium={size}
      className={className}
      paddingMini="0.5rem 1rem"
      paddingMedium="1rem"
    >
      <H1 bordered={bordered}>{title}</H1>
      <Carousel
        slideInterval={7500}
        ratio={0.33 * size}
        radius="0:0:400"
        thumbRadius="100:0:0"
        {...p}
      />
    </Grid.Item>),
  p => Object.keys(p)
);
