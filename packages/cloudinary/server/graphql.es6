import { intersection } from 'lodash';
import { adaptQuery } from 'olymp-collection/server';
import {
  parseURI,
  getImageById,
  getImages,
  getSignedRequest,
  updateImage,
} from './cloudinary';

export default (uri) => {
  const config = parseURI(uri);
  const invalidationTokens = [];
  return {
    name: 'file',
    queries: `
      cloudinaryRequest: CloudinaryRequest
    `,
    mutations: `
      cloudinaryRequestDone(id: String, token: String): File
    `,
    resolvers: {
      queries: {
        file: (source, args, { monk, app }) =>
          monk.collection('item').findOne({ id: args.id }).then((item) => {
            if (item) {
              return item;
            }
            return getImageById(config, args.id).then((image) => {
              monk
                .collection('item')
                .update(
                { id: args.id },
                { ...image, _type: 'file', _appId: app.id },
                { upsert: true }
                )
                .catch(err => console.error(err));
              return image;
            });
          }),
        fileList: (source, { query }, { monk, app }) => {
          const mongoQuery = adaptQuery(query);
          const tags = mongoQuery.tags && mongoQuery.tags.$in;
          const getFiltered = items =>
            tags // eslint-disable-line
              ? items.filter(item => intersection(tags, item.tags).length > 0)
              : items;

          return getImages(config).then((images) => {
            const filtered = getFiltered(images.filter(x => !x.removed));
            Promise.all(
              filtered.map(item =>
                monk
                  .collection('item')
                  .update(
                  { id: item.id },
                  { ...item, _type: 'file', _appId: app.id },
                  { upsert: true }
                  )
              )
            ).catch(err => console.error(err));
            return filtered;
          });
        },
        cloudinaryRequest: () =>
          getSignedRequest(config).then((signed) => {
            invalidationTokens.push(signed.signature);
            return signed;
          }),
      },
      mutations: {
        file: (source, args) => {
          // imagesCache = null;
          // imageCache = null;

          if (args.operationType && args.operationType === 'REMOVE') {
            return updateImage(
              args.id,
              args.input.tags,
              args.input.source,
              args.input.caption,
              config,
              true
            );
          }

          return updateImage(
            args.id,
            args.input.tags,
            args.input.source,
            args.input.caption,
            config
          );
        },
        cloudinaryRequestDone: (source, args) => {
          if (args.token && invalidationTokens.indexOf(args.token) !== -1) {
            invalidationTokens.splice(
              invalidationTokens.indexOf(args.token),
              1
            );
            return getImageById(config, args.id).then(image => image);
          }
          throw new Error('Invalid');
        },
      },
    },
    schema: `
      type Image {
        id: String
        url: String
        crop: [Int]
        width: Int
        height: Int
        caption: String
        source: String
        tags: [String]
      }
      type File @collection {
        id: String
        format: String
        version: Int
        resourceType: String
        type: String
        createdAt: String
        height: Int
        width: Int
        bytes: Int
        url: String
        caption: String
        source: String
        removed: Boolean
        pages: Int
        colors: [String]
        tags: [String]
      }
      type CloudinaryRequest {
        url: String
        signature: String
        timestamp: String
        apiKey: String
      }
    `,
  };
};

export const uploadTest = (config = {}) => (req, res) => {
  res.send(`
    <form action="${config.endpoint ||
    '/upload'}" method="post" enctype="multipart/form-data">
      <link href="http://hayageek.github.io/jQuery-Upload-File/4.0.10/uploadfile.css" rel="stylesheet">
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
      <script src="http://hayageek.github.io/jQuery-Upload-File/4.0.10/jquery.uploadfile.min.js"></script>
      <div id="fileuploader">Upload</div>
      <script>
        $(document).ready(function()
        {
          $.ajax({
            type: "POST",
            dataType: 'json',
            url: "/graphql",
            data: JSON.stringify({
              query: "query { cloudinaryRequest { signature, apiKey, timestamp } }",
              variables: ""
            }),
            success: function(data) {
              document.SIGNATURE = data.data.cloudinaryRequest.signature;
              document.TIMESTAMP = data.data.cloudinaryRequest.timestamp;
              document.APIKEY = data.data.cloudinaryRequest.apiKey;
            },
            contentType: "application/json"
          });
          $("#fileuploader").uploadFile({
            url: "https://api.cloudinary.com/v1_1/djyenzorc/auto/upload",
            fileName:"file",
            dynamicFormData: function(x, y) {
              var data = {};
              data.api_key = document.APIKEY;
              data.timestamp = document.TIMESTAMP;
              data.signature = document.SIGNATURE;
              return data;
            }
          });
        });
      </script>
      Datei:
      <br>
      <input type="file" name="file" value="">
      <br>
      <br>
      <input type="submit" value="Absenden">
    </form>
  `);
};
