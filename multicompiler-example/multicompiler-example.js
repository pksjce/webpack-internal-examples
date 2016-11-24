var webpack = require('webpack');
var config1 = require('./webpack.config1.js');
var config2 = require('./webpack.config2.js');

webpack([config1, config2], (err, stats) => {
  process.stdout.write(stats.toString() + "\n");
})
