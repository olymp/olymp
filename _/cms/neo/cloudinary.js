'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cloudinary = require('cloudinary');

exports.default = function (_ref) {
  var cloudName = _ref.cloudName,
      apiKey = _ref.apiKey,
      apiSecret = _ref.apiSecret;

  var upload = function upload(buffer, _ref2) {
    var name = _ref2.name,
        publicId = _ref2.publicId,
        tags = _ref2.tags;
    return new Promise(function (yay, nay) {
      cloudinary.v2.uploader.upload_stream({
        name: name,
        public_id: publicId,
        tags: tags
      }, function (error, resource) {
        if (error) {
          nay(error);
        } else {
          yay({
            id: resource.public_id,
            width: resource.width,
            height: resource.height,
            format: resource.format,
            type: resource.resource_type,
            url: resource.secure_url
          });
        }
      }).end(buffer);
    });
  };

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret
  });

  return upload;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtcy9uZW8vY2xvdWRpbmFyeS5lczYiXSwibmFtZXMiOlsiY2xvdWRpbmFyeSIsInJlcXVpcmUiLCJjbG91ZE5hbWUiLCJhcGlLZXkiLCJhcGlTZWNyZXQiLCJ1cGxvYWQiLCJidWZmZXIiLCJuYW1lIiwicHVibGljSWQiLCJ0YWdzIiwiUHJvbWlzZSIsInlheSIsIm5heSIsInYyIiwidXBsb2FkZXIiLCJ1cGxvYWRfc3RyZWFtIiwicHVibGljX2lkIiwiZXJyb3IiLCJyZXNvdXJjZSIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJmb3JtYXQiLCJ0eXBlIiwicmVzb3VyY2VfdHlwZSIsInVybCIsInNlY3VyZV91cmwiLCJlbmQiLCJjb25maWciLCJjbG91ZF9uYW1lIiwiYXBpX2tleSIsImFwaV9zZWNyZXQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsYUFBYUMsUUFBUSxZQUFSLENBQW5COztrQkFFZSxnQkFBc0M7QUFBQSxNQUFuQ0MsU0FBbUMsUUFBbkNBLFNBQW1DO0FBQUEsTUFBeEJDLE1BQXdCLFFBQXhCQSxNQUF3QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQ25ELE1BQU1DLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxNQUFEO0FBQUEsUUFBV0MsSUFBWCxTQUFXQSxJQUFYO0FBQUEsUUFBaUJDLFFBQWpCLFNBQWlCQSxRQUFqQjtBQUFBLFFBQTJCQyxJQUEzQixTQUEyQkEsSUFBM0I7QUFBQSxXQUNiLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN4QlosaUJBQVdhLEVBQVgsQ0FBY0MsUUFBZCxDQUNHQyxhQURILENBRUk7QUFDRVIsa0JBREY7QUFFRVMsbUJBQVdSLFFBRmI7QUFHRUM7QUFIRixPQUZKLEVBT0ksVUFBQ1EsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ25CLFlBQUlELEtBQUosRUFBVztBQUNUTCxjQUFJSyxLQUFKO0FBQ0QsU0FGRCxNQUVPO0FBQ0xOLGNBQUk7QUFDRlEsZ0JBQUlELFNBQVNGLFNBRFg7QUFFRkksbUJBQU9GLFNBQVNFLEtBRmQ7QUFHRkMsb0JBQVFILFNBQVNHLE1BSGY7QUFJRkMsb0JBQVFKLFNBQVNJLE1BSmY7QUFLRkMsa0JBQU1MLFNBQVNNLGFBTGI7QUFNRkMsaUJBQUtQLFNBQVNRO0FBTlosV0FBSjtBQVFEO0FBQ0YsT0FwQkwsRUFzQkdDLEdBdEJILENBc0JPckIsTUF0QlA7QUF1QkQsS0F4QkQsQ0FEYTtBQUFBLEdBQWY7O0FBMkJBTixhQUFXNEIsTUFBWCxDQUFrQjtBQUNoQkMsZ0JBQVkzQixTQURJO0FBRWhCNEIsYUFBUzNCLE1BRk87QUFHaEI0QixnQkFBWTNCO0FBSEksR0FBbEI7O0FBTUEsU0FBT0MsTUFBUDtBQUNELEMiLCJmaWxlIjoiY21zL25lby9jbG91ZGluYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2xvdWRpbmFyeSA9IHJlcXVpcmUoJ2Nsb3VkaW5hcnknKTtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2xvdWROYW1lLCBhcGlLZXksIGFwaVNlY3JldCB9KSA9PiB7XG4gIGNvbnN0IHVwbG9hZCA9IChidWZmZXIsIHsgbmFtZSwgcHVibGljSWQsIHRhZ3MgfSkgPT5cbiAgICBuZXcgUHJvbWlzZSgoeWF5LCBuYXkpID0+IHtcbiAgICAgIGNsb3VkaW5hcnkudjIudXBsb2FkZXJcbiAgICAgICAgLnVwbG9hZF9zdHJlYW0oXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHB1YmxpY19pZDogcHVibGljSWQsXG4gICAgICAgICAgICB0YWdzXG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IsIHJlc291cmNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgbmF5KGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHlheSh7XG4gICAgICAgICAgICAgICAgaWQ6IHJlc291cmNlLnB1YmxpY19pZCxcbiAgICAgICAgICAgICAgICB3aWR0aDogcmVzb3VyY2Uud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiByZXNvdXJjZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiByZXNvdXJjZS5mb3JtYXQsXG4gICAgICAgICAgICAgICAgdHlwZTogcmVzb3VyY2UucmVzb3VyY2VfdHlwZSxcbiAgICAgICAgICAgICAgICB1cmw6IHJlc291cmNlLnNlY3VyZV91cmxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC5lbmQoYnVmZmVyKTtcbiAgICB9KTtcblxuICBjbG91ZGluYXJ5LmNvbmZpZyh7XG4gICAgY2xvdWRfbmFtZTogY2xvdWROYW1lLFxuICAgIGFwaV9rZXk6IGFwaUtleSxcbiAgICBhcGlfc2VjcmV0OiBhcGlTZWNyZXRcbiAgfSk7XG5cbiAgcmV0dXJuIHVwbG9hZDtcbn07XG4iXX0=
