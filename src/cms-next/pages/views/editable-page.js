import React, { Component } from 'react';
import { Prompt, Link, withRouter, withAuth, styled } from 'olymp';
import { Menu, Button, Form, Icon } from 'antd';
import { Panel, Sidebar } from 'olymp/ui';
import { Gateway } from 'react-gateway';
import { queryPage, mutatePage } from '../gql';
import { Pages } from '../pages';
import { PageForm } from '../form';
import { Page } from '../page';
import { SplitView } from '../../style';

@withRouter
@queryPage
@Form.create()
@mutatePage
export default class PageSidebar extends Component {
  render() {
    const { id, form, router, pathname, save, query, binding, navigation, flatNavigation, render, deviceWidth } = this.props;
    let { item } = this.props;

    const value = query['@page'];
    if (value === 'new') item = {};

    const leftButtons = (
      <div>
        {!value && <Button.Group>
          <Button onClick={() => router.push({ pathname, query: { ...query, '@page': undefined } })} shape="circle" icon="close" />
        </Button.Group>}
        {value && <Button.Group>
          <Button onClick={() => router.push({ pathname, query: { ...query, '@page': null } })} shape="circle" icon="arrow-left" />
        </Button.Group>}
      </div>
    );
    const rightButtons = (
      <div>
        {value && <Button.Group>
          <Button disabled={!form.isFieldsTouched()} onClick={save} shape="circle" icon="save" />
        </Button.Group>}
        {!value && <Button.Group>
          <Button onClick={() => router.push({ pathname, query: { ...query, '@page': 'new' } })} shape="circle" icon="plus" />
        </Button.Group>}
      </div>
    );
    const title = !value ? 'Seiten' : value === 'new' ? 'Neue Seite' : 'Seite';
    const description = !value ? 'Seiten-Management' : value === 'new' ? 'Neue Seite erstellen' : 'Seite bearbeiten';
    return (
      <SplitView deviceWidth={deviceWidth}>
        <Prompt when={form.isFieldsTouched()} message={location => `Änderungen verwerfen?`} />
        <Sidebar leftButtons={leftButtons} rightButtons={rightButtons} isOpen onClose={() => router.push(pathname)} padding={0} title={title} subtitle={description}>
          {!value && <Pages items={navigation} />}
          {value && <PageForm form={form} item={item} items={flatNavigation} />}
        </Sidebar>
        {render && render(<Page item={{ ...item, ...form.getFieldsValue() }} binding={binding} />)}
        {!render && <Page item={{ ...item, ...form.getFieldsValue() }} binding={binding} />}
      </SplitView>
    );
  }
}
