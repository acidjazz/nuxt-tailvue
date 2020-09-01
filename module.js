const { resolve } = require('path')
function toastModule (moduleOptions) {
    const { nuxt } = this

    if (moduleOptions.toast || moduleOptions.all)
        this.addPlugin({
            src: resolve(__dirname, 'toast.client.js'),
            fileName: 'toast.client.js',
            mode: 'client',
            moduleOptions,
        })
    if (moduleOptions.button || moduleOptions.all)
        this.addPlugin({
            src: resolve(__dirname, 'button.js'),
            fileName: 'button.js',
            mode: 'all',
            moduleOptions,
        })

}
module.exports = toastModule
module.exports.meta = require('./package.json')
