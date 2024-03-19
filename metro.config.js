/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// call từ thư viện react-native/metro-config ra, 
// thư viện này là 1 module sử dụng trong cấu hình mertro (bundler) của dự án React Native.
// Metro là công cụ quản lý, đóng gói JavaScript trong ứng dụng React Native => dùng đẻ build dự án React Native
// getDefaultConfig và mergeConfig => giúp tùy chỉnh cấu hình Metro, cụ thể ở đây là khai báo để nhận file .svg
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config')

const defaultConfig = getDefaultConfig(__dirname)
const {
  assetExts,
  sourceExts
} = defaultConfig.resolver


// config đọc file .svg
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer')
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg']
  }
}

module.exports = mergeConfig(defaultConfig, config)

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// };
