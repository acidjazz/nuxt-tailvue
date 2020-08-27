import Vue from 'vue'
import { TvToast, spawn, removeElement } from 'tv-toast'

export default (ctx, inject) => {
  const ToastProgrammatic = {
    show (props) {
      if (typeof props === 'string') props = { message: props }
      return spawn('toasts', props, TvToast, Vue)
    },
  }
  inject('toast', ToastProgrammatic)
}
