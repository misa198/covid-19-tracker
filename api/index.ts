import { config } from 'dotenv';
config();

import express from 'express';
import helmet from 'helmet';
import log from 'fancy-log';
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

if (require.main === module) {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    log('Server ready on port ' + port);
  });
}

export default app;
