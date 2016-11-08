import { notification } from 'antd';
import superagent from 'superagent';
import gql from 'graphql-tag';

export default ({ files, onImageChange, client, refetch }) => {
  const key = { key: true };
  let cloudinary;
  notification.info({ message: 'Upload', description: 'Datei(en) werden hochgeladen ...', key, duration: 0 });
  return client.query({
    query: gql`query cloudinaryRequest { cloudinaryRequest { apiKey, url, signature, timestamp } }`,
    forceFetch: true,
  }).then(({ data }) => {
    cloudinary = data.cloudinaryRequest;
    const request = superagent
      .post(cloudinary.url)
      // .on('progress', ({ percent }) => notification.update(`Datei(en) werden hochgeladen (${percent}%)`))
      .field('api_key', cloudinary.apiKey)
      .field('signature', cloudinary.signature)
      .field('timestamp', cloudinary.timestamp);
    [].slice.call(files).forEach(file => request.attach('file', file));
    return request;
  }).then(({ body }) => {
    body.id = body.public_id;
    notification.close(key);
    if (refetch) refetch({ token: cloudinary.signature });
    if (onImageChange) onImageChange(body);
  }).catch(err => {
    notification.close(key);
    console.error(err);
  });
};
