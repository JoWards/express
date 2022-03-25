<<<<<<< HEAD

var express = require('../');
var request = require('supertest');
var assert = require('assert');

describe('HEAD', function(){
  it('should default to GET', function(done){
    var app = express();

    app.get('/tobi', function(req, res){
      // send() detects HEAD
      res.send('tobi');
    });

    request(app)
    .head('/tobi')
    .expect(200, done);
  })

  it('should output the same headers as GET requests', function(done){
    var app = express();

    app.get('/tobi', function(req, res){
      // send() detects HEAD
      res.send('tobi');
    });

    request(app)
    .head('/tobi')
    .expect(200, function(err, res){
      if (err) return done(err);
      var headers = res.headers;
      request(app)
      .get('/tobi')
      .expect(200, function(err, res){
        if (err) return done(err);
        delete headers.date;
        delete res.headers.date;
        assert.deepEqual(res.headers, headers);
        done();
      });
    });
  })
})

describe('app.head()', function(){
  it('should override', function(done){
    var app = express()
      , called;

    app.head('/tobi', function(req, res){
      called = true;
      res.end('');
    });

    app.get('/tobi', function(req, res){
      assert(0, 'should not call GET');
      res.send('tobi');
    });

    request(app)
    .head('/tobi')
    .expect(200, function(){
      assert(called);
      done();
    });
  })
})
=======
'use strict'

var express = require('../');
var request = require('supertest');
var assert = require('assert');

describe('HEAD', function(){
  it('should default to GET', function(done){
    var app = express();

    app.get('/tobi', function(req, res){
      // send() detects HEAD
      res.send('tobi');
    });

    request(app)
    .head('/tobi')
    .expect(200, done);
  })

  it('should output the same headers as GET requests', function(done){
    var app = express();

    app.get('/tobi', function(req, res){
      // send() detects HEAD
      res.send('tobi');
    });

    request(app)
    .head('/tobi')
    .expect(200, function(err, res){
      if (err) return done(err);
      var headers = res.headers;
      request(app)
      .get('/tobi')
      .expect(200, function(err, res){
        if (err) return done(err);
        delete headers.date;
        delete res.headers.date;
        assert.deepEqual(res.headers, headers);
        done();
      });
    });
  })
})

describe('app.head()', function(){
  it('should override', function(done){
    var app = express()

    app.head('/tobi', function(req, res){
      res.header('x-method', 'head')
      res.end()
    });

    app.get('/tobi', function(req, res){
      res.header('x-method', 'get')
      res.send('tobi');
    });

    request(app)
      .head('/tobi')
      .expect('x-method', 'head')
      .expect(200, done)
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
