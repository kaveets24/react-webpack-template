const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

const PORT = process.env.port || 3000;

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: PORT,
    hotOnly: true,
  },
});
