module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to config
    const rule = {
      test: /\.md$/,
      use: [
        {
          loader: "html-loader"
        },
        {
          loader: "markdown-loader",
          options: {
          }
        }
      ],

    };
    if (Array.isArray(config.module['rules'])) {
      config.module['rules'].push(rule);
    } else {
      config.module['rules'] = [rule];
    }
    // Important: return the modified config
    return config;
  }
}