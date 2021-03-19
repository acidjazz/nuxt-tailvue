import ToastInterface from './toast'


declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $toast: ToastInterface
    }
    interface Context {
        $toast: ToastInterface
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $toast: ToastInterface
    }
}
