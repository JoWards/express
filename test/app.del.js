<<<<<<< HEAD

var express = require('../')
  , request = require('supertest');

describe('app.del()', function(){
  it('should alias app.delete()', function(done){
    var app = express();

    app.del('/tobi', function(req, res){
      res.end('deleted tobi!');
    });

    request(app)
    .del('/tobi')
    .expect('deleted tobi!', done);
  })
})
=======
'use strict'

var express = require('../')
  , request = require('supertest');

describe('app.del()', function(){
  it('should alias app.delete()', function(done){
    var app = express();

    app.del('/tobi', function(req, res){
      res.end('deleted tobi!');
    });

    request(app)
    .del('/tobi')
    .expect('deleted tobi!', done);
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
