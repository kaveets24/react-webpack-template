require("dotenv").config();
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


const PORT = process.env.port || 3000;

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  mode: "development",
  output: {
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: "[hash].bundle.js",
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: "[hash].bundle.js",
    // `path` is the folder where Webpack will place your bundles
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "React Webpack Template",
      template: "src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["react-hot-loader/babel"]
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".scss", ".sass"] },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: PORT,
    // publicPath: `http://localhost:${PORT}/dist`,
    hotOnly: true
  }
};
