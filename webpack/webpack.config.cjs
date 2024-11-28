const path = require("path");

module.exports = {
  entry: [__dirname + "/src/index.js", __dirname + "/src/style.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "[name].css",
        },
        use: ["sass-loader"],
      },
    ],
  },
};
