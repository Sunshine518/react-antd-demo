const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['transform-decorators-legacy'], config)   /*****{ "legacy": true }一定不能掉，否则报错 修饰器语法配置文件***/
    config = injectBabelPlugin(
            ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
             config,
           );
    return config;
};
