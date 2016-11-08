process.env.AUTH_SECRET = 'qokpw212';
process.env.TEST = true;
process.env.GCLOUD_PROJECT = 'admn-usc';
process.env.MAILS = true;

var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('/auth/:method', (req, res, next) => {
  delete require.cache[require.resolve('powr-datastore')];
  delete require.cache[require.resolve('../lib/handler')];

  var DataStore = require('powr-datastore');
  var adapter = new DataStore({project: process.env.GCLOUD_PROJECT});
  var auth = require('../lib/handler').auth({adapter: adapter});
  auth({method: req.params.method, payload: req.body})
    .then(x => res.json(x))
    .catch(err => next(err));
});

app.all((err, req, res, next) => {
  res.status(500);
  res.render('error', { error: err });
});

app.listen(3000, function () {
  console.log('Auth app ready on 3000');
});
