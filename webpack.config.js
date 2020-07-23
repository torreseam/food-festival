const webpack = require("webpack");

const path = require("path");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;



module.exports = { 
    entry: {
        app: "./assets/js/script.js",
        events: './assets/js/events.js',
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/tickets.js"
    },
    output: {
        // path: path.resolve(__dirname + '/dist'),
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.jpeg$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name(file) {
                                return "[path][name].[ext]"
                            },
                            publicPath: function (url) {
                                return url.replace("../", "/assets/")
                            }
                        }
                    }
                ],
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", //the report output to ab HTML file in the dist folder
        })
    ],
    mode: 'development'
}