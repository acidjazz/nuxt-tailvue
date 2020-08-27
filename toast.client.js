import Vue from 'vue'
import { TvToast, spawn } from './index.js'

export default (ctx, inject) => {
  const ToastProgrammatic = {
    show (props) {
      if (typeof props === 'string') props = { message: props }
      return spawn('toasts', props, TvToast, Vue)
    },
  }
  inject('toast', ToastProgrammatic)
}
