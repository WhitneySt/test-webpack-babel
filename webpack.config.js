const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  entry: {
    login: ["@babel/polyfill", "./src/app/scripts/index.js"],
    register: ["@babel/polyfill", "./src/app/scripts/register.js"],
    whatsapp: ["@babel/polyfill", "./src/app/scripts/whatsapp.js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].bundle.js",
    assetModuleFilename: "images/[name][ext]",
    clean: true,
  },
  devServer: {
    port: 5050,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "babel-loader",
      },
    //   {
    //     test: /\.css$/i,
    //     use: [MiniCssExtractPlugin.loader, "style-loader","css-loader"],
    //   },
    //   {
    //     test: /\.css$/i,
    //     use: ["style-loader", "css-loader"],
    //   },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      chunks: ["login"],
    }),
    new HTMLWebpackPlugin({
      filename: "pages/register.html",
      template: "./src/pages/register.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      chunks: ["register"],
    }),
    new HTMLWebpackPlugin({
      filename: "pages/whatsapp.html",
      template: "./src/pages/whatsapp.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      chunks: ["whatsapp"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.css",
    }),
  ],
};
