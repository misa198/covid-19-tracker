import { config } from 'dotenv';
config();

import express from 'express';
import helmet from 'helmet';
import herokuAwake from 'heroku-awake';
import vietnamRoute from './routers/vietnam.route';
import vaccineRoute from './routers/vaccine.route';

const isDev = process.env.NODE_ENV !== 'production';

const app = express();

app.use('/vietnam', vietnamRoute);
app.use('/vaccine', vaccineRoute);

if (!isDev) {
  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
}

herokuAwake('https://ncov-vn.herokuapp.com/');

export default app;
