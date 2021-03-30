const path = require("path");

module.exports = {
  mode: "production",
  target: "node",
  devtool: "inline-cheap-module-source-map",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs",
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
  module: {
    rules: [
      {
        //test: /\.m?js$/,
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            exclude: [
              // \\ for Windows, \/ for Mac OS and Linux
              /node_modules[\\\/]core-js/,
              /node_modules[\\\/]webpack[\\\/]buildin/,
            ],
            presets: [
              "@babel/preset-env",
            ]
          },
        },
      },
    ],
  },
  plugins: [],
  node: false,
  externals: {},
};
