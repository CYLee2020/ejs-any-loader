# ejs-any-loader for webpack

come from [ejs-compiled-loader](https://github.com/bazilio91/ejs-compiled-loader). Precompiled file by ejs.

## Installation

`npm install ejs-any-loader`

## Options

Options is same of EJS Options,you can pass your custom options in options's options;

## Webpack Config

```javascript
module.exports = function(env) {
  return {
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            "html-loader",
            {
              loader: "ejs-any-loader",
              options: {
                htmlmin: true,
                htmlminOptions: {
                  removeComments: true
                },
                options: {
                  title: "title",
                  env: env
                }
              }
            }
          ]
        },
        {
          test: /\.vue$/,
          use: [
            "vue-loader",
            {
              loader: "ejs-any-loader",
              options: {
                options: {
                  title: "title",
                  env: env
                }
              }
            }
          ]
        }
      ]
    }
  };
};
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title><%= title %></title>
    <meta
      name="viewport"
      content="width=device-width,user-scalable=no,initial-scale=1"
    />
    <% if (env.production) {%>
    <link href="style.css" rel="stylesheet" />
    <%} %>
  </head>
  <body></body>
</html>
```
