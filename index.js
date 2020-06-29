const args = require('yargs').argv;
const loadPackageReadme = require('./src/services/readme');
const renderResult = require('./src/services/render');
const printHelp = require('./src/services/help');

async function main() {
    const [packageName] = args._;

    if(hasFlag('?')) {
        printHelp();
        return;
    }

    if(!packageName) {
        console.log('Without package name');
        return;
    }
    let markdown;
    try {
        markdown = await loadPackageReadme(packageName);
    } catch (err) {
        console.log(`Error: ${err.message}`);
        return;
    }

    if(hasFlag('raw', 'r')) {
        console.log(markdown);
        return;
    }

    const result = renderResult(markdown, hasFlag('html', 'h'));

    console.log(result);
}

function hasFlag(...flags) {
    for(const flag of flags) {
        if(args.hasOwnProperty(flag)) {
            return true;
        }
    }

    return false;
}

main().catch(console.error);