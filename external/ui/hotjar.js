import React from 'react';
import { Helmet } from 'react-helmet';

export default (function (_ref) {
  var children = _ref.children,
      id = _ref.id;
  return React.createElement(
    Helmet,
    null,
    id && React.createElement(
      'script',
      null,
      '\n            (function(h,o,t,j,a,r){\n              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n              h._hjSettings={hjid:' + id + ',hjsv:5};\n              a=o.getElementsByTagName(\'head\')[0];\n              r=o.createElement(\'script\');r.async=1;\n              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n              a.appendChild(r);\n            })(window,document,\'//static.hotjar.com/c/hotjar-\',\'.js?sv=\');\n          '
    )
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3VpL2hvdGphci5lczYiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWxtZXQiLCJjaGlsZHJlbiIsImlkIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsTUFBVCxRQUF1QixjQUF2Qjs7QUFFQSxnQkFBZTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLEVBQWIsUUFBYUEsRUFBYjtBQUFBLFNBQ1o7QUFBQyxVQUFEO0FBQUE7QUFDRUEsVUFDQztBQUFBO0FBQUE7QUFBQSwrSkFJOEJBLEVBSjlCO0FBQUE7QUFGSCxHQURZO0FBQUEsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy91aS9ob3RqYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIGlkIH0pID0+XG4gICg8SGVsbWV0PlxuICAgIHtpZCAmJlxuICAgICAgPHNjcmlwdD5cbiAgICAgICAge2BcbiAgICAgICAgICAgIChmdW5jdGlvbihoLG8sdCxqLGEscil7XG4gICAgICAgICAgICAgIGguaGo9aC5oanx8ZnVuY3Rpb24oKXsoaC5oai5xPWguaGoucXx8W10pLnB1c2goYXJndW1lbnRzKX07XG4gICAgICAgICAgICAgIGguX2hqU2V0dGluZ3M9e2hqaWQ6JHtpZH0saGpzdjo1fTtcbiAgICAgICAgICAgICAgYT1vLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgICAgICAgIHI9by5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtyLmFzeW5jPTE7XG4gICAgICAgICAgICAgIHIuc3JjPXQraC5faGpTZXR0aW5ncy5oamlkK2oraC5faGpTZXR0aW5ncy5oanN2O1xuICAgICAgICAgICAgICBhLmFwcGVuZENoaWxkKHIpO1xuICAgICAgICAgICAgfSkod2luZG93LGRvY3VtZW50LCcvL3N0YXRpYy5ob3RqYXIuY29tL2MvaG90amFyLScsJy5qcz9zdj0nKTtcbiAgICAgICAgICBgfVxuICAgICAgPC9zY3JpcHQ+fVxuICA8L0hlbG1ldD4pO1xuIl19
