import Vue from 'vue'
Vue.prototype.$sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
