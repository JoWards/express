<<<<<<< HEAD

var express = require('../')
  , request = require('supertest');

describe('res', function(){
  describe('.locals', function(){
    it('should be empty by default', function(done){
      var app = express();

      app.use(function(req, res){
        res.json(res.locals)
      });

      request(app)
      .get('/')
      .expect(200, {}, done)
    })
  })

  it('should work when mounted', function(done){
    var app = express();
    var blog = express();

    app.use(blog);

    blog.use(function(req, res, next){
      res.locals.foo = 'bar';
      next();
    });

    app.use(function(req, res){
      res.json(res.locals)
    });

    request(app)
    .get('/')
    .expect(200, { foo: 'bar' }, done)
  })
})
=======
'use strict'

var express = require('../')
  , request = require('supertest');

describe('res', function(){
  describe('.locals', function(){
    it('should be empty by default', function(done){
      var app = express();

      app.use(function(req, res){
        res.json(res.locals)
      });

      request(app)
      .get('/')
      .expect(200, {}, done)
    })
  })

  it('should work when mounted', function(done){
    var app = express();
    var blog = express();

    app.use(blog);

    blog.use(function(req, res, next){
      res.locals.foo = 'bar';
      next();
    });

    app.use(function(req, res){
      res.json(res.locals)
    });

    request(app)
    .get('/')
    .expect(200, { foo: 'bar' }, done)
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
