import React from 'react';
import { styled } from 'olymp';
import { Dropdown, Menu } from 'antd';

const styles = theme => ({
  style1: {
    borderTop: `1px solid ${theme.dark4}`,
  },
  style2: {
    borderTop: `3px double ${theme.dark4}`,
  },
  style3: {
    borderTop: `1px dashed ${theme.dark4}`,
  },
  style4: {
    borderTop: `1px dotted ${theme.dark4}`,
  },
  style5: {
    backgroundColor: '#fff',
    borderTop: `2px dashed ${theme.dark4}`,
  },
  style6: {
    backgroundColor: '#fff',
    borderTop: `2px dotted ${theme.dark4}`,
  },
  style7: {
    borderTop: `1px solid ${theme.dark4}`,
    borderBottom: '1px solid #fff',
  },
  style8: {
    borderTop: `1px solid ${theme.dark4}`,
    borderBottom: '1px solid #fff',
    onAfter: {
      content: '""',
      display: 'block',
      marginTop: 2,
      borderTop: `1px solid ${theme.dark4}`,
      borderBottom: '1px solid #fff',
    },
  },
  style9: {
    borderTop: `1px dashed ${theme.dark4}`,
    borderBottom: '1px dashed #fff',
  },
  style10: {
    borderTop: `1px dotted ${theme.dark4}`,
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
    boxShadow: `0 10px 10px -10px ${theme.dark4} inset`,
  },
  style14: {
    border: 0,
    height: 1,
    backgroundImage: `linear-gradient(left, #f0f0f0, ${theme.dark4}, #f0f0f0)`,
  },
  style15: {
    borderTop: `4px double ${theme.dark4}`,
    textAlign: 'center',
    onAfter: {
      content: '"\\002665"',
      display: 'inline-block',
      position: 'relative',
      top: -15,
      padding: '0 10px',
      background: '#f0f0f0',
      color: theme.dark4,
      fontSize: 18,
    },
  },
  style16: {
    borderTop: `1px dashed ${theme.dark4}`,
    onAfter: {
      content: '"\\002702"',
      display: 'inline-block',
      position: 'relative',
      top: -12,
      left: 40,
      padding: '0 3px',
      background: '#f0f0f0',
      color: theme.dark4,
      fontSize: 18,
    },
  },
  style17: {
    borderTop: `1px solid ${theme.dark4}`,
    textAlign: 'center',
    onAfter: {
      content: '"§"',
      display: 'inline-block',
      position: 'relative',
      top: -14,
      padding: '0 10px',
      background: '#f0f0f0',
      color: theme.dark4,
      fontSize: 18,
      transform: 'rotate(60deg)',
    },
  },
  style18: {
    height: 30,
    borderStyle: 'solid',
    borderColor: theme.dark4,
    borderWidth: '1px 0 0 0',
    borderRadius: 20,
    onBefore: {
      display: 'block',
      content: '""',
      height: 30,
      marginTop: -31,
      borderStyle: 'solid',
      borderColor: theme.dark4,
      borderWidth: '0 0 1px 0',
      borderRadius: 20,
    }
  },
});

const component = styled(({ getData, theme }) => (
  styles(theme)[getData('type', 'style1')]
), ({ attributes, className }) => (
  <hr {...attributes} className={className} />
), p => p);

export default {
  label: 'Linie',
  category: 'Template',
  component,
  actions: [{
    type: 'small',
    icon: 'align-left',
    tooltip: 'Stil 1',
    component: ({ setData }) => (
      <Dropdown overlay={(
        <Menu onClick={({ key }) => setData({ type: key })} style={{ minWidth: 200 }}>
          {Object.keys(styles({ })).map(key => (
            <Menu.Item key={key}>
              {key}
            </Menu.Item>
          ))}
        </Menu>
      )}>
        <a href="javascript:;">
          Stil
        </a>
      </Dropdown>
    ),
    toggle: ({ setData }) => setData({ type: 'style2' }),
    active: ({ type }) => false,
  }],
};

/*component: () => (
  <Dropdown overlay={menu}>
    <a placement="top" overlay={<span>{tooltip}</span>}>
      Stile
    </a>
  </Dropdown>
)*/
