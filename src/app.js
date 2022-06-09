const express = require('express');
const app = express();
const routes = require('./router');
require('dotenv').config();

app.use(routes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
    console.log("To deploy to production, use 'npm start &'");
});