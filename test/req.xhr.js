<<<<<<< HEAD

var express = require('../')
  , request = require('supertest');

describe('req', function(){
  describe('.xhr', function(){
    it('should return true when X-Requested-With is xmlhttprequest', function(done){
      var app = express();

      app.use(function(req, res){
        req.xhr.should.be.true()
        res.end();
      });

      request(app)
      .get('/')
      .set('X-Requested-With', 'xmlhttprequest')
      .expect(200, done)
    })

    it('should case-insensitive', function(done){
      var app = express();

      app.use(function(req, res){
        req.xhr.should.be.true()
        res.end();
      });

      request(app)
      .get('/')
      .set('X-Requested-With', 'XMLHttpRequest')
      .expect(200, done)
    })

    it('should return false otherwise', function(done){
      var app = express();

      app.use(function(req, res){
        req.xhr.should.be.false()
        res.end();
      });

      request(app)
      .get('/')
      .set('X-Requested-With', 'blahblah')
      .expect(200, done)
    })

    it('should return false when not present', function(done){
      var app = express();

      app.use(function(req, res){
        req.xhr.should.be.false()
        res.end();
      });

      request(app)
      .get('/')
      .expect(200, done)
    })
  })
})
=======
'use strict'

var express = require('../')
  , request = require('supertest');

describe('req', function(){
  describe('.xhr', function(){
    before(function () {
      this.app = express()
      this.app.get('/', function (req, res) {
        res.send(req.xhr)
      })
    })

    it('should return true when X-Requested-With is xmlhttprequest', function(done){
      request(this.app)
        .get('/')
        .set('X-Requested-With', 'xmlhttprequest')
        .expect(200, 'true', done)
    })

    it('should case-insensitive', function(done){
      request(this.app)
        .get('/')
        .set('X-Requested-With', 'XMLHttpRequest')
        .expect(200, 'true', done)
    })

    it('should return false otherwise', function(done){
      request(this.app)
        .get('/')
        .set('X-Requested-With', 'blahblah')
        .expect(200, 'false', done)
    })

    it('should return false when not present', function(done){
      request(this.app)
        .get('/')
        .expect(200, 'false', done)
    })
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
