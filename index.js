const Koa = require('koa')
const static = require('koa-static')

const port = process.env['WEB_APP_PORT']

const app = new Koa()
app.use(static('.'))
app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})
