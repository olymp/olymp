var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import google from 'googleapis';
import bluebird from 'bluebird';
import shortID from 'shortid';
import createMaps from './maps';
import { metricsObj, dimensionsObj } from '../definitions';

// https://ga-dev-tools.appspot.com/query-explorer/

var analytics = bluebird.promisify(google.analytics('v3').data.ga.get);

export default (function (mapsKey, mail, key) {
  var jwtClient = key && new google.auth.JWT(mail, null, key.split('\\n').join('\n'), ['https://www.googleapis.com/auth/analytics'], // an array of auth scopes
  null);

  var maps = createMaps(mapsKey);

  if (jwtClient) {
    jwtClient.authorize(function (err, tokens) {
      if (err) {
        console.log(err);
      }
    });
  }
  return {
    name: 'google',
    queries: '\n      place(placeId: String!): Geocode\n      geocode(address: String!, region: String, language: String): Geocode\n      geocodeList(address: String!, region: String, language: String): [Geocode]\n      places(input: String!, lat: Float, lng: Float, language: String): [PlaceAutoComplete]\n      analyticsQuery(start: String!, end: String!, metrics: [ANALYTICS_METRICS], dimensions: [ANALYTICS_DIMENSIONS], sorts: [ANALYTICS_SORT], filters: [AnalyticsFilter]): AnalyticsQuery\n    ',
    resolvers: {
      queries: {
        analyticsQuery: function analyticsQuery(source, _ref) {
          var start = _ref.start,
              end = _ref.end,
              _ref$metrics = _ref.metrics,
              metrics = _ref$metrics === undefined ? [] : _ref$metrics,
              _ref$dimensions = _ref.dimensions,
              dimensions = _ref$dimensions === undefined ? [] : _ref$dimensions,
              _ref$sorts = _ref.sorts,
              sorts = _ref$sorts === undefined ? [] : _ref$sorts,
              _ref$filters = _ref.filters,
              filters = _ref$filters === undefined ? [] : _ref$filters;

          if (!jwtClient) {
            return null;
          }

          var metricsArray = metrics.map(function (name) {
            return metricsObj[name].name;
          });

          var dimensionsArray = dimensions.map(function (name) {
            return dimensionsObj[name].name;
          });

          var sortsArray = sorts.map(function (sort) {
            // ascending
            if (sort.indexOf('_ASC') !== -1) {
              return _extends({}, metricsObj, dimensionsObj)[sort.replace('_ASC', '')].name;
            }

            // descending
            return '-' + _extends({}, metricsObj, dimensionsObj)[sort.replace('_DESC', '')].name;
          });

          var query = {
            auth: jwtClient,
            ids: 'ga:87658937',
            sort: sortsArray,
            'start-date': start,
            'end-date': end,
            metrics: metricsArray.join(','),
            dimensions: dimensionsArray.join(',')
          };
          if (filters.length) {
            filters = filters.map(function (filter) {
              var name = (metricsObj[filter.metric] || dimensionsObj[filter.dimension]).name;

              if (filter.operator === 'NE') {
                return name + '==' + filter.expression;
              } else if (filter.operator === 'GT') {
                return name + '>' + filter.expression;
              } else if (filter.operator === 'GE') {
                return name + '>=' + filter.expression;
              } else if (filter.operator === 'LT') {
                return name + '<' + filter.expression;
              } else if (filter.operator === 'lE') {
                return name + '<=' + filter.expression;
              }

              return name + '==' + filter.expression;
            });
            query.filters = filters.join(','); // => OR, AND is still missing!
          }

          return analytics(query).then(function (_ref2) {
            var columnHeaders = _ref2.columnHeaders,
                rows = _ref2.rows,
                totalsForAllResults = _ref2.totalsForAllResults;

            var cols = columnHeaders.map(function (x) {
              return x.name.substr(3);
            });

            var resultRows = (rows || []).map(function (values) {
              return cols.reduce(function (o, k, i) {
                o[k] = values[i];
                return o;
              }, {});
            });

            var resultTotals = Object.keys(totalsForAllResults).reduce(function (o, k, i) {
              o[k.substr(3)] = totalsForAllResults[k];
              return o;
            }, {});

            resultTotals.rows = resultRows;
            resultTotals.id = shortID.generate();

            return resultTotals;
          });
        },
        place: function place(source, args) {
          return maps.placeById(args.placeId);
        },
        geocode: function geocode(source, args) {
          return maps.geocode(_extends({}, args, {
            components: { country: 'DE' }
          })).then(function (result) {
            return result[0];
          });
        },
        geocodeList: function geocodeList(source, args) {
          return maps.geocode(_extends({}, args, {
            components: { country: 'DE' }
          }));
        },
        places: function places(source, _ref3) {
          var lat = _ref3.lat,
              lng = _ref3.lng,
              language = _ref3.language,
              args = _objectWithoutProperties(_ref3, ['lat', 'lng', 'language']);

          return maps.placesAutoComplete(_extends({}, args, {
            types: 'address',
            language: language || 'de',
            components: { country: 'de' },
            location: lat !== undefined && lng !== undefined ? lat + ',' + lng : undefined,
            radius: lat !== undefined && lng !== undefined ? 1000 : undefined
          }));
        }
      }
    },
    schema: '\n      type Geocode {\n        id: String\n        streetNumber: String\n        route: String\n        locality: String\n        administrativeAreaLevel1: String\n        administrativeAreaLevel2: String\n        country: String\n        postalCode: String\n        formattedAddress: String\n        lat: Float\n        lng: Float\n        locationType: String\n        partialMatch: Boolean\n        types: [String]\n      }\n      type PlaceAutoComplete {\n        description: String,\n        id: String,\n        placeId: String,\n        reference: String\n      }\n      type AnalyticsQuery {\n        id: String\n        ' + Object.keys(metricsObj).map(function (key) {
      return metricsObj[key].output + ': ' + metricsObj[key].type;
    }).join('\n') + '\n        rows: [AnalyticsQueryRows]\n      }\n      type AnalyticsQueryRows {\n        id: String\n        ' + Object.keys(metricsObj).map(function (key) {
      return metricsObj[key].output + ': ' + metricsObj[key].type;
    }).join('\n') + '\n        ' + Object.keys(dimensionsObj).map(function (key) {
      return dimensionsObj[key].output + ': ' + dimensionsObj[key].type;
    }).join('\n') + '\n      }\n      input AnalyticsFilter {\n        metric: ANALYTICS_METRICS\n        dimension: ANALYTICS_DIMENSIONS\n        operator: ANALYTICS_OPERATOR\n        expression: String\n      }\n      enum ANALYTICS_SORT {\n        ' + Object.keys(metricsObj).map(function (key) {
      return key + '_ASC';
    }) + '\n        ' + Object.keys(metricsObj).map(function (key) {
      return key + '_DESC';
    }) + '\n        ' + Object.keys(dimensionsObj).map(function (key) {
      return key + '_ASC';
    }) + '\n        ' + Object.keys(dimensionsObj).map(function (key) {
      return key + '_DESC';
    }) + '\n      }\n      enum ANALYTICS_METRICS {\n        ' + Object.keys(metricsObj) + '\n      }\n      enum ANALYTICS_DIMENSIONS {\n        ' + Object.keys(dimensionsObj) + '\n      }\n      enum ANALYTICS_OPERATOR {\n        EQ\n        NE\n        GT\n        GE\n        LT\n        LE\n      }\n    '
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2dvb2dsZS9zZXJ2ZXIvZ3JhcGhxbC5lczYiXSwibmFtZXMiOlsiZ29vZ2xlIiwiYmx1ZWJpcmQiLCJzaG9ydElEIiwiY3JlYXRlTWFwcyIsIm1ldHJpY3NPYmoiLCJkaW1lbnNpb25zT2JqIiwiYW5hbHl0aWNzIiwicHJvbWlzaWZ5IiwiZGF0YSIsImdhIiwiZ2V0IiwibWFwc0tleSIsIm1haWwiLCJrZXkiLCJqd3RDbGllbnQiLCJhdXRoIiwiSldUIiwic3BsaXQiLCJqb2luIiwibWFwcyIsImF1dGhvcml6ZSIsImVyciIsInRva2VucyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwicXVlcmllcyIsInJlc29sdmVycyIsImFuYWx5dGljc1F1ZXJ5Iiwic291cmNlIiwic3RhcnQiLCJlbmQiLCJtZXRyaWNzIiwiZGltZW5zaW9ucyIsInNvcnRzIiwiZmlsdGVycyIsIm1ldHJpY3NBcnJheSIsIm1hcCIsImRpbWVuc2lvbnNBcnJheSIsInNvcnRzQXJyYXkiLCJzb3J0IiwiaW5kZXhPZiIsInJlcGxhY2UiLCJxdWVyeSIsImlkcyIsImxlbmd0aCIsImZpbHRlciIsIm1ldHJpYyIsImRpbWVuc2lvbiIsIm9wZXJhdG9yIiwiZXhwcmVzc2lvbiIsInRoZW4iLCJjb2x1bW5IZWFkZXJzIiwicm93cyIsInRvdGFsc0ZvckFsbFJlc3VsdHMiLCJjb2xzIiwieCIsInN1YnN0ciIsInJlc3VsdFJvd3MiLCJyZWR1Y2UiLCJvIiwiayIsImkiLCJ2YWx1ZXMiLCJyZXN1bHRUb3RhbHMiLCJPYmplY3QiLCJrZXlzIiwiaWQiLCJnZW5lcmF0ZSIsInBsYWNlIiwiYXJncyIsInBsYWNlQnlJZCIsInBsYWNlSWQiLCJnZW9jb2RlIiwiY29tcG9uZW50cyIsImNvdW50cnkiLCJyZXN1bHQiLCJnZW9jb2RlTGlzdCIsInBsYWNlcyIsImxhdCIsImxuZyIsImxhbmd1YWdlIiwicGxhY2VzQXV0b0NvbXBsZXRlIiwidHlwZXMiLCJsb2NhdGlvbiIsInVuZGVmaW5l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RCxDQUVFO0FBQUEsYUFBVWhDLGNBQWNRLEdBQWQsRUFBbUIyRSxNQUE3QixVQUF3Q25GLGNBQWNRLEdBQWQsRUFBbUI0RSxJQUEzRDtBQUFBLEtBRkYsRUFJQ3ZFLElBSkQsQ0FJTSxJQUpOLENBbkNOLDhPQWdETStDLE9BQU9DLElBQVAsQ0FBWTlELFVBQVosRUFBd0JpQyxHQUF4QixDQUE0QjtBQUFBLGFBQVV4QixHQUFWO0FBQUEsS0FBNUIsQ0FoRE4sa0JBaURNb0QsT0FBT0MsSUFBUCxDQUFZOUQsVUFBWixFQUF3QmlDLEdBQXhCLENBQTRCO0FBQUEsYUFBVXhCLEdBQVY7QUFBQSxLQUE1QixDQWpETixrQkFrRE1vRCxPQUFPQyxJQUFQLENBQVk3RCxhQUFaLEVBQTJCZ0MsR0FBM0IsQ0FBK0I7QUFBQSxhQUFVeEIsR0FBVjtBQUFBLEtBQS9CLENBbEROLGtCQW1ETW9ELE9BQU9DLElBQVAsQ0FBWTdELGFBQVosRUFBMkJnQyxHQUEzQixDQUErQjtBQUFBLGFBQVV4QixHQUFWO0FBQUEsS0FBL0IsQ0FuRE4sMkRBc0RNb0QsT0FBT0MsSUFBUCxDQUFZOUQsVUFBWixDQXRETiw4REF5RE02RCxPQUFPQyxJQUFQLENBQVk3RCxhQUFaLENBekROO0FBbElLLEdBQVA7QUF1TUQsQ0EzTkQiLCJmaWxlIjoicGFja2FnZXMvZ29vZ2xlL3NlcnZlci9ncmFwaHFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdvb2dsZSBmcm9tICdnb29nbGVhcGlzJztcbmltcG9ydCBibHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgc2hvcnRJRCBmcm9tICdzaG9ydGlkJztcbmltcG9ydCBjcmVhdGVNYXBzIGZyb20gJy4vbWFwcyc7XG5pbXBvcnQgeyBtZXRyaWNzT2JqLCBkaW1lbnNpb25zT2JqIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnO1xuXG4vLyBodHRwczovL2dhLWRldi10b29scy5hcHBzcG90LmNvbS9xdWVyeS1leHBsb3Jlci9cblxuY29uc3QgYW5hbHl0aWNzID0gYmx1ZWJpcmQucHJvbWlzaWZ5KGdvb2dsZS5hbmFseXRpY3MoJ3YzJykuZGF0YS5nYS5nZXQpO1xuXG5leHBvcnQgZGVmYXVsdCAobWFwc0tleSwgbWFpbCwga2V5KSA9PiB7XG4gIGNvbnN0IGp3dENsaWVudCA9XG4gICAga2V5ICYmXG4gICAgbmV3IGdvb2dsZS5hdXRoLkpXVChcbiAgICAgIG1haWwsXG4gICAgICBudWxsLFxuICAgICAga2V5LnNwbGl0KCdcXFxcbicpLmpvaW4oJ1xcbicpLFxuICAgICAgWydodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2FuYWx5dGljcyddLCAvLyBhbiBhcnJheSBvZiBhdXRoIHNjb3Blc1xuICAgICAgbnVsbCxcbiAgICApO1xuXG4gIGNvbnN0IG1hcHMgPSBjcmVhdGVNYXBzKG1hcHNLZXkpO1xuXG4gIGlmIChqd3RDbGllbnQpIHtcbiAgICBqd3RDbGllbnQuYXV0aG9yaXplKChlcnIsIHRva2VucykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2dvb2dsZScsXG4gICAgcXVlcmllczogYFxuICAgICAgcGxhY2UocGxhY2VJZDogU3RyaW5nISk6IEdlb2NvZGVcbiAgICAgIGdlb2NvZGUoYWRkcmVzczogU3RyaW5nISwgcmVnaW9uOiBTdHJpbmcsIGxhbmd1YWdlOiBTdHJpbmcpOiBHZW9jb2RlXG4gICAgICBnZW9jb2RlTGlzdChhZGRyZXNzOiBTdHJpbmchLCByZWdpb246IFN0cmluZywgbGFuZ3VhZ2U6IFN0cmluZyk6IFtHZW9jb2RlXVxuICAgICAgcGxhY2VzKGlucHV0OiBTdHJpbmchLCBsYXQ6IEZsb2F0LCBsbmc6IEZsb2F0LCBsYW5ndWFnZTogU3RyaW5nKTogW1BsYWNlQXV0b0NvbXBsZXRlXVxuICAgICAgYW5hbHl0aWNzUXVlcnkoc3RhcnQ6IFN0cmluZyEsIGVuZDogU3RyaW5nISwgbWV0cmljczogW0FOQUxZVElDU19NRVRSSUNTXSwgZGltZW5zaW9uczogW0FOQUxZVElDU19ESU1FTlNJT05TXSwgc29ydHM6IFtBTkFMWVRJQ1NfU09SVF0sIGZpbHRlcnM6IFtBbmFseXRpY3NGaWx0ZXJdKTogQW5hbHl0aWNzUXVlcnlcbiAgICBgLFxuICAgIHJlc29sdmVyczoge1xuICAgICAgcXVlcmllczoge1xuICAgICAgICBhbmFseXRpY3NRdWVyeTogKFxuICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgIGVuZCxcbiAgICAgICAgICAgIG1ldHJpY3MgPSBbXSxcbiAgICAgICAgICAgIGRpbWVuc2lvbnMgPSBbXSxcbiAgICAgICAgICAgIHNvcnRzID0gW10sXG4gICAgICAgICAgICBmaWx0ZXJzID0gW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgaWYgKCFqd3RDbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG1ldHJpY3NBcnJheSA9IG1ldHJpY3MubWFwKG5hbWUgPT4gbWV0cmljc09ialtuYW1lXS5uYW1lKTtcblxuICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbnNBcnJheSA9IGRpbWVuc2lvbnMubWFwKFxuICAgICAgICAgICAgbmFtZSA9PiBkaW1lbnNpb25zT2JqW25hbWVdLm5hbWUsXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IHNvcnRzQXJyYXkgPSBzb3J0cy5tYXAoc29ydCA9PiB7XG4gICAgICAgICAgICAvLyBhc2NlbmRpbmdcbiAgICAgICAgICAgIGlmIChzb3J0LmluZGV4T2YoJ19BU0MnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ubWV0cmljc09iaiwgLi4uZGltZW5zaW9uc09iaiB9W1xuICAgICAgICAgICAgICAgIHNvcnQucmVwbGFjZSgnX0FTQycsICcnKVxuICAgICAgICAgICAgICBdLm5hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRlc2NlbmRpbmdcbiAgICAgICAgICAgIHJldHVybiBgLSR7eyAuLi5tZXRyaWNzT2JqLCAuLi5kaW1lbnNpb25zT2JqIH1bXG4gICAgICAgICAgICAgIHNvcnQucmVwbGFjZSgnX0RFU0MnLCAnJylcbiAgICAgICAgICAgIF0ubmFtZX1gO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICAgICAgICBhdXRoOiBqd3RDbGllbnQsXG4gICAgICAgICAgICBpZHM6ICdnYTo4NzY1ODkzNycsXG4gICAgICAgICAgICBzb3J0OiBzb3J0c0FycmF5LFxuICAgICAgICAgICAgJ3N0YXJ0LWRhdGUnOiBzdGFydCxcbiAgICAgICAgICAgICdlbmQtZGF0ZSc6IGVuZCxcbiAgICAgICAgICAgIG1ldHJpY3M6IG1ldHJpY3NBcnJheS5qb2luKCcsJyksXG4gICAgICAgICAgICBkaW1lbnNpb25zOiBkaW1lbnNpb25zQXJyYXkuam9pbignLCcpLFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWx0ZXJzID0gZmlsdGVycy5tYXAoZmlsdGVyID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IChtZXRyaWNzT2JqW2ZpbHRlci5tZXRyaWNdIHx8XG4gICAgICAgICAgICAgICAgZGltZW5zaW9uc09ialtmaWx0ZXIuZGltZW5zaW9uXVxuICAgICAgICAgICAgICApLm5hbWU7XG5cbiAgICAgICAgICAgICAgaWYgKGZpbHRlci5vcGVyYXRvciA9PT0gJ05FJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtuYW1lfT09JHtmaWx0ZXIuZXhwcmVzc2lvbn1gO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlci5vcGVyYXRvciA9PT0gJ0dUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtuYW1lfT4ke2ZpbHRlci5leHByZXNzaW9ufWA7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLm9wZXJhdG9yID09PSAnR0UnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke25hbWV9Pj0ke2ZpbHRlci5leHByZXNzaW9ufWA7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyLm9wZXJhdG9yID09PSAnTFQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke25hbWV9PCR7ZmlsdGVyLmV4cHJlc3Npb259YDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIub3BlcmF0b3IgPT09ICdsRScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7bmFtZX08PSR7ZmlsdGVyLmV4cHJlc3Npb259YDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBgJHtuYW1lfT09JHtmaWx0ZXIuZXhwcmVzc2lvbn1gO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBxdWVyeS5maWx0ZXJzID0gZmlsdGVycy5qb2luKCcsJyk7IC8vID0+IE9SLCBBTkQgaXMgc3RpbGwgbWlzc2luZyFcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYW5hbHl0aWNzKFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKS50aGVuKCh7IGNvbHVtbkhlYWRlcnMsIHJvd3MsIHRvdGFsc0ZvckFsbFJlc3VsdHMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29scyA9IGNvbHVtbkhlYWRlcnMubWFwKHggPT4geC5uYW1lLnN1YnN0cigzKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFJvd3MgPSAocm93cyB8fCBbXSkubWFwKHZhbHVlcyA9PlxuICAgICAgICAgICAgICBjb2xzLnJlZHVjZSgobywgaywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIG9ba10gPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRvdGFscyA9IE9iamVjdC5rZXlzKFxuICAgICAgICAgICAgICB0b3RhbHNGb3JBbGxSZXN1bHRzLFxuICAgICAgICAgICAgKS5yZWR1Y2UoKG8sIGssIGkpID0+IHtcbiAgICAgICAgICAgICAgb1trLnN1YnN0cigzKV0gPSB0b3RhbHNGb3JBbGxSZXN1bHRzW2tdO1xuICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgICAgcmVzdWx0VG90YWxzLnJvd3MgPSByZXN1bHRSb3dzO1xuICAgICAgICAgICAgcmVzdWx0VG90YWxzLmlkID0gc2hvcnRJRC5nZW5lcmF0ZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0VG90YWxzO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwbGFjZTogKHNvdXJjZSwgYXJncykgPT4gbWFwcy5wbGFjZUJ5SWQoYXJncy5wbGFjZUlkKSxcbiAgICAgICAgZ2VvY29kZTogKHNvdXJjZSwgYXJncykgPT5cbiAgICAgICAgICBtYXBzXG4gICAgICAgICAgICAuZ2VvY29kZSh7XG4gICAgICAgICAgICAgIC4uLmFyZ3MsXG4gICAgICAgICAgICAgIGNvbXBvbmVudHM6IHsgY291bnRyeTogJ0RFJyB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiByZXN1bHRbMF0pLFxuICAgICAgICBnZW9jb2RlTGlzdDogKHNvdXJjZSwgYXJncykgPT5cbiAgICAgICAgICBtYXBzLmdlb2NvZGUoe1xuICAgICAgICAgICAgLi4uYXJncyxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHsgY291bnRyeTogJ0RFJyB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBwbGFjZXM6IChzb3VyY2UsIHsgbGF0LCBsbmcsIGxhbmd1YWdlLCAuLi5hcmdzIH0pID0+XG4gICAgICAgICAgbWFwcy5wbGFjZXNBdXRvQ29tcGxldGUoe1xuICAgICAgICAgICAgLi4uYXJncyxcbiAgICAgICAgICAgIHR5cGVzOiAnYWRkcmVzcycsXG4gICAgICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2UgfHwgJ2RlJyxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHsgY291bnRyeTogJ2RlJyB9LFxuICAgICAgICAgICAgbG9jYXRpb246XG4gICAgICAgICAgICAgIGxhdCAhPT0gdW5kZWZpbmVkICYmIGxuZyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBgJHtsYXR9LCR7bG5nfWBcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJhZGl1czogbGF0ICE9PSB1bmRlZmluZWQgJiYgbG5nICE9PSB1bmRlZmluZWQgPyAxMDAwIDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNjaGVtYTogYFxuICAgICAgdHlwZSBHZW9jb2RlIHtcbiAgICAgICAgaWQ6IFN0cmluZ1xuICAgICAgICBzdHJlZXROdW1iZXI6IFN0cmluZ1xuICAgICAgICByb3V0ZTogU3RyaW5nXG4gICAgICAgIGxvY2FsaXR5OiBTdHJpbmdcbiAgICAgICAgYWRtaW5pc3RyYXRpdmVBcmVhTGV2ZWwxOiBTdHJpbmdcbiAgICAgICAgYWRtaW5pc3RyYXRpdmVBcmVhTGV2ZWwyOiBTdHJpbmdcbiAgICAgICAgY291bnRyeTogU3RyaW5nXG4gICAgICAgIHBvc3RhbENvZGU6IFN0cmluZ1xuICAgICAgICBmb3JtYXR0ZWRBZGRyZXNzOiBTdHJpbmdcbiAgICAgICAgbGF0OiBGbG9hdFxuICAgICAgICBsbmc6IEZsb2F0XG4gICAgICAgIGxvY2F0aW9uVHlwZTogU3RyaW5nXG4gICAgICAgIHBhcnRpYWxNYXRjaDogQm9vbGVhblxuICAgICAgICB0eXBlczogW1N0cmluZ11cbiAgICAgIH1cbiAgICAgIHR5cGUgUGxhY2VBdXRvQ29tcGxldGUge1xuICAgICAgICBkZXNjcmlwdGlvbjogU3RyaW5nLFxuICAgICAgICBpZDogU3RyaW5nLFxuICAgICAgICBwbGFjZUlkOiBTdHJpbmcsXG4gICAgICAgIHJlZmVyZW5jZTogU3RyaW5nXG4gICAgICB9XG4gICAgICB0eXBlIEFuYWx5dGljc1F1ZXJ5IHtcbiAgICAgICAgaWQ6IFN0cmluZ1xuICAgICAgICAke09iamVjdC5rZXlzKG1ldHJpY3NPYmopXG4gICAgICAgICAgLm1hcChrZXkgPT4gYCR7bWV0cmljc09ialtrZXldLm91dHB1dH06ICR7bWV0cmljc09ialtrZXldLnR5cGV9YClcbiAgICAgICAgICAuam9pbignXFxuJyl9XG4gICAgICAgIHJvd3M6IFtBbmFseXRpY3NRdWVyeVJvd3NdXG4gICAgICB9XG4gICAgICB0eXBlIEFuYWx5dGljc1F1ZXJ5Um93cyB7XG4gICAgICAgIGlkOiBTdHJpbmdcbiAgICAgICAgJHtPYmplY3Qua2V5cyhtZXRyaWNzT2JqKVxuICAgICAgICAgIC5tYXAoa2V5ID0+IGAke21ldHJpY3NPYmpba2V5XS5vdXRwdXR9OiAke21ldHJpY3NPYmpba2V5XS50eXBlfWApXG4gICAgICAgICAgLmpvaW4oJ1xcbicpfVxuICAgICAgICAke09iamVjdC5rZXlzKGRpbWVuc2lvbnNPYmopXG4gICAgICAgICAgLm1hcChcbiAgICAgICAgICAgIGtleSA9PiBgJHtkaW1lbnNpb25zT2JqW2tleV0ub3V0cHV0fTogJHtkaW1lbnNpb25zT2JqW2tleV0udHlwZX1gLFxuICAgICAgICAgIClcbiAgICAgICAgICAuam9pbignXFxuJyl9XG4gICAgICB9XG4gICAgICBpbnB1dCBBbmFseXRpY3NGaWx0ZXIge1xuICAgICAgICBtZXRyaWM6IEFOQUxZVElDU19NRVRSSUNTXG4gICAgICAgIGRpbWVuc2lvbjogQU5BTFlUSUNTX0RJTUVOU0lPTlNcbiAgICAgICAgb3BlcmF0b3I6IEFOQUxZVElDU19PUEVSQVRPUlxuICAgICAgICBleHByZXNzaW9uOiBTdHJpbmdcbiAgICAgIH1cbiAgICAgIGVudW0gQU5BTFlUSUNTX1NPUlQge1xuICAgICAgICAke09iamVjdC5rZXlzKG1ldHJpY3NPYmopLm1hcChrZXkgPT4gYCR7a2V5fV9BU0NgKX1cbiAgICAgICAgJHtPYmplY3Qua2V5cyhtZXRyaWNzT2JqKS5tYXAoa2V5ID0+IGAke2tleX1fREVTQ2ApfVxuICAgICAgICAke09iamVjdC5rZXlzKGRpbWVuc2lvbnNPYmopLm1hcChrZXkgPT4gYCR7a2V5fV9BU0NgKX1cbiAgICAgICAgJHtPYmplY3Qua2V5cyhkaW1lbnNpb25zT2JqKS5tYXAoa2V5ID0+IGAke2tleX1fREVTQ2ApfVxuICAgICAgfVxuICAgICAgZW51bSBBTkFMWVRJQ1NfTUVUUklDUyB7XG4gICAgICAgICR7T2JqZWN0LmtleXMobWV0cmljc09iail9XG4gICAgICB9XG4gICAgICBlbnVtIEFOQUxZVElDU19ESU1FTlNJT05TIHtcbiAgICAgICAgJHtPYmplY3Qua2V5cyhkaW1lbnNpb25zT2JqKX1cbiAgICAgIH1cbiAgICAgIGVudW0gQU5BTFlUSUNTX09QRVJBVE9SIHtcbiAgICAgICAgRVFcbiAgICAgICAgTkVcbiAgICAgICAgR1RcbiAgICAgICAgR0VcbiAgICAgICAgTFRcbiAgICAgICAgTEVcbiAgICAgIH1cbiAgICBgLFxuICB9O1xufTtcbiJdfQ==
