const apilogin = require('./login');
const webLogin = require('./loginView');
const weblogout = require('./logout');
module.exports = [
    apilogin,
    webLogin,
    weblogout
];