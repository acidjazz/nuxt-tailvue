import ToastInterface from './toast'
import ModalInterface from './modal'


declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $toast: ToastInterface
        $modal: ModalInterface
    }
    interface Context {
        $toast: ToastInterface
        $modal: ModalInterface
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $toast: ToastInterface
        $modal: ModalInterface
    }
}
