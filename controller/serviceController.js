const moment = require('moment-timezone');

const checkService = async (res) => {
    res.send('Detection Server is work now is ' + moment.tz('Asia/Bangkok').format("DD-MM-YYYY HH:mm:ss"))
};

module.exports.checkService = checkService;