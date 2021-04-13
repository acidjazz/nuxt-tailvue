declare interface ModalInterface {
    /**
     * Show a modal
     * @link https://github.com/acidjazz/tv-modal
     *
     * @param props
     */
    show(props: ModalInterfaceProps): void
}

declare interface ModalInterfaceProps {
    /**
     * Different types show different icons and colors
     */
    type: 'success' | 'info' | 'danger' | 'warning'
    title: string
    body: string
    primary: ModalButton
    secondary: ModalButton
}

declare interface ModalButton {
    /**
     * Button text
     */
    label: string
    /**
     * Button theme
     * @link https://github.com/acidjazz/tv-button
     */
    theme: 'white' | 'indigo' | 'indigo-light' | 'indigo-dark' | 'red' | 'green'
    action: Function,
}

export default ModalInterface
