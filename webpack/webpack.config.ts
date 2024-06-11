import 'dotenv/config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import { Configuration as DevelopmentConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';

// constants
import { DIST_PATH, SRC_PATH } from './constants';

// enums
import { EnvironmentEnum } from './enums';

// types
import type { IWebpackEnvironmentVariables } from './types';

// utils
import { createCommonConfig } from './utils';

const config: (
  env: IWebpackEnvironmentVariables
) => Configuration | DevelopmentConfiguration = ({
  environment = EnvironmentEnum.Development,
}: IWebpackEnvironmentVariables) => {
  const { API_TITLE, SWAGGER_SPEC_URL } = process.env;
  let commonConfig: Configuration;
  let devServer: DevelopmentConfiguration | undefined;
  let devtool: string | false | undefined;
  let htmlWebpackPlugin: HtmlWebpackPlugin;
  let optimization: Record<string, unknown>;
  let output: Record<string, unknown>;

  if (!SWAGGER_SPEC_URL) {
    throw new Error('no url found in "SWAGGER_SPEC_URL"');
  }

  commonConfig = createCommonConfig(SWAGGER_SPEC_URL);

  switch (environment) {
    case EnvironmentEnum.Production:
      devtool = 'source-map';
      htmlWebpackPlugin = new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'body',
        minify: {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
        },
        template: resolve(SRC_PATH, 'index.hbs'),
        title: API_TITLE,
      });
      optimization = {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: 'initial',
              enforce: true,
              name: 'vendor',
              test: /[\\/]node_modules[\\/](react|react-dom|swagger-ui|swagger-ui-react)[\\/]/,
            },
          },
        },
      };
      output = {
        filename: '[name].js',
        path: DIST_PATH,
      };
      break;
    case EnvironmentEnum.Development:
    default:
      devServer = {
        historyApiFallback: true,
        port: 8080,
        watchFiles: [`${SRC_PATH}/**/*`],
      };
      devtool = 'cheap-module-source-map';
      htmlWebpackPlugin = new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'body',
        minify: false,
        template: resolve(SRC_PATH, 'index.hbs'),
        title: API_TITLE,
      });
      optimization = {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      };
      output = {
        filename: '[name].js',
        path: DIST_PATH,
        pathinfo: false,
      };
      break;
  }

  return merge(commonConfig, {
    devtool,
    devServer,
    mode: environment,
    optimization,
    output,
    plugins: [htmlWebpackPlugin],
  });
};

export default config;
