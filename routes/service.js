const express = require('express');
const router = express.Router();
const serviceCtr = require('../controller/serviceController');

router.get('/', async (req, res) => {
    serviceCtr.checkService(res)
});

module.exports = router;