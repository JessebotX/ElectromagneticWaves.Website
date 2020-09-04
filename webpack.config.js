const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    entry: {
        main: "./src/js/main.js",
        styles: "./src/js/webpack.styles.js"
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "../css/main.css"
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist/js")
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}