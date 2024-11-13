import SideMenuComponent from '../components/sidemenu.component'



class DashboardPage {

    constructor() {
        this.sideMenu = new SideMenuComponent()
    }

    async open() {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard")
    }
}

export default DashboardPage;