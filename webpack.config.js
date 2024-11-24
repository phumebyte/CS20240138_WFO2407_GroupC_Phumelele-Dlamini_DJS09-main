module.exports = {
    "output": {
      "filename": "[name].pack.js"
    },
    "entry": {
      "index": "index.ts"
    },
    "resolve": {
      "extensions": [
        ".ts",
        ".js",
        ".json"
      ]
    },
    "module": {
      "rules": [
        {
          "use": {
            "loader": "ts-loader"
          },
          "exclude": /node_modules/,
          "test": /\.ts$/
        }
      ]
    }
  };