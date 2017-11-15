import { registry } from 'olymp-slate';

import { ImageBlock, ImageBlockImage, ImageBlockLabel } from './image';
import * as AccordionBlocks from './accordion';
import * as ColumnBlocks from './columns';
import ContainerBlock from './container';
import ContainerTextBlock from './container-text';
import TextBindingBlock from './binding';
import LineBlock from './line';
import MapsBlock from './maps';
import GalleryBlock from './gallery';
import CardLinkBlock from './card-link';
import LinkBlock from './link';
import HeaderBlock from './header';
import Header2Block from './header2';
import CarouselBlock from './carousel';
import BannerBlock from './banner';
import YoutubeBlock from './youtube';

registry.add(
  ImageBlock,
  ImageBlockImage,
  ImageBlockLabel,
  ...AccordionBlocks,
  ...ColumnBlocks,
  ContainerBlock,
  ContainerTextBlock,
  TextBindingBlock,
  LineBlock,
  MapsBlock,
  GalleryBlock,
  CardLinkBlock,
  LinkBlock,
  HeaderBlock,
  Header2Block,
  CarouselBlock,
  BannerBlock,
  YoutubeBlock,
);
