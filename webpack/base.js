const {
    pathes,
    isDevelopmentMode,
} = require('./constants.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: pathes.entry,
    resolve: {
        modules: ['node_modules'],
        extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
        alias: {
            '@pages': pathes.pages,
            '@widgets': pathes.widgets,
            '@shared': pathes.shared,
            '@layers': pathes.layers,
            '@public': pathes.public,
        }
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: pathes.nodeModules,
                loader: 'ts-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `[name].[ext]`,
                            publicPath: pathes.fonts
                        }
                    }
                ]
            },
            {
                test: /\.(svg|png|jpeg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `[name].[ext]`,
                            publicPath: pathes.images
                        }
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    isDevelopmentMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                 modules: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                ],
            },
        ]
    }
};
