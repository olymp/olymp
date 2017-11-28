import React, { Component } from 'react';
import { Prompt, withQueryActions, createPushPathname } from 'olymp-router';
import { connect } from 'react-redux';
import {
  FaAngleLeft,
  FaAngleRight,
  FaPlusSquareO,
  FaCubes,
  FaHome,
  FaSave,
  FaPencil,
} from 'olymp-icons';
import { withPropsOnChange, withProps, withState } from 'recompose';
import {
  ContentLoader,
  Menu,
  AntMenu,
  DndList,
  StackedMenu,
  Sidebar,
  Drawer,
} from 'olymp-fela';
import { SlateWriter } from 'olymp-slate';
import { Form } from 'antd';
import { get, debounce } from 'lodash';
import PageForm from './page';
import { queryPage } from '../../gql/query';
import { mutatePage, reorderPage } from '../../gql/mutation';

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
@withState('searchOpen', 'setSearchOpen', false)
@withState('formOpen', 'setFormOpen', false)
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
@reorderPage
export default class EditablePage extends Component {
  onDragEnd = ({ source, destination, draggableId }) => {
    // dropped outside the list
    const { flatNavigation, navigation, reorder } = this.props;
    const item = flatNavigation.find(x => x.id === draggableId);
    const move = (array, old, index) => {
      if (index >= array.length) {
        let k = index - array.length;
        while (k-- + 1) {
          array.push(undefined);
        }
      }
      array.splice(index, 0, array.splice(old, 1)[0]);
      return array; // for testing purposes
    };
    if (item) {
      if (item.parentId) {
        const ids = flatNavigation
          .filter(x => x.parentId === item.parentId)
          .map(x => x.id);
        reorder({
          variables: {
            ids: move(ids, source.index, destination.index),
            parentId: item.parentId,
          },
        });
      } else {
        const ids = navigation.map(x => x.id);
        reorder({
          variables: {
            ids: move(ids, source.index, destination.index),
          },
        });
      }
    }
  };

  renderItem = (item, Icon) => {
    const { setKeys, keys, push, pathname } = this.props;
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
        onClick={
          hasChildren ? () => setKeys([...keys, item.id]) : () => push(route)
        }
        extra={hasChildren ? <FaAngleRight /> : null}
      >
        {item.name}
      </Com>
    );
  };
  renderMenu = keys => {
    const { setKeys, navigation, flatNavigation, push } = this.props;
    const [lastKey, ...rest] = [...keys].reverse();
    let children = [];
    if (!lastKey) {
      const menues = navigation.filter(x => x.type === 'MENU');
      const pages = navigation.filter(x => x.type !== 'MENU');
      children = [
        ...pages.map(x => this.renderItem(x, FaHome)),
        ...menues.map(menu => (
          <DndList
            key={menu.id}
            title={menu.name}
            extra={
              <FaPlusSquareO
                onClick={() => push(`/__new?@parent=${menu.id}`)}
              />
            }
          >
            {menu.children.map(x => this.renderItem(x))}
          </DndList>
        )),
      ];
    } else {
      const item = flatNavigation.find(x => x.id === lastKey);
      const items = flatNavigation.filter(x => x.parentId === lastKey);
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
          extra={
            <FaPlusSquareO onClick={() => push(`/__new?@parent=${item.id}`)} />
          }
        >
          {items.map(item =>
            this.renderItem({
              ...item,
              children: flatNavigation.filter(x => x.parentId === item.id),
            }),
          )}
        </DndList>,
      ];
    }
    const header = (
      <Menu.Item large icon={<FaCubes />}>
        Seitenmanager
      </Menu.Item>
    );
    return (
      <DndList.Context onDragEnd={this.onDragEnd}>
        <Menu header={header}>
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
      render,
      item,
      value,
      onChange,
      signal,
      keys,
      save,
      setFormOpen,
      formOpen,
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
        menu={[
          <Menu.Item key={1} onClick={save} icon={<FaSave />}>
            Speichern
          </Menu.Item>,
          <Menu.Divider key={2} />,
          <Menu.Item
            key={3}
            onClick={() => setFormOpen(!formOpen)}
            icon={<FaPencil />}
          >
            Formular
          </Menu.Item>,
        ]}
      />
    );

    return (
      <Sidebar
        pusher
        left={72}
        menu={<StackedMenu keys={keys} renderMenu={this.renderMenu} />}
      >
        <Prompt
          when={form.isFieldsTouched()}
          message={() => 'Änderungen verwerfen?'}
        />

        {render && render(P)}
        {!render && P}

        <Drawer
          width={475}
          right
          open={formOpen}
          onClose={() => setFormOpen(false)}
        >
          <Menu header={<Menu.Item large>Seite bearbeiten</Menu.Item>}>
            <PageForm {...this.props} />
          </Menu>
          <Menu
            color
            inverted
            collapsed
            header={
              <Menu.Item large icon={<FaPencil />}>
                Seite bearbeiten
              </Menu.Item>
            }
          >
            <AntMenu.Tooltip onClick={setFormOpen} icon={<FaSave />}>
              Speichern
            </AntMenu.Tooltip>
          </Menu>
        </Drawer>
      </Sidebar>
    );
  }
}
