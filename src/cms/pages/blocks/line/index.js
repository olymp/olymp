import React from 'react';
import { styled } from 'olymp';

const component = styled(({ getData }) => (
  styles[getData('type', 'style1')]
), ({ attributes, className }) => (
  <hr {...attributes} className={className} />
), p => p);

export default {
  label: 'Linie',
  category: 'Deko',
  component,
  actions: [{
    type: 'small',
    icon: 'align-left',
    tooltip: 'Stil 1',
    toggle: ({ setData }) => setData({ type: 'style2' }),
    active: ({ type }) => false,
  }, {
    type: 'small',
    icon: 'align-left',
    tooltip: 'Stil 2',
    toggle: ({ setData }) => setData({ type: 'style3' }),
    active: ({ type }) => false,
  }],
};

const styles = {
  style1: {
    borderTop: '1px solid #8c8b8b',
  },
  style2: {
    borderTop: '3px double #8c8b8b',
  },
  style3: {
    borderTop: '1px dashed #8c8b8b',
  },
  style4: {
    borderTop: '1px dotted #8c8b8b',
  },
  style5: {
    backgroundColor: '#fff',
    borderTop: '2px dashed #8c8b8b',
  },
  style6: {
    backgroundColor: '#fff',
    borderTop: '2px dotted #8c8b8b',
  },
  style7: {
    borderTop: '1px solid #8c8b8b',
    borderBottom: '1px solid #fff',
  },
  style8: {
    borderTop: '1px solid #8c8b8b',
    borderBottom: '1px solid #fff',
    onAfter: {
      content: '""',
      display: 'block',
      marginTop: 2,
      borderTop: '1px solid #8c8b8b',
      borderBottom: '1px solid #fff',
    },
  },
  style9: {
    borderTop: '1px dashed #8c8b8b',
    borderBottom: '1px dashed #fff',
  },
  style10: {
    borderTop: '1px dotted #8c8b8b',
    borderBottom: '1px dotted #fff',
  },
  style11: {
    height: 6,
    background: 'url(http://ibrahimjabbari.com/english/images/hr-11.png) repeat-x 0 0',
    border: 0,
  },
  style12: {
    height: 6,
    background: 'url(http://ibrahimjabbari.com/english/images/hr-12.png) repeat-x 0 0',
    border: 0,
  },
  style13: {
    height: 10,
    border: 0,
    boxShadow: '0 10px 10px -10px #8c8b8b inset',
  },
  style14: {
    border: 0,
    height: 1,
    backgroundImage: 'linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0)',
  },
  style15: {
    borderTop: '4px double #8c8b8b',
    textAlign: 'center',
    onAfter: {
      content: '"\\002665"',
      display: 'inline-block',
      position: 'relative',
      top: -15,
      padding: '0 10px',
      background: '#f0f0f0',
      color: '#8c8b8b',
      fontSize: 18,
    },
  },
  style16: {
    borderTop: '1px dashed #8c8b8b',
    onAfter: {
      content: '"\\002702"',
      display: 'inline-block',
      position: 'relative',
      top: -12,
      left: 40,
      padding: '0 3px',
      background: '#f0f0f0',
      color: '#8c8b8b',
      fontSize: 18,
    },
  },
  style17: {
    borderTop: '1px solid #8c8b8b',
    textAlign: 'center',
    onAfter: {
      content: '"§"',
      display: 'inline-block',
      position: 'relative',
      top: -14,
      padding: '0 10px',
      background: '#f0f0f0',
      color: '#8c8b8b',
      fontSize: 18,
      transform: 'rotate(60deg)',
    },
  },
  style18: {
    height: 30,
    borderStyle: 'solid',
    borderColor: '#8c8b8b',
    borderWidth: '1px 0 0 0',
    borderRadius: 20,
    onBefore: {
      display: 'block',
      content: '""',
      height: 30,
      marginTop: -31,
      borderStyle: 'solid',
      borderColor: '#8c8b8b',
      borderWidth: '0 0 1px 0',
      borderRadius: 20,
    }
  },
};
