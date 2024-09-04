const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js", 
    apiHandler: "./src/apiHandler.js",
    loadingModal: "./src/loadingModal.js",
    tempToggle: "./src/tempToggle.js",
    getDayOfWeek: "./src/getDayOfWeek.js",
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html',
      inject: 'body',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    fallback: {
      "process": require.resolve("process/browser"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
