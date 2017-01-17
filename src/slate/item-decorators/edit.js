import React from 'react';
import { withAuth, withRouter, cn, Link } from 'olymp';
import { Button, Icon, Dropdown, Menu } from 'antd';

export default (Item) => {
  const EditDecorator = (props) => {
    const { id, __typename, location, router, auth, getData, className, hasParentItemDecorator } = props;
    const { pathname, query } = location;

    const menu = (
      <Menu style={{ minWidth: 150 }}>
        <Menu.Item key="edit">
          <Link to={{ pathname, query: { ...query, [`@${__typename}`]: id } }}>Bearbeiten</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="add">
          <Link to={{ pathname, query: { ...query, [`@${__typename}`]: null } }}>Hinzufügen</Link>
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
