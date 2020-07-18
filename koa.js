const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const r = new Router()

r.get('/', ctx => {
  ctx.body = '<h1>hello world</h1>'
})

r.get('/api', ctx => {
  ctx.body = {
    name: 'myname',
    lastName: 'mylastname',
  }
})

app.use(r.routes())
const port = 3000
app.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})
