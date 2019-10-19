const router = require('koa-router')()
const authorize = require('../controller/authorize')

router.get('/', authorize.config);
router.post('/', authorize.handleMessage);


module.exports = router
