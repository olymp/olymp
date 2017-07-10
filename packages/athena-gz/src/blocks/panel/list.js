import React, { Component } from 'react';
import { Link } from 'olymp';
import { createComponent } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import moment from 'moment';
import { Panel, Item } from '../../components';

const Img = createComponent(
  ({ theme }) => ({
    float: 'right',
    marginLeft: theme.space3,
    marginBottom: theme.space2,
  }),
  p => <Image {...p} />,
  p => Object.keys(p)
);

const Text = createComponent(
  ({ theme }) => ({
    display: '-webkit-box',
    marginY: theme.space2,
    lineHeight: 1.4,
    fontSize: 16,
    WebkitLineClamp: 3,
    height: 1.4 * 16 * 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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
        <h3>
          <Link to={{ pathname: `/${path}${slug || '/'}` }}>
            {name}
          </Link>
        </h3>
        <h5>
          {art || 'ARTIKEL'}, {moment(date).format('DD. MMMM YYYY, HH:mm')} Uhr,{' '}
          {(author || {}).name || 'Redaktion'}/<Link
            to={(org || {}).slug || '/'}
          >
            {(org || {}).name || 'GZK'}
          </Link>
        </h5>
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
              <Link to={{ pathname: `/${path}${slug}` }}>Weiterlesen...</Link>}
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
    {items
      .slice(0, 3)
      .map(item =>
        (<ListItem
          {...item}
          color={accent}
          path={path}
          key={item.id}
          isLoading={isLoading}
        />)
      )}
  </Panel>);