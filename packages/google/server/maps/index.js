import maps from '@google/maps';
export default (key) => {
  const googleMapsClient = maps.createClient({
    key,
    Promise,
  });
  return (method, payload) =>
    new Promise((yay, nay) => {
      if (!googleMapsClient[method]) {
        nay('Method does not exist');
      }
      googleMapsClient[method](payload, (err, result) => {
        if (err) {
          nay(err);
        } else {
          yay(result);
        }
      });
    });
};
