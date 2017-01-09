'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _edits = require('../../../edits');

var _image = require('../../../edits/image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_Component) {
  _inherits(User, _Component);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          newEmail = _props.newEmail,
          image = _props.image,
          name = _props.name,
          description = _props.description,
          email = _props.email,
          password = _props.password,
          password2 = _props.password2,
          patch = _props.patch;


      var hint = !newEmail ? null : _react2.default.createElement(
        'div',
        { className: 'ui left pointing red basic label' },
        '\xC4nderung an E-Mail muss best\xE4tigt werden!'
      );

      return _react2.default.createElement(
        'div',
        { className: 'ui vertical segment' },
        _react2.default.createElement(
          'div',
          { className: 'ui middle aligned center aligned grid full', style: { margin: 0 } },
          _react2.default.createElement(
            'div',
            { className: 'column', style: { maxWidth: "500px" } },
            _react2.default.createElement(
              'div',
              { className: 'ui center aligned grid' },
              _react2.default.createElement(
                'div',
                { className: 'four wide middle aligned column' },
                _react2.default.createElement(_image2.default, { value: image, height: 100, width: 100, updateValue: function updateValue(v) {
                    return patch({ image: v });
                  } })
              ),
              _react2.default.createElement(
                'div',
                { className: 'twelve wide column' },
                _react2.default.createElement(
                  'form',
                  { className: 'ui large form', action: 'javascript:void(0)', method: 'post' },
                  _react2.default.createElement(
                    'div',
                    { className: 'ui horizontal divider' },
                    'Pers\xF6nliche Daten'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(
                      'div',
                      { className: 'ui left icon input' },
                      _react2.default.createElement('i', { className: 'user icon' }),
                      _react2.default.createElement(_edits.Input, { placeholder: 'Dein Name', value: name, updateValue: function updateValue(v) {
                          return patch({ name: v });
                        } })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(_edits.Input, { lines: '2', placeholder: 'Beschreibung', value: description,
                      updateValue: function updateValue(v) {
                        return patch({ description: v });
                      } })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'ui horizontal divider' },
                    'Zugangsdaten'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(
                      'div',
                      { className: 'ui left icon input' },
                      _react2.default.createElement('i', { className: 'mail icon' }),
                      _react2.default.createElement(_edits.Input, { type: 'email', placeholder: 'Deine E-Mail',
                        value: newEmail ? newEmail : email,
                        updateValue: function updateValue(v) {
                          return patch({ newEmail: v });
                        } }),
                      hint
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(
                      'div',
                      { className: 'ui left icon input' },
                      _react2.default.createElement('i', { className: 'lock icon' }),
                      _react2.default.createElement(_edits.Input, { type: 'password', placeholder: 'Dein Passwort', value: password, updateValue: function updateValue(v) {
                          return patch({ password: v });
                        } })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(
                      'div',
                      { className: 'ui left icon input' },
                      _react2.default.createElement('i', { className: 'lock icon' }),
                      _react2.default.createElement(_edits.Input, { type: 'password', placeholder: 'Passwort wiederholen', value: password2,
                        updateValue: function updateValue(v) {
                          return patch({ password2: v });
                        } })
                    )
                  ),
                  _react2.default.createElement('div', { className: 'ui error message' })
                )
              ),
              children
            )
          )
        )
      );
    }
  }]);

  return User;
}(_react.Component);

exports.default = User;