'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')
class UserController extends Controller {
    //注册
    async registry() {
        const { ctx } = this;
        const result = await ctx.service.user.findUser(ctx.request.body.username)
        if (result.length > 0) {
            ctx.body = {
                code: 0,
                msg: '用户名已存在！'
            }
        } else {
            try {
                await ctx.service.user.registry(ctx.request.body)
                ctx.body = {
                    code: 1,
                    msg: '注册成功！'
                }
            } catch (error) {
                ctx.body = {
                    code: 2,
                    msg: error.message
                }
            }
        }
    };
    //登录
    async login() {
        const { ctx } = this;
        const result = await ctx.service.user.login(ctx.request.body)
        if (result.length > 0) {
            const token = jwt.sign({ result }, 'gome', { expiresIn: 60 * 60 })
            ctx.body = {
                code: 1,
                msg: '登录成功！',
                user: ctx.request.body.username,
                token
            }
        } else {
            ctx.body = {
                code: 0,
                msg: '登录失败！'
            }
        }
    }
}

module.exports = UserController;