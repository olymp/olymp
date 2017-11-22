import React, { Component } from 'react';
import { Prompt, withQueryActions } from 'olymp-router';
import { connect } from 'react-redux';
import { Sidebar, SplitView } from 'olymp-ui';
import { FaEnvelope, FaAngleLeft, FaAngleRight, FaPlus } from 'olymp-icons';
import { withPropsOnChange, withProps, withState } from 'recompose';
import { ContentLoader, Menu, DndList, StackedMenu } from 'olymp-fela';
import { SlateWriter } from 'olymp-slate';
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

console.log(StackedMenu, Menu, DndList);
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
@connect(({ location }) => ({
  tab: location.query['@page'] || '',
}))
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

  renderItem = item => {
    const { setKeys } = this.props;
    const hasChildren = item.children && item.children.length;
    return (
      <DndList.Item
        key={item.id}
        id={item.id}
        onClick={
          hasChildren ? () => setKeys([item.id]) : () => console.log(123)
        }
        // icon={<FaEnvelope />}
        extra={hasChildren ? <FaAngleRight /> : null}
      >
        {item.name}
      </DndList.Item>
    );
  };
  renderMenu = (keys, prevKeys) => {
    const { setKeys, navigation, flatNavigation } = this.props;
    const [lastKey, ...rest] = keys.reverse();
    if (!lastKey) {
      const menues = navigation.filter(x => x.type === 'MENU');
      return (
        <Menu style={{ width: 240, height: '100%' }} header="Seiten">
          <Menu.Item icon={<FaEnvelope />}>Startseite</Menu.Item>
          {menues.map(menu => (
            <DndList
              key={menu.id}
              title={menu.name}
              extra={<FaEnvelope />}
              onDragEnd={this.onDragEnd}
            >
              {menu.children.map(this.renderItem)}
            </DndList>
          ))}
          <Menu.Space />
          <Menu.List title="Ende!">
            <Menu.Item icon={<FaEnvelope />}>Abmelden</Menu.Item>
          </Menu.List>
        </Menu>
      );
    }
    return (
      <Menu style={{ width: 240, height: '100%' }} header="Seiten">
        <Menu.Item icon={<FaAngleLeft />} onClick={() => setKeys(rest)}>
          Zurück
        </Menu.Item>
        <DndList
          title={flatNavigation.find(x => x.id === lastKey).name}
          extra={<FaEnvelope />}
          onDragEnd={this.onDragEnd}
        >
          {flatNavigation.filter(x => x.parentId === lastKey).map(item =>
            this.renderItem({
              ...item,
              children: flatNavigation.filter(x => x.parentId === item.id),
            }),
          )}
        </DndList>
        <Menu.Space />
        <Menu.List title="Ende!">
          <Menu.Item icon={<FaEnvelope />}>Abmelden</Menu.Item>
        </Menu.List>
      </Menu>
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
      maxWidth,
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

    console.log(navigation);

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
