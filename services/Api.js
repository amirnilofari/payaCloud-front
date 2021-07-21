const axios = require('axios')
const Api = axios.create({ baseURL: 'http://sandbox.autovm.net/', });
module.exports = { Api }
