import Vue from 'vue'
import { GlobalModal, spawn, removeElement } from 'tv-modal'

export default (ctx, inject) => {
  const modals = document.createElement('div')
  // modals.classList.add()
  modals.setAttribute('id', 'modals')
  document.body.appendChild(modals)
  const ModalProgrammatic = {
    show (props) {
      if (typeof props === 'string') props = { body: props }
      return spawn('modals', props, GlobalModal, Vue)
    },
  }
  inject('modal', ModalProgrammatic)
}
