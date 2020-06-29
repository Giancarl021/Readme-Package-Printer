const getPackage = require('../util/package');
const parseReadme = require('../util/parse');

module.exports = async function (packageName) {
    const package = await getPackage(packageName);
    if(package.error) {
        throw new Error(package.error);
    }
    return parseReadme(package);
}