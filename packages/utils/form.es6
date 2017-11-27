export const layout = { labelCol: { span: 7 }, wrapperCol: { span: 17 } };

export const onEnterFocus = ref => e => {
  if (e.key === 'Enter') {
    return ref() && ref().refs && ref().refs.input.focus();
  }
  return false;
};

export const onEnterOk = onOk => e => {
  if (e.key === 'Enter') {
    onOk();
  }
};
