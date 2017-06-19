import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getStyle = (align) => {
  if (align === 'left') {
    return {
      float: 'left',
      marginRight: '10px',
    };
  } else if (align === 'right') {
    return {
      float: 'right',
      marginLeft: '10px',
    };
  }
  return {
    float: 'initial',
    display: 'block',
    margin: '0px auto',
  };
};

export default (options = {}) => (Block) => {
  const { actions = true, enable } = options;
  return class AlignmentDecorator extends Component {
    static slate = Block.slate;
    static propTypes = {
      getData: PropTypes.func,
      setData: PropTypes.func,
      editor: PropTypes.object,
      style: PropTypes.object,
    };

    setAlignment = (align) => {
      const { setData } = this.props;
      if (align === 'left') {
        setData({ align });
      } else if (align === 'right') {
        setData({ align });
      } else {
        setData({ align: null });
      }
    };

    render() {
      if (enable === false) {
        return <Block {...this.props} />;
      }
      const { getData } = this.props;
      const alignment = getData('align');
      const style = {
        ...this.props.style,
        ...getStyle(alignment),
      };

      const alignActions = actions === false
        ? []
        : [
          {
            type: 'align.left',
            icon: 'align-left',
            label: 'Linksbündig',
            toggle: () => this.setAlignment('left'),
            active: alignment === 'left',
          },
          {
            type: 'align.center',
            icon: 'align-center',
            label: 'Zentriert',
            toggle: () => this.setAlignment(),
            active: !alignment,
          },
          {
            type: 'align.right',
            icon: 'align-right',
            label: 'Rechtsbündig',
            toggle: () => this.setAlignment('right'),
            active: alignment === 'right',
          },
        ];

      return (
        <Block
          {...this.props}
          actions={alignActions}
          style={style}
          alignment={alignment}
          setAlignment={this.setAlignment}
        />
      );
    }
  };
};
