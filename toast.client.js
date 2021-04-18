import Vue from 'vue'
import { TvToast, spawn, removeElement, containerClasses } from 'tv-toast'

import options from './options'

export default (ctx, inject) => {

  const toasts = document.createElement('div')
  containerClasses.forEach(c => toasts.classList.add(c))
  if (options.defaults && options.defaults.containerClasses) {
    options.defaults.containerClasses.forEach(c => toasts.classList.add(c))
  }
  toasts.setAttribute('id', 'toasts')
  document.body.appendChild(toasts)

  const ToastProgrammatic = {
    show (props) {
      if (typeof props === 'string') props = { message: props }
      return spawn('toasts', props, TvToast, Vue, options)
    },
    success (message) {
      return spawn('toasts', {type: 'success', message}, TvToast, Vue, options)
    },
    info (message) {
      return spawn('toasts', {type: 'info', message}, TvToast, Vue, options)
    },
    danger (message) {
      return spawn('toasts', {type: 'danger', message, timeout: 20}, TvToast, Vue, options)
    },
    warning (message) {
      return spawn('toasts', {type: 'warning', message, timeout: 10}, TvToast, Vue, options)
    },
    denied (message) {
      return spawn('toasts', {type: 'denied', message, timeout: 10}, TvToast, Vue, options)
    },
  }
  inject('toast', ToastProgrammatic)
}
