<<<<<<< HEAD

var express = require('../')
  , request = require('supertest');

describe('res', function(){
  describe('.clearCookie(name)', function(){
    it('should set a cookie passed expiry', function(done){
      var app = express();

      app.use(function(req, res){
        res.clearCookie('sid').end();
      });

      request(app)
      .get('/')
      .expect('Set-Cookie', 'sid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT')
      .expect(200, done)
    })
  })

  describe('.clearCookie(name, options)', function(){
    it('should set the given params', function(done){
      var app = express();

      app.use(function(req, res){
        res.clearCookie('sid', { path: '/admin' }).end();
      });

      request(app)
      .get('/')
      .expect('Set-Cookie', 'sid=; Path=/admin; Expires=Thu, 01 Jan 1970 00:00:00 GMT')
      .expect(200, done)
    })
  })
})
=======
'use strict'

var express = require('../')
  , request = require('supertest');

describe('res', function(){
  describe('.clearCookie(name)', function(){
    it('should set a cookie passed expiry', function(done){
      var app = express();

      app.use(function(req, res){
        res.clearCookie('sid').end();
      });

      request(app)
      .get('/')
      .expect('Set-Cookie', 'sid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT')
      .expect(200, done)
    })
  })

  describe('.clearCookie(name, options)', function(){
    it('should set the given params', function(done){
      var app = express();

      app.use(function(req, res){
        res.clearCookie('sid', { path: '/admin' }).end();
      });

      request(app)
      .get('/')
      .expect('Set-Cookie', 'sid=; Path=/admin; Expires=Thu, 01 Jan 1970 00:00:00 GMT')
      .expect(200, done)
    })
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
