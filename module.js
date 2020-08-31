const { resolve } = require('path')
function toastModule (moduleOptions) {
    const { nuxt } = this

    if (moduleOptions.toast || moduleOptions.all)
        this.addPlugin({
            src: resolve(__dirname, 'toast.client.js'),
            fileName: 'toast.client.js',
            client: true,
            mode: 'client',
            moduleOptions,
        })
}
module.exports = toastModule
module.exports.meta = require('./package.json')
