import SideMenuComponent from '../components/common/sidemenu.component'
import BasePage from './base.page';



class DashboardPage extends BasePage {

    constructor() {
        super("/showcase/angular/appointmentplanner/#/dashboard")
        this.sideMenu = new SideMenuComponent()
    }

}

export default DashboardPage;