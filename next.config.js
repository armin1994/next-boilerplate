const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
/* eslint-disable */
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const {
  WebpackBundleSizeAnalyzerPlugin
} = require('webpack-bundle-size-analyzer')

require('dotenv').config();

const { ANALYZE } = process.env

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withLess({
  distDir: '.client-dist',
  webpack: (config) => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));
    if (ANALYZE) {
      config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'))
    }

    return config;
  },
  useFileSystemPublicRoutes: false,
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables // make your antd custom effective
  }
});


