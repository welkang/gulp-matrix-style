var path = require('path'),
    fs = require('fs'),
    cheerio = require('cheerio'),
    through = require('through2'),
    CleanCSS = require('clean-css');

module.exports = function(opt) {
    return through.obj(function(file, enc, cb){
        var _opt = JSON.parse(JSON.stringify(opt || {}));

        var dom = cheerio.load(file.contents, {decodeEntities: false});
        dom('link').each(function(idx, el){
            var $el = dom(el),
                href = $el.attr('href');

            var basename = path.basename(href);
            var filepath = _opt.path + basename;
            var style = fs.readFileSync(filepath).toString();

            if(_opt.minify === true){
                style = new CleanCSS().minify(style).styles;
            }

            var inlinedTag = '<style type="text/css">\n' + style + '\n</style>';
            $el.replaceWith(inlinedTag);
        });
        file.contents = new Buffer(dom.html());
        this.push(file);
        return cb();
    });
};
