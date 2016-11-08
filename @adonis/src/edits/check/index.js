import React, { Component, PropTypes } from 'react'

class CheckBox extends Component {
    constructor(props) {
      super(props)

      this.state = {
          defaultChecked: this.props.value !== undefined ? this.props.value : this.props.defaultChecked
      }
    }

    componentDidMount() {
      this.checkIndeterminate()
    }

    componentDidUpdate() {
      this.checkIndeterminate()
    }

    render() {
      const props = this.prepareProps(this.props, this.state)

      return <input
        ref={el => this.node = el}
        type='checkbox'
        {...cleanProps(props, CheckBox.propTypes)}
        onChange={props.onChange}
        checked={this.isChecked()}
      />
    }

    checkIndeterminate = () => {
      if (this.props.supportIndeterminate){
        //it's not safe to store the prev indeterminate value
        //and only set it if isIndeterminate is different from prev indeterminate value
        //so we have to do this all the time
        this.node.indeterminate = this.isIndeterminate()
      }
    }

    isIndeterminate = () => {
      const props = this.props
      const checked = this.getValue()
      const indeterminate = props.supportIndeterminate && checked === props.indeterminateValue

      return indeterminate === true
    }

    prepareProps = (thisProps, state) => {
      let props = { ...thisProps };

      props.style    = this.prepareStyle(props, state)
      props.onChange = this.handleChange
      props.onFocus  = this.handleFocus
      props.onBlur  = this.handleBlur

      return props
    }

    prepareStyle = (props) => {
      let defaultFocusedStyle
      let focusedStyle

      if (this.state.focused){
        defaultFocusedStyle = props.defaultFocusedStyle
        focusedStyle = props.focusedStyle
      }

      let style = {
        ...props.defaultStyle,
        ...defaultFocusedStyle,
        ...props.style,
        ...focusedStyle
      };

      if (props.onStyleReady) {
        props.onStyleReady(style)
      }

      return style
    }

    handleFocus = (event) => {
      this.setState({
          focused: true
      })

      if (this.props.onFocus) {
        this.props.onFocus(event)
      }
    }

    handleBlur = (event) => {
      this.setState({
        focused: false
      })

      if (this.props.onBlur) {
        this.props.onBlur(event)
      }
    }

    getValue = () => {
      const props = this.props

      return hasOwn(props, 'checked') ?
        props.checked:
        this.state.defaultChecked
    }

    isChecked = () => {
      return this.getValue() || false
    }

    handleChange = (event) => {
      let value = event.target.checked
      const props = this.props

      if (props.supportIndeterminate){
        const oldValue = this.getValue()

        if (typeof props.nextValue == 'function'){
          value = props.nextValue(oldValue, this.props)
        }
      }

      if (props.onChange) {
        props.onChange(value, event)
      }

      if (!hasOwn(props, 'checked')){
        this.setState({
          defaultChecked: value
        })
      }

      props.stopChangePropagation && event.stopPropagation()
    }
}

CheckBox.propTypes = {
  nextValue: PropTypes.func,
  onChange : PropTypes.func,

  checked: PropTypes.any,
  defaultChecked: PropTypes.any,

  indeterminateValue: PropTypes.any,
  supportIndeterminate: PropTypes.bool,

  stopChangePropagation: PropTypes.bool,

  defaultStyle: PropTypes.object,
  defaultFocusedStyle: PropTypes.object,
  focusedStyle: PropTypes.object,
}

CheckBox.defaultProps = {
  stopChangePropagation: false,
  indeterminateValue: null,
  supportIndeterminate: false,

  defaultStyle: null,
  defaultFocusedStyle: null,
  focusedStyle: null,

  nextValue: function(oldValue, props) {
    return oldValue === props.indeterminateValue?
      //indeterminate -> checked
      true:
      oldValue === true?
          // checked -> unchecked
          false:
          // unchecked -> indeterminate
          props.indeterminateValue

  }
}

export default CheckBox

function cleanProps(props, propTypes) {
 const newProps = Object
      .keys(props)
      .reduce((acc, propName) => {
          if (!propTypes[propName]) {
            acc[propName] = props[propName]
          }

        return acc
      }, {})

  return newProps
}

function hasOwn(obj, prop){
    return Object.prototype.hasOwnProperty.call(obj, prop)
}
