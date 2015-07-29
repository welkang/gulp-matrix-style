var path = require('path'),
    fs = require('fs'),
    cheerio = require('cheerio'),
    through = require('through2');

module.exports = function(opt) {
    return through.obj(function(file, enc, cb){
        var _opt = JSON.parse(JSON.stringify(opt || {}));

        var dom = cheerio.load(file.contents);
        dom('link').each(function(idx, el){
            var $el = dom(el),
                href = $el.attr('href');

            var basename = path.basename(href);
            var filepath = 'demo/style/' + basename;
            var style = fs.readFileSync(filepath).toString();

            var inlinedTag = '<style type="text/css">\n' + style + '\n</style>';
            $el.replaceWith(inlinedTag);
        });
        file.contents = new Buffer(dom.html());
        this.push(file);
        return cb();
    });
}
