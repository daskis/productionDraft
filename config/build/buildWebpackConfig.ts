import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolves} from "./buildResolves";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(option: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = option
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: 'js/[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders(option)
        },
        resolve: buildResolves(),
        plugins: buildPlugins(option),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(option) : undefined,
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    }
}