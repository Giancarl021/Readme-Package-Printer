const marked = require('marked');
const TerminalRenderer = require('marked-terminal');

module.exports = function (markdown, asHTML = false) {
    if(!asHTML) {
        marked.setOptions({
            renderer: new TerminalRenderer()
        });
    }

    const result = marked(markdown);

    return result;
}