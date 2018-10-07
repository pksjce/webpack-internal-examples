// Can be imported from webpack package
const webpack = require('webpack');
const config = require('./webpack.config.js');

new webpack.WebpackOptionsDefaulter().process(config);
// Create a new compiler instance
const compiler = new webpack.Compiler();
compiler.options = new webpack.WebpackOptionsApply().process(config, compiler);
new webpack.NodeEnvironmentPlugin().apply(compiler);
// Populate all required options
// compiler.options = {...};

class LogPlugin {
    apply (compiler) {
        compiler.plugin('should-emit', compilation => {
            console.log('should i emit?');
            return true;
        });
        compiler.plugin('emit', (compilation, callback) => {
            console.log('Have I reached here?');
            callback()
        });
    }
} 

new LogPlugin().apply(compiler);

const callback = (err, stats) => {
    console.log('Compiler has finished execution.');
    process.stdout.write(stats.toString() + "\n");
};

compiler.run(callback);
