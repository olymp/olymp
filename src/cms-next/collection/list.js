import React, { Component } from 'react';
import { Link, graphql, gql, withAuth, withRouter } from 'olymp';
import { Button, Form, Input, Icon, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import { onEnterFocus, onEnterOk, layout, onError, onSuccess } from 'olymp/ui';
import { Modal, SplitView, List, Panel } from 'olymp/ui';
import { lowerFirst } from 'lodash';

@withRouter
@Form.create()
export default class CollectionList extends Component {
  state = { search: '' };
  defaultProps = {
    items: [],
  };

  ok = () => {
    const { form, item, router, mutate } = this.props;
    let id = !this.props.id || this.props.id === 'new' ? null : this.props.id;
    form.validateFields((err, input) => {
      if (err) return onError(err);
      mutate({
        variables: {
          id,
          input,
        },
        updateQueries: !id ? {
          artikelList: (prev, { mutationResult }) => ({
            ...prev,
            items: [...prev.items, mutationResult.data.item],
          }),
        } : undefined,
      }).then(({ data: { item } }) => {
        onSuccess('Gespeichert', 'Der Artikel wurde gespeichert');
        form.resetFields();
      }).catch(onError);
    });
  }

  render() {
    const { id, router, isOpen, email, form, saving, pathname, onClose, data, DetailView, typeName, description } = this.props;
    let { items } = this.props;
    const { search } = this.state;

    if (search) items = items.filter(({ name }) => name && name.toLowerCase().indexOf(search.toLowerCase()) !== -1);

    const leftButtons = (
      <div>
        <Button.Group style={{ marginRight: 5 }}>
          <Button onClick={() => router.push(pathname)}>
            <Icon type="close" />
          </Button>
        </Button.Group>
        {id && <Button.Group>
          <Button onClick={this.ok}>
            <Icon type="save" />
          </Button>
        </Button.Group>}
      </div>
    );

    return (
      <div>
        <List.Filter placeholder="Filter ..." onChange={search => this.setState({ search })} value={search} />
        {items.map(item => <List.Item active={id === item.id} to={{ pathname, query: { [`@${lowerFirst(typeName)}`]: item.id } }} key={item.id} label={item.name} description={item.isAdmin ? 'Administrator' : 'Benutzer'} />)}
      </div>
    );
  }
}
