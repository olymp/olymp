import React, { Component } from 'react';
import { Link, withRouter } from 'olymp';
import { Button, Form, Icon } from 'antd';
import { onError, onSuccess, Modal, SplitView, List } from 'olymp-ui';
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
    const id = !this.props.id || this.props.id === 'new' ? null : this.props.id;
    form.validateFields((err, input) => {
      if (err) {
        return onError(err);
      }
      mutate({
        variables: {
          id,
          input,
        },
        updateQueries: !id
          ? {
            artikelList: (prev, { mutationResult }) => ({
              ...prev,
              items: [...prev.items, mutationResult.data.item],
            }),
          }
          : undefined,
      })
        .then(({ data: { item } }) => {
          onSuccess('Gespeichert', 'Der Artikel wurde gespeichert');
          form.resetFields();
        })
        .catch(onError);
    });
  };

  render() {
    const {
      id,
      router,
      isOpen,
      email,
      form,
      saving,
      pathname,
      onClose,
      data,
      DetailView,
      typeName,
      description,
    } = this.props;
    let { items } = this.props;
    const { search } = this.state;

    if (search) {
      items = items.filter(
        ({ name }) =>
          name && name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    }

    const leftButtons = (
      <div>
        <Button.Group style={{ marginRight: 5 }} shape="circle">
          <Button onClick={() => router.push(pathname)} icon="close" />
        </Button.Group>
        {id &&
          <Button.Group>
            <Button onClick={this.ok} shape="circle" icon="save" />
          </Button.Group>}
      </div>
    );

    return (
      <Modal
        isOpen={isOpen}
        leftButtons={leftButtons}
        onClose={() => router.push(pathname)}
        width="auto"
        padding={0}
        title={typeName}
        subtitle={description || 'Bearbeiten'}
      >
        <SplitView background>
          <List side="left">
            <List.Title
              buttons={
                <Button
                  size="small"
                  onClick={() => console.log()}
                  shape="circle"
                >
                  <Link
                    to={{
                      pathname,
                      query: { [`@${lowerFirst(typeName)}`]: 'new' },
                    }}
                  >
                    <Icon type="plus" />
                  </Link>
                </Button>
              }
            >
              {typeName}
            </List.Title>
            <List.Filter
              placeholder="Filter ..."
              onChange={search => this.setState({ search })}
              value={search}
            />
            {items.map(item =>
              (<List.Item
                active={id === item.id}
                to={{
                  pathname,
                  query: { [`@${lowerFirst(typeName)}`]: item.id },
                }}
                key={item.id}
                label={item.name}
                description={item.isAdmin ? 'Administrator' : 'Benutzer'}
              />)
            )}
          </List>
          {id &&
            id === 'new' &&
            <DetailView form={form} ref={d => (this.detail = d)} id={null} />}
          {id &&
            id !== 'new' &&
            <DetailView
              form={form}
              ref={d => (this.detail = d)}
              key={id}
              id={id}
            />}
        </SplitView>
        <Modal.Links>
          <Link
            to={{
              pathname,
              query: { [`@${lowerFirst(typeName)}`]: undefined },
            }}
          >
            Anderes
          </Link>
        </Modal.Links>
      </Modal>
    );
  }
}
