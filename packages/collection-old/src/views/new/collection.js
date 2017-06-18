import React, { Component } from 'react';
import { Prompt, withRouter } from 'olymp';
import { Sidebar, SplitView } from 'olymp-ui';
import { Button } from 'antd';
import { withCollection, withItem, withItems } from '../../decorators';
import ItemSidebar from './sidebar';
import Content from './item-content';

@withRouter
@withCollection
@withItems
@withItem
export default class CollectionSidebar extends Component {
  state = { tab: 0 };

  render() {
    const {
      form,
      router,
      pathname,
      save,
      query,
      binding,
      navigation,
      flatNavigation,
      render,
      deviceWidth,
      typeName,
      items,
    } = this.props;
    const { tab } = this.state;
    let item = this.props.item;

    const id = query[`@${typeName}`];
    if (id === 'new' || !id) item = {};

    const leftButtons = (
      <Button.Group>
        <Sidebar.Button
          onClick={() =>
            router.push({
              pathname,
              query: {
                ...query,
                [`@${typeName}`]: undefined,
                parent: undefined,
              },
            })}
          shape="circle"
          icon="close"
        />
      </Button.Group>
    );
    const rightButtons = form.isFieldsTouched()
      ? <Button.Group>
          <Sidebar.Button onClick={save} shape="circle" icon="save" />
        </Button.Group>
      : <Button.Group>
          <Sidebar.Button
            onClick={() =>
              router.push({
                pathname,
                query: { ...query, [`@${typeName}`]: 'new', parent: item.id },
              })}
            shape="circle"
            icon="plus"
          />
        </Button.Group>;
    const title = id === 'new' ? 'Neue Seite' : item.name;
    const description = id === 'new'
      ? 'Neue Seite erstellen'
      : 'Seite bearbeiten';
    const P = form.getFieldDecorator('blocks', {
      initialValue: item.blocks,
    })(<Content readOnly={false} binding={binding} />);

    return (
      <SplitView deviceWidth={deviceWidth}>
        <Prompt
          when={form.isFieldsTouched()}
          message={() => 'Änderungen verwerfen?'}
        />
        <Sidebar
          leftButtons={leftButtons}
          rightButtons={rightButtons}
          isOpen
          onClose={() => router.push(pathname)}
          padding={0}
          title={title}
          subtitle={description}
        >
          <ItemSidebar
            form={form}
            item={item}
            items={items}
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
