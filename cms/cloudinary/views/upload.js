import 'antd/lib/message/style';
import _message2 from 'antd/lib/message';
import 'antd/lib/message/style';
import _message from 'antd/lib/message';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import { withPropsOnChange } from 'recompose';

export default withPropsOnChange(['uploading', 'cloudinaryRequest', 'folder', 'tags'], function (_ref) {
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
              _message.success(file.name + ' erfolgreich hochgeladen.');
            }
            // remove file from uploading
            setUploading(uploading.filter(function (x) {
              return x.name !== file.name;
            }));
          });
        } else if (file.status === 'error') {
          console.log('error');
          _message2.error(file.name + ' file upload failed.');
        }
      }
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2Nsb3VkaW5hcnkvdmlld3MvdXBsb2FkLmVzNiJdLCJuYW1lcyI6WyJ3aXRoUHJvcHNPbkNoYW5nZSIsImNsb3VkaW5hcnlSZXF1ZXN0IiwiZG9uZSIsImZvbGRlcjIiLCJmb2xkZXIiLCJ0YWdzIiwicmVmZXRjaEtleSIsInNldFVwbG9hZGluZyIsInVwbG9hZGluZyIsInNldFNlbGVjdGlvbiIsImFkZFNlbGVjdGlvbiIsInNhdmVQcm9ncmVzcyIsImZpbHRlciIsIngiLCJuYW1lIiwiZmlsZSIsInBlcmNlbnQiLCJzaXplIiwic3RhdHVzIiwicmVzcG9uc2UiLCJhcGlLZXkiLCJzaWduYXR1cmUiLCJ0aW1lc3RhbXAiLCJ1cmwiLCJ1cGxvYWQiLCJzaG93VXBsb2FkTGlzdCIsIm11bHRpcGxlIiwiZGF0YSIsImFwaV9rZXkiLCJhY3Rpb24iLCJiZWZvcmVVcGxvYWQiLCJvbkNoYW5nZSIsImlkIiwicHVibGljX2lkIiwidG9rZW4iLCJzcGxpdCIsImkiLCJqb2luIiwidGhlbiIsImNsb3VkaW5hcnlSZXF1ZXN0RG9uZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLFNBQVNBLGlCQUFULFFBQWtDLFdBQWxDOztBQUVBLGVBQWVBLGtCQUNiLENBQUMsV0FBRCxFQUFjLG1CQUFkLEVBQW1DLFFBQW5DLEVBQTZDLE1BQTdDLENBRGEsRUFFYixnQkFVTTtBQUFBLE1BVEpDLGlCQVNJLFFBVEpBLGlCQVNJO0FBQUEsTUFSSkMsSUFRSSxRQVJKQSxJQVFJO0FBQUEsTUFQSUMsT0FPSixRQVBKQyxNQU9JO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsVUFLSSxRQUxKQSxVQUtJO0FBQUEsTUFKSkMsWUFJSSxRQUpKQSxZQUlJO0FBQUEsTUFISkMsU0FHSSxRQUhKQSxTQUdJO0FBQUEsTUFGSkMsWUFFSSxRQUZKQSxZQUVJO0FBQUEsTUFESkMsWUFDSSxRQURK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OlsiaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgd2l0aFByb3BzT25DaGFuZ2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUHJvcHNPbkNoYW5nZShcbiAgWyd1cGxvYWRpbmcnLCAnY2xvdWRpbmFyeVJlcXVlc3QnLCAnZm9sZGVyJywgJ3RhZ3MnXSxcbiAgKHtcbiAgICBjbG91ZGluYXJ5UmVxdWVzdCxcbiAgICBkb25lLFxuICAgIGZvbGRlcjogZm9sZGVyMixcbiAgICB0YWdzLFxuICAgIHJlZmV0Y2hLZXksXG4gICAgc2V0VXBsb2FkaW5nLFxuICAgIHVwbG9hZGluZyxcbiAgICBzZXRTZWxlY3Rpb24sXG4gICAgYWRkU2VsZWN0aW9uLFxuICB9KSA9PiB7XG4gICAgY29uc3Qgc2F2ZVByb2dyZXNzID0gZmlsZSA9PlxuICAgICAgc2V0VXBsb2FkaW5nKFtcbiAgICAgICAgLi4udXBsb2FkaW5nLmZpbHRlcih4ID0+IHgubmFtZSAhPT0gZmlsZS5uYW1lKSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICBwZXJjZW50OiBmaWxlLnBlcmNlbnQsXG4gICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgIHN0YXR1czogZmlsZS5zdGF0dXMsXG4gICAgICAgICAgcmVzcG9uc2U6IGZpbGUucmVzcG9uc2UsXG4gICAgICAgIH0sXG4gICAgICBdKTtcblxuICAgIGlmICghY2xvdWRpbmFyeVJlcXVlc3QpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGFwaUtleSwgc2lnbmF0dXJlLCB0aW1lc3RhbXAsIHVybCwgZm9sZGVyIH0gPSBjbG91ZGluYXJ5UmVxdWVzdDtcbiAgICByZXR1cm4ge1xuICAgICAgdXBsb2FkOiB7XG4gICAgICAgIHNob3dVcGxvYWRMaXN0OiBmYWxzZSxcbiAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBhcGlfa2V5OiBhcGlLZXksXG4gICAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICBmb2xkZXIsXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGlvbjogdXJsLFxuICAgICAgICBiZWZvcmVVcGxvYWQ6ICgpID0+IHtcbiAgICAgICAgICBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZTogKHsgZmlsZSB9KSA9PiB7XG4gICAgICAgICAgaWYgKGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJyAmJiBmaWxlLnBlcmNlbnQgPCAxMDApIHtcbiAgICAgICAgICAgIC8vIHNhdmUgdXBsb2FkLXN0YXRlIHRvIHN0YXRlXG4gICAgICAgICAgICBzYXZlUHJvZ3Jlc3MoZmlsZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChmaWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XG4gICAgICAgICAgICAvLyBXcml0ZSBkYXRhIGluIERCXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHsgLi4uZmlsZS5yZXNwb25zZSB9O1xuICAgICAgICAgICAgcmVzcG9uc2UuaWQgPSByZXNwb25zZS5wdWJsaWNfaWQ7XG4gICAgICAgICAgICBkb25lKHtcbiAgICAgICAgICAgICAgaWQ6IHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgICB0b2tlbjogc2lnbmF0dXJlLFxuICAgICAgICAgICAgICB0YWdzLFxuICAgICAgICAgICAgICBmb2xkZXI6IGZvbGRlcjJcbiAgICAgICAgICAgICAgICA/IGZvbGRlcjJcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoeCwgaSkgPT4gaSAhPT0gMClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuY2xvdWRpbmFyeVJlcXVlc3REb25lKSB7XG4gICAgICAgICAgICAgICAgYWRkU2VsZWN0aW9uKGRhdGEuY2xvdWRpbmFyeVJlcXVlc3REb25lLmlkKTtcbiAgICAgICAgICAgICAgICByZWZldGNoS2V5KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzaG93IG1lc3NhZ2UgaWYgYSBmaWxlIHVwbG9hZGVkXG4gICAgICAgICAgICAgICAgc2F2ZVByb2dyZXNzKGZpbGUpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhgJHtmaWxlLm5hbWV9IGVyZm9sZ3JlaWNoIGhvY2hnZWxhZGVuLmApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIHJlbW92ZSBmaWxlIGZyb20gdXBsb2FkaW5nXG4gICAgICAgICAgICAgIHNldFVwbG9hZGluZyh1cGxvYWRpbmcuZmlsdGVyKHggPT4geC5uYW1lICE9PSBmaWxlLm5hbWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZmlsZS5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihgJHtmaWxlLm5hbWV9IGZpbGUgdXBsb2FkIGZhaWxlZC5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG4pO1xuIl19
