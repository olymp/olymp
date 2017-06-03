import React from 'react';
import Portal from 'react-portal';
import { Cloudinary, Image as CloudinaryImage } from '../../../cloudinary';
import { styled } from 'olymp';
import { withState } from 'recompose';

const CloudinaryEdit = withState('isOpen', 'setOpen', false)(({ setData, getData, isOpen, setOpen }) => (
  <div onClick={() => setOpen(true)}>
    Bild wählen
    <Portal isOpened={isOpen} onClose={() => setOpen(false)} closeOnEsc closeOnOutsideClick>
      <CloudinaryModal
        multi={false}
        onChange={value => setData({ value }).then(() => setOpen(false))}
        onClose={() => setOpen(false)}
        selected={getData('value', []).map(image => image.id)}
      />
    </Portal>
  </div>
));

export default {
  // Meta-Data
  label: 'Bild',
  category: 'Media',
  editable: false,
  // Component
  component: ({ getData, ...p }) => (
    <Gallery
      {...p}
      images={getData('value', [{ url: 'http://placekitten.com/1000/300' }])}
      title={getData('title', false)}
      subtitle={getData('subtitle', false)}
    />
  ),
  // Styles
  styles: {
    width: '100%',
    height: 'auto',
  },
  // Editor Plugins like onKeyDown
  plugin: {},
  // Block decorators like resize
  decorators: [],
  // Actions
  actions: [{
    // type: 'small',
    // icon: 'align-left',
    tooltip: 'Bild auswählen',
    component: CloudinaryEdit,
    toggle: () => {},
    // toggle: ({ setData }) => setData({ alignment: 'left' }),
    // active: ({ alignment }) => alignment === 'left',
  },
  {
    tooltip: 'Bildunterschrift',
    toggle: ({ setData, ...p }) => {
      console.log(p);
      const title = prompt('Titel', 'title || image.caption');
      const subtitle = prompt('Untertitel', 'subtitle || image.source');
      setData({ title, subtitle });
    },
    // toggle: ({ getData, setData }) => ,
    // active: ({ alignment }) => alignment === 'left',
  }],
};

const CloudinaryModal = styled(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 1000,
  boxShadow: theme.boxShadow,
  border: `1px solid ${theme.dark4}`,
  backgroundColor: theme.dark1,
  '> div': {
    position: 'absolute',
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
    display: 'flex',
    backgroundColor: theme.light,
  }
}), ({ onChange, onClose, className, selected }) => (
  <div className={className}>
    <div>
      <Cloudinary
        onSelect={onChange}
        onClose={onClose}
        selected={selected}
      />
    </div>
  </div>
), p => p);

const Gallery = styled(({ theme }) => ({
  width: '100%',
  position: 'relative',
}), ({ className, images, attributes, title, subtitle }) => (
  <div>
    {images.map((image, i) => (
      <div className={className} key={image.id || i}>
        <Image {...attributes} value={image} alt="" />
        {(title || subtitle) && <Label title={title} subtitle={subtitle} />}
      </div>
    ))}
  </div>
), p => p);

const Image = styled(({ theme }) => ({
  width: '100%',
  display: 'block',
}), p => <CloudinaryImage {...p} />, p => p);

const Label = styled(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: `${theme.space1} ${theme.space3}`,
  backgroundColor: theme.light2,
  color: theme.dark,
  '> p': {
    padding: 0,
    color: theme.dark2,
  }
}), ({ className, title, subtitle }) => (
  <div className={className}>
    {title && <h3>{title}</h3>}
    {subtitle && <p>{subtitle}</p>}
  </div>
), p => p);
