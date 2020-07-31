# ejs-any-loader for webpack

come from [ejs-compiled-loader](https://github.com/bazilio91/ejs-compiled-loader). Precompiled file by ejs.

## Installation

`npm install ejs-any-loader`

## Options

Options is same of EJS Options,you can pass your custom options in options's options;

## Webpack Config

```javascript
module: {
  rules: [{
    test: /\.html$/,
    use: {
      loader: 'ejs-any-loader',
      options: {
        htmlmin: true,
        htmlminOptions: {
          removeComments: true
        },
        options:{
          ...
        }
      }
    }
  },{
    test: /\.vue$/,
    use: {
      loader: 'ejs-any-loader',
      options: {
        htmlmin: true,
        htmlminOptions: {
          removeComments: true
        },
        options:{
          ...
        }
      }
    }
  },{
    test: /\.jsx$/,
    use: {
      loader: 'ejs-any-loader',
      options: {
        htmlmin: true,
        htmlminOptions: {
          removeComments: true
        },
        options:{
          ...
        }
      }
    }
  }]
}
```
