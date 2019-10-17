var sha1 = require('sha1');

exports.get = function(opts) {
    return async (ctx, next) => {
        var token = opts.token;
        var signature = ctx.query.signature;
        var nonce = ctx.query.nonce;
        var timestamp = ctx.query.timestamp;
        var echostr = ctx.query.echostr;
        var str = [token, timestamp, nonce].sort().join('');
        var sha = sha1(str);
      
        if (sha === signature) {
          ctx.body = echostr + '';
        } else {
          ctx.body = '失败';
        }
      };
};