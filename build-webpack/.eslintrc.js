module.exports = {
  parser: 'babel-eslint', //增加babel-eslint解析器
  extends: 'airbnb-base',
  env: {
    //避免如下环境中，全局变量报错的问题
    browser: true,
    node: true,
  },
  rules: {
    'no-console': 'off',
    semi: 'off',
    'import/no-unresolved': 'off',
    'comma-dangle': 'off',
  },
}
