const webpack = require('webpack');
const config1 = require('./webpack.config1.js');
const config2 = require('./webpack.config2.js');

webpack([config1, config2], (err, stats) => {
  process.stdout.write(stats.toString() + "\n");
});
