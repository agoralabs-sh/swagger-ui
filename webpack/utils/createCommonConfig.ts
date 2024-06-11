import { resolve } from 'path';
import TSConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration, DefinePlugin, ProvidePlugin } from 'webpack';

// constants
import { SRC_PATH } from '../constants';

export default function createCommonConfig(
  swaggerSpecURL: string
): Configuration {
  return {
    entry: {
      ['index']: resolve(SRC_PATH, 'index.tsx'),
    },
    module: {
      rules: [
        // templates
        {
          loader: 'handlebars-loader',
          test: /\.hbs$/,
        },

        // css
        {
          test: /\.css$/i,
          use: [
            {
              loader: 'style-loader',
              options: {
                injectType: 'styleTag',
              },
            },
            {
              loader: 'css-loader',
              options: {
                url: true,
              },
            },
          ],
        },

        // typescript
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            configFile: resolve(process.cwd(), 'tsconfig.json'),
            transpileOnly: true,
          },
        },
      ],
    },

    plugins: [
      new DefinePlugin({
        __SWAGGER_SPEC_URL__: JSON.stringify(swaggerSpecURL),
      }),
      new ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
    ],

    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      fallback: {
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
      },
      plugins: [new TSConfigPathsPlugin()],
    },
  };
}
