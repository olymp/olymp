import React, { Component } from 'react';
import { Prompt, withRouter } from 'olymp';
import { Button, Form } from 'antd';
import { Sidebar, Container, SplitView } from 'olymp/ui';
import { queryPage, mutatePage } from '../gql';
import { Pages } from '../pages';
import { PageForm } from '../form';
import Page from '../page';

const plugin = {
  onChange: (state) => {
    const map = (nodes) => {
      nodes.forEach((node) => {
        if (node.nodes) map(node.nodes);
      });
    };
    map(state.document.nodes);
  }
};

@withRouter
@queryPage
@Form.create()
@mutatePage
export default class PageSidebar extends Component {
  render() {
    const { id, form, router, pathname, save, query, binding, navigation, flatNavigation, render, deviceWidth } = this.props;
    let { item } = this.props;

    const value = query['@page'];
    if (value === 'new') item = { parentId: query.parent };

    const leftButtons = (
      <div>
        {!value && <Button.Group>
          <Sidebar.Button onClick={() => router.push({ pathname, query: { ...query, '@page': undefined } })} shape="circle" icon="close" />
        </Button.Group>}
        {value && <Button.Group>
          <Sidebar.Button onClick={() => router.push({ pathname, query: { ...query, '@page': null } })} shape="circle" icon="arrow-left" />
        </Button.Group>}
      </div>
    );
    const rightButtons = (
      <div>
        {value && <Button.Group>
          <Sidebar.Button disabled={!form.isFieldsTouched()} onClick={save} shape="circle" icon="save" />
        </Button.Group>}
        {!value && (
          <Button.Group>
            <Sidebar.Button onClick={() => router.push({ pathname, query: { ...query, '@page': 'new', parent: item.id } })} shape="circle" icon="plus" />
          </Button.Group>
        )}
      </div>
    );
    const title = !value ? 'Seiten' : value === 'new' ? 'Neue Seite' : 'Seite';
    const description = !value ? 'Seiten-Management' : value === 'new' ? 'Neue Seite erstellen' : 'Seite bearbeiten';
    const P = form.getFieldDecorator('blocks', {
      initialValue: item.blocks,
    })(<Page readOnly={!value} binding={binding} plugins={[plugin]} />);

    return (
      <SplitView deviceWidth={deviceWidth}>
        <Prompt when={form.isFieldsTouched()} message={location => 'Änderungen verwerfen?'} />
        <Sidebar leftButtons={leftButtons} rightButtons={rightButtons} isOpen onClose={() => router.push(pathname)} padding={0} title={title} subtitle={description}>
          {!value && <Pages items={navigation} />}
          {value && <PageForm form={form} item={item} items={flatNavigation} />}
        </Sidebar>

        <Container width={1200} padding={0}>
          {render && render(P)}
          {!render && P}
        </Container>
      </SplitView>
    );
  }
}
