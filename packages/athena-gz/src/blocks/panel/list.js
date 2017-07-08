import React, { Component } from 'react';
import { Link } from 'olymp';
import { createComponent } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import map, {
  createSkeletorComponent,
  id,
  color,
  string,
  text,
  date,
  image,
} from 'olymp-skeletor';
import moment from 'moment';
import { Panel, Item } from '../../components';

const H3 = createSkeletorComponent(
  ({ theme }, { filled, isLoading }) => ({
    ...filled(),
  }),
  'h3',
  p => Object.keys(p)
);

const H5 = createSkeletorComponent(
  ({ theme }, { filled, isLoading }) => ({
    ...filled(),
  }),
  'h5',
  p => Object.keys(p)
);

const StyledLink = createSkeletorComponent(
  ({ theme }, { filled, isLoading }) => ({
    ...filled(),
  }),
  p => <Link {...p} />,
  p => Object.keys(p)
);

const Img = createComponent(
  ({ theme }) => ({
    float: 'right',
    marginLeft: theme.space3,
    marginBottom: theme.space2,
  }),
  p => <Image {...p} />,
  p => Object.keys(p)
);

const Text = createSkeletorComponent(
  ({ theme }, { filled, isLoading }) => ({
    ...filled(),
    display: '-webkit-box',
    marginY: theme.space2,
    lineHeight: 1.4,
    fontSize: 16,
    WebkitLineClamp: 3,
    height: 1.4 * 16 * 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: !isLoading && 'ellipsis',
  }),
  'div',
  p => Object.keys(p)
);

class ListItem extends Component {
  render() {
    const {
      id,
      bild,
      org,
      author,
      art,
      name,
      slug,
      extrakt,
      date,
      color,
      path,
    } = this.props;
    return (
      <Item color={color} top={0} bottom="1.5rem" key={id}>
        <H3>
          <StyledLink to={{ pathname: `/${path}${slug || '/'}` }}>
            {name}
          </StyledLink>
        </H3>
        <H5>
          {art || 'ARTIKEL'}, {moment(date).format('DD. MMMM YYYY, HH:mm')} Uhr,{' '}
          {(author || {}).name || 'Redaktion'}/<StyledLink
            to={(org || {}).slug || '/'}
          >
            {(org || {}).name || 'GZK'}
          </StyledLink>
        </H5>
        {extrakt &&
          <div>
            <Img
              value={bild || (org || {}).image}
              width={100}
              maxHeight={120}
              avatar
            />
            <Text>
              {extrakt}
            </Text>
            {slug &&
              <StyledLink to={{ pathname: `/${path}${slug}` }}>
                Weiterlesen...
              </StyledLink>}
          </div>}
      </Item>
    );
  }
}

export default ({ items, title, accent, size = 6, path, isLoading }) =>
  (<Panel
    medium={size}
    title={
      <Link to={{ pathname: `/${path}/` }}>
        {title}
      </Link>
    }
    accent={accent}
  >
    {map(
      item =>
        (<ListItem
          {...item}
          color={accent}
          path={path}
          key={item.id}
          isLoading={isLoading}
        />),
      items.slice(0, 3),
      () => ({
        id: id(),
        bild: image(100, 100),
        org: {
          id: id(),
          name: string(),
          slug: '/',
          image: image(100, 100),
        },
        author: {
          id: id(),
          name: string(),
        },
        art: 'VORTRAG',
        name: string(),
        slug: '/',
        extrakt: text(),
        date: date(),
        color: color(),
        path: '',
      }),
      3
    )}
  </Panel>);
