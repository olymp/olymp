const cloudinary = require('cloudinary');

export default ({ cloudName, apiKey, apiSecret }) => {
  const upload = (buffer, { name, publicId, tags }) =>
    new Promise((yay, nay) => {
      cloudinary.v2.uploader
        .upload_stream(
          {
            name,
            public_id: publicId,
            tags
          },
          (error, resource) => {
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
          }
        )
        .end(buffer);
    });

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret
  });

  return upload;
};
