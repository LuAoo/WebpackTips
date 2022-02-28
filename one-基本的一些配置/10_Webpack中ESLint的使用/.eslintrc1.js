module.exports = {
    //运行的环境配置
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    // 可以扩展当前的配置，让其继承自其他的配置信息，可以跟字符串或者数组（多个）
    "extends": "eslint:recommended",
    // 指定我们ECMA的版本，souceType的类型
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },

    // 自定义一些规则
    "rules": {
        //关闭这个错误提示
        "no-unused-vars": "off"
    }
}