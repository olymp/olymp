import React, { Component } from 'react';
import { Drawer } from 'olymp-fela';
import Menu from 'olymp-fela/menu';
import { createComponent } from 'react-fela';
// import { Menu } from 'semantic-ui-react';
import { FaSearch, FaFile } from 'olymp-icons';

const Input = createComponent(
  ({ theme }) => ({
    backgroundColor: 'transparent',
    border: 0,
    color: theme.inverted ? theme.light2 : theme.dark2,
    fontSize: '1.4em',
    outline: 0,
    fontStyle: 'italic',
    width: '100%',
  }),
  'input',
  p => Object.keys(p),
);

export default class SearchDrawer extends Component {
  componentWillReceiveProps({ open }) {
    if (open && !this.props.open) {
      this.input.focus();
    }
  }
  render() {
    const {
      open,
      onClose,
      value,
      placeholder,
      onChange,
      results = [],
      header,
    } = this.props;
    return (
      <Drawer
        color="white"
        open={open}
        onClose={() => {
          onClose();
        }}
      >
        <Menu color="white" collapsed header={header}>
          <Menu.Item onClick={onClose} icon={<FaSearch />} />
        </Menu>
        <Menu
          color="white"
          header={
            <Input
              innerRef={x => (this.input = x)}
              placeholder={placeholder}
              value={value}
              onChange={e => onChange(e.target.value)}
            />
          }
        >
          {results.map(item => (
            <Menu.Item
              key={item.id}
              onClick={onClose}
              icon={item.icon || <FaFile />}
            >
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    );
  }
}
