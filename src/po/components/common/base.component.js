class BaseComponent {
    constructor(rootSelector) {
        this.selector = rootSelector
    }

    get rootEl() {
        return $(this.selector)
    }
}

export default BaseComponent