const path = require("path");

const libs = ["core"];

module.exports = {
  chainWebpack: (config) => {
    for (const lib of libs) {
      config.resolve.alias.set(
        `@monitoring-softdb/${lib}`,
        path.resolve(__dirname, "..", lib, "src")
      );
    }
  },

  transpileDependencies: ["vuetify"],
};
