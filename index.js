const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.redirect('https://google.com/imghp');
});

app.listen(3000);
