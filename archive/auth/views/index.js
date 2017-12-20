import React from 'react';
import { Switch, Match, createUpdateQuery } from 'olymp-router';
import { connect } from 'react-redux';
import AuthRegister from './register';
import AuthLogin from './login';
import AuthConfirm from './confirm';
import AuthForgot from './forgot';
import AuthReset from './reset';
import AuthStatus from './status';

export default connect(function (_ref) {
  var location = _ref.location;
  return {
    pathname: location.pathname,
    query: location.query
  };
}, function (dispatch) {
  return {
    updateQuery: createUpdateQuery(dispatch)
  };
})(function (props) {
  var query = props.query,
      register = props.register,
      updateQuery = props.updateQuery;

  var texts = {
    forgot: 'Wir haben eine E-Mail an ' + query['status-forgot'] + ' geschickt. Bitte befolgen Sie den Anweisungen darin um ein neues Passwort zu erhalten.',
    register: 'Wir haben eine E-Mail an ' + query['status-register'] + ' geschickt. Bitte befolgen Sie den Anweisungen darin um die Registrierung abzuschlie\xDFen.'
  };
  var inQuery = function inQuery(key) {
    return query && query[key] !== undefined;
  };

  return React.createElement(
    Switch,
    null,
    React.createElement(Match, {
      match: inQuery('login'),
      render: function render() {
        return React.createElement(AuthLogin, {
          isOpen: true,
          email: query.login,
          totp: inQuery('totp'),
          onClose: function onClose() {
            return updateQuery({ totp: undefined, login: undefined });
          },
          onTotp: function onTotp() {
            return updateQuery({ totp: null });
          }
        });
      }
    }),
    React.createElement(Match, {
      match: inQuery('register'),
      render: function render() {
        return React.createElement(AuthRegister, {
          isOpen: true,
          token: query.register,
          onClose: function onClose() {
            return updateQuery({ register: undefined });
          },
          onOk: function onOk(_ref2) {
            var email = _ref2.email,
                token = _ref2.token;
            return token ? updateQuery({ register: undefined, login: email }) : updateQuery({ register: undefined, 'status-register': email });
          },
          extraFields: register
        });
      }
    }),
    React.createElement(Match, {
      match: inQuery('forgot'),
      render: function render() {
        return React.createElement(AuthForgot, {
          isOpen: true,
          email: query.forgot,
          onClose: function onClose() {
            return updateQuery({ forgot: undefined });
          },
          onOk: function onOk(_ref3) {
            var email = _ref3.email;
            return updateQuery({ forgot: undefined, 'status-forgot': email });
          }
        });
      }
    }),
    React.createElement(Match, {
      match: inQuery('reset'),
      render: function render() {
        return React.createElement(AuthReset, {
          isOpen: true,
          token: query.reset,
          onClose: function onClose() {
            return updateQuery({ reset: undefined });
          },
          onOk: function onOk(_ref4) {
            var email = _ref4.email;
            return updateQuery({ reset: undefined, login: email });
          }
        });
      }
    }),
    React.createElement(Match, {
      match: inQuery('confirm'),
      render: function render() {
        return React.createElement(AuthConfirm, {
          isOpen: true,
          token: query.confirm,
          onClose: function onClose() {
            return updateQuery({ confirm: undefined });
          },
          onOk: function onOk(_ref5) {
            var email = _ref5.email;
            return updateQuery({ confirm: undefined, login: email });
          }
        });
      }
    }),
    React.createElement(Match, {
      match: inQuery('status-forgot'),
      render: function render() {
        return React.createElement(AuthStatus, {
          isOpen: true,
          text: texts.forgot,
          onClose: function onClose() {
            return updateQuery({ 'status-forgot': undefined });
          }
        });
      }
    }),
    React.createElement(Match, {
      match: inQuery('status-register'),
      render: function render() {
        return React.createElement(AuthStatus, {
          isOpen: true,
          text: texts.register,
          onClose: function onClose() {
            return updateQuery({ 'status-register': undefined });
          }
        });
      }
    })
  );
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvdmlld3MvaW5kZXguZXM2Il0sIm5hbWVzIjpbIlJlYWN0IiwiU3dpdGNoIiwiTWF0Y2giLCJjcmVhdGVVcGRhdGVRdWVyeSIsImNvbm5lY3QiLCJBdXRoUmVnaXN0ZXIiLCJBdXRoTG9naW4iLCJBdXRoQ29uZmlybSIsIkF1dGhGb3Jnb3QiLCJBdXRoUmVzZXQiLCJBdXRoU3RhdHVzIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInF1ZXJ5IiwidXBkYXRlUXVlcnkiLCJkaXNwYXRjaCIsInByb3BzIiwicmVnaXN0ZXIiLCJ0ZXh0cyIsImZvcmdvdCIsImluUXVlcnkiLCJrZXkiLCJ1bmRlZmluZWQiLCJsb2dpbiIsInRvdHAiLCJlbWFpbCIsInRva2VuIiwicmVzZXQiLCJjb25maXJtIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsU0FBU0MsTUFBVCxFQUFpQkMsS0FBakIsRUFBd0JDLGlCQUF4QixRQUFpRCxjQUFqRDtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsYUFBeEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLFlBQXpCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixTQUF0QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IsV0FBeEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLFVBQXZCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixTQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsVUFBdkI7O0FBRUEsZUFBZU4sUUFDYjtBQUFBLE1BQUdPLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQW1CO0FBQ2pCQyxjQUFVRCxTQUFTQyxRQURGO0FBRWpCQyxXQUFPRixTQUFTRTtBQUZDLEdBQW5CO0FBQUEsQ0FEYSxFQUtiO0FBQUEsU0FBYTtBQUNYQyxpQkFBYVgsa0JBQWtCWSxRQUFsQjtBQURGLEdBQWI7QUFBQSxDQUxhLEVBUWIsVUFBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDSEgsS0FERyxHQUM4QkcsS0FEOUIsQ0FDSEgsS0FERztBQUFBLE1BQ0lJLFFBREosR0FDOEJELEtBRDlCLENBQ0lDLFFBREo7QUFBQSxNQUNjSCxXQURkLEdBQzhCRSxLQUQ5QixDQUNjRixXQURkOztBQUVYLE1BQU1JLFFBQVE7QUFDWkMsMENBQW9DTixNQUNsQyxlQURrQyxDQUFwQyw0RkFEWTtBQUlaSSw0Q0FBc0NKLE1BQ3BDLGlCQURvQyxDQUF0QztBQUpZLEdBQWQ7QUFRQSxNQUFNTyxVQUFVLFNBQVZBLE9BQVU7QUFBQSxXQUFPUCxTQUFTQSxNQUFNUSxHQUFOLE1BQWVDLFNBQS9CO0FBQUEsR0FBaEI7O0FBRUEsU0FDRTtBQUFDLFVBQUQ7QUFBQTtBQUNFLHdCQUFDLEtBQUQ7QUFDRSxhQUFPRixRQUFRLE9BQVIsQ0FEVDtBQUVFLGNBQVE7QUFBQSxlQUNOLG9CQUFDLFNBQUQ7QUFDRSxzQkFERjtBQUVFLGlCQUFPUCxNQUFNVSxLQUZmO0FBR0UsZ0JBQU1ILFFBQVEsTUFBUixDQUhSO0FBSUUsbUJBQVM7QUFBQSxtQkFBTU4sWUFBWSxFQUFFVSxNQUFNRixTQUFSLEVBQW1CQyxPQUFPRCxTQUExQixFQUFaLENBQU47QUFBQSxXQUpYO0FBS0Usa0JBQVE7QUFBQSxtQkFBTVIsWUFBWSxFQUFFVSxNQUFNLElBQVIsRUFBWixDQUFOO0FBQUE7QUFMVixVQURNO0FBQUE7QUFGVixNQURGO0FBYUUsd0JBQUMsS0FBRDtBQUNFLGFBQU9KLFFBQVEsVUFBUixDQURUO0FBRUUsY0FBUTtBQUFBLGVBQ04sb0JBQUMsWUFBRDtBQUNFLHNCQURGO0FBRUUsaUJBQU9QLE1BQU1JLFFBRmY7QUFHRSxtQkFBUztBQUFBLG1CQUFNSCxZQUFZLEVBQUVHLFVBQVVLLFNBQVosRUFBWixDQUFOO0FBQUEsV0FIWDtBQUlFLGdCQUFNO0FBQUEsZ0JBQUdHLEtBQUgsU0FBR0EsS0FBSDtBQUFBLGdCQUFVQyxLQUFWLFNBQVVBLEtBQVY7QUFBQSxtQkFDSEEsUUFDR1osWUFBWSxFQUFFRyxVQUFVSyxTQUFaLEVBQXVCQyxPQUFPRSxLQUE5QixFQUFaLENBREgsR0FFR1gsWUFBWSxFQUFFRyxVQUFVSyxTQUFaLEVBQXVCLG1CQUFtQkcsS0FBMUMsRUFBWixDQUhBO0FBQUEsV0FKUjtBQVFFLHVCQUFhUjtBQVJmLFVBRE07QUFBQTtBQUZWLE1BYkY7QUE0QkUsd0JBQUMsS0FBRDtBQUNFLGFBQU9HLFFBQVEsUUFBUixDQURUO0FBRUUsY0FBUTtBQUFBLGVBQ04sb0JBQUMsVUFBRDtBQUNFLHNCQURGO0FBRUUsaUJBQU9QLE1BQU1NLE1BRmY7QUFHRSxtQkFBUztBQUFBLG1CQUFNTCxZQUFZLEVBQUVLLFFBQVFHLFNBQVYsRUFBWixDQUFOO0FBQUEsV0FIWDtBQUlFLGdCQUFNO0FBQUEsZ0JBQUdHLEtBQUgsU0FBR0EsS0FBSDtBQUFBLG1CQUFlWCxZQUFZLEVBQUVLLFFBQVFHLFNBQVYsRUFBcUIsaUJBQWlCRyxLQUF0QyxFQUFaLENBQWY7QUFBQTtBQUpSLFVBRE07QUFBQTtBQUZWLE1BNUJGO0FBdUNFLHdCQUFDLEtBQUQ7QUFDRSxhQUFPTCxRQUFRLE9BQVIsQ0FEVDtBQUVFLGNBQVE7QUFBQSxlQUNOLG9CQUFDLFNBQUQ7QUFDRSxzQkFERjtBQUVFLGlCQUFPUCxNQUFNYyxLQUZmO0FBR0UsbUJBQVM7QUFBQSxtQkFBTWIsWUFBWSxFQUFFYSxPQUFPTCxTQUFULEVBQVosQ0FBTjtBQUFBLFdBSFg7QUFJRSxnQkFBTTtBQUFBLGdCQUFHRyxLQUFILFNBQUdBLEtBQUg7QUFBQSxtQkFBZVgsWUFBWSxFQUFFYSxPQUFPTCxTQUFULEVBQW9CQyxPQUFPRSxLQUEzQixFQUFaLENBQWY7QUFBQTtBQUpSLFVBRE07QUFBQTtBQUZWLE1BdkNGO0FBa0RFLHdCQUFDLEtBQUQ7QUFDRSxhQUFPTCxRQUFRLFNBQVIsQ0FEVDtBQUVFLGNBQVE7QUFBQSxlQUNOLG9CQUFDLFdBQUQ7QUFDRSxzQkFERjtBQUVFLGlCQUFPUCxNQUFNZSxPQUZmO0FBR0UsbUJBQVM7QUFBQSxtQkFBTWQsWUFBWSxFQUFFYyxTQUFTTixTQUFYLEVBQVosQ0FBTjtBQUFBLFdBSFg7QUFJRSxnQkFBTTtBQUFBLGdCQUFHRyxLQUFILFNBQUdBLEtBQUg7QUFBQSxtQkFBZVgsWUFBWSxFQUFFYyxTQUFTTixTQUFYLEVBQXNCQyxPQUFPRSxLQUE3QixFQUFaLENBQWY7QUFBQTtBQUpSLFVBRE07QUFBQTtBQUZWLE1BbERGO0FBNkRFLHdCQUFDLEtBQUQ7QUFDRSxhQUFPTCxRQUFRLGVBQVIsQ0FEVDtBQUVFLGNBQVE7QUFBQSxlQUNOLG9CQUFDLFVBQUQ7QUFDRSxzQkFERjtBQUVFLGdCQUFNRixNQUFNQyxNQUZkO0FBR0UsbUJBQVM7QUFBQSxtQkFBTUwsWUFBWSxFQUFFLGlCQUFpQlEsU0FBbkIsRUFBWixDQUFOO0FBQUE7QUFIWCxVQURNO0FBQUE7QUFGVixNQTdERjtBQXVFRSx3QkFBQyxLQUFEO0FBQ0UsYUFBT0YsUUFBUSxpQkFBUixDQURUO0FBRUUsY0FBUTtBQUFBLGVBQ04sb0JBQUMsVUFBRDtBQUNFLHNCQURGO0FBRUUsZ0JBQU1GLE1BQU1ELFFBRmQ7QUFHRSxtQkFBUztBQUFBLG1CQUFNSCxZQUFZLEVBQUUsbUJBQW1CUSxTQUFyQixFQUFaLENBQU47QUFBQTtBQUhYLFVBRE07QUFBQTtBQUZWO0FBdkVGLEdBREY7QUFvRkQsQ0F4R2MsQ0FBZiIsImZpbGUiOiJwYWNrYWdlcy9hdXRoL3ZpZXdzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN3aXRjaCwgTWF0Y2gsIGNyZWF0ZVVwZGF0ZVF1ZXJ5IH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQXV0aFJlZ2lzdGVyIGZyb20gJy4vcmVnaXN0ZXInO1xuaW1wb3J0IEF1dGhMb2dpbiBmcm9tICcuL2xvZ2luJztcbmltcG9ydCBBdXRoQ29uZmlybSBmcm9tICcuL2NvbmZpcm0nO1xuaW1wb3J0IEF1dGhGb3Jnb3QgZnJvbSAnLi9mb3Jnb3QnO1xuaW1wb3J0IEF1dGhSZXNldCBmcm9tICcuL3Jlc2V0JztcbmltcG9ydCBBdXRoU3RhdHVzIGZyb20gJy4vc3RhdHVzJztcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHsgbG9jYXRpb24gfSkgPT4gKHtcbiAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgcXVlcnk6IGxvY2F0aW9uLnF1ZXJ5LFxuICB9KSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICB1cGRhdGVRdWVyeTogY3JlYXRlVXBkYXRlUXVlcnkoZGlzcGF0Y2gpLFxuICB9KSxcbikoKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcXVlcnksIHJlZ2lzdGVyLCB1cGRhdGVRdWVyeSB9ID0gcHJvcHM7XG4gIGNvbnN0IHRleHRzID0ge1xuICAgIGZvcmdvdDogYFdpciBoYWJlbiBlaW5lIEUtTWFpbCBhbiAke3F1ZXJ5W1xuICAgICAgJ3N0YXR1cy1mb3Jnb3QnXG4gICAgXX0gZ2VzY2hpY2t0LiBCaXR0ZSBiZWZvbGdlbiBTaWUgZGVuIEFud2Vpc3VuZ2VuIGRhcmluIHVtIGVpbiBuZXVlcyBQYXNzd29ydCB6dSBlcmhhbHRlbi5gLFxuICAgIHJlZ2lzdGVyOiBgV2lyIGhhYmVuIGVpbmUgRS1NYWlsIGFuICR7cXVlcnlbXG4gICAgICAnc3RhdHVzLXJlZ2lzdGVyJ1xuICAgIF19IGdlc2NoaWNrdC4gQml0dGUgYmVmb2xnZW4gU2llIGRlbiBBbndlaXN1bmdlbiBkYXJpbiB1bSBkaWUgUmVnaXN0cmllcnVuZyBhYnp1c2NobGllw59lbi5gLFxuICB9O1xuICBjb25zdCBpblF1ZXJ5ID0ga2V5ID0+IHF1ZXJ5ICYmIHF1ZXJ5W2tleV0gIT09IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxTd2l0Y2g+XG4gICAgICA8TWF0Y2hcbiAgICAgICAgbWF0Y2g9e2luUXVlcnkoJ2xvZ2luJyl9XG4gICAgICAgIHJlbmRlcj17KCkgPT4gKFxuICAgICAgICAgIDxBdXRoTG9naW5cbiAgICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgZW1haWw9e3F1ZXJ5LmxvZ2lufVxuICAgICAgICAgICAgdG90cD17aW5RdWVyeSgndG90cCcpfVxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gdXBkYXRlUXVlcnkoeyB0b3RwOiB1bmRlZmluZWQsIGxvZ2luOiB1bmRlZmluZWQgfSl9XG4gICAgICAgICAgICBvblRvdHA9eygpID0+IHVwZGF0ZVF1ZXJ5KHsgdG90cDogbnVsbCB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICAgIDxNYXRjaFxuICAgICAgICBtYXRjaD17aW5RdWVyeSgncmVnaXN0ZXInKX1cbiAgICAgICAgcmVuZGVyPXsoKSA9PiAoXG4gICAgICAgICAgPEF1dGhSZWdpc3RlclxuICAgICAgICAgICAgaXNPcGVuXG4gICAgICAgICAgICB0b2tlbj17cXVlcnkucmVnaXN0ZXJ9XG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB1cGRhdGVRdWVyeSh7IHJlZ2lzdGVyOiB1bmRlZmluZWQgfSl9XG4gICAgICAgICAgICBvbk9rPXsoeyBlbWFpbCwgdG9rZW4gfSkgPT5cbiAgICAgICAgICAgICAgKHRva2VuXG4gICAgICAgICAgICAgICAgPyB1cGRhdGVRdWVyeSh7IHJlZ2lzdGVyOiB1bmRlZmluZWQsIGxvZ2luOiBlbWFpbCB9KVxuICAgICAgICAgICAgICAgIDogdXBkYXRlUXVlcnkoeyByZWdpc3RlcjogdW5kZWZpbmVkLCAnc3RhdHVzLXJlZ2lzdGVyJzogZW1haWwgfSkpfVxuICAgICAgICAgICAgZXh0cmFGaWVsZHM9e3JlZ2lzdGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICAgPE1hdGNoXG4gICAgICAgIG1hdGNoPXtpblF1ZXJ5KCdmb3Jnb3QnKX1cbiAgICAgICAgcmVuZGVyPXsoKSA9PiAoXG4gICAgICAgICAgPEF1dGhGb3Jnb3RcbiAgICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgZW1haWw9e3F1ZXJ5LmZvcmdvdH1cbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHVwZGF0ZVF1ZXJ5KHsgZm9yZ290OiB1bmRlZmluZWQgfSl9XG4gICAgICAgICAgICBvbk9rPXsoeyBlbWFpbCB9KSA9PiB1cGRhdGVRdWVyeSh7IGZvcmdvdDogdW5kZWZpbmVkLCAnc3RhdHVzLWZvcmdvdCc6IGVtYWlsIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICAgPE1hdGNoXG4gICAgICAgIG1hdGNoPXtpblF1ZXJ5KCdyZXNldCcpfVxuICAgICAgICByZW5kZXI9eygpID0+IChcbiAgICAgICAgICA8QXV0aFJlc2V0XG4gICAgICAgICAgICBpc09wZW5cbiAgICAgICAgICAgIHRva2VuPXtxdWVyeS5yZXNldH1cbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHVwZGF0ZVF1ZXJ5KHsgcmVzZXQ6IHVuZGVmaW5lZCB9KX1cbiAgICAgICAgICAgIG9uT2s9eyh7IGVtYWlsIH0pID0+IHVwZGF0ZVF1ZXJ5KHsgcmVzZXQ6IHVuZGVmaW5lZCwgbG9naW46IGVtYWlsIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICAgPE1hdGNoXG4gICAgICAgIG1hdGNoPXtpblF1ZXJ5KCdjb25maXJtJyl9XG4gICAgICAgIHJlbmRlcj17KCkgPT4gKFxuICAgICAgICAgIDxBdXRoQ29uZmlybVxuICAgICAgICAgICAgaXNPcGVuXG4gICAgICAgICAgICB0b2tlbj17cXVlcnkuY29uZmlybX1cbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHVwZGF0ZVF1ZXJ5KHsgY29uZmlybTogdW5kZWZpbmVkIH0pfVxuICAgICAgICAgICAgb25Paz17KHsgZW1haWwgfSkgPT4gdXBkYXRlUXVlcnkoeyBjb25maXJtOiB1bmRlZmluZWQsIGxvZ2luOiBlbWFpbCB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICAgIDxNYXRjaFxuICAgICAgICBtYXRjaD17aW5RdWVyeSgnc3RhdHVzLWZvcmdvdCcpfVxuICAgICAgICByZW5kZXI9eygpID0+IChcbiAgICAgICAgICA8QXV0aFN0YXR1c1xuICAgICAgICAgICAgaXNPcGVuXG4gICAgICAgICAgICB0ZXh0PXt0ZXh0cy5mb3Jnb3R9XG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB1cGRhdGVRdWVyeSh7ICdzdGF0dXMtZm9yZ290JzogdW5kZWZpbmVkIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICAgPE1hdGNoXG4gICAgICAgIG1hdGNoPXtpblF1ZXJ5KCdzdGF0dXMtcmVnaXN0ZXInKX1cbiAgICAgICAgcmVuZGVyPXsoKSA9PiAoXG4gICAgICAgICAgPEF1dGhTdGF0dXNcbiAgICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgdGV4dD17dGV4dHMucmVnaXN0ZXJ9XG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB1cGRhdGVRdWVyeSh7ICdzdGF0dXMtcmVnaXN0ZXInOiB1bmRlZmluZWQgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgPC9Td2l0Y2g+XG4gICk7XG59KTtcbiJdfQ==
