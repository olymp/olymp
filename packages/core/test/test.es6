test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

/* eslint-disable */
/*const supertest = require('supertest');
const api = supertest('http://localhost:3000');
const fetch = require('isomorphic-fetch');
const jsdom = require("jsdom");

const should = require('chai').should();
const expect = require('chai').expect;

require("jsdom").defaultDocumentFeatures = {
    FetchExternalResources: ["script"],
    ProcessExternalResources: false
};

describe('server basic functions', function() {
  this.timeout(15000);
  before((done) => {
    this.server = require('../.build/server').default;
    setTimeout(done, 1000);
  });

  after(() => {
    this.server.close();
  });

  it('should get ok status', function() {
    return fetch('http://localhost:3000/')
      .then(res => {
        expect(res.ok).to.equal(true);
        expect(res.status).to.equal(200);
        return res.text();
      }).then((body) => {
        var jsdom = require("jsdom").jsdom;
        var doc = jsdom(body, {
          features: {
            ProcessExternalResources: false
          }
        });
        //console.log(body);
      });
  });
});
*/
