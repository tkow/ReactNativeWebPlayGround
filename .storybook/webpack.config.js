/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/

const { resolve } = require('path')
const path = require('path')

const externalLibs = [path.resolve(__dirname, '../node_modules/react-native')]

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('@storybook/core/node_modules/babel-loader'),
        options: {
          presets: ['module:metro-react-native-babel-preset'],
        },
      },
    ],
  })
  config.module.rules.push({
    test: /\.jsx?$/,
    include: externalLibs,
    use: [
      {
        loader: require.resolve('@storybook/core/node_modules/babel-loader'),
        options: {
          presets: ['module:metro-react-native-babel-preset'],
        },
      },
    ],
  })

  config.resolve.alias = {
    // replace `react-native` imports with `react-native-web`
    'react-native$': require.resolve('react-native-web'),
    'babel-loader': require.resolve('@storybook/core/node_modules/babel-loader')
  }

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
