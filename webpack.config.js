const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    '@babel/polyfill',
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server',
    // 'react-hot-loader/patch',
    path.join(__dirname, './index.web.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('development')
    //   },
    // })
  ],
  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    },
    modules: [
      path.join(__dirname, './', 'node_modules')
    ],
    extensions: ['.web.js', '.js', 'jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        include: [
          path.resolve(__dirname, './', 'index.web.js'),
          path.resolve(__dirname, './node_modules/react-native-vector-icons'),
          path.resolve(__dirname, './node_modules/react-native-tab-view'),
          path.resolve(__dirname, './node_modules/tricky-components'),
          path.resolve(__dirname, './node_modules/react-native-uncompiled'),
          path.resolve(__dirname, './node_modules/react-native-vector-icons'),
          path.resolve(__dirname, './node_modules/react-navigation'),
          path.resolve(__dirname, './node_modules/react-native-drawer-layout'),
          path.resolve(__dirname, './node_modules/react-native-dismiss-keyboard'),
          path.resolve(__dirname, './node_modules/react-native-safe-area-view'),
          path.resolve(__dirname, './node_modules/react-native-tab-view'),
        ],
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true,
              presets: [
                'module:metro-react-native-babel-preset',
                '@babel/preset-env',
                '@babel/preset-flow'
              ],
              plugins: [
                ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                '@babel/plugin-proposal-function-sent',
                '@babel/plugin-proposal-export-namespace-from',
                '@babel/plugin-proposal-numeric-separator',
                '@babel/plugin-proposal-throw-expressions',
                ['@babel/plugin-proposal-class-properties', { 'loose': true }],
                [
                  '@babel/plugin-transform-runtime',
                  {
                    'helpers': true,
                    'regenerator': false
                  }
                ]
              ]
            },
          },
        ],
        exclude: [/node_modules/],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
};
