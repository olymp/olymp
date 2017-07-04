import React, { Component } from 'react';
import { Prompt, withRouter } from 'olymp';
import { Sidebar, SplitView } from 'olymp-ui';
import { Button, Form } from 'antd';
import { orderBy } from 'lodash';
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
      (props.query['@page'] !== this.props.query['@page'] ||
        props.query.parent !== this.props.query.parent) &&
      props.query['@page'] === 'new'
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
      deviceWidth,
    } = this.props;
    const { tab } = this.state;
    let item =
      this.props.item || flatNavigation.find(page => page.slug === '/');

    const value = query['@page'] || item.id;
    if (value === 'new') {
      item = { parentId: query.parent, type: 'PAGE' };
    }

    const rightButtons = form.isFieldsTouched()
      ? (<Button.Group>
        <Sidebar.Button onClick={save} shape="circle" icon="save" />
      </Button.Group>)
      : (<Button.Group>
        <Sidebar.Button
          onClick={() =>
              router.push({
                pathname,
                query: { ...query, '@page': 'new', parent: item.id },
              })}
          shape="circle"
          icon="plus"
        />
      </Button.Group>);
    const title = value === 'new' ? 'Neue Seite' : item.name;
    const description =
      value === 'new' ? 'Neue Seite erstellen' : 'Seite bearbeiten';
    const isPage =
      (form.getFieldValue('type') || item.type || 'PAGE') === 'PAGE';
    const P = form.getFieldDecorator('blocks', {
      initialValue: item.blocks,
    })(
      <Page
        readOnly={!isPage}
        binding={binding}
        bindingId={bindingId}
        bindingObj={bindingObj}
      />
    );

    return (
      <SplitView deviceWidth={deviceWidth} center>
        <Prompt
          when={form.isFieldsTouched()}
          message={() => 'Änderungen verwerfen?'}
        />
        <Sidebar
          rightButtons={rightButtons}
          isOpen
          onClose={() => router.push(pathname)}
          padding={0}
          title={title}
          subtitle={description}
        >
          <PageForm
            form={form}
            item={item}
            navigation={orderBy(navigation, ['type', 'name'], ['desc', 'desc'])}
            items={flatNavigation}
            tab={`${tab}`}
            onTabClick={key => this.setState({ tab: key })}
          />
        </Sidebar>

        {render && render(P)}
        {!render && P}
      </SplitView>
    );
  }
}
