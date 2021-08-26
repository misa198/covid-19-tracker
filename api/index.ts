import { config } from 'dotenv';
config();

import express from 'express';
import helmet from 'helmet';
import vietnamRoute from './routers/vietnam.route';
import vaccineRoute from './routers/vaccine.route';

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use('/vietnam', vietnamRoute);
app.use('/vaccine', vaccineRoute);

export default app;
