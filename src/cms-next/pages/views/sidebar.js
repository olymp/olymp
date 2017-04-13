import React, { Component } from 'react';
import { Link, withRouter, withAuth, styled } from 'olymp';
import { Menu, Button, Form, Icon } from 'antd';
import { Panel, Sidebar } from 'olymp/ui';
import { Gateway } from 'react-gateway';
import { queryPage, mutatePage } from '../gql';
import { Pages } from '../pages';
import { PageForm } from '../form';
import { Page } from '../page';

export const Container = styled(({ }) => ({
  display: 'flex',
  flex: 1,
  '> :first-child': {
    flex: 0,
    overflow: 'auto',
  },
  '> :not(:first-child)': {
    flex: 1,
    overflow: 'auto',
  },
}), 'div', p => p);

@withRouter
@queryPage
@Form.create()
@mutatePage
export default class PageSidebar extends Component {
  render() {
    const { id, form, router, pathname, save, query, binding, navigation, flatNavigation, render } = this.props;
    let { item } = this.props;

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
    const description = !value ? 'Seiten-Management' : value === 'new' ? 'Neue Seite erstellen' : 'Seite bearbeiten';
    return (
      <Container>
        <Sidebar leftButtons={leftButtons} rightButtons={rightButtons} isOpen onClose={() => router.push(pathname)} minWidth={400} padding={0} title={title} subtitle={description}>
          {!value && <Pages items={navigation} />}
          {value && <PageForm form={form} item={item} items={flatNavigation} />}
        </Sidebar>
        {render && render(<Page item={{ ...item, ...form.getFieldsValue() }} binding={binding} />)}
        {!render && <Page item={{ ...item, ...form.getFieldsValue() }} binding={binding} />}
      </Container>
    );
  }
}
