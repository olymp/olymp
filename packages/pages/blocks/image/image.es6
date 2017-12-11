import React, { Component } from 'react';
// import { LightboxImage, Image, EditText } from 'olymp-cloudinary';
import cn from 'classnames';
import { FaAlignLeft, FaAlignRight, FaPlus, FaMinus } from 'olymp-icons';
import { Inline, Block } from 'slate';
import { Image, Modal } from 'olymp-fela';
import { withState, withPropsOnChange, compose } from 'recompose';
import { isEmpty, get } from 'lodash';
import filestack from 'filestack-js';

export default {
  type: 'image',
  isVoid: true,
  kind: 'block',
  label: 'Bild',
  category: 'Bilder',
  component: ({ node, className, editor, attributes, children }) => {
    const value = node.data.get('value') || {
      width: 400,
      height: 300,
    };
    const size = node.data.get('size') || 4;
    return (
      <Image
        attributes={attributes}
        className={cn(className, 'image-block')}
        width={`${100 / size}%`}
        src={get(value, 'url')}
        ratio={get(value, 'height') / get(value, 'width')}
        srcRatio={get(value, 'height') / get(value, 'width')}
      >
        {children}
      </Image>
    );
  },
  styles: ({ theme, getData }) => {
    const alignment = getData('float', 'none');
    const normalized = alignment.replace('+', '');
    return {
      float: normalized,
      margin: alignment === 'none' && '0 auto',
      // marginTop: alignment === 'none' && theme.space3,
      // marginBottom: theme.space3,
      zIndex: 1,
      extend: [
        {
          condition: normalized === 'left',
          style: { marginRight: theme.space3 },
        },
        {
          condition: alignment === 'left+',
          style: { marginLeft: -75 },
        },
        {
          condition: normalized === 'right',
          style: { marginLeft: theme.space3 },
        },
        {
          condition: alignment === 'right+',
          style: { marginRight: -75 },
        },
      ],
    };
  },
  actions: [
    {
      tooltip: getData => `Bild ${getData('value') ? 'wechseln' : 'wählen'}`,
      component: ({ setData, getData, ...p }) => (
        <EditText
          onChange={value => setData({ value })}
          value={getData('value', {})}
          multi={false}
        />
      ),
      toggle: () => {},
    },
    {
      component: ({ setData, getData, ...p }) => (
        <span
          onClick={value => setData({ value: null })}
        >Löschen
        </span>
      ),
      toggle: () => {},
    },
    {
      label: <FaAlignLeft />,
      tooltip: 'Links anordnen',
      active: ({ getData }) => getData('float', 'none').indexOf('left') === 0,
      toggle: ({ value, onChange, node }) => {
        const alignment = node.data.get('float') || 'none';
        if (alignment === 'none') {
          onChange(
            value
              .change()
              .removeNodeByKey(node.key)
              .collapseToStartOfNextBlock()
              .insertInline(
                Inline.create({
                  type: node.type,
                  isVoid: node.isVoid,
                  data: node.data.set('float', 'left'),
                }),
              ),
          );
        } else if (alignment === 'left') {
          onChange(
            value
              .change()
              .removeNodeByKey(node.key)
              .insertInline(
                Inline.create({
                  type: node.type,
                  isVoid: node.isVoid,
                  data: node.data.set('float', 'left+'),
                }),
              ),
          );
        } else {
          onChange(
            value
              .change()
              .removeNodeByKey(node.key)
              .insertBlock(
                Block.create({
                  type: node.type,
                  isVoid: node.isVoid,
                  data: node.data.set('float', null),
                }),
              ),
          );
        }
      },
    },
    {
      label: <FaAlignRight />,
      tooltip: 'Rechts anordnen',
      active: ({ getData }) => getData('float', 'none').indexOf('right') === 0,
      toggle: ({ value, onChange, node }) => {
        const alignment = node.data.get('float') || 'none';

        if (alignment === 'none') {
          onChange(
            value
              .change()
              .removeNodeByKey(node.key)
              .insertInline(
                Inline.create({
                  type: node.type,
                  isVoid: node.isVoid,
                  data: node.data.set('float', 'right'),
                }),
              ),
          );
        } else if (alignment === 'right') {
          onChange(
            value
              .change()
              .removeNodeByKey(node.key)
              .insertInline(
                Inline.create({
                  type: node.type,
                  isVoid: node.isVoid,
                  data: node.data.set('float', 'right+'),
                }),
              ),
          );
        } else {
          onChange(
            value
              .change()
              .removeNodeByKey(node.key)
              .insertBlock(
                Block.create({
                  type: node.type,
                  isVoid: node.isVoid,
                  data: node.data.set('float', null),
                }),
              ),
          );
        }
      },
    },
    {
      label: <FaPlus />,
      tooltip: 'Größer',
      toggle: ({ setData, getData }) => {
        const size = getData('size', 4);
        setData({
          size: size > 1 ? size - 1 : 1,
        });
      },
    },
    {
      label: <FaMinus />,
      tooltip: 'Kleiner',
      toggle: ({ setData, getData }) => {
        const size = getData('size', 4);
        setData({
          size: size < 8 ? size + 1 : 8,
        });
      },
    },
  ],
};

const enhance = compose(
  withState('isOpen', 'setOpen', false),
  withPropsOnChange(['value'], ({ value }) => ({
    value: (Array.isArray(value) ? value : [value]).filter(x => !isEmpty(x)),
  })),
);

@enhance
class EditText extends Component {
  client = filestack.init('A2tR6xLUhRg23XWmrvRX0z');
  componentWillReceiveProps({ onChange, value, isOpen, setOpen, multi }) {
    if (this.props.isOpen !== isOpen && isOpen) {
      if (value.length && value[0].handle) {
        this.client.cropFiles(value.map(x => `https://cdn.filestackcontent.com/${x.originalHandle || x.handle}`), {
          fromSources:["url", "local_file_system","imagesearch","facebook","instagram","dropbox"],
          lang:"de"
        }).then(({ filesUploaded }) => Promise.all(filesUploaded.map((item, i) => this.client
          .metadata(item.handle, {
            width: true,
            height: true,
          })
          .then((res) => ({
            url: item.url,
            handle: item.handle,
            originalHandle: value[i].handle || item.handle,
            mime: item.mimetype,
            ...res
          }))))).then((files) => {
          console.log(multi ? files : files[0])
          onChange(multi ? files: files[0]);
          setOpen(false);
        });
      } else {
        this.client.pick({
          fromSources:["url", "local_file_system","imagesearch","facebook","instagram","dropbox"],
          lang:"de"
        }).then(({ filesUploaded }) => Promise.all(filesUploaded.map(item => this.client
          .metadata(item.handle, {
            width: true,
            height: true,
          })
          .then((res) => ({
            url: item.url,
            handle: item.handle,
            originalHandle: item.originalHandle,
            mime: item.mimetype,
            ...res
          }))))).then((files) => {
          onChange(multi ? files: files[0]);
          setOpen(false);
        });
      }
    }
  }
  render() {
    const { onChange, value, isOpen, setOpen, multi } = this.props;
    return (
      <div onClick={() => setOpen(true)}>Wählen</div>
    );
    return (
      <div>
        <div onClick={() => setOpen(true)}>Hi</div>
        <Modal
          portal
          open={isOpen}
          onClose={() => setOpen(false)}
          width="90%"
          height="90%"
        >
          <Mediathek
            inModal
            multi={multi}
            onChange={(value = []) => {
              onChange(multi ? value : value[0]);
              setOpen(false);
            }}
            onClose={() => setOpen(false)}
            value={value}
          />
        </Modal>
      </div>
    );
  }
}
