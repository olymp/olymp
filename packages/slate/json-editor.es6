import React, { Component } from 'react';
import { Editor } from 'slate-react';
import Plain from 'slate-plain-serializer';
import { State } from 'slate';
import { debounce } from 'lodash';
import { withPropsOnChange } from 'recompose';
import './style.css';

@withPropsOnChange(['value'], ({ value }) => {
  const plain = State.isState(value)
    ? JSON.stringify(value.toJSON().document, null, 2)
    : value ? JSON.stringify(value, null, 2) : '';
  return {
    value: Plain.deserialize(plain),
    plain,
  };
})
export default class JsonEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value || Plain.deserialize('') };
  }
  componentWillReceiveProps(newProps) {
    if (newProps.plain !== this.props.plain) {
      this.setState({ value: newProps.value || Plain.deserialize('') });
    }
  }
  propagateChange = debounce(
    (state) => {
      const newPlain = Plain.serialize(state);
      if (newPlain !== this.props.plain) {
        const document = JSON.parse(newPlain);
        this.props.onChange(State.fromJSON({ document }));
      }
    },
    1000,
    { leading: false, trailing: true },
  );
  onChange = (change) => {
    this.setState({ value: change.state });
    this.propagateChange(change.state);
  };

  render = () => {
    const {
      children,
      showUndo,
      readOnly,
      marks,
      nodes,
      plugins,
      className,
      spellcheck,
      style,
      blockTypes,
      ...rest
    } = this.props;
    const value = this.state.value || Plain.deserialize('');

    return (
      <div className={className} style={{ position: 'relative', ...style }}>
        {children}
        <Editor
          {...rest}
          state={value}
          spellcheck={spellcheck || false}
          readOnly={!!readOnly}
          plugins={this.plugins}
          schema={{ marks, nodes }}
          onChange={this.onChange}
          onFocus={() => this.setState({ focus: true })}
          onBlur={() => this.setState({ focus: false })}
          onKeyDown={this.onKeyDown}
          placeholder={!readOnly && 'Hier Text eingeben...'}
          placeholderStyle={{ padding: '0 1rem', opacity: 0.33 }}
        />
      </div>
    );
  };
}
