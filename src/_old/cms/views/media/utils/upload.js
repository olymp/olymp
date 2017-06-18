import { notification } from 'antd';
import fetch from 'whatwg-fetch';
import gql from 'graphql-tag';

export default ({ files, onImageChange, client, refetch }) => {
  const key = { key: true };
  let cloudinary;
  notification.info({
    message: 'Upload',
    description: 'Datei(en) werden hochgeladen ...',
    key,
    duration: 0,
  });
  return client
    .query({
      query: gql`query cloudinaryRequest { cloudinaryRequest { apiKey, url, signature, timestamp } }`,
      forceFetch: true,
    })
    .then(({ data }) => {
      cloudinary = data.cloudinaryRequest;
      const body = new FormData();
      body.append('api_key', cloudinary.apiKey);
      body.append('signature', cloudinary.signature);
      body.append('timestamp', cloudinary.timestamp);
      [].slice.call(files).forEach(file => body.attach('file', file));
      return fetch(cloudinary.url, {
        method: 'POST',
        body,
      });
    })
    .then(({ body }) => {
      body.id = body.public_id;
      notification.close(key);
      if (refetch) refetch({ token: cloudinary.signature });
      if (onImageChange) onImageChange(body);
    })
    .catch(err => {
      notification.close(key);
      console.error(err);
    });
};
