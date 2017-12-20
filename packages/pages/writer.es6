import React, { Component, Fragment } from 'react';
import { Prompt, withQueryActions } from 'olymp-router';
import { FaSave, FaPencil } from 'olymp-icons';
import { withPropsOnChange, withState, compose } from 'recompose';
import { withLoader, Drawer } from 'olymp-fela';
import Menu from 'olymp-fela/menu';
import AntMenu from 'olymp-fela/menu/ant';
import SlateWriter from 'olymp-slate/slate-writer';
import { Form } from 'antd';
import { get } from 'lodash';
import PageForm from './form';
import { queryPage } from './gql/query';
import { mutatePage } from './gql/mutation';

// const setSignal = (props, v) => !v.blocks && props.setSignal(props.signal + 1);

const enhance = compose(
  queryPage,
  withLoader,
  // withState('signal', 'setSignal', 0),
  Form.create({
    /* onValuesChange: debounce(setSignal, 800, {
      trailing: true,
      leading: false,
    }), */
  }),
  mutatePage,
  withQueryActions,
  withPropsOnChange(['item'], ({ form, item = {}, ...rest }) => {
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
  }),
);

@enhance
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

  render() {
    const {
      form,
      bindingId,
      bindingObj,
      item,
      signal,
      save,
      setFormOpen,
      formOpen,
      description,
      pageList,
      id,
    } = this.props;

    return (
      <Fragment>
        <Prompt
          when={form.isFieldsTouched()}
          message={() => 'Änderungen verwerfen?'}
        />
        <SlateWriter
          value={form.getFieldValue('blocks')}
          onChange={blocks => {
            form.setFieldsValue({ blocks });
          }}
          id={id}
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
        <Drawer
          width={475}
          right
          open={formOpen}
          onClose={() => setFormOpen(false)}
        >
          <Menu
            header={<Menu.Item large>{description}</Menu.Item>}
            headerColor
            headerInverted
          >
            <PageForm items={pageList} {...this.props} />
          </Menu>
          <Menu
            color
            inverted
            collapsed
            header={<Menu.Item large icon={<FaPencil />} />}
            headerColor="dark4"
            headerInverted
          >
            <AntMenu.Tooltip onClick={save} icon={<FaSave />}>
              Speichern
            </AntMenu.Tooltip>
          </Menu>
        </Drawer>
      </Fragment>
    );
  }
}
