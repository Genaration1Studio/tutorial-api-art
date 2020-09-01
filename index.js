const express = require('express')
const app = express()
const cors = require('cors');

const services = require('./routes/service')

app.use(cors({ origin: true }));
app.use('/', services);

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})