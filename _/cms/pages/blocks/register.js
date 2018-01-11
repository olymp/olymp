'use strict';

var _olympSlate = require('olymp-slate');

var _image = require('./image');

var _accordion = require('./accordion');

var _columns = require('./columns');

var _toc = require('./toc');

var _toc2 = _interopRequireDefault(_toc);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _containerText = require('./container-text');

var _containerText2 = _interopRequireDefault(_containerText);

var _binding = require('./binding');

var _binding2 = _interopRequireDefault(_binding);

var _line = require('./line');

var _line2 = _interopRequireDefault(_line);

var _maps = require('./maps');

var _maps2 = _interopRequireDefault(_maps);

var _gallery = require('./gallery');

var _gallery2 = _interopRequireDefault(_gallery);

var _cardLink = require('./card-link');

var _cardLink2 = _interopRequireDefault(_cardLink);

var _link = require('./link');

var _link2 = _interopRequireDefault(_link);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _header3 = require('./header2');

var _header4 = _interopRequireDefault(_header3);

var _carousel = require('./carousel');

var _carousel2 = _interopRequireDefault(_carousel);

var _banner = require('./banner');

var _banner2 = _interopRequireDefault(_banner);

var _youtube = require('./youtube');

var _youtube2 = _interopRequireDefault(_youtube);

var _children = require('./children');

var _children2 = _interopRequireDefault(_children);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_olympSlate.registry.add(_toc2.default, _image.ImageBlock, _image.ImageBlockImage, _image.ImageBlockLabel, _accordion.AccordionBlock, _accordion.AccordionLabelBlock, _accordion.AccordionTextBlock, _columns.ColumnsBlock, _columns.ColumnsColumnBlock, _container2.default, _containerText2.default, _binding2.default, _line2.default, _maps2.default, _gallery2.default, _cardLink2.default, _link2.default, _header2.default, _header4.default, _carousel2.default, _banner2.default, _youtube2.default, _children2.default);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9wYWdlcy9ibG9ja3MvcmVnaXN0ZXIuZXM2Il0sIm5hbWVzIjpbImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7QUFDQTs7QUFLQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLHFCQUFTQSxHQUFUIiwiZmlsZSI6ImNtcy9wYWdlcy9ibG9ja3MvcmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RyeSB9IGZyb20gJ29seW1wLXNsYXRlJztcblxuaW1wb3J0IHsgSW1hZ2VCbG9jaywgSW1hZ2VCbG9ja0ltYWdlLCBJbWFnZUJsb2NrTGFiZWwgfSBmcm9tICcuL2ltYWdlJztcbmltcG9ydCB7XG4gIEFjY29yZGlvbkJsb2NrLFxuICBBY2NvcmRpb25MYWJlbEJsb2NrLFxuICBBY2NvcmRpb25UZXh0QmxvY2ssXG59IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7IENvbHVtbnNCbG9jaywgQ29sdW1uc0NvbHVtbkJsb2NrIH0gZnJvbSAnLi9jb2x1bW5zJztcbmltcG9ydCBUb2NCbG9jayBmcm9tICcuL3RvYyc7XG5pbXBvcnQgQ29udGFpbmVyQmxvY2sgZnJvbSAnLi9jb250YWluZXInO1xuaW1wb3J0IENvbnRhaW5lclRleHRCbG9jayBmcm9tICcuL2NvbnRhaW5lci10ZXh0JztcbmltcG9ydCBUZXh0QmluZGluZ0Jsb2NrIGZyb20gJy4vYmluZGluZyc7XG5pbXBvcnQgTGluZUJsb2NrIGZyb20gJy4vbGluZSc7XG5pbXBvcnQgTWFwc0Jsb2NrIGZyb20gJy4vbWFwcyc7XG5pbXBvcnQgR2FsbGVyeUJsb2NrIGZyb20gJy4vZ2FsbGVyeSc7XG5pbXBvcnQgQ2FyZExpbmtCbG9jayBmcm9tICcuL2NhcmQtbGluayc7XG5pbXBvcnQgTGlua0Jsb2NrIGZyb20gJy4vbGluayc7XG5pbXBvcnQgSGVhZGVyQmxvY2sgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IEhlYWRlcjJCbG9jayBmcm9tICcuL2hlYWRlcjInO1xuaW1wb3J0IENhcm91c2VsQmxvY2sgZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQgQmFubmVyQmxvY2sgZnJvbSAnLi9iYW5uZXInO1xuaW1wb3J0IFlvdXR1YmVCbG9jayBmcm9tICcuL3lvdXR1YmUnO1xuaW1wb3J0IENoaWxkcmVuQmxvY2sgZnJvbSAnLi9jaGlsZHJlbic7XG5cbnJlZ2lzdHJ5LmFkZChcbiAgVG9jQmxvY2ssXG4gIEltYWdlQmxvY2ssXG4gIEltYWdlQmxvY2tJbWFnZSxcbiAgSW1hZ2VCbG9ja0xhYmVsLFxuICBBY2NvcmRpb25CbG9jayxcbiAgQWNjb3JkaW9uTGFiZWxCbG9jayxcbiAgQWNjb3JkaW9uVGV4dEJsb2NrLFxuICBDb2x1bW5zQmxvY2ssXG4gIENvbHVtbnNDb2x1bW5CbG9jayxcbiAgQ29udGFpbmVyQmxvY2ssXG4gIENvbnRhaW5lclRleHRCbG9jayxcbiAgVGV4dEJpbmRpbmdCbG9jayxcbiAgTGluZUJsb2NrLFxuICBNYXBzQmxvY2ssXG4gIEdhbGxlcnlCbG9jayxcbiAgQ2FyZExpbmtCbG9jayxcbiAgTGlua0Jsb2NrLFxuICBIZWFkZXJCbG9jayxcbiAgSGVhZGVyMkJsb2NrLFxuICBDYXJvdXNlbEJsb2NrLFxuICBCYW5uZXJCbG9jayxcbiAgWW91dHViZUJsb2NrLFxuICBDaGlsZHJlbkJsb2NrLFxuKTtcbiJdfQ==
