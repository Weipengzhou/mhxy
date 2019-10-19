const authorize = require('../service/authorize')

const config = async (ctx) => {
    let query = ctx.query
    let result = await authorize._config(query)
    ctx.body = result
}

const handleMessage = async (ctx) => {  
    let message = await authorize.handleMessage(ctx) // 处理具体的业务逻辑
    ctx.body = message
}

module.exports = { config, handleMessage }