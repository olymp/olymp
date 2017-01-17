import React from 'react';
import { withAuth, withRouter, cn, Link } from 'olymp';
import { Button, Icon, Dropdown, Menu } from 'antd';

const old = (Item) => {
  const EditDecorator = (props) => {
    const { id, __typename, location, router, auth, getData, className, hasParentItemDecorator } = props;
    const { pathname, query } = location;

    const menu = (
      <Menu style={{ minWidth: 150 }}>
        <Menu.Item key="edit">
          <Link to={{ pathname, query: { ...query, [`@${__typename.toLowerCase()}`]: id } }}>Bearbeiten</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="add">
          <Link to={{ pathname, query: { ...query, [`@${__typename.toLowerCase()}`]: null } }}>Hinzufügen</Link>
        </Menu.Item>
        <Menu.Item key="clone" disabled>Kopieren</Menu.Item>
        <Menu.Item key="delete" disabled>Löschen</Menu.Item>
      </Menu>
    );

    return auth.user && __typename ? (
      <div className={cn(className, !hasParentItemDecorator && 'block-item')}>
        <Dropdown overlay={menu} overlayClassName="ant-dropdown-left" placement="bottomLeft">
          <Button type="primary" shape="circle" size="large" className="block-item-edit">
            <Icon type="edit" />
          </Button>
        </Dropdown>

        <Item {...props} hasParentItemDecorator className="" />
      </div>
    ) : <Item {...props} />;
  };

  return withAuth(withRouter(EditDecorator));
};

old.Test = (Item) => {
  const EditDecorator = (props) => {
    const { id, __typename, location, router, auth, getData, hasParentItemDecorator } = props;
    const { pathname, query } = location;

    const menu = (
      <Menu style={{ minWidth: 150 }}>
        <Menu.Item key="edit">
          <Link to={{ pathname, query: { ...query, [`@${__typename.toLowerCase()}`]: id } }}>Bearbeiten</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="add">
          <Link to={{ pathname, query: { ...query, [`@${__typename.toLowerCase()}`]: null } }}>Hinzufügen</Link>
        </Menu.Item>
        <Menu.Item key="clone" disabled>Kopieren</Menu.Item>
        <Menu.Item key="delete" disabled>Löschen</Menu.Item>
      </Menu>
    );

    const children = auth.user && __typename ? [...(props.children || []),
      <Dropdown overlay={menu} overlayClassName="ant-dropdown-left" placement="bottomLeft">
        <Button type="primary" shape="circle" size="large" className="block-item-edit">
          <Icon type="edit" />
        </Button>
      </Dropdown>
    ] : props.children;

    const className = auth.user && __typename ? cn(props.className, !hasParentItemDecorator && 'block-item') : props.className;
    return (
      <Item {...props} hasParentItemDecorator className={className}>
        {children}
      </Item>
    );
  };

  return withAuth(withRouter(EditDecorator));
};

export default old;
