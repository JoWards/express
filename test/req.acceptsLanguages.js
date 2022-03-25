<<<<<<< HEAD

var express = require('../')
  , request = require('supertest');

describe('req', function(){
  describe('.acceptsLanguages', function(){
    it('should be true if language accepted', function(done){
      var app = express();

      app.use(function(req, res){
        req.acceptsLanguages('en-us').should.be.ok()
        req.acceptsLanguages('en').should.be.ok()
        res.end();
      });

      request(app)
      .get('/')
      .set('Accept-Language', 'en;q=.5, en-us')
      .expect(200, done);
    })

    it('should be false if language not accepted', function(done){
      var app = express();

      app.use(function(req, res){
        req.acceptsLanguages('es').should.not.be.ok()
        res.end();
      });

      request(app)
      .get('/')
      .set('Accept-Language', 'en;q=.5, en-us')
      .expect(200, done);
    })

    describe('when Accept-Language is not present', function(){
      it('should always return true', function(done){
        var app = express();

        app.use(function(req, res){
          req.acceptsLanguages('en').should.be.ok()
          req.acceptsLanguages('es').should.be.ok()
          req.acceptsLanguages('jp').should.be.ok()
          res.end();
        });

        request(app)
        .get('/')
        .expect(200, done);
      })
    })
  })
})
=======
'use strict'

var express = require('../')
  , request = require('supertest');

describe('req', function(){
  describe('.acceptsLanguages', function(){
    it('should return language if accepted', function (done) {
      var app = express();

      app.get('/', function (req, res) {
        res.send({
          'en-us': req.acceptsLanguages('en-us'),
          en: req.acceptsLanguages('en')
        })
      })

      request(app)
        .get('/')
        .set('Accept-Language', 'en;q=.5, en-us')
        .expect(200, { 'en-us': 'en-us', en: 'en' }, done)
    })

    it('should be false if language not accepted', function(done){
      var app = express();

      app.get('/', function (req, res) {
        res.send({
          es: req.acceptsLanguages('es')
        })
      })

      request(app)
        .get('/')
        .set('Accept-Language', 'en;q=.5, en-us')
        .expect(200, { es: false }, done)
    })

    describe('when Accept-Language is not present', function(){
      it('should always return language', function (done) {
        var app = express();

        app.get('/', function (req, res) {
          res.send({
            en: req.acceptsLanguages('en'),
            es: req.acceptsLanguages('es'),
            jp: req.acceptsLanguages('jp')
          })
        })

        request(app)
          .get('/')
          .expect(200, { en: 'en', es: 'es', jp: 'jp' }, done)
      })
    })
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
