const path = require('path');

function devtoolModuleFilenameTemplate(info)
{
	return info.absoluteResourcePath;
}

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            include: [path.resolve(__dirname, 'src')],
            exclude: /node_modules/,
        }, ],
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        devtoolModuleFilenameTemplate,
        filename: './addon/scripts/server/gcd.js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: './addon/scripts/server/gcd.js.map'
    },
};