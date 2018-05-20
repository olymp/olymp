import React, { Component, PropTypes } from 'react';
import { CloudinaryImage } from 'olymp';
import {
  useBlockBase,
  useGenericBlock,
  useBlockToolbar,
  GenericBlock,
  Block,
} from 'olymp/slate';
import { Image } from 'olymp/cms';

const defaultImage = 'whoa.jpg';
const actions = props => [
  {
    type: 'image.url',
    icon: 'picture',
    toggle: () => {
      const { setData } = props;
      setData({ showMedia: true });
    },
    active: false,
  },
  {
    icon: 'heading',
    type: 'set-title',
    toggle: () => {
      const { setData, getData } = props;
      const title = window.prompt('Titel', getData('title'));
      setData({ title });
    },
  },
];

@useGenericBlock({
  label: 'Bild',
  category: 'Karte',
  editable: false,
  props: ['title', 'url'],
  actions,
})
export default class GzCardImage extends Component {
  static defaultProps = { title: 'Video', size: 1 };
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    getData: PropTypes.func,
  };

  render() {
    const {
      children,
      title,
      url,
      editor,
      setData,
      getData,
      ...rest
    } = this.props;
    const { readOnly } = editor.props;
    const value = getData('image', { url: defaultImage });
    return (
      <GenericBlock
        {...rest}
        className="gz-big-element col-md-4"
        toolbarStyle={{ marginLeft: -11, marginRight: -11 }}
      >
        <h2>{title}</h2>
        <div className="gz-panel" style={{ borderBottomRightRadius: 120 }}>
          <CloudinaryImage
            srcSet={false}
            value={value}
            options={{ height: 233 }}
          />
        </div>
        {children}
      </GenericBlock>
    );
  }
}
