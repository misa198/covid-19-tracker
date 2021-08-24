import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors';
import vietnamRoute from './routers/vietnam.route';

const { loadNuxt, build } = require('nuxt');
const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 5000;

async function start() {
  const app = express();

  app.use('/api/vietnam', vietnamRoute);

  if (!isDev) {
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start');
    app.use(nuxt.render);
    build(nuxt);
  } else {
    app.use(cors());
  }

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Server ready on port ' + port);
  });
}

start();
