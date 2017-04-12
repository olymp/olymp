import React, { Component } from 'react';
import { Link, graphql, gql, withAuth, withRouter } from 'olymp';
import { Menu, Button, Form, Input, Icon, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import { Sidebar, onEnterFocus, onEnterOk, layout, onError, onSuccess } from 'olymp/ui';
import { Modal, SplitView, List, Panel } from 'olymp/ui';
import { lowerFirst } from 'lodash';
import { Gateway } from 'react-gateway';
import { queryPage, mutatePage } from '../gql';
import { PagesGql } from '../pages';
import { PageForm } from '../form';
import { Page } from '../page';

@withRouter
@withAuth
@queryPage
@Form.create()
@mutatePage
export default class PageSidebar extends Component {
  state = { text: '' };
  render() {
    const { id, form, router, pathname, item, save, auth, query } = this.props;
    const { text } = this.state;

    if (!auth.user) {
      return (
        <Page item={{ ...item, text: text || item.text }} />
      );
    }

    const value = query['@page'];
    const leftButtons = (
      <div>
        {/*<Button.Group style={{ marginRight: 5 }}>
          <Button onClick={() => router.push(pathname)}>
            <Icon type="close" />
          </Button>
        </Button.Group>*/}
        {value && <Button.Group style={{ marginRight: 5 }}>
          <Button onClick={() => router.push(pathname)}>
            <Icon type="arrow-left" />
          </Button>
        </Button.Group>}
        <Button.Group>
          <Button onClick={save}>
            <Icon type="save" />
          </Button>
        </Button.Group>
      </div>
    );
    return (
      <div>
        <Gateway into="menu">
          <Link to={{ pathname, query: { '@page': 'edit' } }}>
            Bearbeiten
          </Link>
        </Gateway>
        <Sidebar leftButtons={leftButtons} isOpen onClose={() => router.push(pathname)} minWidth={400} padding={0} title="Seite" subtitle={'Seite bearbeiten'}>
          {!value && <PagesGql />}
          {value && <PageForm form={form} item={item} onChangeText={text => this.setState({ text })} />}
        </Sidebar>
        <Page item={{ ...item, text: text || item.text }} />
      </div>
    );
  }
}
