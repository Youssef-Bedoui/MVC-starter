const path = require("path");

module.exports = {
  entry: path.join(__dirname, "client", "src", "index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "client", "public")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }, {
        test: /\.css$/i,
        loader: "css-loader",
        options: {
          url: true,
        }
      }
    ]
  },
  watch: true
};
