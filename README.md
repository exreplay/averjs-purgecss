# @averjs/purgecss

This Plugin gets you started with PurgeCSS. 

## Installation

You just have to install the package and add it to the aver.config.js file to the plugins array.

```bash
yarn add @averjs/purgecss
```

```js
// aver.config.js
{
  plugins: [
    '@averjs/purgecss'
  ]
}
```

## Usage

After adding the plugin to aver you can configure it by adding a new `purgecss` config param to the `aver.config.js`.
```js
// aver-config.js
{
  purgecss: {
    whitelistPatterns: [/fa/]
  }
}
```
This way, is it also possible for other plugins to extend the config.

## Configuration

### `enabled`

- Type: `Boolean`
- Default: `process.env.NODE_ENV === 'production'`

If you would like to manually enable or disable PurgeCSS, you can pass this option to the plugin.
