import * as path from 'path';
import * as webpack from 'webpack';
import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config: webpack.Configuration = merge({
    mode: 'development',
    entry: {
        main: './src/main.ts',
    },
    output: {
        filename: '[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    // optimization: {
    //     minimizer: [
    //         new OptimizeCssAssetsPlugin(),
    //         new TerserPlugin(),
    //         new HtmlWebpackPlugin({
    //             template: './src/index.html',
    //             minify: {
    //                 removeAttributeQuotes: true,
    //                 collapseWhitespace: true,
    //                 removeComments: true,
    //             },
    //         }),
    //     ],
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            minify: {},
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css',
        }),
        new CleanWebpackPlugin(),
    ],
} as webpack.Configuration);

export default config;