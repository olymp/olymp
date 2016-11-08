import React, { Component } from 'react';
import { Link } from 'react-router';
import { cloudinaryUrl } from '@olymp/adonis';
import { graphql, withApollo } from 'react-apollo';
import { getImages, getTags, getColors } from './utils';
import gql from 'graphql-tag';
import { Spin } from 'antd';

export const OptionalLink = ({ to, onClick, arg, ...rest }) => {
  if (to && typeof to === 'function' && to(arg)) return <Link {...rest} to={to(arg)} />;
  else if (to && typeof to !== 'function') return <Link {...rest} to={to} />;
  return <a href="javascript:;" onClick={() => onClick(arg)} {...rest} />;
};

const attributes = 'id, url, tags, colors, width, height';
@withApollo
@graphql(gql`
  query fileList {
    items: fileList {
      ${attributes}
    }
  }
`)
export default class MediaList extends Component {
  static defaultProps = {
    buttons: [],
  };

  state = {
    color: null,
    tag: null,
    text: null,
  };

  onUploadClick = () => {
    const { dropzone } = this.refs;
    dropzone.open();
  };

  render() {
    const { loading, items, refetch } = this.props.data;
    const { onImageChange, onTagChange, tagLink, imageLink, client, tag, search, buttons, inplace } = this.props;
    const { color, text } = this.state;

    if (loading) return <Spin />;

    const colors = getColors(items).map(({ color, count }) => (
      <a
        key={color} href="javascript:;" className="ui circular label"
        style={{ backgroundColor: color, color: (color === 'white') ? '#000' : '#FFF' }}
        onClick={() => this.setState({ color })}
      >{count}</a>
    ));

    const tags = getTags(items).map(item => (
      <div key={item.tag} className="card card-block" style={{float: 'left', height: '100px', width: '100px', margin: '5px', position: 'relative', padding: '15px', paddingTop: 0}}>
        <OptionalLink arg={item} onClick={onTagChange} to={tagLink} style={{
            position: 'absolute',
            textAlign: 'center',
            zIndex: 1,
            top: '55%',
            left: '50%',
            maxWidth: '90%',
            maxHeight: '90%',
            transform: 'translate(-50%, -50%)',
          }}>
          <h6>{item.tag}</h6>
        </OptionalLink>
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: '90%'}}>
          {item.items.map(({ id, url }) => (
            <img key={id} src={cloudinaryUrl(url, { width: 100, height: 100 })} style={{
              display: 'inline-block',
              width:'30%', height: '30%'}}
            />
          ))}
        </div>
      </div>
    ));

    const images = getImages(items, { color, text, tag }).map(item => ({
      ...item,
      src: item.url,
      thumbnail: cloudinaryUrl(item.url, { maxWidth: 500, maxHeight: 500 }),
      thumbnailWidth: 100,
      thumbnailHeight: 100*(item.height/item.width),
      caption: item.comment
    })).map(item => (
      <OptionalLink key={item.id} className="card card-block" arg={item} onClick={onImageChange} to={imageLink} style={{float: 'left', height: '100px', width: '100px', margin: '5px'}}>
        <img src={item.thumbnail} style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '90%',
          maxHeight: '90%',
          height: 'inherit !important'}}
        />
      </OptionalLink>
    ));

    return (
      <div>
        {!tag ? tags : null}
        {images}
        <div style={{clear: 'both'}}/>
      </div>
    );
  }
}
