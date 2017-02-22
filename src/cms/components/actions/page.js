import React, { Component } from 'react';
// import { GatewayDest } from 'react-gateway';
import { Menu, Icon, Dropdown, Button } from 'antd';
import { Link, withAuth, withRouter, withItem } from 'olymp';

const fieldNames = 'id, slug, order, name, parentId, blocks, headings { id, slug, text, children { id, slug, text } }';

@withAuth
@withRouter
@withItem({ typeName: 'page', fieldNames })
export default class CmsPageAction extends Component {
  render() {
    const { id, save, location, auth } = this.props;
    const readOnly = !auth || !auth.user;

    if (!id || readOnly) return null;

    return (
      <Dropdown
        overlay={(
          <Menu>
            <Menu.Item key="page:1">
              <a href="javascript:;" onClick={save}>
                Speichern
              </a>
            </Menu.Item>
            {/* <Menu.Item key="page:undo">
              <GatewayDest name="button_undo" />
            </Menu.Item> */}
            <Menu.Divider />
            <Menu.Item key="page:visitor" disabled>{false ? <Icon type="check" /> : null}Besucher-Modus</Menu.Item>
            <Menu.Item key="page:settings">
              <Link to={{ ...location, query: { '@page': id } }}>
                Einstellungen
              </Link>
            </Menu.Item>
            <Menu.Item key="page:delete" disabled>
              Seite löschen
            </Menu.Item>
          </Menu>
        )}
        overlayClassName="ant-dropdown-left"
        placement="bottomLeft"
      >
        <Button shape="circle" size="large">
          <Icon type="file" />
        </Button>
      </Dropdown>
    );
  }
}
