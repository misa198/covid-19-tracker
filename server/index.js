const { config } = require('dotenv');
config();

const { loadNuxt, build } = require('nuxt');
const app = require('express')();
const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

async function start() {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start');

  app.get('/api/hello', (_req, res) => {
    res.send('Hello');
  });

  app.use(nuxt.render);
  if (isDev) {
    build(nuxt);
  }

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Server ready on port ' + port);
  });
}

start();
