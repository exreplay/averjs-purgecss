import mergeWith from 'lodash/mergeWith';

export default function(options) {
  const {
    enabled = process.env.NODE_ENV !== 'production'
  } = options;

  if (!this.config.webpack.postcss) return;
  
  if (!enabled) {
    console.log('PurgeCSS is disabled.');
    return false;
  }
  
  const defaultConfig = {
    content: [
      './src/**/*.js',
      './src/**/*.vue'
    ],
    whitelist: [ 'html', 'body', 'a', 'path' ]
  };

  if (!this.config.webpack.postcss.plugins) this.config.webpack.postcss.plugins = {};

  this.config.webpack.postcss.plugins['@fullhuman/postcss-purgecss'] = mergeWith(
    defaultConfig,
    this.config.purgecss,
    // If value is an array, concat.
    (objValue, srcValue) => {
      if (Array.isArray(objValue)) {
        return objValue.concat(srcValue);
      }
    }
  );
}
