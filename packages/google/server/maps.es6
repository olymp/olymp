import maps from '@google/maps';

const convertGeocode = (result) => {
  const newResult = {};
  (result.address_components || []).forEach((component) => {
    component.types.forEach((type) => {
      const newType = type
        .split('_')
        .map((frag, i) => (i > 0 ? `${frag[0].toUpperCase()}${frag.substr(1)}` : frag)) // eslint-disable-line
        .join('');
      newResult[newType] = component.long_name;
      newResult[`${newType}Short`] = component.short_name;
    });
  });
  newResult.formattedAddress = result.formatted_address;
  if (result.geometry) {
    if (result.geometry.location) {
      newResult.lat = result.geometry.location.lat;
      newResult.lng = result.geometry.location.lng;
    }
    newResult.locationType = result.geometry.location_type;
  }
  newResult.partialMatch = result.partial_match;
  newResult.id = result.place_id;
  newResult.types = result.types;
  return newResult;
};

export default (key) => {
  const googleMapsClient = maps.createClient({
    key,
    Promise,
  });
  return (method, payload, { raw = false } = {}) =>
    new Promise((yay, nay) => {
      if (!googleMapsClient[method]) {
        nay('Method does not exist');
      }
      googleMapsClient[method](payload, (err, result) => {
        if (err) {
          nay(err.json.error_message);
        } else if (raw) {
          yay(result.json.results);
        } else {
          yay(result.json.results.map(convertGeocode));
        }
      });
    });
};
