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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withAmp } from 'olymp-utils';
import Container from './container';
import Img from './img';
import Amp from './amp';
var Image = (function (_super) {
    __extends(Image, _super);
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initVals = function () {
            var _a = _this.props, height = _a.height, maxResolution = _a.maxResolution;
            var _b = _this.props, width = _b.width, ratio = _b.ratio;
            var isPercentage = false;
            if (!ratio) {
                ratio = 0.75;
            }
            if (typeof width === 'string') {
                width = undefined;
                isPercentage = true;
            }
            if (height) {
                if (width) {
                    ratio = height / width;
                }
                else {
                    width = height / ratio;
                }
            }
            if (!width && !height) {
                width = Math.sqrt(maxResolution / ratio);
            }
            return {
                width: width,
                ratio: ratio,
                isPercentage: isPercentage,
            };
        };
        _this.limitWidth = function (w, ratio, isPercentage) {
            var _a = _this.props, minWidth = _a.minWidth, minHeight = _a.minHeight, maxWidth = _a.maxWidth, maxHeight = _a.maxHeight, maxResolution = _a.maxResolution;
            var width = w;
            if (minWidth && width < minWidth) {
                width = minWidth;
            }
            if (!isPercentage && minHeight && width * ratio < minHeight) {
                width = minHeight / ratio;
            }
            if (maxWidth && width > maxWidth) {
                width = maxWidth;
            }
            if (!isPercentage && maxHeight && width * ratio > maxHeight) {
                width = maxHeight / ratio;
            }
            if (Math.pow(width, 2) * ratio > maxResolution) {
                width = Math.sqrt(maxResolution / ratio);
            }
            return Math.round(width);
        };
        _this.getMode = function (width, ratio, isPercentage) {
            var mode = _this.props.mode;
            var srcRatio = _this.props.srcRatio || ratio;
            var w = _this.limitWidth(width, ratio, isPercentage);
            var defaultResult = {
                layout: 'fill',
                w: w,
                h: Math.round(w * ratio),
            };
            switch (mode) {
                case 'filled':
                    return defaultResult;
                case 'padded':
                    return {
                        layout: 'fixed-height',
                        w: w,
                        h: Math.round(w * srcRatio),
                    };
                default:
                    return defaultResult;
            }
        };
        return _this;
    }
    Image.prototype.render = function () {
        var _a = this.props, className = _a.className, lazy = _a.lazy, mode = _a.mode, amp = _a.amp, src = _a.src, alt = _a.alt, onClick = _a.onClick, children = _a.children, containerProps = __rest(_a, ["className", "lazy", "mode", "amp", "src", "alt", "onClick", "children"]);
        var _b = this.initVals(), width = _b.width, ratio = _b.ratio, isPercentage = _b.isPercentage;
        var _c = this.getMode(width, ratio, isPercentage), layout = _c.layout, w = _c.w, h = _c.h;
        var url = typeof src === 'function' ? src(w, h) : src;
        var image = !!url &&
            React.createElement(Img, { src: url, alt: alt, width: w >= h ? '100%' : 'auto', height: w < h ? '100%' : 'auto', onClick: onClick });
        return (React.createElement(Container, __assign({}, containerProps, { className: className, width: isPercentage ? this.props.width : w, ratio: ratio, lazy: !amp && lazy }),
            amp && image
                ? React.createElement(Amp, { layout: layout, src: url, alt: alt, width: w, height: h }, image)
                : image,
            children));
    };
    Image = __decorate([
        withAmp
    ], Image);
    return Image;
}(Component));
Image.displayName = 'Image';
Image.propTypes = {
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    ratio: PropTypes.number.isRequired,
    srcRatio: PropTypes.number.isRequired,
    mode: PropTypes.oneOf(['filled', 'padded']).isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.number,
    minWidth: PropTypes.number,
    minHeight: PropTypes.number,
    maxWidth: PropTypes.number,
    maxHeight: PropTypes.number,
    maxResolution: PropTypes.number,
    lazy: PropTypes.bool,
    alt: PropTypes.string,
    onClick: PropTypes.func,
};
Image.defaultProps = {
    src: function (w, h) { return "https://lorempixel.com/" + w + "/" + h + "/cats/" + w + "x" + h; },
    ratio: 0.75,
    srcRatio: 0.75,
    mode: 'filled',
    width: undefined,
    height: undefined,
    minWidth: undefined,
    minHeight: undefined,
    maxWidth: undefined,
    maxHeight: undefined,
    maxResolution: 111000,
    lazy: true,
    alt: '',
    onClick: function () { },
};
export default Image;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvaW1hZ2UvaW1hZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3pDLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUM7QUFDeEIsT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDO0FBR3hCO0lBQW9CLHlCQUFTO0lBRDdCO1FBQUEscUVBK0lDO1FBN0lDLGNBQVEsR0FBRztZQUNILElBQUEsZ0JBQXNDLEVBQXBDLGtCQUFNLEVBQUUsZ0NBQWEsQ0FBZ0I7WUFDekMsSUFBQSxnQkFBNkIsRUFBM0IsZ0JBQUssRUFBRSxnQkFBSyxDQUFnQjtZQUNsQyxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7WUFFekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNYLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDZixDQUFDO1lBR0QsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFDbEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN0QixDQUFDO1lBR0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDWCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNWLEtBQUssR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLEtBQUssR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixD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U0FBUztJQUNoQixNQUFNLEVBQUUsU0FBUztJQUVqQixRQUFRLEVBQUUsU0FBUztJQUNuQixTQUFTLEVBQUUsU0FBUztJQUNwQixRQUFRLEVBQUUsU0FBUztJQUNuQixTQUFTLEVBQUUsU0FBUztJQUNwQixhQUFhLEVBQUUsTUFBTTtJQUVyQixJQUFJLEVBQUUsSUFBSTtJQUNWLEdBQUcsRUFBRSxFQUFFO0lBQ1AsT0FBTyxFQUFFLGNBQU8sQ0FBQztDQUNsQixDQUFDO0FBQ0YsZUFBZSxLQUFLLENBQUMiLCJmaWxlIjoicGFja2FnZXMvZmVsYS9pbWFnZS9pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aEFtcCB9IGZyb20gJ29seW1wLXV0aWxzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInO1xuaW1wb3J0IEltZyBmcm9tICcuL2ltZyc7XG5pbXBvcnQgQW1wIGZyb20gJy4vYW1wJztcblxuQHdpdGhBbXBcbmNsYXNzIEltYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaW5pdFZhbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBoZWlnaHQsIG1heFJlc29sdXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHsgd2lkdGgsIHJhdGlvIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBpc1BlcmNlbnRhZ2UgPSBmYWxzZTtcblxuICAgIGlmICghcmF0aW8pIHtcbiAgICAgIHJhdGlvID0gMC43NTtcbiAgICB9XG5cbiAgICAvLyB3aWR0aCA9IHBlcmNlbnRcbiAgICBpZiAodHlwZW9mIHdpZHRoID09PSAnc3RyaW5nJykge1xuICAgICAgd2lkdGggPSB1bmRlZmluZWQ7XG4gICAgICBpc1BlcmNlbnRhZ2UgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIGlmIGhlaWdodCBpcyBzZXRcbiAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgcmF0aW8gPSBoZWlnaHQgLyB3aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoID0gaGVpZ2h0IC8gcmF0aW87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWF4IHNpemUsIGlmIG5vIHNpemUgaXMgc2V0XG4gICAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0KSB7XG4gICAgICB3aWR0aCA9IE1hdGguc3FydChtYXhSZXNvbHV0aW9uIC8gcmF0aW8pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aCxcbiAgICAgIHJhdGlvLFxuICAgICAgaXNQZXJjZW50YWdlLFxuICAgIH07XG4gIH07XG5cbiAgbGltaXRXaWR0aCA9ICh3LCByYXRpbywgaXNQZXJjZW50YWdlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgbWluV2lkdGgsXG4gICAgICBtaW5IZWlnaHQsXG4gICAgICBtYXhXaWR0aCxcbiAgICAgIG1heEhlaWdodCxcbiAgICAgIG1heFJlc29sdXRpb24sXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHdpZHRoID0gdztcblxuICAgIC8vIG1pbldpZHRoL21pbkhlaWdodFxuICAgIGlmIChtaW5XaWR0aCAmJiB3aWR0aCA8IG1pbldpZHRoKSB7XG4gICAgICB3aWR0aCA9IG1pbldpZHRoO1xuICAgIH1cbiAgICBpZiAoIWlzUGVyY2VudGFnZSAmJiBtaW5IZWlnaHQgJiYgd2lkdGggKiByYXRpbyA8IG1pbkhlaWdodCkge1xuICAgICAgd2lkdGggPSBtaW5IZWlnaHQgLyByYXRpbztcbiAgICB9XG5cbiAgICAvLyBtYXhXaWR0aC9tYXhIZWlnaHRcbiAgICBpZiAobWF4V2lkdGggJiYgd2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgd2lkdGggPSBtYXhXaWR0aDtcbiAgICB9XG4gICAgaWYgKCFpc1BlcmNlbnRhZ2UgJiYgbWF4SGVpZ2h0ICYmIHdpZHRoICogcmF0aW8gPiBtYXhIZWlnaHQpIHtcbiAgICAgIHdpZHRoID0gbWF4SGVpZ2h0IC8gcmF0aW87XG4gICAgfVxuXG4gICAgLy8gbWF4UmVzb2x1dGlvblxuICAgIGlmICh3aWR0aCAqKiAyICogcmF0aW8gPiBtYXhSZXNvbHV0aW9uKSB7XG4gICAgICB3aWR0aCA9IE1hdGguc3FydChtYXhSZXNvbHV0aW9uIC8gcmF0aW8pO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgfTtcblxuICBnZXRNb2RlID0gKHdpZHRoLCByYXRpbywgaXNQZXJjZW50YWdlKSA9PiB7XG4gICAgY29uc3QgeyBtb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNyY1JhdGlvID0gdGhpcy5wcm9wcy5zcmNSYXRpbyB8fCByYXRpbztcbiAgICBjb25zdCB3ID0gdGhpcy5saW1pdFdpZHRoKHdpZHRoLCByYXRpbywgaXNQZXJjZW50YWdlKTtcblxuICAgIGNvbnN0IGRlZmF1bHRSZXN1bHQgPSB7XG4gICAgICBsYXlvdXQ6ICdmaWxsJyxcbiAgICAgIHcsXG4gICAgICBoOiBNYXRoLnJvdW5kKHcgKiByYXRpbyksXG4gICAgfTtcblxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZmlsbGVkJzpcbiAgICAgICAgLy8ga2xlaW5lcmUgU2VpdGUgMTAwJVxuICAgICAgICByZXR1cm4gZGVmYXVsdFJlc3VsdDtcblxuICAgICAgY2FzZSAncGFkZGVkJzpcbiAgICAgICAgLy8gZ3LDtsOfZXJlIFNlaXRlIDEwMCVcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsYXlvdXQ6ICdmaXhlZC1oZWlnaHQnLFxuICAgICAgICAgIHcsXG4gICAgICAgICAgaDogTWF0aC5yb3VuZCh3ICogc3JjUmF0aW8pLFxuICAgICAgICB9O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGVmYXVsdFJlc3VsdDtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGxhenksXG4gICAgICBtb2RlLFxuICAgICAgYW1wLFxuICAgICAgc3JjLFxuICAgICAgYWx0LFxuICAgICAgb25DbGljayxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgLi4uY29udGFpbmVyUHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB3aWR0aCwgcmF0aW8sIGlzUGVyY2VudGFnZSB9ID0gdGhpcy5pbml0VmFscygpO1xuICAgIGNvbnN0IHsgbGF5b3V0LCB3LCBoIH0gPSB0aGlzLmdldE1vZGUod2lkdGgsIHJhdGlvLCBpc1BlcmNlbnRhZ2UpO1xuICAgIGNvbnN0IHVybCA9IHR5cGVvZiBzcmMgPT09ICdmdW5jdGlvbicgPyBzcmModywgaCkgOiBzcmM7XG4gICAgY29uc3QgaW1hZ2UgPVxuICAgICAgISF1cmwgJiZcbiAgICAgIDxJbWdcbiAgICAgICAgc3JjPXt1cmx9XG4gICAgICAgIGFsdD17YWx0fVxuICAgICAgICB3aWR0aD17dyA+PSBoID8gJzEwMCUnIDogJ2F1dG8nfVxuICAgICAgICBoZWlnaHQ9e3cgPCBoID8gJzEwMCUnIDogJ2F1dG8nfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgLz47XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lclxuICAgICAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICB3aWR0aD17aXNQZXJjZW50YWdlID8gdGhpcy5wcm9wcy53aWR0aCA6IHd9XG4gICAgICAgIHJhdGlvPXtyYXRpb31cbiAgICAgICAgbGF6eT17IWFtcCAmJiBsYXp5fVxuICAgICAgPlxuICAgICAgICB7YW1wICYmIGltYWdlXG4gICAgICAgICAgPyA8QW1wIGxheW91dD17bGF5b3V0fSBzcmM9e3VybH0gYWx0PXthbHR9IHdpZHRoPXt3fSBoZWlnaHQ9e2h9PlxuICAgICAgICAgICAgICB7aW1hZ2V9XG4gICAgICAgICAgICA8L0FtcD5cbiAgICAgICAgICA6IGltYWdlfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5JbWFnZS5kaXNwbGF5TmFtZSA9ICdJbWFnZSc7XG5JbWFnZS5wcm9wVHlwZXMgPSB7XG4gIHNyYzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuICByYXRpbzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBzcmNSYXRpbzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBtb2RlOiBQcm9wVHlwZXMub25lT2YoWydmaWxsZWQnLCAncGFkZGVkJ10pLmlzUmVxdWlyZWQsXG5cbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtaW5IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1heFJlc29sdXRpb246IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgbGF6eTogUHJvcFR5cGVzLmJvb2wsXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICBzcmM6ICh3LCBoKSA9PiBgaHR0cHM6Ly9sb3JlbXBpeGVsLmNvbS8ke3d9LyR7aH0vY2F0cy8ke3d9eCR7aH1gLFxuICByYXRpbzogMC43NSxcbiAgc3JjUmF0aW86IDAuNzUsXG4gIG1vZGU6ICdmaWxsZWQnLFxuXG4gIHdpZHRoOiB1bmRlZmluZWQsXG4gIGhlaWdodDogdW5kZWZpbmVkLFxuXG4gIG1pbldpZHRoOiB1bmRlZmluZWQsXG4gIG1pbkhlaWdodDogdW5kZWZpbmVkLFxuICBtYXhXaWR0aDogdW5kZWZpbmVkLFxuICBtYXhIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgbWF4UmVzb2x1dGlvbjogMTExMDAwLCAvLyAzMzMqMzMzcHhcblxuICBsYXp5OiB0cnVlLFxuICBhbHQ6ICcnLFxuICBvbkNsaWNrOiAoKSA9PiB7fSxcbn07XG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcbiJdfQ==
