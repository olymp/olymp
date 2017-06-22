import createMaps from './maps';

const convertGeocode = (result) => {
  const newResult = {};
  (result.address_components || []).forEach((component) => {
    component.types.forEach((type) => {
      const newType = type
        .split('_')
        .map(
          (frag, i) =>
            i > 0 ? `${frag[0].toUpperCase()}${frag.substr(1)}` : frag
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

export default (schema, key) => {
  const maps = createMaps(key);
  schema.addSchema({
    name: 'geocode',
    query: `
      geocode(address: String, region: String, language: String): Geocode
      geocodeList(address: String, region: String, language: String): [Geocode]
    `,
    resolvers: {
      queries: {
        geocode: (source, args) =>
          maps('geocode', args).then(
            result => result.json.results.map(convertGeocode)[0]
          ),
        geocodeList: (source, args) =>
          maps('geocode', args).then(result =>
            result.json.results.map(convertGeocode)
          ),
      },
    },
    schema: `
      type Geocode {
        id: String
        streetNumber: String
        route: String
        locality: String
        administrativeAreaLevel1: String
        administrativeAreaLevel2: String
        country: String
        postalCode: String
        formattedAddress: String
        lat: Float
        lng: Float
        locationType: String
        partialMatch: Boolean
        types: [String]
      }
    `,
  });
};
