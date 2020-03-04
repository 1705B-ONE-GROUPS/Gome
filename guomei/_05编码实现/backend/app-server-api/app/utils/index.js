const md5 = require('md5')

//生成userId
module.exports.userId = function(username = '') {
    return md5(username + new Date().getTime())
}

//密码二次加密
module.exports.encryptionPassword = function(password) {
    return md5(password)
}