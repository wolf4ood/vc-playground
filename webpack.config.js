module.exports = {
  //...
  resolve: {
    fallback: {
      buffer: require.resolve("buffer"),
      crypto: require.resolve("crypto-browserify"),
      process: require.resolve("process/browser"),
    },
  },
};
