module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
  ],
};
