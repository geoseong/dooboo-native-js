module.exports = {
  'preset': 'react-native',
  'transformIgnorePatterns': [
    'node_modules/(?!(.*-)?react-(.*-)?native(-.*)?)'
  ],
  'setupFiles': [
    './test/jestSetup.js'
  ],
  'globals': {
    'window': {},
  },
  'transform': {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  'moduleFileExtensions': [
    'js',
    'jsx',
    'json',
    'ios.js',
    'ios.jsx',
    'android.js',
    'android.jsx'
  ]
};
