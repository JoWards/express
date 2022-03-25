<<<<<<< HEAD

var express = require('../')
  , request = require('supertest');

describe('req', function(){
  describe('.path', function(){
    it('should return the parsed pathname', function(done){
      var app = express();

      app.use(function(req, res){
        res.end(req.path);
      });

      request(app)
      .get('/login?redirect=/post/1/comments')
      .expect('/login', done);
    })
  })
})
=======
'use strict'

var express = require('../')
  , request = require('supertest');

describe('req', function(){
  describe('.path', function(){
    it('should return the parsed pathname', function(done){
      var app = express();

      app.use(function(req, res){
        res.end(req.path);
      });

      request(app)
      .get('/login?redirect=/post/1/comments')
      .expect('/login', done);
    })
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
