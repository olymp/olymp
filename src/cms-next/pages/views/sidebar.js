import React, { Component } from 'react';
import { Link, withRouter, withAuth } from 'olymp';
import { Menu, Button, Form, Icon } from 'antd';
import { Sidebar } from 'olymp/ui';
import { Gateway } from 'react-gateway';
import { queryPage, mutatePage } from '../gql';
import { Pages } from '../pages';
import { PageForm } from '../form';
import { Page } from '../page';

@withRouter
@withAuth
@queryPage
@Form.create()
@mutatePage
export default class PageSidebar extends Component {
  render() {
    const { id, form, router, pathname, save, auth, query, binding, navigation } = this.props;
    let { item } = this.props;

    if (!auth.user) {
      return (
        <Page item={item} />
      );
    }
    const value = query['@page'];
    if (value === 'new') item = {};

    const leftButtons = (
      <div>
        {value && <Button.Group>
          <Button onClick={() => router.push(pathname)}>
            <Icon type="arrow-left" />
          </Button>
        </Button.Group>}
      </div>
    );
    const rightButtons = (
      <div>
        {value && <Button.Group>
          <Button disabled={!form.isFieldsTouched()} onClick={save}>
            <Icon type="save" />
          </Button>
        </Button.Group>}
        {!value && <Button.Group>
          <Button onClick={() => router.push({ pathname, query: { '@page': 'new' } })}>
            <Icon type="plus" />
          </Button>
        </Button.Group>}
      </div>
    );
    const title = !value ? 'Seiten' : value === 'new' ? 'Neue Seite' : 'Seite';
    const description = !value ? 'Seiten hinzufügen und verschieben' : value === 'new' ? 'Neue Seite erstellen' : 'Seite bearbeiten';
    return (
      <div>
        <Gateway into="menu">
          <Link to={{ pathname, query: { '@page': 'edit' } }}>
            Bearbeiten
          </Link>
        </Gateway>
        <Sidebar leftButtons={leftButtons} rightButtons={rightButtons} isOpen onClose={() => router.push(pathname)} minWidth={400} padding={0} title={title} subtitle={description}>
          {!value && <Pages items={navigation} />}
          {value && <PageForm form={form} item={item} />}
        </Sidebar>
        <Page item={{ ...item, ...form.getFieldsValue() }} binding={binding} />
      </div>
    );
  }
}
