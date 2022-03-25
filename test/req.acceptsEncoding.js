<<<<<<< HEAD

var express = require('../')
  , request = require('supertest');

describe('req', function(){
  describe('.acceptsEncoding', function(){
    it('should be true if encoding accepted', function(done){
      var app = express();

      app.use(function(req, res){
        req.acceptsEncoding('gzip').should.be.ok()
        req.acceptsEncoding('deflate').should.be.ok()
        res.end();
      });

      request(app)
      .get('/')
      .set('Accept-Encoding', ' gzip, deflate')
      .expect(200, done);
    })

    it('should be false if encoding not accepted', function(done){
      var app = express();

      app.use(function(req, res){
        req.acceptsEncoding('bogus').should.not.be.ok()
        res.end();
      });

      request(app)
      .get('/')
      .set('Accept-Encoding', ' gzip, deflate')
      .expect(200, done);
    })
  })
})
=======
'use strict'

var express = require('../')
  , request = require('supertest');

describe('req', function(){
  describe('.acceptsEncoding', function(){
    it('should return encoding if accepted', function (done) {
      var app = express();

      app.get('/', function (req, res) {
        res.send({
          gzip: req.acceptsEncoding('gzip'),
          deflate: req.acceptsEncoding('deflate')
        })
      })

      request(app)
        .get('/')
        .set('Accept-Encoding', ' gzip, deflate')
        .expect(200, { gzip: 'gzip', deflate: 'deflate' }, done)
    })

    it('should be false if encoding not accepted', function(done){
      var app = express();

      app.get('/', function (req, res) {
        res.send({
          bogus: req.acceptsEncoding('bogus')
        })
      })

      request(app)
        .get('/')
        .set('Accept-Encoding', ' gzip, deflate')
        .expect(200, { bogus: false }, done)
    })
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
