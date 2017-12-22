import google from 'googleapis';
import bluebird from 'bluebird';
import shortID from 'shortid';
import createMaps from './maps';
import { metricsObj, dimensionsObj } from '../definitions';

// https://ga-dev-tools.appspot.com/query-explorer/

const analytics = bluebird.promisify(google.analytics('v3').data.ga.get);

export default (mapsKey, mail, key) => {
  const jwtClient =
    key &&
    new google.auth.JWT(
      mail,
      null,
      key.split('\\n').join('\n'),
      ['https://www.googleapis.com/auth/analytics'], // an array of auth scopes
      null,
    );

  const maps = createMaps(mapsKey);

  if (jwtClient) {
    jwtClient.authorize((err, tokens) => {
      if (err) {
        console.log(err);
      }
    });
  }
  return {
    name: 'google',
    queries: `
      place(placeId: String!): Geocode
      geocode(address: String!, region: String, language: String): Geocode
      geocodeList(address: String!, region: String, language: String): [Geocode]
      places(input: String!, lat: Float, lng: Float, language: String): [PlaceAutoComplete]
      analyticsQuery(start: String!, end: String!, metrics: [ANALYTICS_METRICS], dimensions: [ANALYTICS_DIMENSIONS], sorts: [ANALYTICS_SORT], filters: [AnalyticsFilter]): AnalyticsQuery
    `,
    resolvers: {
      queries: {
        analyticsQuery: (
          source,
          {
            start,
            end,
            metrics = [],
            dimensions = [],
            sorts = [],
            filters = [],
          },
        ) => {
          if (!jwtClient) {
            return null;
          }

          const metricsArray = metrics.map(name => metricsObj[name].name);

          const dimensionsArray = dimensions.map(
            name => dimensionsObj[name].name,
          );

          const sortsArray = sorts.map(sort => {
            // ascending
            if (sort.indexOf('_ASC') !== -1) {
              return { ...metricsObj, ...dimensionsObj }[
                sort.replace('_ASC', '')
              ].name;
            }

            // descending
            return `-${{ ...metricsObj, ...dimensionsObj }[
              sort.replace('_DESC', '')
            ].name}`;
          });

          const query = {
            auth: jwtClient,
            ids: 'ga:87658937',
            sort: sortsArray,
            'start-date': start,
            'end-date': end,
            metrics: metricsArray.join(','),
            dimensions: dimensionsArray.join(','),
          };
          if (filters.length) {
            filters = filters.map(filter => {
              const name = (metricsObj[filter.metric] ||
                dimensionsObj[filter.dimension]
              ).name;

              if (filter.operator === 'NE') {
                return `${name}==${filter.expression}`;
              } else if (filter.operator === 'GT') {
                return `${name}>${filter.expression}`;
              } else if (filter.operator === 'GE') {
                return `${name}>=${filter.expression}`;
              } else if (filter.operator === 'LT') {
                return `${name}<${filter.expression}`;
              } else if (filter.operator === 'lE') {
                return `${name}<=${filter.expression}`;
              }

              return `${name}==${filter.expression}`;
            });
            query.filters = filters.join(','); // => OR, AND is still missing!
          }

          return analytics(
            query,
          ).then(({ columnHeaders, rows, totalsForAllResults }) => {
            const cols = columnHeaders.map(x => x.name.substr(3));

            const resultRows = (rows || []).map(values =>
              cols.reduce((o, k, i) => {
                o[k] = values[i];
                return o;
              }, {}),
            );

            const resultTotals = Object.keys(
              totalsForAllResults,
            ).reduce((o, k, i) => {
              o[k.substr(3)] = totalsForAllResults[k];
              return o;
            }, {});

            resultTotals.rows = resultRows;
            resultTotals.id = shortID.generate();

            return resultTotals;
          });
        },
        place: (source, args) => maps.placeById(args.placeId),
        geocode: (source, args) =>
          maps
            .geocode({
              ...args,
              components: { country: 'DE' },
            })
            .then(result => result[0]),
        geocodeList: (source, args) =>
          maps.geocode({
            ...args,
            components: { country: 'DE' },
          }),
        places: (source, { lat, lng, language, ...args }) =>
          maps.placesAutoComplete({
            ...args,
            types: 'address',
            language: language || 'de',
            components: { country: 'de' },
            location:
              lat !== undefined && lng !== undefined
                ? `${lat},${lng}`
                : undefined,
            radius: lat !== undefined && lng !== undefined ? 1000 : undefined,
          }),
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
      type PlaceAutoComplete {
        description: String,
        id: String,
        placeId: String,
        reference: String
      }
      type AnalyticsQuery {
        id: String
        ${Object.keys(metricsObj)
          .map(key => `${metricsObj[key].output}: ${metricsObj[key].type}`)
          .join('\n')}
        rows: [AnalyticsQueryRows]
      }
      type AnalyticsQueryRows {
        id: String
        ${Object.keys(metricsObj)
          .map(key => `${metricsObj[key].output}: ${metricsObj[key].type}`)
          .join('\n')}
        ${Object.keys(dimensionsObj)
          .map(
            key => `${dimensionsObj[key].output}: ${dimensionsObj[key].type}`,
          )
          .join('\n')}
      }
      input AnalyticsFilter {
        metric: ANALYTICS_METRICS
        dimension: ANALYTICS_DIMENSIONS
        operator: ANALYTICS_OPERATOR
        expression: String
      }
      enum ANALYTICS_SORT {
        ${Object.keys(metricsObj).map(key => `${key}_ASC`)}
        ${Object.keys(metricsObj).map(key => `${key}_DESC`)}
        ${Object.keys(dimensionsObj).map(key => `${key}_ASC`)}
        ${Object.keys(dimensionsObj).map(key => `${key}_DESC`)}
      }
      enum ANALYTICS_METRICS {
        ${Object.keys(metricsObj)}
      }
      enum ANALYTICS_DIMENSIONS {
        ${Object.keys(dimensionsObj)}
      }
      enum ANALYTICS_OPERATOR {
        EQ
        NE
        GT
        GE
        LT
        LE
      }
    `,
  };
};
