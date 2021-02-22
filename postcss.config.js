const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssNormalize = require('postcss-normalize');
const postcssSVG = require('postcss-svg');
module.exports = {
  plugins: [
    postcssNormalize({
      forceImport: 'sanitize.css'
    }),
    // autoprefixer(),
    postcssSVG({
      dirs : ["./src/images/icons"]
    }),
    cssnano({ preset: 'default' })
  ]
};