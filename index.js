var Handlebars = require('handlebars');
var fs = require('fs');
var resumeData = require('./resume.json')

Handlebars.registerHelper('breaklines', function (text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, ' <br> ');
    return new Handlebars.SafeString(text);
})

Handlebars.registerHelper('toSocialIcon', function (text) {
    return {
        xing: 'ri:xing-fill',
        github: 'ri:github-fill',
        twitter: 'ri:twitter-fill',
        portfolio: 'ri:account-circle-fill'
    }[text.trim().toLowerCase()]
})

Handlebars.registerHelper('join', function (arr) {
    return arr.join(', ')
})

async function render() {
    var template = fs.readFileSync(__dirname + '/resume.hbs', 'utf8').toString();
    var css = fs.readFileSync(__dirname + '/dist/assets/css/main.css', 'utf-8')

    return Handlebars.compile(template)({
        css: css,
        resume: resumeData
    });
}

module.exports = {
    render: render
};


