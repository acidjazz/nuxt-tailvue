const { resolve } = require('path')

function toastModule (moduleOptions) {
    const { nuxt } = this

    this.addPlugin({
        src: resolve(__dirname, 'toast.client.js'),
        fileName: 'toast.client.js',
        moduleOptions,
    })
}

module.exports = toastModule
module.exports.meta = require('./package.json')
