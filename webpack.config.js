const path = require("path");

module.exports = {
  mode: "production",
  target: "node",
  devtool: "inline-cheap-module-source-map",
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs"
  },
  optimization: {
    minimize: false
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
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { node: "12" },
                  useBuiltIns: "usage",
                  corejs: 3
                }
              ]
            ],
            plugins: ["source-map-support"]
          }
        }
      }
    ]
  },
  plugins: [],
  node: false,
  externals: {}
};
