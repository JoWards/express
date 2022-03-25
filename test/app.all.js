<<<<<<< HEAD

var express = require('../')
  , request = require('supertest');

describe('app.all()', function(){
  it('should add a router per method', function(done){
    var app = express();

    app.all('/tobi', function(req, res){
      res.end(req.method);
    });

    request(app)
    .put('/tobi')
    .expect('PUT', function(){
      request(app)
      .get('/tobi')
      .expect('GET', done);
    });
  })

  it('should run the callback for a method just once', function(done){
    var app = express()
      , n = 0;

    app.all('/*', function(req, res, next){
      if (n++) return done(new Error('DELETE called several times'));
      next();
    });

    request(app)
    .del('/tobi')
    .expect(404, done);
  })
})
=======
'use strict'

var after = require('after')
var express = require('../')
  , request = require('supertest');

describe('app.all()', function(){
  it('should add a router per method', function(done){
    var app = express();
    var cb = after(2, done)

    app.all('/tobi', function(req, res){
      res.end(req.method);
    });

    request(app)
      .put('/tobi')
      .expect(200, 'PUT', cb)

    request(app)
      .get('/tobi')
      .expect(200, 'GET', cb)
  })

  it('should run the callback for a method just once', function(done){
    var app = express()
      , n = 0;

    app.all('/*', function(req, res, next){
      if (n++) return done(new Error('DELETE called several times'));
      next();
    });

    request(app)
    .del('/tobi')
    .expect(404, done);
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
