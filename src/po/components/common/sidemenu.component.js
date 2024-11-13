import BaseComponent from './base.component'

class SideMenuComponent extends BaseComponent {
    constructor() {
        super('#plannerSiderBar')
    }

    get name() {
        return this.rootEl.$('.name')
    }

    item(param) {
        const selectors = {
            dashboard: '[routerlink="/dashboard"]',
            doctors: '[routerlink="/doctors"]',
            schedule: '[routerlink="/schedule"]'
        }

        return this.rootEl.$(selectors[param.toLowerCase()])
    }
}

export default SideMenuComponent;