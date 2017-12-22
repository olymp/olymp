var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    query file($id: String) {\n      item: file(id: $id) {\n        id\n        publicId\n        url\n        tags\n        folder\n        colors\n        width\n        height\n        createdAt\n        caption\n        source\n        format\n        bytes\n      }\n    }\n  '], ['\n    query file($id: String) {\n      item: file(id: $id) {\n        id\n        publicId\n        url\n        tags\n        folder\n        colors\n        width\n        height\n        createdAt\n        caption\n        source\n        format\n        bytes\n      }\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    query fileList {\n      items: fileList {\n        id\n        publicId\n        url\n        tags\n        folder\n        colors\n        width\n        height\n        createdAt\n        caption\n        source\n        format\n        bytes\n        removed\n      }\n    }\n  '], ['\n    query fileList {\n      items: fileList {\n        id\n        publicId\n        url\n        tags\n        folder\n        colors\n        width\n        height\n        createdAt\n        caption\n        source\n        format\n        bytes\n        removed\n      }\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    query fileTags($folder: String) {\n      fileTags(folder: $folder)\n    }\n  '], ['\n    query fileTags($folder: String) {\n      fileTags(folder: $folder)\n    }\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    query cloudinaryRequest {\n      cloudinaryRequest {\n        apiKey\n        url\n        signature\n        timestamp\n        folder\n      }\n    }\n  '], ['\n    query cloudinaryRequest {\n      cloudinaryRequest {\n        apiKey\n        url\n        signature\n        timestamp\n        folder\n      }\n    }\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export default graphql(gql(_templateObject), {
  options: function options(_ref) {
    var id = _ref.id,
        mediaId = _ref.mediaId,
        query = _ref.query;
    return {
      variables: { id: mediaId }
    };
  },
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        data = _ref2.data;
    return _extends({}, ownProps, {
      item: data.item,
      data: data
    });
  }
});

export var queryMedias = graphql(gql(_templateObject2), {
  props: function props(_ref3) {
    var ownProps = _ref3.ownProps,
        data = _ref3.data;
    return _extends({}, ownProps, {
      items: data.items || [],
      data: data
    });
  }
});
export var queryTags = graphql(gql(_templateObject3), {
  options: function options(_ref4) {
    var folder = _ref4.folder;
    return {
      variables: {
        folder: folder ? folder.split('/').filter(function (x, i) {
          return i !== 0;
        }).join('/') : undefined
      }
    };
  },
  props: function props(_ref5) {
    var ownProps = _ref5.ownProps,
        data = _ref5.data;
    return _extends({}, ownProps, {
      fileTags: data.fileTags || [],
      data: data
    });
  }
});

export var cloudinaryRequest = graphql(gql(_templateObject4), {
  options: function options() {
    return {
      fetchPolicy: 'network-only'
    };
  },
  props: function props(_ref6) {
    var ownProps = _ref6.ownProps,
        data = _ref6.data;
    return _extends({}, ownProps, {
      refetchKey: data.refetch,
      cloudinaryRequest: data.cloudinaryRequest
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvZ3FsL3F1ZXJ5LmVzNiJdLCJuYW1lcyI6WyJncWwiLCJncmFwaHFsIiwib3B0aW9ucyIsImlkIiwibWVkaWFJZCIsInF1ZXJ5IiwidmFyaWFibGVzIiwicHJvcHMiLCJvd25Qcm9wcyIsImRhdGEiLCJpdGVtIiwicXVlcnlNZWRpYXMiLCJpdGVtcyIsInF1ZXJ5VGFncyIsImZvbGRlciIsInNwbGl0IiwiZmlsdGVyIiwieCIsImkiLCJqb2luIiwidW5kZWZpbmVkIiwiZmlsZVRhZ3MiLCJjbG91ZGluYXJ5UmVxdWVzdCIsImZldGNoUG9saWN5IiwicmVmZXRjaEtleSIsInJlZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU9BLEdBQVAsTUFBZ0IsYUFBaEI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGNBQXhCOztBQUVBLGVBQWVBLFFBQ2JELEdBRGEsbUJBb0JiO0FBQ0VFLFdBQVM7QUFBQSxRQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxRQUFPQyxPQUFQLFFBQU9BLE9BQVA7QUFBQSxRQUFnQkMsS0FBaEIsUUFBZ0JBLEtBQWhCO0FBQUEsV0FBNkI7QUFDcENDLGlCQUFXLEVBQUVILElBQUlDLE9BQU47QUFEeUIsS0FBN0I7QUFBQSxHQURYO0FBSUVHLFNBQU87QUFBQSxRQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxRQUFhQyxJQUFiLFNBQWFBLElBQWI7QUFBQSx3QkFDRkQsUUFERTtBQUVMRSxZQUFNRCxLQUFLQyxJQUZOO0FBR0xEO0FBSEs7QUFBQTtBQUpULENBcEJhLENBQWY7O0FBZ0NBLE9BQU8sSUFBTUUsY0FBY1YsUUFDekJELEdBRHlCLG9CQXFCekI7QUFDRU8sU0FBTztBQUFBLFFBQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFFBQWFDLElBQWIsU0FBYUEsSUFBYjtBQUFBLHdCQUNGRCxRQURFO0FBRUxJLGFBQU9ILEtBQUtHLEtBQUwsSUFBYyxFQUZoQjtBQUdMSDtBQUhLO0FBQUE7QUFEVCxDQXJCeUIsQ0FBcEI7QUE2QlAsT0FBTyxJQUFNSSxZQUFZWixRQUN2QkQsR0FEdUIsb0JBTXZCO0FBQ0VFLFdBQVM7QUFBQSxRQUFHWSxNQUFILFNBQUdBLE1BQUg7QUFBQSxXQUFpQjtBQUN4QlIsaUJBQVc7QUFDVFEsZ0JBQVFBLFNBQ0pBLE9BQ0dDLEtBREgsQ0FDUyxHQURULEVBRUdDLE1BRkgsQ0FFVSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxpQkFBVUEsTUFBTSxDQUFoQjtBQUFBLFNBRlYsRUFHR0MsSUFISCxDQUdRLEdBSFIsQ0FESSxHQUtKQztBQU5LO0FBRGEsS0FBakI7QUFBQSxHQURYO0FBV0ViLFNBQU87QUFBQSxRQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxRQUFhQyxJQUFiLFNBQWFBLElBQWI7QUFBQSx3QkFDRkQsUUFERTtBQUVMYSxnQkFBVVosS0FBS1ksUUFBTCxJQUFpQixFQUZ0QjtBQUdMWjtBQUhLO0FBQUE7QUFYVCxDQU51QixDQUFsQjs7QUF5QlAsT0FBTyxJQUFNYSxvQkFBb0JyQixRQUMvQkQsR0FEK0Isb0JBWS9CO0FBQ0VFLFdBQVM7QUFBQSxXQUFPO0FBQ2RxQixtQkFBYTtBQURDLEtBQVA7QUFBQSxHQURYO0FBSUVoQixTQUFPO0FBQUEsUUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsUUFBYUMsSUFBYixTQUFhQSxJQUFiO0FBQUEsd0JBQ0ZELFFBREU7QUFFTGdCLGtCQUFZZixLQUFLZ0IsT0FGWjtBQUdMSCx5QkFBbUJiLEtBQUthO0FBSG5CO0FBQUE7QUFKVCxDQVorQixDQUExQiIsImZpbGUiOiJwYWNrYWdlcy9jbG91ZGluYXJ5L2dxbC9xdWVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoXG4gIGdxbGBcbiAgICBxdWVyeSBmaWxlKCRpZDogU3RyaW5nKSB7XG4gICAgICBpdGVtOiBmaWxlKGlkOiAkaWQpIHtcbiAgICAgICAgaWRcbiAgICAgICAgcHVibGljSWRcbiAgICAgICAgdXJsXG4gICAgICAgIHRhZ3NcbiAgICAgICAgZm9sZGVyXG4gICAgICAgIGNvbG9yc1xuICAgICAgICB3aWR0aFxuICAgICAgICBoZWlnaHRcbiAgICAgICAgY3JlYXRlZEF0XG4gICAgICAgIGNhcHRpb25cbiAgICAgICAgc291cmNlXG4gICAgICAgIGZvcm1hdFxuICAgICAgICBieXRlc1xuICAgICAgfVxuICAgIH1cbiAgYCxcbiAge1xuICAgIG9wdGlvbnM6ICh7IGlkLCBtZWRpYUlkLCBxdWVyeSB9KSA9PiAoe1xuICAgICAgdmFyaWFibGVzOiB7IGlkOiBtZWRpYUlkIH0sXG4gICAgfSksXG4gICAgcHJvcHM6ICh7IG93blByb3BzLCBkYXRhIH0pID0+ICh7XG4gICAgICAuLi5vd25Qcm9wcyxcbiAgICAgIGl0ZW06IGRhdGEuaXRlbSxcbiAgICAgIGRhdGEsXG4gICAgfSksXG4gIH0sXG4pO1xuXG5leHBvcnQgY29uc3QgcXVlcnlNZWRpYXMgPSBncmFwaHFsKFxuICBncWxgXG4gICAgcXVlcnkgZmlsZUxpc3Qge1xuICAgICAgaXRlbXM6IGZpbGVMaXN0IHtcbiAgICAgICAgaWRcbiAgICAgICAgcHVibGljSWRcbiAgICAgICAgdXJsXG4gICAgICAgIHRhZ3NcbiAgICAgICAgZm9sZGVyXG4gICAgICAgIGNvbG9yc1xuICAgICAgICB3aWR0aFxuICAgICAgICBoZWlnaHRcbiAgICAgICAgY3JlYXRlZEF0XG4gICAgICAgIGNhcHRpb25cbiAgICAgICAgc291cmNlXG4gICAgICAgIGZvcm1hdFxuICAgICAgICBieXRlc1xuICAgICAgICByZW1vdmVkXG4gICAgICB9XG4gICAgfVxuICBgLFxuICB7XG4gICAgcHJvcHM6ICh7IG93blByb3BzLCBkYXRhIH0pID0+ICh7XG4gICAgICAuLi5vd25Qcm9wcyxcbiAgICAgIGl0ZW1zOiBkYXRhLml0ZW1zIHx8IFtdLFxuICAgICAgZGF0YSxcbiAgICB9KSxcbiAgfSxcbik7XG5leHBvcnQgY29uc3QgcXVlcnlUYWdzID0gZ3JhcGhxbChcbiAgZ3FsYFxuICAgIHF1ZXJ5IGZpbGVUYWdzKCRmb2xkZXI6IFN0cmluZykge1xuICAgICAgZmlsZVRhZ3MoZm9sZGVyOiAkZm9sZGVyKVxuICAgIH1cbiAgYCxcbiAge1xuICAgIG9wdGlvbnM6ICh7IGZvbGRlciB9KSA9PiAoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGZvbGRlcjogZm9sZGVyXG4gICAgICAgICAgPyBmb2xkZXJcbiAgICAgICAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgICAgICAgLmZpbHRlcigoeCwgaSkgPT4gaSAhPT0gMClcbiAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcm9wczogKHsgb3duUHJvcHMsIGRhdGEgfSkgPT4gKHtcbiAgICAgIC4uLm93blByb3BzLFxuICAgICAgZmlsZVRhZ3M6IGRhdGEuZmlsZVRhZ3MgfHwgW10sXG4gICAgICBkYXRhLFxuICAgIH0pLFxuICB9LFxuKTtcblxuZXhwb3J0IGNvbnN0IGNsb3VkaW5hcnlSZXF1ZXN0ID0gZ3JhcGhxbChcbiAgZ3FsYFxuICAgIHF1ZXJ5IGNsb3VkaW5hcnlSZXF1ZXN0IHtcbiAgICAgIGNsb3VkaW5hcnlSZXF1ZXN0IHtcbiAgICAgICAgYXBpS2V5XG4gICAgICAgIHVybFxuICAgICAgICBzaWduYXR1cmVcbiAgICAgICAgdGltZXN0YW1wXG4gICAgICAgIGZvbGRlclxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAge1xuICAgIG9wdGlvbnM6ICgpID0+ICh7XG4gICAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXG4gICAgfSksXG4gICAgcHJvcHM6ICh7IG93blByb3BzLCBkYXRhIH0pID0+ICh7XG4gICAgICAuLi5vd25Qcm9wcyxcbiAgICAgIHJlZmV0Y2hLZXk6IGRhdGEucmVmZXRjaCxcbiAgICAgIGNsb3VkaW5hcnlSZXF1ZXN0OiBkYXRhLmNsb3VkaW5hcnlSZXF1ZXN0LFxuICAgIH0pLFxuICB9LFxuKTtcbiJdfQ==
