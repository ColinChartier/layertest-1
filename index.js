const _ = require('koa-route');
const Koa = require('koa');
const app = new Koa();

app.use(_.get('/redirect', ctx => {
  ctx.redirect('https://google.com/imghp');
}));
app.use(_.get('/', ctx => {
  ctx.body = 'hello';
}));

app.listen(3000);
