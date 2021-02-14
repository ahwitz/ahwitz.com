module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended'
  ],
  globals: {
    process: true,
    module: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // Overrides from react, because apparently it's that stupid
    'react/prop-types': 'off',

    'strict': 2,

    'no-console': 1,

    'no-shadow-restricted-names': 1,
    'constructor-super': 2,
    'no-const-assign': 2,
    'no-this-before-super': 2,

    'array-bracket-spacing': [2, 'never'],
    'arrow-spacing': 2,
    'block-spacing': [2, 'never'],
    'brace-style': [2, 'allman', {allowSingleLine: true}],
    'camelcase': 2,
    'comma-dangle': 'error',
    'comma-spacing': [2, {before: false, after: true}],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self'],
    'eol-last': 2,
    'indent': ['error', 2, {SwitchCase: 1}],
    'jsx-quotes': [2, 'prefer-double'],
    'keyword-spacing': [1, {}],
    'key-spacing': [2, {beforeColon: false, afterColon: true}],
    'lines-around-comment': [2, {beforeBlockComment: true}],
    'linebreak-style': [2, 'unix'],
    'new-cap': 2,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-dupe-keys': 2,
    'no-lonely-if': 1,
    'no-multiple-empty-lines': [2, {max: 2}],
    'no-nested-ternary': 2,
    'no-restricted-syntax': [2, 'WithStatement'],
    'no-spaced-func': 2,
    'no-trailing-spaces': 1,
    'no-undef': 1,
    'no-unneeded-ternary': 1,
    'object-curly-spacing': [2, 'never'],
    'object-shorthand': 1,
    'operator-assignment': [1, 'always'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [2, 'single', {allowTemplateLiterals: true, avoidEscape: true}],
    'semi': [2, 'always'],
    'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {words: true, nonwords: false}],
    'spaced-comment': [1, 'always'],
    'wrap-regex': 2
  }
};
