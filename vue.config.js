const path = require('path');
module.exports = {
    pages: {
        index: {
            entry: './src/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    lintOnSave: false,
    chainWebpack: (config) => {
        config.module
            .rule('js')
            .include
            .add(path.resolve(__dirname, 'packages'))
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => { return options })
    }
}