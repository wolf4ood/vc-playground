const webpack = require("webpack");

const fallback = {
  crypto: require.resolve("crypto-browserify"),
  buffer: require.resolve("buffer"),
  process: require.resolve("process/browser"),
  stream: require.resolve("stream-browserify"),
};

module.exports = {
  webpack: {
    configure: (webpackConfig) => {

      let base = webpackConfig.resolve.fallback || {};
      webpackConfig.resolve.fallback = Object.assign(fallback, base);

      return webpackConfig;
    },
    plugins: {
      add: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        }),
      ],
    },
  },
};
