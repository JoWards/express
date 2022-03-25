<<<<<<< HEAD

var assert = require('assert')
var express = require('..')
var request = require('supertest')

describe('app', function(){
  it('should inherit from event emitter', function(done){
    var app = express();
    app.on('foo', done);
    app.emit('foo');
  })

  it('should be callable', function(){
    var app = express();
    assert.equal(typeof app, 'function');
  })

  it('should 404 without routes', function(done){
    request(express())
    .get('/')
    .expect(404, done);
  })
})

describe('app.parent', function(){
  it('should return the parent when mounted', function(){
    var app = express()
      , blog = express()
      , blogAdmin = express();

    app.use('/blog', blog);
    blog.use('/admin', blogAdmin);

    assert(!app.parent, 'app.parent');
    blog.parent.should.equal(app);
    blogAdmin.parent.should.equal(blog);
  })
})

describe('app.mountpath', function(){
  it('should return the mounted path', function(){
    var admin = express();
    var app = express();
    var blog = express();
    var fallback = express();

    app.use('/blog', blog);
    app.use(fallback);
    blog.use('/admin', admin);

    admin.mountpath.should.equal('/admin');
    app.mountpath.should.equal('/');
    blog.mountpath.should.equal('/blog');
    fallback.mountpath.should.equal('/');
  })
})

describe('app.router', function(){
  it('should throw with notice', function(done){
    var app = express()

    try {
      app.router;
    } catch(err) {
      done();
    }
  })
})

describe('app.path()', function(){
  it('should return the canonical', function(){
    var app = express()
      , blog = express()
      , blogAdmin = express();

    app.use('/blog', blog);
    blog.use('/admin', blogAdmin);

    app.path().should.equal('');
    blog.path().should.equal('/blog');
    blogAdmin.path().should.equal('/blog/admin');
  })
})

describe('in development', function(){
  it('should disable "view cache"', function(){
    process.env.NODE_ENV = 'development';
    var app = express();
    app.enabled('view cache').should.be.false()
    process.env.NODE_ENV = 'test';
  })
})

describe('in production', function(){
  it('should enable "view cache"', function(){
    process.env.NODE_ENV = 'production';
    var app = express();
    app.enabled('view cache').should.be.true()
    process.env.NODE_ENV = 'test';
  })
})

describe('without NODE_ENV', function(){
  it('should default to development', function(){
    process.env.NODE_ENV = '';
    var app = express();
    app.get('env').should.equal('development');
    process.env.NODE_ENV = 'test';
  })
})
=======
'use strict'

var assert = require('assert')
var express = require('..')
var request = require('supertest')

describe('app', function(){
  it('should inherit from event emitter', function(done){
    var app = express();
    app.on('foo', done);
    app.emit('foo');
  })

  it('should be callable', function(){
    var app = express();
    assert.equal(typeof app, 'function');
  })

  it('should 404 without routes', function(done){
    request(express())
    .get('/')
    .expect(404, done);
  })
})

describe('app.parent', function(){
  it('should return the parent when mounted', function(){
    var app = express()
      , blog = express()
      , blogAdmin = express();

    app.use('/blog', blog);
    blog.use('/admin', blogAdmin);

    assert(!app.parent, 'app.parent');
    assert.strictEqual(blog.parent, app)
    assert.strictEqual(blogAdmin.parent, blog)
  })
})

describe('app.mountpath', function(){
  it('should return the mounted path', function(){
    var admin = express();
    var app = express();
    var blog = express();
    var fallback = express();

    app.use('/blog', blog);
    app.use(fallback);
    blog.use('/admin', admin);

    assert.strictEqual(admin.mountpath, '/admin')
    assert.strictEqual(app.mountpath, '/')
    assert.strictEqual(blog.mountpath, '/blog')
    assert.strictEqual(fallback.mountpath, '/')
  })
})

describe('app.router', function(){
  it('should throw with notice', function(done){
    var app = express()

    try {
      app.router;
    } catch(err) {
      done();
    }
  })
})

describe('app.path()', function(){
  it('should return the canonical', function(){
    var app = express()
      , blog = express()
      , blogAdmin = express();

    app.use('/blog', blog);
    blog.use('/admin', blogAdmin);

    assert.strictEqual(app.path(), '')
    assert.strictEqual(blog.path(), '/blog')
    assert.strictEqual(blogAdmin.path(), '/blog/admin')
  })
})

describe('in development', function(){
  before(function () {
    this.env = process.env.NODE_ENV
    process.env.NODE_ENV = 'development'
  })

  after(function () {
    process.env.NODE_ENV = this.env
  })

  it('should disable "view cache"', function(){
    var app = express();
    assert.ok(!app.enabled('view cache'))
  })
})

describe('in production', function(){
  before(function () {
    this.env = process.env.NODE_ENV
    process.env.NODE_ENV = 'production'
  })

  after(function () {
    process.env.NODE_ENV = this.env
  })

  it('should enable "view cache"', function(){
    var app = express();
    assert.ok(app.enabled('view cache'))
  })
})

describe('without NODE_ENV', function(){
  before(function () {
    this.env = process.env.NODE_ENV
    process.env.NODE_ENV = ''
  })

  after(function () {
    process.env.NODE_ENV = this.env
  })

  it('should default to development', function(){
    var app = express();
    assert.strictEqual(app.get('env'), 'development')
  })
})
>>>>>>> 947b6b7d57939d1a3b33ce008765f9aba3eb6f70
