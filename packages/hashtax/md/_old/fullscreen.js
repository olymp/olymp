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
import React, { Component } from 'react';
import text from './example.md';
import Portal from 'react-portal';
import { styled } from 'olymp-utils';
import md from './index';
import CodeMirror from 'react-codemirror';
import './fullscreen.less';
import './style.less';
import { components } from './example';
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    require('codemirror/mode/markdown/markdown');
}
var Remark = md(components);
var modalSettings = {
    visible: true,
    okText: 'Speichern',
    cancelText: 'Abbruch',
    transitionName: 'fade',
    maskTransitionName: 'fade',
    wrapClassName: 'fullscreen-modal-wrap2',
    className: 'fullscreen-modal',
};
var MdExample = (function (_super) {
    __extends(MdExample, _super);
    function MdExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { text: text };
        _this.editor = function (ref) {
            var cm = ref.getCodeMirror();
            cm.refresh();
        };
        return _this;
    }
    MdExample.prototype.render = function () {
        var _this = this;
        var options = { mode: 'markdown', lineWrapping: true, lineNumbers: true };
        return (React.createElement(Portal, { isOpened: true },
            React.createElement("div", { className: this.props.className },
                React.createElement("div", null,
                    React.createElement(CodeMirror, { ref: this.editor, value: this.state.text, onChange: function (text) { return _this.setState({ text: text }); }, options: options })),
                React.createElement("div", null,
                    React.createElement(Remark, { value: this.state.text })))));
    };
    return MdExample;
}(Component));
export default styled(function () { return ({
    backgroundColor: 'white',
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
    '& .CodeMirror': {
        height: '100%',
    },
    '> div': {
        float: 'left',
        width: '50%',
        height: '100%',
        '> div': {
            height: '100%',
        },
    },
    '> div:nth-child(2)': {
        background: '#f5f2f0',
        borderLeft: '1px solid #cccccc',
        overflowY: 'auto',
        '> div': {
            paddingLeft: 20,
            paddingRight: 20,
        },
    }
}); }, MdExample);
//# sourceMappingURL=fullscreen.js.map