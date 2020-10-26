const { resolve } = require('path')
function toastModule (moduleOptions) {
    const { nuxt } = this
    this.addPlugin({
        src: resolve(__dirname, 'icon.js'),
        fileName: 'icon.js',
        mode: 'all',
        moduleOptions,
    })

    this.addPlugin({
        src: resolve(__dirname, 'helpers.js'),
        fileName: 'helper.js',
        mode: 'all',
        moduleOptions,
    })

    if (moduleOptions.button || moduleOptions.all)
        this.addPlugin({
            src: resolve(__dirname, 'button.js'),
            fileName: 'button.js',
            mode: 'all',
            moduleOptions,
        })

    if (moduleOptions.toast || moduleOptions.all) {
      this.addTemplate({
        fileName: 'options.js',
        src: resolve(__dirname, 'templates', 'options.js'),
        options: moduleOptions.toast
      })
      this.addPlugin({
        src: resolve(__dirname, 'toast.client.js'),
        fileName: 'toast.client.js',
        mode: 'client',
        moduleOptions
      })
    }

    if (moduleOptions.modal || moduleOptions.all)
        this.addPlugin({
            src: resolve(__dirname, 'modal.client.js'),
            fileName: 'modal.client.js',
            mode: 'client',
            moduleOptions,
        })
}
module.exports = toastModule
module.exports.meta = require('./package.json')
