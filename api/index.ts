import { config } from 'dotenv';
config();

import express from 'express';
import helmet from 'helmet';
import log from 'fancy-log';
import vietnamRoute from './routers/vietnam.route';
import vaccineRoute from './routers/vaccine.route';

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 5000;

const app = express();

app.use('/vietnam', vietnamRoute);
app.use('/vaccine', vaccineRoute);

if (!isDev) {
  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
} else {
  app.listen(port, () => {
    log('Server ready on port ' + port);
  });
}

export default app;
