import React, { Component } from 'react';
import { Link, graphql, gql, withAuth, withRouter } from 'olymp';
import { Button, Form, Input, Icon, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import { onEnterFocus, onEnterOk, layout, onError, onSuccess } from 'olymp/ui';
import { Modal, SplitView, List, Panel } from 'olymp/ui';
import { lowerFirst } from 'lodash';

@withRouter
export default class CollectionList extends Component {
  state = { search: '' };
  render() {
    const { id, router, isOpen, email, form, saving, pathname, onClose, data, DetailView, typeName, description } = this.props;
    const { search } = this.state;

    let items = (data.items || []);
    if (search) items = items.filter(({ name }) => name && name.toLowerCase().indexOf(search.toLowerCase()) !== -1);

    return (
      <Modal isOpen={isOpen} onClose={() => router.push(pathname)} width="auto" padding={0} title={typeName} subtitle={description}>
        <SplitView>
          <List side="left">
            <List.Title buttons={
              <Button size="small" onClick={() => console.log()}>
                <Link to={{ pathname, query: { [`@${lowerFirst(typeName)}`]: 'new' } }}>
                  <Icon type="plus" />
                </Link>
              </Button>
            }>{typeName}</List.Title>
            <List.Filter placeholder="Filter ..." onChange={search => this.setState({ search })} value={search} />
            {items.map(item => <List.Item active={id === item.id} to={{ pathname, query: { [`@${lowerFirst(typeName)}`]: item.id } }} key={item.id} label={item.name} description={item.isAdmin ? 'Administrator' : 'Benutzer'} />)}
          </List>
          {id && id === 'new' && <DetailView id={null} />}
          {id && id !== 'new' && <DetailView key={id} id={id} />}
        </SplitView>
        <Modal.Links>
          <Link to={{ pathname, query: { [`@${lowerFirst(typeName)}`]: undefined } }}>Anderes</Link>
        </Modal.Links>
      </Modal>
    );
  }
}
