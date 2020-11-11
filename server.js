const Koa = require('koa');
const app  = new Koa();

app.use(async function(ctx) {
  ctx.body = 'Hello World';
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`the server is listening :`, server.address().port)
});