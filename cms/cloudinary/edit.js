import _isEmpty from 'lodash/isEmpty';
import React from 'react';
import { Modal } from 'olymp-fela';
import { withState, withPropsOnChange, compose } from 'recompose';

import Mediathek from './views';

var enhance = compose(withState('isOpen', 'setOpen', false), withPropsOnChange(['value'], function (_ref) {
  var value = _ref.value;
  return {
    value: (Array.isArray(value) ? value : [value]).filter(function (x) {
      return !_isEmpty(x);
    })
  };
}));
export default (function (renderFn) {
  return enhance(function (props) {
    var _onChange = props.onChange,
        value = props.value,
        isOpen = props.isOpen,
        setOpen = props.setOpen,
        multi = props.multi;


    console.log(multi, value, isOpen);
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { onClick: function onClick() {
            return setOpen(true);
          } },
        renderFn(value, props)
      ),
      React.createElement(
        Modal,
        {
          portal: true,
          open: isOpen,
          onClose: function onClose() {
            return setOpen(false);
          },
          width: '90%',
          height: '90%'
        },
        React.createElement(Mediathek, {
          inModal: true,
          multi: multi,
          onChange: function onChange() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            _onChange(multi ? value : value[0]);
            setOpen(false);
          },
          onClose: function onClose() {
            return setOpen(false);
          },
          value: value
        })
      )
    );
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvZWRpdC5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsIndpdGhTdGF0ZSIsIndpdGhQcm9wc09uQ2hhbmdlIiwiY29tcG9zZSIsIk1lZGlhdGhlayIsImVuaGFuY2UiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImZpbHRlciIsIngiLCJvbkNoYW5nZSIsInByb3BzIiwiaXNPcGVuIiwic2V0T3BlbiIsIm11bHRpIiwiY29uc29sZSIsImxvZyIsInJlbmRlckZuIl0sIm1hcHBpbmdzIjoiO0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxTQUFULEVBQW9CQyxpQkFBcEIsRUFBdUNDLE9BQXZDLFFBQXNELFdBQXREOztBQUVBLE9BQU9DLFNBQVAsTUFBc0IsU0FBdEI7O0FBRUEsSUFBTUMsVUFBVUYsUUFDZEYsVUFBVSxRQUFWLEVBQW9CLFNBQXBCLEVBQStCLEtBQS9CLENBRGMsRUFFZEMsa0JBQWtCLENBQUMsT0FBRCxDQUFsQixFQUE2QjtBQUFBLE1BQUdJLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQzNDQSxXQUFPLENBQUNDLE1BQU1DLE9BQU4sQ0FBY0YsS0FBZCxJQUF1QkEsS0FBdkIsR0FBK0IsQ0FBQ0EsS0FBRCxDQUFoQyxFQUF5Q0csTUFBekMsQ0FBZ0Q7QUFBQSxhQUFLLENBQUMsU0FBUUMsQ0FBUixDQUFOO0FBQUEsS0FBaEQ7QUFEb0MsR0FBaEI7QUFBQSxDQUE3QixDQUZjLENBQWhCO0FBTUEsZ0JBQWU7QUFBQSxTQUNiTCxRQUFRLGlCQUFTO0FBQUEsUUFDUE0sU0FETyxHQUNxQ0MsS0FEckMsQ0FDUEQsUUFETztBQUFBLFFBQ0dMLEtBREgsR0FDcUNNLEtBRHJDLENBQ0dOLEtBREg7QUFBQSxRQUNVTyxNQURWLEdBQ3FDRCxLQURyQyxDQUNVQyxNQURWO0FBQUEsUUFDa0JDLE9BRGxCLEdBQ3FDRixLQURyQyxDQUNrQkUsT0FEbEI7QUFBQSxRQUMyQkMsS0FEM0IsR0FDcUNILEtBRHJDLENBQzJCRyxLQUQzQjs7O0FBR2ZDLFlBQVFDLEdBQVIsQ0FBWUYsS0FBWixFQUFtQlQsS0FBbkIsRUFBMEJPLE1BQTFCO0FBQ0EsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSyxTQUFTO0FBQUEsbUJBQU1DLFFBQVEsSUFBUixDQUFOO0FBQUEsV0FBZDtBQUFvQ0ksaUJBQVNaLEtBQVQsRUFBZ0JNLEtBQWhCO0FBQXBDLE9BREY7QUFFRTtBQUFDLGFBQUQ7QUFBQTtBQUNFLHNCQURGO0FBRUUsZ0JBQU1DLE1BRlI7QUFHRSxtQkFBUztBQUFBLG1CQUFNQyxRQUFRLEtBQVIsQ0FBTjtBQUFBLFdBSFg7QUFJRSxpQkFBTSxLQUpSO0FBS0Usa0JBQU87QUFMVDtBQU9FLDRCQUFDLFNBQUQ7QUFDRSx1QkFERjtBQUVFLGlCQUFPQyxLQUZUO0FBR0Usb0JBQVUsb0JBQWdCO0FBQUEsZ0JBQWZULEtBQWUsdUVBQVAsRUFBTzs7QUFDeEJLLHNCQUFTSSxRQUFRVCxLQUFSLEdBQWdCQSxNQUFNLENBQU4sQ0FBekI7QUFDQVEsb0JBQVEsS0FBUjtBQUNELFdBTkg7QUFPRSxtQkFBUztBQUFBLG1CQUFNQSxRQUFRLEtBQVIsQ0FBTjtBQUFBLFdBUFg7QUFRRSxpQkFBT1I7QUFSVDtBQVBGO0FBRkYsS0FERjtBQXVCRCxHQTNCRCxDQURhO0FBQUEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9jbG91ZGluYXJ5L2VkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdvbHltcC1mZWxhJztcbmltcG9ydCB7IHdpdGhTdGF0ZSwgd2l0aFByb3BzT25DaGFuZ2UsIGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgTWVkaWF0aGVrIGZyb20gJy4vdmlld3MnO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFN0YXRlKCdpc09wZW4nLCAnc2V0T3BlbicsIGZhbHNlKSxcbiAgd2l0aFByb3BzT25DaGFuZ2UoWyd2YWx1ZSddLCAoeyB2YWx1ZSB9KSA9PiAoe1xuICAgIHZhbHVlOiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0pLmZpbHRlcih4ID0+ICFpc0VtcHR5KHgpKSxcbiAgfSkpLFxuKTtcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckZuID0+XG4gIGVuaGFuY2UocHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHZhbHVlLCBpc09wZW4sIHNldE9wZW4sIG11bHRpIH0gPSBwcm9wcztcblxuICAgIGNvbnNvbGUubG9nKG11bHRpLCB2YWx1ZSwgaXNPcGVuKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfT57cmVuZGVyRm4odmFsdWUsIHByb3BzKX08L2Rpdj5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgcG9ydGFsXG4gICAgICAgICAgb3Blbj17aXNPcGVufVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxuICAgICAgICAgIHdpZHRoPVwiOTAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCI5MCVcIlxuICAgICAgICA+XG4gICAgICAgICAgPE1lZGlhdGhla1xuICAgICAgICAgICAgaW5Nb2RhbFxuICAgICAgICAgICAgbXVsdGk9e211bHRpfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSA9IFtdKSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKG11bHRpID8gdmFsdWUgOiB2YWx1ZVswXSk7XG4gICAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9KTtcbiJdfQ==
