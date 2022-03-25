<<<<<<< HEAD

var express = require('../')

describe('app.listen()', function(){
  it('should wrap with an HTTP server', function(done){
    var app = express();

    var server = app.listen(9999, function(){
      server.close();
      done();
    });
  })
})
=======
'use strict'

var express = require('../')

describe('app.listen()', function(){
  it('should wrap with an HTTP server', function(done){
    var app = express();

    var server = app.listen(9999, function(){
      server.close();
      done();
    });
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
