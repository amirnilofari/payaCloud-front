const axios = require('axios') 
const Api = axios.create({ baseURL: 'http://api.autovm.project/', });
module.exports = { Api }
