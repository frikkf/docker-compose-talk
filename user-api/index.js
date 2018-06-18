var Koa = require('koa');

var app = new Koa();
const cors = require('@koa/cors');

app.use(function(ctx, next){
  ctx.body = 'Hello from User API';
});
app.use(cors({
  'Access-Control-Allow-Origin': '*'
}));

const port = process.env.PORT ? process.env.PORT : 3100

app.listen(port);