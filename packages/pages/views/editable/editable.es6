import React, { Component } from 'react';
import { withRouter, Prompt } from 'olymp-router';
import { Sidebar, SplitView } from 'olymp-ui';
import { Menu, Form, Icon } from 'antd';
import { Gateway } from 'react-gateway';
import { queryPage, mutatePage } from '../../gql';
import PageForm from './sidebar';
import Page from '../page';

@withRouter
@queryPage
@Form.create()
@mutatePage
export default class PageSidebar extends Component {
  state = { tab: 0 };

  componentWillReceiveProps = (props) => {
    if (
      (props.query['@page'] !== this.props.query['@page'] && props.query.modal !== null) ||
      (props.query.parent !== this.props.query.parent && props.query['@page'] === 'new')
    ) {
      this.setState({ tab: 1 });
    }

    if (props.query['@page'] !== this.props.query['@page']) {
      this.props.form.resetFields();
    }
  };

  render() {
    const {
      form,
      router,
      pathname,
      save,
      query,
      binding,
      bindingId,
      bindingObj,
      navigation,
      flatNavigation,
      render,
      maxWidth,
    } = this.props;
    const { tab } = this.state;
    let item = this.props.item || flatNavigation.find(page => page.slug === '/');

    const value = query['@page'] || item.id;
    if (value === 'new') {
      item = { parentId: query.parent, type: 'PAGE' };
    }

    const title = value === 'new' ? 'Neue Seite' : item.name;
    const description = value === 'new' ? 'Neue Seite erstellen' : 'Seite bearbeiten';
    const isPage = (form.getFieldValue('type') || item.type || 'PAGE') === 'PAGE';
    const P = form.getFieldDecorator('blocks', {
      initialValue: item.blocks,
    })(<Page readOnly={!isPage} binding={binding} bindingId={bindingId} bindingObj={bindingObj} />);

    return (
      <SplitView maxWidth={maxWidth} center>
        <Prompt when={form.isFieldsTouched()} message={() => 'Änderungen verwerfen?'} />
        <Sidebar
          isOpen
          onClose={() => router.push(pathname)}
          padding={0}
          title={title}
          subtitle={description}
        >
          <PageForm
            form={form}
            item={item}
            navigation={navigation}
            items={flatNavigation}
            tab={`${tab}`}
            onTabClick={key => this.setState({ tab: key })}
          />
        </Sidebar>
        <div>
          <Menu mode="horizontal">
            {form.isFieldsTouched() && (
              <Menu.Item key="clone">
                <Icon type="save" onClick={save} />
                <span>Speichern</span>
              </Menu.Item>
            )}
          </Menu>
          {render && render(P)}
          {!render && P}
        </div>
      </SplitView>
    );
  }
}
