const express = require('express');
const app = express();
const env = require('./config/environment');
const router = require('./config/routes');

const ejsLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(ejsLayouts);




app.use(router);
app.listen(env.port, () => console.log(`Express is listening on port ${env.port}`));
