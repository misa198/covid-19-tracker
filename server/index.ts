import { config } from 'dotenv';
config();

import express from 'express';
import helmet from 'helmet';
import herokuAwake from 'heroku-awake';
import log from 'fancy-log';
import vietnamRoute from './routers/vietnam.route';
import vaccineRoute from './routers/vaccine.route';
const { loadNuxt, build } = require('nuxt');

(async () => {
  const isDev = process.env.NODE_ENV !== 'production';
  const port = process.env.PORT || 5000;

  const app = express();
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start');

  app.use('/api/vietnam', vietnamRoute);
  app.use('/api/vaccine', vaccineRoute);
  app.use(nuxt.render);
  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
  app.disable('x-powered-by');

  if (isDev) {
    build(nuxt);
  }

  app.listen(port, () => {
    log.info(`> Server is ready on port ${port} 🚀`);
    herokuAwake('https://ncov-vn.herokuapp.com/');
  });
})();
