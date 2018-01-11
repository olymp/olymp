'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message3 = require('antd/lib/message');

var _message4 = _interopRequireDefault(_message3);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/message/style');

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = (0, _recompose.withPropsOnChange)(['uploading', 'cloudinaryRequest', 'folder', 'tags'], function (_ref) {
  var cloudinaryRequest = _ref.cloudinaryRequest,
      done = _ref.done,
      folder2 = _ref.folder,
      tags = _ref.tags,
      refetchKey = _ref.refetchKey,
      setUploading = _ref.setUploading,
      uploading = _ref.uploading,
      setSelection = _ref.setSelection,
      addSelection = _ref.addSelection;

  var saveProgress = function saveProgress(file) {
    return setUploading([].concat(_toConsumableArray(uploading.filter(function (x) {
      return x.name !== file.name;
    })), [{
      name: file.name,
      percent: file.percent,
      size: file.size,
      status: file.status,
      response: file.response
    }]));
  };

  if (!cloudinaryRequest) {
    return {};
  }

  var apiKey = cloudinaryRequest.apiKey,
      signature = cloudinaryRequest.signature,
      timestamp = cloudinaryRequest.timestamp,
      url = cloudinaryRequest.url,
      folder = cloudinaryRequest.folder;

  return {
    upload: {
      showUploadList: false,
      multiple: true,
      data: {
        api_key: apiKey,
        signature: signature,
        timestamp: timestamp,
        folder: folder
      },
      action: url,
      beforeUpload: function beforeUpload() {
        setSelection([]);
      },
      onChange: function onChange(_ref2) {
        var file = _ref2.file;

        if (file.status === 'uploading' && file.percent < 100) {
          // save upload-state to state
          saveProgress(file);
        } else if (file.status === 'done') {
          // Write data in DB
          var response = _extends({}, file.response);
          response.id = response.public_id;
          done({
            id: response.id,
            token: signature,
            tags: tags,
            folder: folder2 ? folder2.split('/').filter(function (x, i) {
              return i !== 0;
            }).join('/') : null
          }).then(function (_ref3) {
            var data = _ref3.data;

            if (data && data.cloudinaryRequestDone) {
              addSelection(data.cloudinaryRequestDone.id);
              refetchKey();

              // show message if a file uploaded
              saveProgress(file);
              _message4.default.success(file.name + ' erfolgreich hochgeladen.');
            }
            // remove file from uploading
            setUploading(uploading.filter(function (x) {
              return x.name !== file.name;
            }));
          });
        } else if (file.status === 'error') {
          console.log('error');
          _message4.default.error(file.name + ' file upload failed.');
        }
      }
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9jbG91ZGluYXJ5L3ZpZXdzL3VwbG9hZC5lczYiXSwibmFtZXMiOlsiY2xvdWRpbmFyeVJlcXVlc3QiLCJkb25lIiwiZm9sZGVyMiIsImZvbGRlciIsInRhZ3MiLCJyZWZldGNoS2V5Iiwic2V0VXBsb2FkaW5nIiwidXBsb2FkaW5nIiwic2V0U2VsZWN0aW9uIiwiYWRkU2VsZWN0aW9uIiwic2F2ZVByb2dyZXNzIiwiZmlsdGVyIiwieCIsIm5hbWUiLCJmaWxlIiwicGVyY2VudCIsInNpemUiLCJzdGF0dXMiLCJyZXNwb25zZSIsImFwaUtleSIsInNpZ25hdHVyZSIsInRpbWVzdGFtcCIsInVybCIsInVwbG9hZCIsInNob3dVcGxvYWRMaXN0IiwibXVsdGlwbGUiLCJkYXRhIiwiYXBpX2tleSIsImFjdGlvbiIsImJlZm9yZVVwbG9hZCIsIm9uQ2hhbmdlIiwiaWQiLCJwdWJsaWNfaWQiLCJ0b2tlbiIsInNwbGl0IiwiaSIsImpvaW4iLCJ0aGVuIiwiY2xvdWRpbmFyeVJlcXVlc3REb25lIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O2tCQUVlLGtDQUNiLENBQUMsV0FBRCxFQUFjLG1CQUFkLEVBQW1DLFFBQW5DLEVBQTZDLE1BQTdDLENBRGEsRUFFYixnQkFVTTtBQUFBLE1BVEpBLGlCQVNJLFFBVEpBLGlCQVNJO0FBQUEsTUFSSkMsSUFRSSxRQVJKQSxJQVFJO0FBQUEsTUFQSUMsT0FPSixRQVBKQyxNQU9JO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsWUFJSSxRQUpKQSxZQUlJO0FBQUEsTUFISkMsU0FHSSxRQUhKQSxTQUdJO0FBQUEsTUFGSkMsWUFFSSxRQUZKQSxZQUVJO0FBQUEsTUFESkMsWUFDSSxRQURKQSxZQUNJOztBQUNKLE1BQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFdBQ25CSiwwQ0FDS0MsVUFBVUksTUFBVixDQUFpQjtBQUFBLGFBQUtDLEVBQUVDLElBQUYsS0FBV0MsS0FBS0QsSUFBckI7QUFBQSxLQUFqQixDQURMLElBRUU7QUFDRUEsWUFBTUMsS0FBS0QsSUFEYjtBQUVFRSxlQUFTRCxLQUFLQyxPQUZoQjtBQUdFQyxZQUFNRixLQUFLRSxJQUhiO0FBSUVDLGNBQVFILEtBQUtHLE1BSmY7QUFLRUMsZ0JBQVVKLEtBQUtJO0FBTGpCLEtBRkYsR0FEbUI7QUFBQSxHQUFyQjs7QUFZQSxNQUFJLENBQUNsQixpQkFBTCxFQUF3QjtBQUN0QixXQUFPLEVBQVA7QUFDRDs7QUFmRyxNQWlCSW1CLE1BakJKLEdBaUJrRG5CLGlCQWpCbEQsQ0FpQkltQixNQWpCSjtBQUFBLE1BaUJZQyxTQWpCWixHQWlCa0RwQixpQkFqQmxELENBaUJZb0IsU0FqQlo7QUFBQSxNQWlCdUJDLFNBakJ2QixHQWlCa0RyQixpQkFqQmxELENBaUJ1QnFCLFNBakJ2QjtBQUFBLE1BaUJrQ0MsR0FqQmxDLEdBaUJrRHRCLGlCQWpCbEQsQ0FpQmtDc0IsR0FqQmxDO0FBQUEsTUFpQnVDbkIsTUFqQnZDLEdBaUJrREgsaUJBakJsRCxDQWlCdUNHLE1BakJ2Qzs7QUFrQkosU0FBTztBQUNMb0IsWUFBUTtBQUNOQyxzQkFBZ0IsS0FEVjtBQUVOQyxnQkFBVSxJQUZKO0FBR05DLFlBQU07QUFDSkMsaUJBQVNSLE1BREw7QUFFSkMsNEJBRkk7QUFHSkMsNEJBSEk7QUFJSmxCO0FBSkksT0FIQTtBQVNOeUIsY0FBUU4sR0FURjtBQVVOTyxvQkFBYyx3QkFBTTtBQUNsQnJCLHFCQUFhLEVBQWI7QUFDRCxPQVpLO0FBYU5zQixnQkFBVSx5QkFBYztBQUFBLFlBQVhoQixJQUFXLFNBQVhBLElBQVc7O0FBQ3RCLFlBQUlBLEtBQUtHLE1BQUwsS0FBZ0IsV0FBaEIsSUFBK0JILEtBQUtDLE9BQUwsR0FBZSxHQUFsRCxFQUF1RDtBQUNyRDtBQUNBTCx1QkFBYUksSUFBYjtBQUNELFNBSEQsTUFHTyxJQUFJQSxLQUFLRyxNQUFMLEtBQWdCLE1BQXBCLEVBQTRCO0FBQ2pDO0FBQ0EsY0FBTUMsd0JBQWdCSixLQUFLSSxRQUFyQixDQUFOO0FBQ0FBLG1CQUFTYSxFQUFULEdBQWNiLFNBQVNjLFNBQXZCO0FBQ0EvQixlQUFLO0FBQ0g4QixnQkFBSWIsU0FBU2EsRUFEVjtBQUVIRSxtQkFBT2IsU0FGSjtBQUdIaEIsc0JBSEc7QUFJSEQsb0JBQVFELFVBQ0pBLFFBQ0dnQyxLQURILENBQ1MsR0FEVCxFQUVHdkIsTUFGSCxDQUVVLFVBQUNDLENBQUQsRUFBSXVCLENBQUo7QUFBQSxxQkFBVUEsTUFBTSxDQUFoQjtBQUFBLGFBRlYsRUFHR0MsSUFISCxDQUdRLEdBSFIsQ0FESSxHQUtKO0FBVEQsV0FBTCxFQVVHQyxJQVZILENBVVEsaUJBQWM7QUFBQSxnQkFBWFgsSUFBVyxTQUFYQSxJQUFXOztBQUNwQixnQkFBSUEsUUFBUUEsS0FBS1kscUJBQWpCLEVBQXdDO0FBQ3RDN0IsMkJBQWFpQixLQUFLWSxxQkFBTCxDQUEyQlAsRUFBeEM7QUFDQTFCOztBQUVBO0FBQ0FLLDJCQUFhSSxJQUFiO0FBQ0EsZ0NBQVF5QixPQUFSLENBQW1CekIsS0FBS0QsSUFBeEI7QUFDRDtBQUNEO0FBQ0FQLHlCQUFhQyxVQUFVSSxNQUFWLENBQWlCO0FBQUEscUJBQUtDLEVBQUVDLElBQUYsS0FBV0MsS0FBS0QsSUFBckI7QUFBQSxhQUFqQixDQUFiO0FBQ0QsV0FyQkQ7QUFzQkQsU0ExQk0sTUEwQkEsSUFBSUMsS0FBS0csTUFBTCxLQUFnQixPQUFwQixFQUE2QjtBQUNsQ3VCLGtCQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLDRCQUFRQyxLQUFSLENBQWlCNUIsS0FBS0QsSUFBdEI7QUFDRDtBQUNGO0FBL0NLO0FBREgsR0FBUDtBQW1ERCxDQWpGWSxDIiwiZmlsZSI6ImNtcy9jbG91ZGluYXJ5L3ZpZXdzL3VwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHdpdGhQcm9wc09uQ2hhbmdlIH0gZnJvbSAncmVjb21wb3NlJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFByb3BzT25DaGFuZ2UoXG4gIFsndXBsb2FkaW5nJywgJ2Nsb3VkaW5hcnlSZXF1ZXN0JywgJ2ZvbGRlcicsICd0YWdzJ10sXG4gICh7XG4gICAgY2xvdWRpbmFyeVJlcXVlc3QsXG4gICAgZG9uZSxcbiAgICBmb2xkZXI6IGZvbGRlcjIsXG4gICAgdGFncyxcbiAgICByZWZldGNoS2V5LFxuICAgIHNldFVwbG9hZGluZyxcbiAgICB1cGxvYWRpbmcsXG4gICAgc2V0U2VsZWN0aW9uLFxuICAgIGFkZFNlbGVjdGlvbixcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHNhdmVQcm9ncmVzcyA9IGZpbGUgPT5cbiAgICAgIHNldFVwbG9hZGluZyhbXG4gICAgICAgIC4uLnVwbG9hZGluZy5maWx0ZXIoeCA9PiB4Lm5hbWUgIT09IGZpbGUubmFtZSksXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgcGVyY2VudDogZmlsZS5wZXJjZW50LFxuICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICBzdGF0dXM6IGZpbGUuc3RhdHVzLFxuICAgICAgICAgIHJlc3BvbnNlOiBmaWxlLnJlc3BvbnNlLFxuICAgICAgICB9LFxuICAgICAgXSk7XG5cbiAgICBpZiAoIWNsb3VkaW5hcnlSZXF1ZXN0KSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgY29uc3QgeyBhcGlLZXksIHNpZ25hdHVyZSwgdGltZXN0YW1wLCB1cmwsIGZvbGRlciB9ID0gY2xvdWRpbmFyeVJlcXVlc3Q7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwbG9hZDoge1xuICAgICAgICBzaG93VXBsb2FkTGlzdDogZmFsc2UsXG4gICAgICAgIG11bHRpcGxlOiB0cnVlLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYXBpX2tleTogYXBpS2V5LFxuICAgICAgICAgIHNpZ25hdHVyZSxcbiAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgZm9sZGVyLFxuICAgICAgICB9LFxuICAgICAgICBhY3Rpb246IHVybCxcbiAgICAgICAgYmVmb3JlVXBsb2FkOiAoKSA9PiB7XG4gICAgICAgICAgc2V0U2VsZWN0aW9uKFtdKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2U6ICh7IGZpbGUgfSkgPT4ge1xuICAgICAgICAgIGlmIChmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycgJiYgZmlsZS5wZXJjZW50IDwgMTAwKSB7XG4gICAgICAgICAgICAvLyBzYXZlIHVwbG9hZC1zdGF0ZSB0byBzdGF0ZVxuICAgICAgICAgICAgc2F2ZVByb2dyZXNzKGZpbGUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZmlsZS5zdGF0dXMgPT09ICdkb25lJykge1xuICAgICAgICAgICAgLy8gV3JpdGUgZGF0YSBpbiBEQlxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7IC4uLmZpbGUucmVzcG9uc2UgfTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmlkID0gcmVzcG9uc2UucHVibGljX2lkO1xuICAgICAgICAgICAgZG9uZSh7XG4gICAgICAgICAgICAgIGlkOiByZXNwb25zZS5pZCxcbiAgICAgICAgICAgICAgdG9rZW46IHNpZ25hdHVyZSxcbiAgICAgICAgICAgICAgdGFncyxcbiAgICAgICAgICAgICAgZm9sZGVyOiBmb2xkZXIyXG4gICAgICAgICAgICAgICAgPyBmb2xkZXIyXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHgsIGkpID0+IGkgIT09IDApXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmNsb3VkaW5hcnlSZXF1ZXN0RG9uZSkge1xuICAgICAgICAgICAgICAgIGFkZFNlbGVjdGlvbihkYXRhLmNsb3VkaW5hcnlSZXF1ZXN0RG9uZS5pZCk7XG4gICAgICAgICAgICAgICAgcmVmZXRjaEtleSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2hvdyBtZXNzYWdlIGlmIGEgZmlsZSB1cGxvYWRlZFxuICAgICAgICAgICAgICAgIHNhdmVQcm9ncmVzcyhmaWxlKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoYCR7ZmlsZS5uYW1lfSBlcmZvbGdyZWljaCBob2NoZ2VsYWRlbi5gKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyByZW1vdmUgZmlsZSBmcm9tIHVwbG9hZGluZ1xuICAgICAgICAgICAgICBzZXRVcGxvYWRpbmcodXBsb2FkaW5nLmZpbHRlcih4ID0+IHgubmFtZSAhPT0gZmlsZS5uYW1lKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZpbGUuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoYCR7ZmlsZS5uYW1lfSBmaWxlIHVwbG9hZCBmYWlsZWQuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuKTtcbiJdfQ==
