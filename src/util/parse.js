module.exports = function (package) {
    if(!package.readme) {
        for(const key in package.versions) {
            const version = package.versions[key];
            if(version.readme) {
                return version.readme;
            }
        }
        return '# No README founded';
    }
    return package.readme;
}