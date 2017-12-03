import { registry } from 'olymp-slate';

import { ImageBlock, ImageBlockImage, ImageBlockLabel } from './image';
import {
  AccordionBlock,
  AccordionLabelBlock,
  AccordionTextBlock,
} from './accordion';
import { ColumnsBlock, ColumnsColumnBlock } from './columns';
import TocBlock from './toc';
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
import ChildrenBlock from './children';

registry.add(
  TocBlock,
  ImageBlock,
  ImageBlockImage,
  ImageBlockLabel,
  AccordionBlock,
  AccordionLabelBlock,
  AccordionTextBlock,
  ColumnsBlock,
  ColumnsColumnBlock,
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
  ChildrenBlock,
);
