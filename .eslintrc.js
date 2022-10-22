module.exports = {
  'extends': [
    'react-app'
  ],
  'rules': {
    // 'no-unused-expressions': 'off',
    // 'react/jsx-max-props-per-line': [1, { 'maximum': 1 }],
    // 'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    'indent': [
      'warn',
      2
    ],
    'semi': [
      'warn',
      'always'
    ],
    'quotes': [
      'warn',
      'double'
    ],
    'jsx-quotes': [
      'warn',
      'prefer-double'
    ],
    'no-multiple-empty-lines': [
      'warn',
      {
        'max': 1,
        'maxBOF': 1,
        'maxEOF': 1
      }
    ],
    // 'object-curly-newline': [
    //   'warn',
    //   {
    //     'consistent': true
    //   }
    // ],
    // 'semi-spacing': [
    //   'warn',
    //   {
    //     'before': false,
    //     'after': true
    //   }
    // ],
    // 'comma-spacing': [
    //   'warn',
    //   {
    //     'before': false,
    //     'after': true
    //   }
    // ],
    'object-curly-spacing': [
      'warn',
      'always'
    ],
    // 'react/jsx-first-prop-new-line': [
    //   'warn',
    //   'multiline-multiprop'
    // ],

    // 'multiline-ternary': [
    //   'warn',
    //   'always'
    // ],
    // 'react/jsx-closing-tag-location': [1],

    // 'react/jsx-tag-spacing': ['warn', { 'beforeClosing': 'never' }],
    // 'react/jsx-wrap-multilines': ['warn', {
    //   declaration: 'parens-new-line',
    //   return: 'parens-new-line'
    // }],
    // 'react/jsx-newline': [1, { "prevent": false }]
  }
};