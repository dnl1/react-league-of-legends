var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var postcssCssnext = require('postcss-cssnext');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var isProduction = (process.env.NODE_ENV === 'production');
var isTesting = (process.env.NODE_ENV === 'testing');
var apikey = process.env.npm_config_apikey;
var config = {
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.mp3', '.ico']
    },
    entry: {
        app: './src/scripts/app'
    },
    output: {
        path: __dirname + '/public',
        publicPath: '',
        filename: '/[name].[hash].js'
    },
    devServer: isProduction ? {} : {
        inline: true,
        historyApiFallback: true,
        stats: 'errors-only',
        compress: isProduction,
        outputPath: './public',
        contentBase: '/'
    },
    module: {
        loaders: [{
                test: /.js|.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader!eslint-loader'
            },
            {
                test: /.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(s|c)css$/,
                loader: isProduction ? ExtractTextPlugin.extract('css?root=.&modules&importLoaders=1&localIdentName=[local]!resolve-url!postcss!sass') : 'style!css?modules&importLoaders=1&localIdentName=[local]!resolve-url!postcss!sass'
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]' + (isProduction ? '&publicPath=../' : '&publicPath=http://localhost:8080/')
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=images/[name].[hash].[ext]' + (isProduction ? '&publicPath=../' : '&publicPath=/'),
                    'image-webpack?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]

    },
    postcss: [
        postcssCssnext()
    ],
    plugins: [
        new HtmlWebpackPlugin({
            title: 'WebPackTest Demo',
            minify: {
                collapseWhitespace: isProduction,
                minifyCSS: isProduction,
                minifyJS: isProduction,
                removeComments: isProduction
            },
            template: './src/index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin([{
                from: 'src/manifest.json',
                to: 'manifest.json'
            },
            {
                from: 'src/favicon.ico',
                to: 'favicon.ico'
            },
            {
                from: 'src/browserconfig.xml',
                to: 'browserconfig.xml'
            },
            {
                from: 'src/images',
                to: 'images'
            },
        ]),
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'API_KEY': JSON.stringify('13065ce22cdecaf8358b1b56dc54e2c7')
            }
        }),
    ]
};

if (isProduction) {
    config.plugins.push(new ExtractTextPlugin('/css/[name].[hash].css'));
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.plugins.push(new CompressionPlugin({
        asset: '[path].gz',
        algorithm: 'gzip',
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    }));
    config.plugins.push();
}

module.exports = config;