module.exports = {
  parser: 'babel-eslint', //增加babel-eslint解析器
  extends: 'airbnb-base',
  rules: {
    semi: 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-quotes': [1, 'prefer-single'],
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'comma-dangle': 'off',
    'import/order': 'off',
    'prefer-rest-params': 'off',
    ' no-alert': 'off',
    'lines-between-class-members': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-underscore-dangle': 'off',
    'func-names': 'off',
    'operator-linebreak': 'off',
    'no-unused-vars': 'off',
  },
  env: {
    //避免如下环境中，全局变量报错的问题
    browser: true,
    node: true,
  },
}
