const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Disable fast refresh to avoid premature reloads while typing
config.server = {
  ...config.server,
  reloadOnChange: false,
};

// Alternative: Add a delay to fast refresh
config.transformer = {
  ...config.transformer,
  // This helps reduce aggressive reloading
  minifierConfig: {
    keep_fnames: true,
    mangle: {
      keep_fnames: true,
    },
  },
};

module.exports = config;