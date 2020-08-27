const { resolve } = require('path')
import { TvToast, spawn, removeElement } from 'tv-toast'

function toastModule (moduleOptions) {
    const { nuxt } = this

    this.addPlugin({
        src: path.resolve(__dirname, 'toast.client.js'),
        fileName: 'toast.client.js',
        moduleOptions,
    })
}

module.exports = toastModule
module.exports.meta = require('../package.json')
