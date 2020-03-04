'use strict';

const Service = require('egg').Service;
const { userId, encryptionPassword } = require('../utils')
class UserService extends Service {
    //查找用户名
    async findUser(username) {
        return this.app.mysql.query('select * from user where username = ?', username)
    };
    //注册
    async registry({ username, password }) {
        const userid = userId(username)
        const myPassword = encryptionPassword(password)
        const $sql = 'insert into user (username,password,userid) values (?,?,?)'
        const $params = [username, myPassword, userid]
        return this.app.mysql.query($sql, $params)
    };
    //登录
    async login({ username, password }) {
        const myPassword = encryptionPassword(password)
        const $sql = 'select * from user where username=? and password=?'
        const $params = [username, myPassword]
        return this.app.mysql.query($sql, $params)
    }
}

module.exports = UserService;