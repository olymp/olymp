const request = require('request');
const maps = require('@google/maps');
module.exports = key => {
  const googleMapsClient = maps.createClient({
    key: process.env.GMAPS_SECRET || key,
    Promise: Promise,
  });
  return (method, payload) => new Promise((yay, nay) => {
    if (!googleMapsClient[method]) nay('Method does not exist');
    googleMapsClient[method](payload, (err, result) => {
      if (err) nay(err);
      else yay(result);
    });
  });
};
