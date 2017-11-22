import React, { Component } from 'react';
import { Prompt, withQueryActions } from 'olymp-router';
import { connect } from 'react-redux';
import { Sidebar, SplitView } from 'olymp-ui';
import { FaEnvelope } from 'olymp-icons';
import { withPropsOnChange, withProps, withState } from 'recompose';
import { ContentLoader, Menu, DndList } from 'olymp-fela';
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

const setSignal = (props, v) => !v.blocks && props.setSignal(props.signal + 1);
@queryPage
@withState('signal', 'setSignal', 0)
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

  renderItems = key => {
    if (!key) {
    }
  };

  render() {
    const {
      id,
      form,
      save,
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
      ...rest
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
        content={
          <Menu style={{ width: 240, height: '100%' }} header="Seiten">
            <Menu.Item icon={<FaEnvelope />}>Startseite</Menu.Item>
            <DndList
              title="Hauptmenü"
              extra={<FaEnvelope />}
              onDragEnd={this.onDragEnd}
            >
              <DndList.Item id="1" icon={<FaEnvelope />}>
                Online-Termin
              </DndList.Item>
              <DndList.Item id="2" icon={<FaEnvelope />}>
                Kontakt
              </DndList.Item>
              <DndList.Item id="3" icon={<FaEnvelope />}>
                Leistungen
              </DndList.Item>
              <DndList.Item id="4" icon={<FaEnvelope />}>
                Ursachen für
              </DndList.Item>
              <DndList.SubMenu
                id="5"
                icon={<FaEnvelope />}
                title="Ursachen für"
              >
                <Menu.Item icon={<FaEnvelope />}>Datenschutz</Menu.Item>
                <Menu.Item icon={<FaEnvelope />}>Impressum</Menu.Item>
                <DndList.SubMenu
                  id="5"
                  icon={<FaEnvelope />}
                  title="Ursachen für"
                >
                  <Menu.Item icon={<FaEnvelope />}>Datenschutz</Menu.Item>
                  <Menu.Item icon={<FaEnvelope />}>Impressum</Menu.Item>
                </DndList.SubMenu>
              </DndList.SubMenu>
            </DndList>
            <Menu.List title="Fußmenü">
              <Menu.Item icon={<FaEnvelope />}>Datenschutz</Menu.Item>
              <Menu.Item icon={<FaEnvelope />}>Impressum</Menu.Item>
            </Menu.List>
            <Menu.Space />
            <Menu.List title="Ende!">
              <Menu.Item icon={<FaEnvelope />}>Abmelden</Menu.Item>
            </Menu.List>
          </Menu>
        }
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
