const merge = require('webpack-merge')
const base = require('./webpack.config')

module.exports = merge(base, {
    devServer: {
        host: 'localhost',
        port: 8080,
    }
})