import google from 'googleapis';

const analytics = google.analytics('v3');
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  '313179142007-nhmaflkiqjqok1bvihikl8j4andgv8b2.apps.googleusercontent.com',
  'wUEOLP9Cqr6eqPurE4C3y1dJ'
);

export default () => {
  console.log('Philipp test 3');

  oauth2Client.setCredentials({
    access_token: 'ACCESS TOKEN HERE'
  });

  const resourceBody = {
    name: 'Example Experiment',
    status: 'READY_TO_RUN',
    objectiveMetric: 'ga:goal1Completions',
    servingFramework: 'API',
    variations: [{ name: 'olymp-etgh', url: 'https://thomasgemeinde-hofheim.de', status: 'ACTIVE' }],
  };

  analytics.management.experiments.insert({
    auth: oauth2Client,
    accountId: 'your-accountId',
    webPropertyId: 'your-webPropertyId',
    profileId: 'your-profileId',
    resource: resourceBody
  }, (err, body) => {
    if (err) {
      console.log('Philipp test 5');
      return console.log(err);
    }

    return console.log(body);
  });
};
