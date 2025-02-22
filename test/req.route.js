<<<<<<< HEAD

var express = require('../')
  , request = require('supertest');

describe('req', function(){
  describe('.route', function(){
    it('should be the executed Route', function(done){
      var app = express();

      app.get('/user/:id/:op?', function(req, res, next){
        req.route.path.should.equal('/user/:id/:op?');
        next();
      });

      app.get('/user/:id/edit', function(req, res){
        req.route.path.should.equal('/user/:id/edit');
        res.end();
      });

      request(app)
      .get('/user/12/edit')
      .expect(200, done);
    })
  })
})
=======
'use strict'

var express = require('../')
  , request = require('supertest');

describe('req', function(){
  describe('.route', function(){
    it('should be the executed Route', function(done){
      var app = express();

      app.get('/user/:id/:op?', function(req, res, next){
        res.header('path-1', req.route.path)
        next();
      });

      app.get('/user/:id/edit', function(req, res){
        res.header('path-2', req.route.path)
        res.end();
      });

      request(app)
        .get('/user/12/edit')
        .expect('path-1', '/user/:id/:op?')
        .expect('path-2', '/user/:id/edit')
        .expect(200, done)
    })
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
