import { adaptQuery } from 'olymp-collection/server';
import ShortId from 'shortid';
import { flatMap, uniq, sortBy } from 'lodash';
import {
  parseURI,
  getImageById,
  getSignedRequest,
  updateImage,
} from './cloudinary';

export default uri => {
  const config = parseURI(uri);

  const invalidationTokens = [];
  return {
    name: 'file',
    queries: `
      cloudinaryRequest: CloudinaryRequest
      fileTags: [String]
    `,
    mutations: `
      cloudinaryRequestDone(id: String, token: String): File
    `,
    resolvers: {
      queries: {
        file: (source, args, { monk, app }) =>
          monk.collection('item').findOne({ id: args.id }),
        /*
            .then((item) => {
              if (item) {
                return item;
              }
              return getImageById(config, args.id).then((image) => {
                monk
                  .collection('item')
                  .update(
                    { id: args.id },
                    { ...image, _type: 'file', _appId: app.id },
                    { upsert: true },
                  )
                  .catch(err => console.error(err));
                return image;
              });
            }), */
        fileList: (source, { query }, { monk, app, user }) => {
          const mongoQuery = adaptQuery(query);
          if (!user) {
            return [];
          }
          mongoQuery._appId = { $in: user._appIds };
          mongoQuery._type = 'file';
          mongoQuery.state = { $ne: 'REMOVED' };
          return monk.collection('item').find(mongoQuery);
        },
        fileTags: (source, { folder }, { monk, user }) => {
          if (!user) {
            return [];
          }
          mongoQuery._appId = { $in: user._appIds };
          mongoQuery._type = 'file';
          if (folder) {
            mongoQuery.folder = folder;
          }
          console.log(mongoQuery);
          return monk
            .collection('item')
            .find(mongoQuery)
            .then(items =>
              sortBy(uniq(flatMap(items, item => item.tags)), x => x),
            );
        },
        cloudinaryRequest: () => {
          const signed = getSignedRequest(config);
          invalidationTokens.push(signed.signature);
          return signed;
        },
      },
      mutations: {
        file: (source, args, { db, app }) => {
          if (args.operationType === 'REMOVE') {
            args.input.state = 'REMOVED';
          }
          return db
            .collection('item')
            .findOne({ id: args.input.id })
            .then(item =>
              /* setTimeout(() => {
                if (args.operationType && args.operationType === 'REMOVE') {
                  return updateImage(
                    item.publicId,
                    args.input.tags,
                    args.input.source,
                    args.input.caption,
                    config,
                    true,
                  );
                }

                return updateImage(
                  item.publicId,
                  args.input.tags,
                  args.input.source,
                  args.input.caption,
                  config,
                );
              }, 10); */
              db
                .collection('item')
                .updateOne(
                  { id: args.input.id },
                  { $set: args.input },
                  { upsert: true },
                )
                .then(() =>
                  db.collection('item').findOne({ id: args.input.id }),
                ),
            );
        },
        cloudinaryRequestDone: (source, args, { monk, app }) => {
          if (args.token && invalidationTokens.indexOf(args.token) !== -1) {
            invalidationTokens.splice(
              invalidationTokens.indexOf(args.token),
              1,
            );
            return getImageById(config, args.id)
              .then(image =>
                monk.collection('item').update(
                  { publicId: args.id },
                  {
                    ...image,
                    id: ShortId.generate(),
                    _type: 'file',
                    _appId: app.id,
                  },
                  { upsert: true },
                ),
              )
              .then(x =>
                monk.collection('item').findOne({ publicId: args.id }),
              );
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
        publicId: String
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
        folder: String
      }
      type CloudinaryRequest {
        url: String
        signature: String
        folder: String
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
