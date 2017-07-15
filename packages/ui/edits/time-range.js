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
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Slider from 'multirangeslider';
import { createComponent } from 'olymp-fela';
var Elessar = (function (_super) {
    __extends(Elessar, _super);
    function Elessar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (e) {
            if (_this.dontChange) {
                return;
            }
            var onChange = _this.props.onChange;
            var keys = Object.keys(e.data);
            var array = keys.map(function (key) { return [e.data[key].val[0], e.data[key].val[1]]; });
            onChange(array);
        };
        return _this;
    }
    Elessar.prototype.resetValues = function (newProps) {
        var _this = this;
        if (newProps === void 0) { newProps = this.props; }
        this.dontChange = true;
        this.slider.removeAll();
        var value = newProps.value;
        if (!value) {
            value = [];
        }
        else if (!Array.isArray(value)) {
            value = [];
        }
        value.filter(function (item) { return Array.isArray(item); }).forEach(function (item) {
            _this.slider.add(item);
        });
        this.dontChange = false;
    };
    Elessar.prototype.componentDidMount = function () {
        this.slider = new Slider({
            min: 7 * 60,
            max: 21 * 60,
            minWidth: 60,
            step: 30,
            label: function (value) {
                var start = moment().startOf('day').add(value[0], 'minutes');
                var end = moment().startOf('day').add(value[1], 'minutes');
                return start.format('HH:mm') + "-" + end.format('HH:mm');
            },
        });
        this.slider.on('change', this.onChange);
        ReactDOM.findDOMNode(this).appendChild(this.slider.el);
        this.resetValues();
    };
    Elessar.prototype.componentWillReceiveProps = function (newProps) {
        if (this.dontChange) {
            return;
        }
        this.resetValues(newProps);
    };
    Elessar.prototype.render = function () {
        var _this = this;
        var className = this.props.className;
        return React.createElement("div", { className: className, ref: function (x) { return (_this.dev = x); } });
    };
    return Elessar;
}(Component));
export default createComponent(function (_a) {
    var theme = _a.theme;
    var height = 32;
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
                height: height,
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
                    lineHeight: height + "px",
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
                        lineHeight: height + "px",
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
}, function (x) { return React.createElement(Elessar, __assign({}, x)); }, function (x) { return Object.keys(x); });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2VkaXRzL3RpbWUtcmFuZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3pDLE9BQU8sUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLENBQUM7QUFDdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUU3QztJQUFzQiwyQkFBUztJQUEvQjtRQUFBLHFFQXNEQztRQWRDLGNBQVEsR0FBRyxVQUFBLENBQUM7WUFDVixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNPLElBQUEsK0JBQVEsQ0FBZ0I7WUFDaEMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO1lBQ3hFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUM7O0lBTUosQ0FBQztJQXJEQyw2QkFBVyxHQUFYLFVBQVksUUFBcUI7UUFBakMsaUJBYUM7UUFiVyx5QkFBQSxFQUFBLFdBQVcsSUFBSSxDQUFDLEtBQUs7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFB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QUUsY0FBYzt5QkFDeEI7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUMsRUFDRCxVQUFBLENBQUMsSUFBSSxPQUFBLG9CQUFDLE9BQU8sZUFBSyxDQUFDLEVBQUksRUFBbEIsQ0FBa0IsRUFDdkIsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FDcEIsQ0FBQyIsImZpbGUiOiJwYWNrYWdlcy91aS9lZGl0cy90aW1lLXJhbmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdtdWx0aXJhbmdlc2xpZGVyJztcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJ29seW1wLWZlbGEnO1xuXG5jbGFzcyBFbGVzc2FyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVzZXRWYWx1ZXMobmV3UHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgdGhpcy5kb250Q2hhbmdlID0gdHJ1ZTtcbiAgICB0aGlzLnNsaWRlci5yZW1vdmVBbGwoKTtcbiAgICBsZXQgeyB2YWx1ZSB9ID0gbmV3UHJvcHM7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBbXTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSBbXTtcbiAgICB9XG4gICAgdmFsdWUuZmlsdGVyKGl0ZW0gPT4gQXJyYXkuaXNBcnJheShpdGVtKSkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuc2xpZGVyLmFkZChpdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLmRvbnRDaGFuZ2UgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2xpZGVyID0gbmV3IFNsaWRlcih7XG4gICAgICBtaW46IDcgKiA2MCxcbiAgICAgIG1heDogMjEgKiA2MCxcbiAgICAgIG1pbldpZHRoOiA2MCxcbiAgICAgIHN0ZXA6IDMwLFxuICAgICAgbGFiZWw6IHZhbHVlID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBtb21lbnQoKS5zdGFydE9mKCdkYXknKS5hZGQodmFsdWVbMF0sICdtaW51dGVzJyk7XG4gICAgICAgIGNvbnN0IGVuZCA9IG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpLmFkZCh2YWx1ZVsxXSwgJ21pbnV0ZXMnKTtcbiAgICAgICAgcmV0dXJuIGAke3N0YXJ0LmZvcm1hdCgnSEg6bW0nKX0tJHtlbmQuZm9ybWF0KCdISDptbScpfWA7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRoaXMuc2xpZGVyLm9uKCdjaGFuZ2UnLCB0aGlzLm9uQ2hhbmdlKTtcbiAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlci5lbCk7XG4gICAgdGhpcy5yZXNldFZhbHVlcygpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgIGlmICh0aGlzLmRvbnRDaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZXNldFZhbHVlcyhuZXdQcm9wcyk7XG4gIH1cblxuICBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIGlmICh0aGlzLmRvbnRDaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZS5kYXRhKTtcbiAgICBjb25zdCBhcnJheSA9IGtleXMubWFwKGtleSA9PiBbZS5kYXRhW2tleV0udmFsWzBdLCBlLmRhdGFba2V5XS52YWxbMV1dKTtcbiAgICBvbkNoYW5nZShhcnJheSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSByZWY9e3ggPT4gKHRoaXMuZGV2ID0geCl9IC8+O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+IHtcbiAgICBjb25zdCBoZWlnaHQgPSAzMjtcbiAgICByZXR1cm4ge1xuICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItc2xpZGVyJzoge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLWFsbG93Q2hhbmdlRmFsc2UnOiB7XG4gICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItcmFuZ2UnOiB7XG4gICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLWxlZnQtaGFuZGxlcic6IHtcbiAgICAgICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItcmlnaHQtaGFuZGxlcic6IHtcbiAgICAgICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLWJhcic6IHtcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkOWQ5ZDknLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUubGlnaHQsXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cbiAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1naG9zdCc6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgbGluZUhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvcixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMDUpJyxcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItcHJlc3NlZCc6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmxpZ2h0MixcbiAgICAgICAgICB9LFxuICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLXplcm8td2lkdGgubXVsdGlyYW5nZXNsaWRlci1wcmVzc2VkLXJpZ2h0Jzoge1xuICAgICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItcmlnaHQtaGFuZGxlcic6IHtcbiAgICAgICAgICAgICAgbGVmdDogLTgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItemVyby13aWR0aC5tdWx0aXJhbmdlc2xpZGVyLXByZXNzZWQtbGVmdCc6IHtcbiAgICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLWxlZnQtaGFuZGxlcic6IHtcbiAgICAgICAgICAgICAgbGVmdDogLTgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItemVyby13aWR0aC5tdWx0aXJhbmdlc2xpZGVyLXJlbW92ZS1wb3B1cCc6IHtcbiAgICAgICAgICAgIGxlZnQ6IC0xMixcbiAgICAgICAgICB9LFxuICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLXJhbmdlJzoge1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGN1cnNvcjogJ21vdmUnLFxuICAgICAgICAgICAgJy13ZWJraXQtdXNlci1kcmFnJzogJ25vbmUnLFxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmxpZ2h0LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvcixcblxuICAgICAgICAgICAgJz4gLm11bHRpcmFuZ2VzbGlkZXItbGFiZWwnOiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1sZWZ0LWhhbmRsZXInOiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICB3aWR0aDogOCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUubGlnaHQyLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAnZXctcmVzaXplJyxcbiAgICAgICAgICAgICAgJy13ZWJraXQtdXNlci1kcmFnJzogJ25vbmUnLFxuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICc+IC5tdWx0aXJhbmdlc2xpZGVyLXJpZ2h0LWhhbmRsZXInOiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICB3aWR0aDogOCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUubGlnaHQyLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAnZXctcmVzaXplJyxcbiAgICAgICAgICAgICAgJy13ZWJraXQtdXNlci1kcmFnJzogJ25vbmUnLFxuICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1yZW1vdmUtcG9wdXAnOiB7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246ICcwLjVzJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIHRvcDogLTMwLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAnPiAubXVsdGlyYW5nZXNsaWRlci1yZW1vdmUtbGFiZWwnOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLmNvbG9yLFxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5saWdodCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAnMC41JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbiAgeCA9PiA8RWxlc3NhciB7Li4ueH0gLz4sXG4gIHggPT4gT2JqZWN0LmtleXMoeClcbik7XG4iXX0=
