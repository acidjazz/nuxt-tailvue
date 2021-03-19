interface NuxtToastInstance {
    /**
     * Show a general toast message
     * @param props
     */
    show(props: string|object): void

    /**
     * Show a successful toast (green)
     * @param message
     */
    success (message: string): void

    /**
     * Show a general info toast (blue)
     * @param message
     */
    info (message: string): void

    /**
     * Show a danger-related toast (red)
     * @param message
     */
    danger (message: string): void

    /**
     * Show a warning-related toast (yellow)
     * @param message
     */
    warning (message: string): void

    /**
     * Show a denial-related toast (red)
     * @param message
     */
    denied (message: string): void
}

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
