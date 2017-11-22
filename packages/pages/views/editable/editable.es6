import React, { Component } from 'react';
import { Prompt, withQueryActions } from 'olymp-router';
import { connect } from 'react-redux';
import { Sidebar, SplitView } from 'olymp-ui';
import {
  FaEnvelope,
  FaAngleLeft,
  FaAngleRight,
  FaPlus,
  FaPagelines,
  FaHome,
} from 'olymp-icons';
import { withPropsOnChange, withProps, withState } from 'recompose';
import { ContentLoader, Menu, DndList, StackedMenu } from 'olymp-fela';
import { SlateWriter } from 'olymp-slate';
import { createPushPathname } from 'olymp-router';
import { Form } from 'antd';
import { get, debounce } from 'lodash';
import { queryPage } from '../../gql/query';
import { mutatePage } from '../../gql/mutation';
import PageSidebar from './sidebar';

const Page = ({ children, isLoading, ...props }) => (
  <ContentLoader isLoading={isLoading}>
    <SlateWriter {...props} key={props.id + (props.bindingId || '')}>
      {children}
    </SlateWriter>
  </ContentLoader>
);

const setSignal = (props, v) => !v.blocks && props.setSignal(props.signal + 1);
@queryPage
@withState('signal', 'setSignal', 0)
@withState('keys', 'setKeys', [])
@Form.create({
  onValuesChange: debounce(setSignal, 800, { trailing: true, leading: false }),
})
@mutatePage
@withQueryActions
@withPropsOnChange(
  ['item', 'flatNavigation'],
  ({ flatNavigation, form, ...rest }) => {
    const item = rest.item || flatNavigation.find(page => page.slug === '/');

    form.getFieldDecorator('parentId', {
      initialValue: get(rest, 'query.["@parent"]') || item.parentId,
    });
    form.getFieldDecorator('type', { initialValue: item.type || 'PAGE' });
    form.getFieldDecorator('blocks', { initialValue: item.blocks });

    return {
      id: item.id || null,
      item,
      description: !item.id ? 'Neue Seite erstellen' : 'Seite bearbeiten',
      title: !item.id ? 'Neue Seite' : item.name,
      blocks: item.blocks,
    };
  },
)
@withProps(({ form }) => ({
  onChange: blocks => {
    form.setFieldsValue({ blocks });
  },
  value: form.getFieldValue('blocks'),
}))
@connect(
  ({ location }) => ({
    tab: location.query['@page'] || '',
    pathname: location.pathname,
  }),
  dispatch => ({
    push: createPushPathname(dispatch),
  }),
)
export default class EditablePage extends Component {
  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    return console.log(result);

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index,
    );

    this.setState({
      items,
    });
  }

  renderItem = (item, Icon) => {
    const { setKeys, push, pathname } = this.props;
    const hasChildren = item.children && item.children.length;
    const route =
      item.pathname &&
      item.type === 'PAGE' &&
      item.slug &&
      item.slug.indexOf('{') === -1
        ? item.pathname
        : `/page_id/${item.pageId || item.id}`;
    const Com = Icon ? Menu.Item : DndList.Item;
    return (
      <Com
        key={item.id}
        active={pathname === route}
        id={item.id}
        icon={Icon ? <Icon /> : undefined}
        onClick={hasChildren ? () => setKeys([item.id]) : () => push(route)}
        extra={hasChildren ? <FaAngleRight /> : null}
      >
        {item.name}
      </Com>
    );
  };
  renderMenu = keys => {
    const { setKeys, navigation, flatNavigation } = this.props;
    const [lastKey, ...rest] = keys.reverse();
    let children = [];
    if (!lastKey) {
      const menues = navigation.filter(x => x.type === 'MENU');
      const pages = navigation.filter(x => x.type !== 'MENU');
      children = [
        pages.length && this.renderItem(pages[0], FaHome),
        menues.map(menu => (
          <DndList
            key={menu.id}
            title={menu.name}
            extra={<FaPlus />}
            onDragEnd={this.onDragEnd}
          >
            {menu.children.map(x => this.renderItem(x))}
          </DndList>
        )),
        <Menu.Space />,
      ];
    } else {
      const item = flatNavigation.find(x => x.id === lastKey);
      children = [
        <Menu.Item
          key="back"
          icon={<FaAngleLeft />}
          onClick={() => setKeys(rest)}
        >
          Zurück
        </Menu.Item>,
        <DndList
          key="pages"
          title={item.name}
          extra={<FaPlus />}
          onDragEnd={this.onDragEnd}
        >
          {flatNavigation.filter(x => x.parentId === lastKey).map(item =>
            this.renderItem({
              ...item,
              children: flatNavigation.filter(x => x.parentId === item.id),
            }),
          )}
        </DndList>,
      ];
    }
    const header = (
      <Menu.Item large icon={<FaPagelines />}>
        Seiten
      </Menu.Item>
    );
    return (
      <DndList.Context onDragEnd={this.onDragEnd} key={1}>
        <Menu style={{ width: 240, height: '100%' }} header={header}>
          {children}
          <Menu.Space />
        </Menu>
      </DndList.Context>
    );
  };

  render() {
    const {
      id,
      form,
      bindingId,
      bindingObj,
      navigation,
      flatNavigation,
      render,
      item,
      replaceQuery,
      title,
      description,
      tab,
      value,
      onChange,
      signal,
      keys,
      setKeys,
    } = this.props;

    const P = (
      <Page
        key={id}
        value={value}
        onChange={onChange}
        readOnly={false}
        binding={form.isFieldsTouched() ? form.getFieldsValue() : item}
        bindingId={bindingId}
        bindingObj={bindingObj}
        signal={signal}
      />
    );

    return (
      <Sidebar.Container
        isOpen
        padding={0}
        borderLess
        /* title={title}
        subtitle={description}
        rightButtons={
          <Sidebar.Button onClick={save} shape="circle" icon="save" />
        } */
        width={240}
        content={<StackedMenu keys={keys} renderMenu={this.renderMenu} />}
      >
        <Prompt
          when={form.isFieldsTouched()}
          message={() => 'Änderungen verwerfen?'}
        />
        {render && render(P)}
        {!render && P}
      </Sidebar.Container>
    );
  }
}

/* <PageSidebar
              form={form}
              item={item}
              navigation={navigation}
              items={flatNavigation}
              tab={tab}
              onTabClick={key => replaceQuery({ '@page': key || null })}
        /> */
