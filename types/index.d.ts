import NuxtToastInstance from './toast'

declare module 'vue/types/vue' {
    interface Vue {
        $toast: NuxtToastInstance
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $toast: NuxtToastInstance
    }
    interface Context {
        $toast: NuxtToastInstance
    }
}
