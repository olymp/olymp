import React from 'react';
import { withAuth, withRouter, cn, Link } from 'olymp';
import { Button, Icon, Dropdown, Menu } from 'antd';

export default (options = {}) => Item => {
  const EditDecorator = props => {
    const {
      id,
      __typename,
      location,
      router,
      auth,
      getData,
      children,
      className,
    } = props;
    const { pathname, query } = location;

    if (auth.user && __typename) {
      const menu = (
        <Menu style={{ minWidth: 150 }}>
          <Menu.Item key="edit">
            <Link
              to={{
                pathname,
                query: { ...query, [`@${__typename.toLowerCase()}`]: id },
              }}
            >
              Bearbeiten
            </Link>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="add">
            <Link
              to={{
                pathname,
                query: { ...query, [`@${__typename.toLowerCase()}`]: null },
              }}
            >
              Hinzufügen
            </Link>
          </Menu.Item>
          <Menu.Item key="clone" disabled>
            Kopieren
          </Menu.Item>
          <Menu.Item key="delete" disabled>
            Löschen
          </Menu.Item>
        </Menu>
      );

      const buttons =
        options.mode !== 'buttons' ? (
          <Dropdown
            overlay={menu}
            overlayClassName="ant-dropdown-left"
            placement="bottomLeft"
          >
            <Button
              type="primary"
              shape="circle"
              size="large"
              className="block-item-edit"
              onClick={() =>
                router.push({
                  pathname,
                  query: { ...query, [`@${__typename.toLowerCase()}`]: id },
                })
              }
              key="edit"
            >
              <Icon type="edit" />
            </Button>
          </Dropdown>
        ) : (
          <div className="block-actions">
            <Button
              type="primary"
              shape="circle"
              size="large"
              onClick={() =>
                router.push({
                  pathname,
                  query: { ...query, [`@${__typename.toLowerCase()}`]: id },
                })
              }
              key="edit"
            >
              <i className="fa fa-edit" />
            </Button>
            <Button
              shape="circle"
              onClick={() =>
                router.push({
                  pathname,
                  query: { ...query, [`@${__typename.toLowerCase()}`]: id },
                })
              }
              key="add"
            >
              <i className="fa fa-clone" />
            </Button>
            <Button
              shape="circle"
              onClick={() =>
                router.push({
                  pathname,
                  query: { ...query, [`@${__typename.toLowerCase()}`]: id },
                })
              }
              key="del"
            >
              <i className="fa fa-trash-alt" />
            </Button>
          </div>
        );
      return (
        <Item {...props} className={cn(className, 'block-item')}>
          {children}
          {buttons}
        </Item>
      );
    }

    return <Item {...props} />;
  };

  return withAuth(withRouter(EditDecorator));
};
