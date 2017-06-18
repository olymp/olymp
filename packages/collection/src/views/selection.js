import React, { Component, PropTypes } from 'react';
import { Prompt } from 'olymp';
import { Form, Button } from 'antd';
import { Sidebar, onError, onSuccess } from 'olymp-ui';

@Form.create()
class SelectionSidebar extends Component {
  ok = () => {
    const { form, item, mutate, type } = this.props;
    const id = item.id;

    form.validateFields((err, input) => {
      if (err) return onError(err);
      mutate({
        variables: {
          id,
          input,
        },
        updateQueries: !id
          ? {
              [`${type}List`]: (prev, { mutationResult }) => ({
                ...prev,
                items: [...prev.items, mutationResult.data.item],
              }),
            }
          : undefined,
      })
        .then(({ data: { item } }) => {
          onSuccess('Gespeichert', `${type} gespeichert`);
          form.resetFields();
        })
        .catch(onError);
    });
  };

  render() {
    const { item, form, type, children, onCancel } = this.props;

    const detail = React.cloneElement(children, { form, item });

    return (
      <Sidebar
        right
        title={item.name || 'Neu'}
        subtitle={item.id ? `${type} bearbeiten` : `${type} erstellen`}
        footer={
          <div>
            <Button onClick={this.ok} type="primary">Speichern</Button>
            <Button onClick={onCancel} disabled={!item.id}>Abbrechen</Button>
          </div>
        }
      >
        <Prompt
          when={form.isFieldsTouched()}
          message={location => 'Änderungen verwerfen?'}
        />
        {detail}
      </Sidebar>
    );
  }
}
SelectionSidebar.propTypes = {
  item: PropTypes.object,
};
export default SelectionSidebar;
