const jwt = require('jsonwebtoken')
const whitePath = ['/gome/registry', '/gome/login']
module.exports = () => {
    return async(ctx, next) => {
        if (whitePath.includes(ctx.path)) {
            await next()
        } else {
            const { token } = ctx.request.header
            try {
                let info = jwt.verify(token, "gome")
                ctx.info = info
                await next()
            } catch (error) {
                ctx.body = { code: 2, msg: "没有权限" }
            }
        }
    }
}