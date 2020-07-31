var ejs = require('ejs');
var path = require('path');
var merge = require('merge');
var utils = require('loader-utils');
var htmlmin = require('html-minifier');

module.exports = function (source) {
  this.cacheable && this.cacheable();

  // wepkack3: options
  var options = (this.hasOwnProperty("options") && (typeof this.options['ejs-compiled-loader'] === 'object')) ? this.options['ejs-compiled-loader'] : {};

  // webpack4: query 
  var query = (this.hasOwnProperty("query")) ? (typeof this.query === 'object') ? this.query : utils.parseQuery(this.query) : {};

  // merge opts from defaults,opts and query 
  var opts = merge({
    client: true,
    compileDebug: !!this.minimize,
    minimize: (typeof this.minimize === 'boolean') ? this.minimize : false,
    beautify: false,
    htmlmin: (typeof this.htmlmin === 'boolean') ? this.htmlmin : false,
    htmlminOptions: {}
  }, options, query);

  // minify html
  if (opts.htmlmin) source = htmlmin.minify(source, opts.htmlminOptions);

  // compile template
  let result = '';
  try {
    var template = ejs.compile(source, merge(opts, {
      filename: path.relative(process.cwd(), this.resourcePath),
      webpack: this
    }));
    result = template(opts.options || {});
  } catch (err) {
    this.emitError(err);
  }
  return result;

};