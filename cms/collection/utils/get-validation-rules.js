import _get from 'lodash/get';


export default (function (field) {
  var type = field.type.kind === 'NON_NULL' ? field.type.ofType : field.type;
  var rules = [];
  var required = field.type.kind === 'NON_NULL' || _get(field, 'specialFields.required');
  var label = _get(field, 'specialField.label');

  if (field.name === 'name' && required) {
    rules.push({ required: required, message: '\'' + label + '\' muss angegeben werden!' });
  } else if (type.name === 'Email') {
    rules.push({
      required: required,
      type: 'email',
      message: 'Keine gültige E-Mail Adresse!'
    });
  } else if (type.name === 'Website') {
    rules.push({ required: required, type: 'url', message: 'Keine gültige Website!' });
  } else if (type.name !== 'Boolean' && required) {
    rules.push({ required: required, message: '\'' + label + '\' muss angegeben werden!' });
  }

  return rules;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2NvbGxlY3Rpb24vdXRpbHMvZ2V0LXZhbGlkYXRpb24tcnVsZXMuZXM2Il0sIm5hbWVzIjpbInR5cGUiLCJmaWVsZCIsImtpbmQiLCJvZlR5cGUiLCJydWxlcyIsInJlcXVpcmVkIiwibGFiZWwiLCJuYW1lIiwicHVzaCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7OztBQUVBLGdCQUFlLGlCQUFTO0FBQ3RCLE1BQU1BLE9BQU9DLE1BQU1ELElBQU4sQ0FBV0UsSUFBWCxLQUFvQixVQUFwQixHQUFpQ0QsTUFBTUQsSUFBTixDQUFXRyxNQUE1QyxHQUFxREYsTUFBTUQsSUFBeEU7QUFDQSxNQUFNSSxRQUFRLEVBQWQ7QUFDQSxNQUFNQyxXQUNKSixNQUFNRCxJQUFOLENBQVdFLElBQVgsS0FBb0IsVUFBcEIsSUFBa0MsS0FBSUQsS0FBSixFQUFXLHdCQUFYLENBRHBDO0FBRUEsTUFBTUssUUFBUSxLQUFJTCxLQUFKLEVBQVcsb0JBQVgsQ0FBZDs7QUFFQSxNQUFJQSxNQUFNTSxJQUFOLEtBQWUsTUFBZixJQUF5QkYsUUFBN0IsRUFBdUM7QUFDckNELFVBQU1JLElBQU4sQ0FBVyxFQUFFSCxrQkFBRixFQUFZSSxnQkFBYUgsS0FBYiw4QkFBWixFQUFYO0FBQ0QsR0FGRCxNQUVPLElBQUlOLEtBQUtPLElBQUwsS0FBYyxPQUFsQixFQUEyQjtBQUNoQ0gsVUFBTUksSUFBTixDQUFXO0FBQ1RILHdCQURTO0FBRVRMLFlBQU0sT0FGRztBQUdUUyxlQUFTO0FBSEEsS0FBWDtBQUtELEdBTk0sTUFNQSxJQUFJVCxLQUFLTyxJQUFMLEtBQWMsU0FBbEIsRUFBNkI7QUFDbENILFVBQU1JLElBQU4sQ0FBVyxFQUFFSCxrQkFBRixFQUFZTCxNQUFNLEtBQWxCLEVBQXlCUyxTQUFTLHdCQUFsQyxFQUFYO0FBQ0QsR0FGTSxNQUVBLElBQUlULEtBQUtPLElBQUwsS0FBYyxTQUFkLElBQTJCRixRQUEvQixFQUF5QztBQUM5Q0QsVUFBTUksSUFBTixDQUFXLEVBQUVILGtCQUFGLEVBQVlJLGdCQUFhSCxLQUFiLDhCQUFaLEVBQVg7QUFDRDs7QUFFRCxTQUFPRixLQUFQO0FBQ0QsQ0F0QkQiLCJmaWxlIjoicGFja2FnZXMvY29sbGVjdGlvbi91dGlscy9nZXQtdmFsaWRhdGlvbi1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZpZWxkID0+IHtcbiAgY29uc3QgdHlwZSA9IGZpZWxkLnR5cGUua2luZCA9PT0gJ05PTl9OVUxMJyA/IGZpZWxkLnR5cGUub2ZUeXBlIDogZmllbGQudHlwZTtcbiAgY29uc3QgcnVsZXMgPSBbXTtcbiAgY29uc3QgcmVxdWlyZWQgPVxuICAgIGZpZWxkLnR5cGUua2luZCA9PT0gJ05PTl9OVUxMJyB8fCBnZXQoZmllbGQsICdzcGVjaWFsRmllbGRzLnJlcXVpcmVkJyk7XG4gIGNvbnN0IGxhYmVsID0gZ2V0KGZpZWxkLCAnc3BlY2lhbEZpZWxkLmxhYmVsJyk7XG5cbiAgaWYgKGZpZWxkLm5hbWUgPT09ICduYW1lJyAmJiByZXF1aXJlZCkge1xuICAgIHJ1bGVzLnB1c2goeyByZXF1aXJlZCwgbWVzc2FnZTogYCcke2xhYmVsfScgbXVzcyBhbmdlZ2ViZW4gd2VyZGVuIWAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZS5uYW1lID09PSAnRW1haWwnKSB7XG4gICAgcnVsZXMucHVzaCh7XG4gICAgICByZXF1aXJlZCxcbiAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICBtZXNzYWdlOiAnS2VpbmUgZ8O8bHRpZ2UgRS1NYWlsIEFkcmVzc2UhJyxcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlLm5hbWUgPT09ICdXZWJzaXRlJykge1xuICAgIHJ1bGVzLnB1c2goeyByZXF1aXJlZCwgdHlwZTogJ3VybCcsIG1lc3NhZ2U6ICdLZWluZSBnw7xsdGlnZSBXZWJzaXRlIScgfSk7XG4gIH0gZWxzZSBpZiAodHlwZS5uYW1lICE9PSAnQm9vbGVhbicgJiYgcmVxdWlyZWQpIHtcbiAgICBydWxlcy5wdXNoKHsgcmVxdWlyZWQsIG1lc3NhZ2U6IGAnJHtsYWJlbH0nIG11c3MgYW5nZWdlYmVuIHdlcmRlbiFgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVzO1xufTtcbiJdfQ==
