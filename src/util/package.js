const npm = require('api-npm').getdetails;

module.exports = async function(packageName) {
    return new Promise((resolve, reject) => {
        try {
            npm(packageName, resolve)
        } catch (err) {
            return reject(err);   
        }
    });
}