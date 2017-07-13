var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component, PropTypes } from 'react';
import text from './example.md';
import createRemark from './index';
import CodeMirror from 'react-codemirror';
import './style.less';
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    require('codemirror/mode/markdown/markdown');
}
var fallback = function (props) {
    return React.createElement("div", null,
        "No component of type ",
        props.name,
        " found");
};
var gallery = function (props) {
    var name = props.name, alt = props.alt, width = props.width, height = props.height, float = props.float, children = props.children;
    var src = name
        ? "https://res.cloudinary.com/djyenzorc/image/upload/f_auto,q_auto,fl_lossy/v1480883925/" + name
        : 'http://placehold.it/350x150';
    return (React.createElement("div", { style: { float: float } },
        React.createElement("img", { src: src, alt: alt, width: width || 'auto', height: height || 'auto' }),
        children));
};
var bordered = function (props) {
    var children = props.children, color = props.color;
    return (React.createElement("div", { style: { border: "1px solid " + (color || 'red') } }, children));
};
gallery.propTypes = {
    name: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    float: PropTypes.string,
};
bordered.propTypes = {
    color: PropTypes.string,
};
export var components = { fallback: fallback, bordered: bordered, gallery: gallery };
var Remark = createRemark(components);
var MdExample = (function (_super) {
    __extends(MdExample, _super);
    function MdExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { text: text };
        return _this;
    }
    MdExample.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(CodeMirror, { value: this.state.text, onChange: function (text) { return _this.setState({ text: text }); }, options: {
                    mode: 'markdown',
                } }),
            React.createElement("div", null,
                React.createElement(Remark, { value: this.state.text }))));
    };
    return MdExample;
}(Component));
export default MdExample;
//# sourceMappingURL=example.js.map