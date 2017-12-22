import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { addMinutes, startOfDay, format } from 'date-fns';
import Slider from 'multirangeslider';
import { createComponent } from 'olymp-fela';

class Elessar extends Component {
  componentDidMount() {
    this.slider = new Slider({
      min: 7 * 60,
      max: 21 * 60,
      minWidth: 60,
      step: 30,
      label: value => {
        const start = addMinutes(startOfDay(new Date()), value[0]);
        const end = addMinutes(startOfDay(new Date()), value[1]);
        return `${format(start, 'HH:mm')}-${format(end, 'HH:mm')}`;
      },
    });
    this.slider.on('change', this.onChange);
    ReactDOM.findDOMNode(this).appendChild(this.slider.el);
    this.resetValues();
  }

  componentWillReceiveProps(newProps) {
    if (this.dontChange) {
      return;
    }
    this.resetValues(newProps);
  }

  onChange = e => {
    if (this.dontChange) {
      return;
    }
    const { onChange } = this.props;
    const keys = Object.keys(e.data);
    const array = keys.map(key => [e.data[key].val[0], e.data[key].val[1]]);
    onChange(array);
  };

  resetValues(newProps = this.props) {
    this.dontChange = true;
    this.slider.removeAll();
    let { value } = newProps;
    if (!value) {
      value = [];
    } else if (!Array.isArray(value)) {
      value = [];
    }
    value.filter(item => Array.isArray(item)).forEach(item => {
      this.slider.add(item);
    });
    this.dontChange = false;
  }

  render() {
    const { className } = this.props;
    return <div className={className} ref={x => (this.dev = x)} />;
  }
}
export default createComponent(
  ({ theme }) => {
    const height = 32;
    return {
      '> .multirangeslider-slider': {
        display: 'block',
        userSelect: 'none',
        '> .multirangeslider-allowChangeFalse': {
          '> .multirangeslider-range': {
            cursor: 'default',
            '> .multirangeslider-left-handler': {
              cursor: 'default',
            },
            '> .multirangeslider-right-handler': {
              cursor: 'default',
            },
          },
        },
        '> .multirangeslider-bar': {
          height,
          border: '1px solid #d9d9d9',
          borderRadius: 4,
          width: '100%',
          display: 'block',
          background: theme.light,
          position: 'relative',
          boxSizing: 'border-box',

          '> .multirangeslider-ghost': {
            position: 'absolute',
            height: '100%',
            textAlign: 'center',
            lineHeight: `${height}px`,
            top: 0,
            color: theme.color,
            background: 'rgba(0, 0, 0, 0.05)',
            cursor: 'pointer',
          },
          '> .multirangeslider-pressed': {
            background: theme.light2,
          },
          '> .multirangeslider-zero-width.multirangeslider-pressed-right': {
            '> .multirangeslider-right-handler': {
              left: -8,
            },
          },
          '> .multirangeslider-zero-width.multirangeslider-pressed-left': {
            '> .multirangeslider-left-handler': {
              left: -8,
            },
          },
          '> .multirangeslider-zero-width.multirangeslider-remove-popup': {
            left: -12,
          },
          '> .multirangeslider-range': {
            position: 'absolute',
            height: '100%',
            top: 0,
            cursor: 'move',
            '-webkit-user-drag': 'none',
            color: theme.light,
            backgroundColor: theme.color,

            '> .multirangeslider-label': {
              position: 'absolute',
              textAlign: 'center',
              lineHeight: `${height}px`,
              width: '100%',
              display: 'inline',
            },
            '> .multirangeslider-left-handler': {
              position: 'absolute',
              width: 8,
              background: theme.light2,
              height: '100%',
              cursor: 'ew-resize',
              '-webkit-user-drag': 'none',
              left: 0,
            },
            '> .multirangeslider-right-handler': {
              position: 'absolute',
              width: 8,
              background: theme.light2,
              height: '100%',
              cursor: 'ew-resize',
              '-webkit-user-drag': 'none',
              right: 0,
            },
            '> .multirangeslider-remove-popup': {
              transition: '0.5s',
              position: 'absolute',
              top: -30,
              textAlign: 'center',
              width: '100%',
              '> .multirangeslider-remove-label': {
                width: 20,
                height: 20,
                lineHeight: '20px',
                background: theme.color,
                color: theme.light,
                opacity: '0.5',
                display: 'inline-block',
              },
            },
          },
        },
      },
    };
  },
  x => <Elessar {...x} />,
  x => Object.keys(x),
);
