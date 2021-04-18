declare interface ToastInterface {
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
     * Show a danger-related toast (red) - timeout of 20s
     * @param message
     */
    danger (message: string): void

    /**
     * Show a warning-related toast (yellow) - timeout of 10s
     * @param message
     */
    warning (message: string): void

    /**
     * Show a denial-related toast (red) - timeout of 10s
     * @param message
     */
    denied (message: string): void
}

export default ToastInterface
