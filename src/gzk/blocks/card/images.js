import React, { Component, PropTypes } from 'react';
import { useBlockBase, useGenericBlock, useBlockToolbar, GenericBlock, Block } from 'olymp/slate';
import { Image, MediaModal } from 'olymp/cms';

const defaultImage = 'whoa.jpg';
const actions = props => [{
  type: 'image.url',
  icon: 'picture',
  toggle: () => {
    const { setData } = props;
    setData({ showMedia: true });
  },
  active: false,
}, {
  icon: 'header',
  type: 'set-title',
  toggle: () => {
    const { setData, getData } = props;
    const title = window.prompt('Titel', getData('title'));
    setData({ title });
  },
}];

@useGenericBlock({
  label: 'Bilder',
  category: 'Karte',
  editable: false,
  props: ['title', 'url', 'image', 'showMedia'],
  actions,
})
export default class GzCardImages extends Component {
  static defaultProps = { title: 'Video', size: 1, image: defaultImage };
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    getData: PropTypes.func,
  }

  render() {
    const { children, title, url, editor, setData, getData, showMedia, image, ...rest } = this.props;
    const { readOnly } = editor.props;
    const wrapper = {
      paddingBottom: '51.9%',
      height: 0,
    };
    const innerStyle = {
      display: 'block',
    };
    console.log(image);
    return (
      <GenericBlock {...rest} className="gz-big-element col-md-4" toolbarStyle={{ marginLeft: -11, marginRight: -11 }}>
        <h2>
          {title}
        </h2>
        <div className="gz-panel" style={wrapper}>
          Hi
        </div>
        {children}
        {showMedia && (
          <MediaModal
            id={!!image && image.id}
            multi
            onChange={image => setData({ showMedia: undefined, image })}
            onClose={() => setData({ showMedia: undefined })}
          />
        )}
      </GenericBlock>
    );
  }
}
