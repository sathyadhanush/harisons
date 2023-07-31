module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/components'],
          ['src', './src'],
          ['jsx:', './'],
        ],
      },
      extensions: ['.js', '.less', '.json', '.vue'],
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-bind': 0,
    'class-methods-use-this': 0,
    'react/require-default-props': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
  },
};
