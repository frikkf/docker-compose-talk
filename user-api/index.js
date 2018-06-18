var Koa = require('koa');

var app = new Koa();

app.use(function(ctx, next){
  ctx.body = 'Hello from User API';
});

const port = process.env.PORT ? process.env.PORT : 3000

app.listen(port);