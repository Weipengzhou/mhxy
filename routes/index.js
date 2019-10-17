const router = require('koa-router')()
var index_middleware = require('../wechat/index_middleware');
var config = require('../wechat/config');

router.get('/', index_middleware.get(config.wechat));

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
