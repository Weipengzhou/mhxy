const config = require('../wechat/config')
const xmlTool = require('../utils/xmlTool') 
const answer = require('../utils/answer')
const getRawBody = require('raw-body')
const crypto = require('crypto')

const _config = async (query) => {
    let signature = query.signature
    let timestamp = query.timestamp
    let echostr = query.echostr
    let nonce = query.nonce
    // 字典排序
    let arr = [config.wechat.token, timestamp, nonce].sort()
    // sha1加密
    let str = arr.join('')
    let hashCode = crypto.createHash('sha1')
    let result = hashCode.update(str).digest('hex')
    // 对比后返回结果
    if (result === signature) {
        return echostr
    } else {
        return ''
    }
}
const handleMessage = async (ctx) => {
    let xml = await getRawBody(ctx.req, {
        length: ctx.request.length,
        limit: '1mb',
        encoding: ctx.request.charset || 'utf-8'
    });
    // 将xml数据转化为json格式的数据
    let result = await xmlTool.parseXML(xml)
    // 格式化数据
    let formatted = await xmlTool.formatMessage(result.xml)
    // 判断消息的类型，如果是文本消息则返回相同的内容
    if (formatted.MsgType === 'text') {
        return answer.text(formatted)
    } else {
        return 'success'
    }
}
module.exports = { _config, handleMessage }