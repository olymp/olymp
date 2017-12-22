import shortID from 'shortid';
import mails from './mails';

export default (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$attributes = _ref.attributes,
      attributes = _ref$attributes === undefined ? '' : _ref$attributes,
      _ref$schema = _ref.schema,
      schema = _ref$schema === undefined ? '' : _ref$schema;

  return {
    name: 'auth-admin',
    queries: '\n    invitationList: [Invitation]\n    invitation(id: String): Invitation\n    userList: [User]\n    user(id: String): User\n  ',
    mutations: '\n    user(id: String, input: UserInput, type: USER_MUTATION_TYPE): User\n    invitation(email: String!, name: String, scope: Json): Invitation\n  ',
    resolvers: {
      queries: {
        invitationList: function invitationList(source, args, _ref2) {
          var user = _ref2.user,
              db = _ref2.db;

          if (!user || !user.isAdmin) {
            throw new Error('No permission');
          }
          return db.collection('invitation').find({}).toArray();
        },
        invitation: function invitation(source, args, _ref3) {
          var user = _ref3.user,
              db = _ref3.db;

          if (!user || !user.isAdmin) {
            throw new Error('No permission');
          }
          return db.collection('invitation').findOne({ id: args.id });
        },
        userList: function userList(source, args, _ref4) {
          var user = _ref4.user,
              db = _ref4.db;

          if (!user || !user.isAdmin) {
            throw new Error('No permission');
          }
          return db.collection('user').find({}).toArray();
        },
        user: function user(source, args, _ref5) {
          var _user = _ref5.user,
              db = _ref5.db;

          if (_user && _user.isAdmin) {} else if (_user && _user.id === args.id) {} else {
            throw new Error('No permission');
          }
          return db.collection('user').findOne({ id: args.id });
        }
      },
      mutations: {
        invitation: function invitation(source, _ref6, _ref7) {
          var email = _ref6.email,
              name = _ref6.name,
              scope = _ref6.scope;
          var user = _ref7.user,
              db = _ref7.db,
              mail = _ref7.mail,
              authEngine = _ref7.authEngine;

          if (!user || !user.isAdmin) {
            if (process.env.NODE_ENV === 'production') {
              throw new Error('No permission');
            }
          }
          // eslint-disable-line no-shadow
          var token = authEngine.tokenEngine.create(scope ? { email: email, scope: scope } : { email: email });
          return db.collection('invitation').insertOne({
            email: email,
            name: name,
            scope: scope,
            token: token,
            createdAt: new Date(),
            createdBy: user ? user.id : undefined,
            id: shortID.generate()
          }).then(function (_ref8) {
            var ops = _ref8.ops;

            var doc = ops[0];
            if (mail) {
              mail(mails.invite, {
                to: doc.email,
                token: doc.token,
                name: doc.name
              }).then(function (x) {
                return console.log('Mail success', x.ok);
              }).catch(function (err) {
                return console.error(err);
              });
            }
            return doc;
          });
          // if (args.id) return collection.updateOne({ id: args.id }, { $set: args });
          // else return collection.insertOne(args);
        }
      }
    },
    schema: '\n    type Invitation @input {\n      id: String\n      email: Email\n      token: String\n      expiry: DateTime\n      name: String\n    }\n  '
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F1dGgvc2VydmVyL2dyYXBocWwtYWRtaW4uZXM2Il0sIm5hbWVzIjpbInNob3J0SUQiLCJtYWlscyIsImF0dHJpYnV0ZXMiLCJzY2hlbWEiLCJuYW1lIiwicXVlcmllcyIsIm11dGF0aW9ucyIsInJlc29sdmVycyIsImludml0YXRpb25MaXN0Iiwic291cmNlIiwiYXJncyIsInVzZXIiLCJkYiIsImlzQWRtaW4iLCJFcnJvciIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsImludml0YXRpb24iLCJmaW5kT25lIiwiaWQiLCJ1c2VyTGlzdCIsImVtYWlsIiwic2NvcGUiLCJtYWlsIiwiYXV0aEVuZ2luZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInRva2VuIiwidG9rZW5FbmdpbmUiLCJjcmVhdGUiLCJpbnNlcnRPbmUiLCJjcmVhdGVkQXQiLCJEYXRlIiwiY3JlYXRlZEJ5IiwidW5kZWZpbmVkIiwiZ2VuZXJhdGUiLCJ0aGVuIiwib3BzIiwiZG9jIiwiaW52aXRlIiwidG8iLCJjb25zb2xlIiwibG9nIiwieCIsIm9rIiwiY2F0Y2giLCJlcnJvciIsImVyciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsT0FBUCxNQUFvQixTQUFwQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7O0FBRUEsZ0JBQWU7QUFBQSxpRkFBb0MsRUFBcEM7QUFBQSw2QkFBR0MsVUFBSDtBQUFBLE1BQUdBLFVBQUgsbUNBQWdCLEVBQWhCO0FBQUEseUJBQW9CQyxNQUFwQjtBQUFBLE1BQW9CQSxNQUFwQiwrQkFBNkIsRUFBN0I7O0FBQUEsU0FBNEM7QUFDekRDLFVBQU0sWUFEbUQ7QUFFekRDLCtJQUZ5RDtBQVF6REMsb0tBUnlEO0FBWXpEQyxlQUFXO0FBQ1RGLGVBQVM7QUFDUEcsd0JBQWdCLHdCQUFDQyxNQUFELEVBQVNDLElBQVQsU0FBZ0M7QUFBQSxjQUFmQyxJQUFlLFNBQWZBLElBQWU7QUFBQSxjQUFUQyxFQUFTLFNBQVRBLEVBQVM7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SUFYSSxDQVdDLGlCQUFhO0FBQUEsZ0JBQVZDLEdBQVUsU0FBVkEsR0FBVTs7QUFDakIsZ0JBQU1DLE1BQU1ELElBQUksQ0FBSixDQUFaO0FBQ0EsZ0JBQUlmLElBQUosRUFBVTtBQUNSQSxtQkFBS3ZCLE1BQU13QyxNQUFYLEVBQW1CO0FBQ2pCQyxvQkFBSUYsSUFBSWxCLEtBRFM7QUFFakJPLHVCQUFPVyxJQUFJWCxLQUZNO0FBR2pCekIsc0JBQU1vQyxJQUFJcEM7QUFITyxlQUFuQixFQUtHa0MsSUFMSCxDQUtRO0FBQUEsdUJBQUtLLFFBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCQyxFQUFFQyxFQUE5QixDQUFMO0FBQUEsZUFMUixFQU1HQyxLQU5ILENBTVM7QUFBQSx1QkFBT0osUUFBUUssS0FBUixDQUFjQyxHQUFkLENBQVA7QUFBQSxlQU5UO0FBT0Q7QUFDRCxtQkFBT1QsR0FBUDtBQUNELFdBdkJJLENBQVA7QUF3QkE7QUFDQTtBQUNEO0FBekNRO0FBbkNGLEtBWjhDO0FBMkZ6RHJDO0FBM0Z5RCxHQUE1QztBQUFBLENBQWYiLCJmaWxlIjoicGFja2FnZXMvYXV0aC9zZXJ2ZXIvZ3JhcGhxbC1hZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElEIGZyb20gJ3Nob3J0aWQnO1xuaW1wb3J0IG1haWxzIGZyb20gJy4vbWFpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBhdHRyaWJ1dGVzID0gJycsIHNjaGVtYSA9ICcnIH0gPSB7fSkgPT4gKHtcbiAgbmFtZTogJ2F1dGgtYWRtaW4nLFxuICBxdWVyaWVzOiBgXG4gICAgaW52aXRhdGlvbkxpc3Q6IFtJbnZpdGF0aW9uXVxuICAgIGludml0YXRpb24oaWQ6IFN0cmluZyk6IEludml0YXRpb25cbiAgICB1c2VyTGlzdDogW1VzZXJdXG4gICAgdXNlcihpZDogU3RyaW5nKTogVXNlclxuICBgLFxuICBtdXRhdGlvbnM6IGBcbiAgICB1c2VyKGlkOiBTdHJpbmcsIGlucHV0OiBVc2VySW5wdXQsIHR5cGU6IFVTRVJfTVVUQVRJT05fVFlQRSk6IFVzZXJcbiAgICBpbnZpdGF0aW9uKGVtYWlsOiBTdHJpbmchLCBuYW1lOiBTdHJpbmcsIHNjb3BlOiBKc29uKTogSW52aXRhdGlvblxuICBgLFxuICByZXNvbHZlcnM6IHtcbiAgICBxdWVyaWVzOiB7XG4gICAgICBpbnZpdGF0aW9uTGlzdDogKHNvdXJjZSwgYXJncywgeyB1c2VyLCBkYiB9KSA9PiB7XG4gICAgICAgIGlmICghdXNlciB8fCAhdXNlci5pc0FkbWluKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBwZXJtaXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRiXG4gICAgICAgICAgLmNvbGxlY3Rpb24oJ2ludml0YXRpb24nKVxuICAgICAgICAgIC5maW5kKHt9KVxuICAgICAgICAgIC50b0FycmF5KCk7XG4gICAgICB9LFxuICAgICAgaW52aXRhdGlvbjogKHNvdXJjZSwgYXJncywgeyB1c2VyLCBkYiB9KSA9PiB7XG4gICAgICAgIGlmICghdXNlciB8fCAhdXNlci5pc0FkbWluKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBwZXJtaXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oJ2ludml0YXRpb24nKS5maW5kT25lKHsgaWQ6IGFyZ3MuaWQgfSk7XG4gICAgICB9LFxuICAgICAgdXNlckxpc3Q6IChzb3VyY2UsIGFyZ3MsIHsgdXNlciwgZGIgfSkgPT4ge1xuICAgICAgICBpZiAoIXVzZXIgfHwgIXVzZXIuaXNBZG1pbikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gcGVybWlzc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYlxuICAgICAgICAgIC5jb2xsZWN0aW9uKCd1c2VyJylcbiAgICAgICAgICAuZmluZCh7fSlcbiAgICAgICAgICAudG9BcnJheSgpO1xuICAgICAgfSxcbiAgICAgIHVzZXI6IChzb3VyY2UsIGFyZ3MsIHsgdXNlciwgZGIgfSkgPT4ge1xuICAgICAgICBpZiAodXNlciAmJiB1c2VyLmlzQWRtaW4pIHtcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyICYmIHVzZXIuaWQgPT09IGFyZ3MuaWQpIHtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHBlcm1pc3Npb24nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbigndXNlcicpLmZpbmRPbmUoeyBpZDogYXJncy5pZCB9KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgIGludml0YXRpb246IChcbiAgICAgICAgc291cmNlLFxuICAgICAgICB7IGVtYWlsLCBuYW1lLCBzY29wZSB9LFxuICAgICAgICB7IHVzZXIsIGRiLCBtYWlsLCBhdXRoRW5naW5lIH0sXG4gICAgICApID0+IHtcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmlzQWRtaW4pIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBwZXJtaXNzaW9uJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2hhZG93XG4gICAgICAgIGNvbnN0IHRva2VuID0gYXV0aEVuZ2luZS50b2tlbkVuZ2luZS5jcmVhdGUoXG4gICAgICAgICAgc2NvcGUgPyB7IGVtYWlsLCBzY29wZSB9IDogeyBlbWFpbCB9LFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZGJcbiAgICAgICAgICAuY29sbGVjdGlvbignaW52aXRhdGlvbicpXG4gICAgICAgICAgLmluc2VydE9uZSh7XG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzY29wZSxcbiAgICAgICAgICAgIHRva2VuLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgY3JlYXRlZEJ5OiB1c2VyID8gdXNlci5pZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGlkOiBzaG9ydElELmdlbmVyYXRlKCksXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoeyBvcHMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZG9jID0gb3BzWzBdO1xuICAgICAgICAgICAgaWYgKG1haWwpIHtcbiAgICAgICAgICAgICAgbWFpbChtYWlscy5pbnZpdGUsIHtcbiAgICAgICAgICAgICAgICB0bzogZG9jLmVtYWlsLFxuICAgICAgICAgICAgICAgIHRva2VuOiBkb2MudG9rZW4sXG4gICAgICAgICAgICAgICAgbmFtZTogZG9jLm5hbWUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oeCA9PiBjb25zb2xlLmxvZygnTWFpbCBzdWNjZXNzJywgeC5vaykpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvYztcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgKGFyZ3MuaWQpIHJldHVybiBjb2xsZWN0aW9uLnVwZGF0ZU9uZSh7IGlkOiBhcmdzLmlkIH0sIHsgJHNldDogYXJncyB9KTtcbiAgICAgICAgLy8gZWxzZSByZXR1cm4gY29sbGVjdGlvbi5pbnNlcnRPbmUoYXJncyk7XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHNjaGVtYTogYFxuICAgIHR5cGUgSW52aXRhdGlvbiBAaW5wdXQge1xuICAgICAgaWQ6IFN0cmluZ1xuICAgICAgZW1haWw6IEVtYWlsXG4gICAgICB0b2tlbjogU3RyaW5nXG4gICAgICBleHBpcnk6IERhdGVUaW1lXG4gICAgICBuYW1lOiBTdHJpbmdcbiAgICB9XG4gIGAsXG59KTtcbiJdfQ==
