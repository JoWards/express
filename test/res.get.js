<<<<<<< HEAD

var express = require('..');
var request = require('supertest');

describe('res', function(){
  describe('.get(field)', function(){
    it('should get the response header field', function (done) {
      var app = express();

      app.use(function (req, res) {
        res.setHeader('Content-Type', 'text/x-foo');
        res.send(res.get('Content-Type'));
      });

      request(app)
      .get('/')
      .expect(200, 'text/x-foo', done);
    })
  })
})
=======
'use strict'

var express = require('..');
var request = require('supertest');

describe('res', function(){
  describe('.get(field)', function(){
    it('should get the response header field', function (done) {
      var app = express();

      app.use(function (req, res) {
        res.setHeader('Content-Type', 'text/x-foo');
        res.send(res.get('Content-Type'));
      });

      request(app)
      .get('/')
      .expect(200, 'text/x-foo', done);
    })
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
