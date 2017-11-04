import { compose, withHandlers } from 'recompose';
import { Form } from 'antd';
import { mutateFile } from '../gql';

export default compose(
  mutateFile,
  Form.create(),
  withHandlers({
    save: ({ form, items, save, onChange }) => () => {
      form.validateFields((err, values) => {
        if (err) {
          return console.error(err);
        }
        if (onChange) {
          return onChange(items.map(item => values[item.id]));
        }
        console.log(values);
        Promise.all(items.map(item => save(values[item.id]))).then(x =>
          form.resetFields(),
        );
      });
    },
  }),
);
