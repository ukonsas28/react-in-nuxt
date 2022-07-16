const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = function override(config, env) {
  config.output = {
    ...config.output,
    publicPath: "auto",
    clean: true,
    crossOriginLoading: "anonymous",
  };

  const moduleFederation = new ModuleFederationPlugin({
    name: "reactApp",
    filename: "remoteEntry.js",
    library: { type: "var", name: "reactApp" },
    exposes: {
      "./ReactApp": "./src/bootstrap",
    },
    shared: deps,
  });

  config.plugins.push(moduleFederation);

  return config;
};
