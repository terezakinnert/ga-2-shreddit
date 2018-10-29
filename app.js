const express = require('express');
const app = express();
const env = require('./config/environment');

const router = require('./config/routes');



app.use(router);

app.listen(env.port, () => console.log(`Express is listening on port ${env.port}`));
