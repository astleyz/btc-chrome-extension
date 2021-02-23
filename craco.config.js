const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  HtmlWebpackSkipAssetsPlugin,
} = require("html-webpack-skip-assets-plugin");

const isEnvProduction = () => {
  if (process.env.NODE_ENV) {
    return process.env.NODE_ENV === "production" ? true : false;
  }
  return true;
};

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return {
        ...webpackConfig,
        entry: {
          main: "./src/index.tsx",
          background: "./src/Background/background.ts",
        },
        output: {
          ...webpackConfig.output,
          filename: (pathData) => {
            switch (pathData.chunk.name) {
              case "main":
                return "content/[name].bundle.js";
              case "background":
                return "background/[name].bundle.js";
              default:
                return "[name].bundle.js";
            }
          },
        },
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
          splitChunks: false,
          minimize: isEnvProduction(),
        },
        plugins: [
          ...webpackConfig.plugins,
          new MiniCssExtractPlugin({
            filename: "content/main.css",
          }),
          new HtmlWebpackPlugin({
            filename: "popup.html",
            template: "public/index.html",
          }),
          new HtmlWebpackSkipAssetsPlugin({
            skipAssets: [
              /((static\/.+\.css$)|((background|content)\/.+\.js$))/gi,
            ],
          }),
          // new HtmlWebpackPlugin({
          //   filename: "options.html",
          //   title: "Make me options!",
          // }),
          // new HtmlWebpackSkipAssetsPlugin({
          //   skipAssets: [/((.*.css$)|(content\/.+\.js$))/gi],
          // }),
        ],
      };
    },
  },
};
