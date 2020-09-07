import Vue from 'vue'
import { PushButton, ButtonGroup } from 'tv-button'
import Icons from 'tv-icon'
import 'tv-button/dist/tv-button.css'
Vue.component('PushButton', PushButton)
Vue.component('ButtonGroup', ButtonGroup)
console.log(Icons)
Vue.use(Icons)
