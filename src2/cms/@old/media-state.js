import React, { Component } from 'react';
import { withRouter } from 'olymp';
import MediaList from '../list';

export default class MediaListState extends Component {
  state = {
    tag: null,
    search: null,
  }
  tagChange = item => {
    this.setState({ tag: item ? item.tag : null });
  }
  render() {
    const { onClick } = this.props;
    const { tag } = this.state;
    return (
      <MediaList {...this.props} onImageChange={onClick} onTagChange={this.tagChange} tag={tag} />
    );
  }
};
