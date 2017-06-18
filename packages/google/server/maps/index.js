const maps = require('@google/maps');
module.exports = (key) => {
  const googleMapsClient = maps.createClient({
    key: process.env.GM_KEY || key,
    Promise,
  });
  return (method, payload) =>
    new Promise((yay, nay) => {
      if (!googleMapsClient[method]) { nay('Method does not exist'); }
      googleMapsClient[method](payload, (err, result) => {
        if (err) { nay(err); } else { yay(result); }
      });
    });
};
