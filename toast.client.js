import Vue from 'vue'
import { TvToast, spawn, removeElement } from 'tv-toast'

export default (ctx, inject) => {
  const toasts = document.createElement('div')
  toasts.classList.add(
    'z-40', 'fixed', 'inset-0', 'flex', 'flex-col-reverse', 'items-end', 'justify-center',
    'px-4', 'py-6', 'pointer-events-none', 'sm:p-6', 'sm:items-end', 'sm:justify-end'
  )
  toasts.setAttribute('id', 'toasts')
  document.body.appendChild(toasts)
  const ToastProgrammatic = {
    show (props) {
      if (typeof props === 'string') props = { message: props }
      return spawn('toasts', props, TvToast, Vue)
    },
    success (props) {
      return spawn('toasts', {type: 'success', message: props}, TvToast, Vue)
    },
    info (props) {
      return spawn('toasts', {type: 'info', message: props}, TvToast, Vue)
    },
    danger (props) {
      return spawn('toasts', {type: 'danger', message: props}, TvToast, Vue)
    },
    warning (props) {
      return spawn('toasts', {type: 'warning', message: props}, TvToast, Vue)
    },
  }
  inject('toast', ToastProgrammatic)
}
