var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import createMaps from './maps';
import google from 'googleapis';
import bluebird from 'bluebird';
import moment from 'moment';
import shortID from 'shortid';
var analytics = bluebird.promisify(google.analytics('v3').data.ga.get);
var dimensionObj = {
    PAGE_TITLE: 'ga:pageTitle',
    CITY: 'ga:city',
    USER_GENDER: 'ga:userGender',
    USER_AGE_BRACKET: 'ga:userAgeBracket',
    DEVICE_CATEGORY: 'ga:deviceCategory',
    BROWSER: 'ga:browser',
    USER_TYPE: 'ga:userType',
    SOURCE: 'ga:source',
    REGION_ISO_CODE: 'ga:regionIsoCode',
    SCREEN_RESOLUTION: 'ga:screenResolution',
};
export default function (mapsKey, mail, key) {
    var jwtClient = new google.auth.JWT(mail, null, key.split('\\n').join('\n'), ['https://www.googleapis.com/auth/analytics'], null);
    var maps = createMaps(mapsKey);
    jwtClient.authorize(function (err, tokens) {
        if (err) {
            console.log(err);
        }
    });
    return {
        name: 'geocode',
        queries: "\n      geocode(address: String!, region: String, language: String): Geocode\n      geocodeList(address: String!, region: String, language: String): [Geocode]\n      analyticsPageviews(start: String!, end: String!, dimensions: [ANALYTICS_PAGEVIEW_DIMENSIONS], time: ANALYTICS_PAGEVIEW_TIMES, sort: ANALYTICS_PAGEVIEW_SORT): AnalyticsPageviews\n    ",
        resolvers: {
            queries: {
                analyticsPageviews: function (source, _a) {
                    var start = _a.start, end = _a.end, time = _a.time, _b = _a.dimensions, dimensions = _b === void 0 ? [] : _b, sort = _a.sort;
                    var dimensionArray = dimensions.map(function (name) { return dimensionObj[name]; });
                    var sorts = '';
                    if (!sort || sort === 'PAGEVIEWS') {
                        sorts = '-ga:pageviews';
                    }
                    else if (sort === 'SESSIONS') {
                        sorts = '-ga:sessions';
                    }
                    if (time === 'MONTH') {
                        dimensionArray.push('ga:year,ga:month');
                        if (sort === 'DATE') {
                            sorts = 'ga:year,ga:month';
                        }
                    }
                    else if (time === 'WEEK') {
                        dimensionArray.push('ga:year,ga:week');
                        if (sort === 'DATE') {
                            sorts = 'ga:year,ga:week';
                        }
                    }
                    else if (time === 'DAY') {
                        dimensionArray.push('ga:date');
                        if (sort === 'DATE') {
                            sorts = 'ga:date';
                        }
                    }
                    else {
                        dimensionArray.push('ga:year');
                        if (sort === 'DATE') {
                            sorts = 'ga:year';
                        }
                    }
                    return analytics({
                        auth: jwtClient,
                        ids: 'ga:110941031',
                        sort: sorts,
                        'start-date': start,
                        'end-date': end,
                        metrics: 'ga:sessions,ga:pageviews,ga:timeOnPage,ga:avgTimeOnPage',
                        dimensions: dimensionArray.join(','),
                    }).then(function (_a) {
                        var columnHeaders = _a.columnHeaders, rows = _a.rows, totalsForAllResults = _a.totalsForAllResults;
                        var cols = columnHeaders.map(function (x) { return x.name.substr(3); });
                        var resultRows = rows
                            .map(function (values) {
                            return cols.reduce(function (o, k, i) {
                                o[k] = values[i];
                                return o;
                            }, {});
                        })
                            .map(function (x) {
                            var year = x.year, month = x.month, week = x.week, date = x.date, rest = __rest(x, ["year", "month", "week", "date"]);
                            rest.id = shortID.generate();
                            if (time === 'MONTH') {
                                rest.date = +moment("" + year + month + "01", 'YYYYMMDD');
                            }
                            else if (time === 'WEEK') {
                                rest.date = +moment(year + "0101", 'YYYYMMDD').add('week', week);
                            }
                            else if (time === 'DAY') {
                                rest.date = +moment(date, 'YYYYMMDD');
                            }
                            else {
                                rest.date = +moment(year + "0101", 'YYYYMMDD');
                            }
                            return rest;
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
                geocode: function (source, args) {
                    return maps('geocode', args).then(function (result) { return result.json.results.map(convertGeocode)[0]; });
                },
                geocodeList: function (source, args) {
                    return maps('geocode', args).then(function (result) {
                        return result.json.results.map(convertGeocode);
                    });
                },
            },
        },
        schema: "\n      type Geocode {\n        id: String\n        streetNumber: String\n        route: String\n        locality: String\n        administrativeAreaLevel1: String\n        administrativeAreaLevel2: String\n        country: String\n        postalCode: String\n        formattedAddress: String\n        lat: Float\n        lng: Float\n        locationType: String\n        partialMatch: Boolean\n        types: [String]\n      }\n      type AnalyticsPageviews {\n        id: String\n        sessions: Int\n        pageviews: Int\n        timeOnPage: Float\n        avgTimeOnPage: Float\n        rows: [AnalyticsPageviewRows]\n      }\n      type AnalyticsPageviewRows {\n        id: String\n        pageviews: Int\n        sessions: Int\n        pageTitle: String\n        city: String\n        deviceCategory: String\n        timeOnPage: Float\n        avgTimeOnPage: Float\n        userGender: String\n        userAgeBracket: String\n        date: Date\n      }\n      enum ANALYTICS_PAGEVIEW_TIMES {\n        YEAR\n        MONTH\n        WEEK\n        DAY\n      }\n      enum ANALYTICS_PAGEVIEW_SORT {\n        PAGEVIEWS\n        SESSIONS\n        DATE\n      }\n      enum ANALYTICS_PAGEVIEW_DIMENSIONS {\n        PAGE_TITLE\n        CITY\n        USER_GENDER\n        USER_AGE_BRACKET\n        DEVICE_CATEGORY\n        BROWSER\n        USER_TYPE\n        SOURCE\n        REGION_ISO_CODE\n        SCREEN_RESOLUTION\n      }\n    ",
    };
};
var convertGeocode = function (result) {
    var newResult = {};
    (result.address_components || []).forEach(function (component) {
        component.types.forEach(function (type) {
            var newType = type
                .split('_')
                .map(function (frag, i) {
                return i > 0 ? "" + frag[0].toUpperCase() + frag.substr(1) : frag;
            })
                .join('');
            newResult[newType] = component.long_name;
            newResult[newType + "Short"] = component.short_name;
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
//# sourceMappingURL=graphql.js.map