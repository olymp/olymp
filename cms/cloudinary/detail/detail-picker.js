import 'antd/lib/input/style';
import _Input2 from 'antd/lib/input';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/form/style';
import _Form4 from 'antd/lib/form';
import 'antd/lib/form/style';
import _Form3 from 'antd/lib/form';
import 'antd/lib/form/style';
import _Form2 from 'antd/lib/form';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Menu from 'olymp-fela/menu';
import Crop from '../components/crop';
import getImageInfo from './info';
import { FormForFullLayout } from './utils';

var _ref2 = React.createElement(_Input, { placeholder: 'Quelle' });

var _ref3 = React.createElement(_Input2.TextArea, { rows: 3, placeholder: 'Bezeichnung' });

export default (function (_ref) {
  var form = _ref.form,
      item = _ref.item;

  form.getFieldDecorator(item.id + '.id', { initialValue: item.id });
  form.getFieldDecorator(item.id + '.url', { initialValue: item.url });
  form.getFieldDecorator(item.id + '.width', { initialValue: item.width });
  form.getFieldDecorator(item.id + '.height', { initialValue: item.height });

  return React.createElement(
    _Form4,
    null,
    React.createElement(
      _Form.Item,
      FormForFullLayout,
      form.getFieldDecorator(item.id + '.crop', {
        initialValue: item.crop
      })(React.createElement(Crop, { url: item.url, height: item.height, width: item.width }))
    ),
    React.createElement(
      Menu.List,
      { title: 'Bild' },
      form.getFieldDecorator(item.id + '.source', {
        initialValue: item.source
      })(React.createElement(
        _Form2.Item,
        _extends({ label: 'Quelle' }, FormForFullLayout),
        _ref2
      )),
      React.createElement(
        _Form3.Item,
        _extends({ key: 'caption', label: 'Bezeichnung' }, FormForFullLayout),
        form.getFieldDecorator(item.id + '.caption', {
          initialValue: item.caption
        })(_ref3)
      )
    ),
    getImageInfo(item)
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvZGV0YWlsL2RldGFpbC1waWNrZXIuZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkNyb3AiLCJnZXRJbWFnZUluZm8iLCJGb3JtRm9yRnVsbExheW91dCIsImZvcm0iLCJpdGVtIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJpZCIsImluaXRpYWxWYWx1ZSIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiY3JvcCIsInNvdXJjZSIsImNhcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBRUEsT0FBT0MsSUFBUCxNQUFpQixpQkFBakI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLG9CQUFqQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsUUFBekI7QUFDQSxTQUFTQyxpQkFBVCxRQUFrQyxTQUFsQzs7WUFxQlksOEJBQU8sYUFBWSxRQUFuQixHOztZQU1DLDRCQUFPLFFBQVAsSUFBZ0IsTUFBTSxDQUF0QixFQUF5QixhQUFZLGFBQXJDLEc7O0FBekJiLGdCQUFlLGdCQUFvQjtBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ2pDRCxPQUFLRSxpQkFBTCxDQUEwQkQsS0FBS0UsRUFBL0IsVUFBd0MsRUFBRUMsY0FBY0gsS0FBS0UsRUFBckIsRUFBeEM7QUFDQUgsT0FBS0UsaUJBQUwsQ0FBMEJELEtBQUtFLEVBQS9CLFdBQXlDLEVBQUVDLGNBQWNILEtBQUtJLEdBQXJCLEVBQXpDO0FBQ0FMLE9BQUtFLGlCQUFMLENBQTBCRCxLQUFLRSxFQUEvQixhQUEyQyxFQUFFQyxjQUFjSCxLQUFLSyxLQUFyQixFQUEzQztBQUNBTixPQUFLRSxpQkFBTCxDQUEwQkQsS0FBS0UsRUFBL0IsY0FBNEMsRUFBRUMsY0FBY0gsS0FBS00sTUFBckIsRUFBNUM7O0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBLFlBQU0sSUFBTjtBQUFlUix1QkFBZjtBQUNHQyxXQUFLRSxpQkFBTCxDQUEwQkQsS0FBS0UsRUFBL0IsWUFBMEM7QUFDekNDLHNCQUFjSCxLQUFLTztBQURzQixPQUExQyxFQUVFLG9CQUFDLElBQUQsSUFBTSxLQUFLUCxLQUFLSSxHQUFoQixFQUFxQixRQUFRSixLQUFLTSxNQUFsQyxFQUEwQyxPQUFPTixLQUFLSyxLQUF0RCxHQUZGO0FBREgsS0FERjtBQU9FO0FBQUMsVUFBRCxDQUFNLElBQU47QUFBQSxRQUFXLE9BQU0sTUFBakI7QUFDR04sV0FBS0UsaUJBQUwsQ0FBMEJELEtBQUtFLEVBQS9CLGNBQTRDO0FBQzNDQyxzQkFBY0gsS0FBS1E7QUFEd0IsT0FBNUMsRUFHQztBQUFBLGVBQU0sSUFBTjtBQUFBLG1CQUFXLE9BQU0sUUFBakIsSUFBOEJWLGlCQUE5QjtBQUFBO0FBQUEsT0FIRCxDQURIO0FBUUU7QUFBQSxlQUFNLElBQU47QUFBQSxtQkFBVyxLQUFJLFNBQWYsRUFBeUIsT0FBTSxhQUEvQixJQUFpREEsaUJBQWpEO0FBQ0dDLGFBQUtFLGlCQUFMLENBQTBCRCxLQUFLRSxFQUEvQixlQUE2QztBQUM1Q0Msd0JBQWNILEtBQUtTO0FBRHlCLFNBQTdDO0FBREg7QUFSRixLQVBGO0FBc0JHWixpQkFBYUcsSUFBYjtBQXRCSCxHQURGO0FBMEJELENBaENEIiwiZmlsZSI6InBhY2thZ2VzL2Nsb3VkaW5hcnkvZGV0YWlsL2RldGFpbC1waWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCBNZW51IGZyb20gJ29seW1wLWZlbGEvbWVudSc7XG5pbXBvcnQgQ3JvcCBmcm9tICcuLi9jb21wb25lbnRzL2Nyb3AnO1xuaW1wb3J0IGdldEltYWdlSW5mbyBmcm9tICcuL2luZm8nO1xuaW1wb3J0IHsgRm9ybUZvckZ1bGxMYXlvdXQgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgZm9ybSwgaXRlbSB9KSA9PiB7XG4gIGZvcm0uZ2V0RmllbGREZWNvcmF0b3IoYCR7aXRlbS5pZH0uaWRgLCB7IGluaXRpYWxWYWx1ZTogaXRlbS5pZCB9KTtcbiAgZm9ybS5nZXRGaWVsZERlY29yYXRvcihgJHtpdGVtLmlkfS51cmxgLCB7IGluaXRpYWxWYWx1ZTogaXRlbS51cmwgfSk7XG4gIGZvcm0uZ2V0RmllbGREZWNvcmF0b3IoYCR7aXRlbS5pZH0ud2lkdGhgLCB7IGluaXRpYWxWYWx1ZTogaXRlbS53aWR0aCB9KTtcbiAgZm9ybS5nZXRGaWVsZERlY29yYXRvcihgJHtpdGVtLmlkfS5oZWlnaHRgLCB7IGluaXRpYWxWYWx1ZTogaXRlbS5oZWlnaHQgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybT5cbiAgICAgIDxGb3JtLkl0ZW0gey4uLkZvcm1Gb3JGdWxsTGF5b3V0fT5cbiAgICAgICAge2Zvcm0uZ2V0RmllbGREZWNvcmF0b3IoYCR7aXRlbS5pZH0uY3JvcGAsIHtcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IGl0ZW0uY3JvcCxcbiAgICAgICAgfSkoPENyb3AgdXJsPXtpdGVtLnVybH0gaGVpZ2h0PXtpdGVtLmhlaWdodH0gd2lkdGg9e2l0ZW0ud2lkdGh9IC8+KX1cbiAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICA8TWVudS5MaXN0IHRpdGxlPVwiQmlsZFwiPlxuICAgICAgICB7Zm9ybS5nZXRGaWVsZERlY29yYXRvcihgJHtpdGVtLmlkfS5zb3VyY2VgLCB7XG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiBpdGVtLnNvdXJjZSxcbiAgICAgICAgfSkoXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlF1ZWxsZVwiIHsuLi5Gb3JtRm9yRnVsbExheW91dH0+XG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJRdWVsbGVcIiAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPixcbiAgICAgICAgKX1cbiAgICAgICAgPEZvcm0uSXRlbSBrZXk9XCJjYXB0aW9uXCIgbGFiZWw9XCJCZXplaWNobnVuZ1wiIHsuLi5Gb3JtRm9yRnVsbExheW91dH0+XG4gICAgICAgICAge2Zvcm0uZ2V0RmllbGREZWNvcmF0b3IoYCR7aXRlbS5pZH0uY2FwdGlvbmAsIHtcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogaXRlbS5jYXB0aW9uLFxuICAgICAgICAgIH0pKDxJbnB1dC5UZXh0QXJlYSByb3dzPXszfSBwbGFjZWhvbGRlcj1cIkJlemVpY2hudW5nXCIgLz4pfVxuICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDwvTWVudS5MaXN0PlxuXG4gICAgICB7Z2V0SW1hZ2VJbmZvKGl0ZW0pfVxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG4iXX0=
