const path = require("path");
module.exports = {
  entry: {
    main: "./src/index.js"
  },
  mode: "development",
  output: {
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: "[contentHash].bundle.js",
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: "[contentHash].bundle.js",
    // `path` is the folder where Webpack will place your bundles
    path: path.resolve(__dirname, "dist"),
    // `publicPath` is where Webpack will load your bundles from (optional)
    publicPath: "dist/"
  },
  module:  {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              options: {
                  presets: ["@babel-preset-env"]
              }
          },
          {
            test: /\.(scss|sass)$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          }

      ]
  },
  devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: process.env.port || 3000
  }
};
