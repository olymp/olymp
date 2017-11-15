import maps from '@google/maps';

const convertGeocode = result => {
  const newResult = {};
  (result.address_components || []).forEach(component => {
    component.types.forEach(type => {
      const newType = type
        .split('_')
        .map(
          (frag, i) =>
            i > 0 ? `${frag[0].toUpperCase()}${frag.substr(1)}` : frag,
        ) // eslint-disable-line
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

export default key => {
  const googleMapsClient = maps.createClient({
    key,
    Promise,
  });
  return {
    placeById: (id, { raw = false } = {}) =>
      new Promise((yay, nay) => {
        googleMapsClient.place({ placeid: id }, (err, result) => {
          if (err) {
            nay(err.json.error_message);
          } else if (raw) {
            yay(result.json.result);
          } else {
            yay(result.json.result ? convertGeocode(result.json.result) : null);
          }
        });
      }),
    geocode: (payload, { raw = false } = {}) =>
      new Promise((yay, nay) => {
        googleMapsClient.geocode(payload, (err, result) => {
          if (err) {
            nay(err.json.error_message);
          } else if (raw) {
            yay(result.json.results);
          } else {
            yay(result.json.results.map(convertGeocode));
          }
        });
      }),
    placesAutoComplete: (payload, { raw = false } = {}) =>
      new Promise((yay, nay) => {
        googleMapsClient.placesAutoComplete(payload, (err, result) => {
          if (err) {
            nay(err.json.error_message);
          } else if (raw) {
            yay(result.json.predictions);
          } else {
            yay(
              result.json.predictions.map(
                ({ description, id, place_id, reference }) => ({
                  description,
                  id,
                  placeId: place_id,
                  reference,
                }),
              ),
            );
          }
        });
      }),
  };
};

/*
{ directions: [Function],
  distanceMatrix: [Function],
  elevation: [Function],
  elevationAlongPath: [Function],
  geocode: [Function],
  geolocate: [Function],
  reverseGeocode: [Function],
  places: [Function],
  placesNearby: [Function],
  placesRadar: [Function: deprecated],
  place: [Function],
  placesPhoto: [Function],
  placesAutoComplete: [Function],
  placesQueryAutoComplete: [Function],
  snapToRoads: [Function],
  nearestRoads: [Function],
  speedLimits: [Function],
  snappedSpeedLimits: [Function],
  timezone: [Function] }

*/
