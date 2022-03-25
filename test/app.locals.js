<<<<<<< HEAD

var express = require('../')

describe('app', function(){
  describe('.locals(obj)', function(){
    it('should merge locals', function(){
      var app = express();
      Object.keys(app.locals).should.eql(['settings']);
      app.locals.user = 'tobi';
      app.locals.age = 2;
      Object.keys(app.locals).should.eql(['settings', 'user', 'age']);
      app.locals.user.should.equal('tobi');
      app.locals.age.should.equal(2);
    })
  })

  describe('.locals.settings', function(){
    it('should expose app settings', function(){
      var app = express();
      app.set('title', 'House of Manny');
      var obj = app.locals.settings;
      obj.should.have.property('env', 'test');
      obj.should.have.property('title', 'House of Manny');
    })
  })
})
=======
'use strict'

var assert = require('assert')
var express = require('../')

describe('app', function(){
  describe('.locals', function () {
    it('should default object', function () {
      var app = express()
      assert.ok(app.locals)
      assert.strictEqual(typeof app.locals, 'object')
    })

    describe('.settings', function () {
      it('should contain app settings ', function () {
        var app = express()
        app.set('title', 'Express')
        assert.ok(app.locals.settings)
        assert.strictEqual(typeof app.locals.settings, 'object')
        assert.strictEqual(app.locals.settings, app.settings)
        assert.strictEqual(app.locals.settings.title, 'Express')
      })
    })
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
