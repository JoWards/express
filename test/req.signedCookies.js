<<<<<<< HEAD

var express = require('../')
  , request = require('supertest')
  , cookieParser = require('cookie-parser')

describe('req', function(){
  describe('.signedCookies', function(){
    it('should return a signed JSON cookie', function(done){
      var app = express();

      app.use(cookieParser('secret'));

      app.use(function(req, res){
        if (req.path === '/set') {
          res.cookie('obj', { foo: 'bar' }, { signed: true });
          res.end();
        } else {
          res.send(req.signedCookies);
        }
      });

      request(app)
      .get('/set')
      .end(function(err, res){
        if (err) return done(err);
        var cookie = res.header['set-cookie'];

        request(app)
        .get('/')
        .set('Cookie', cookie)
        .expect(200, { obj: { foo: 'bar' } }, done)
      });
    })
  })
})

=======
'use strict'

var express = require('../')
  , request = require('supertest')
  , cookieParser = require('cookie-parser')

describe('req', function(){
  describe('.signedCookies', function(){
    it('should return a signed JSON cookie', function(done){
      var app = express();

      app.use(cookieParser('secret'));

      app.use(function(req, res){
        if (req.path === '/set') {
          res.cookie('obj', { foo: 'bar' }, { signed: true });
          res.end();
        } else {
          res.send(req.signedCookies);
        }
      });

      request(app)
      .get('/set')
      .end(function(err, res){
        if (err) return done(err);
        var cookie = res.header['set-cookie'];

        request(app)
        .get('/')
        .set('Cookie', cookie)
        .expect(200, { obj: { foo: 'bar' } }, done)
      });
    })
  })
})

>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
