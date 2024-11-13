import DoctorsHeaderComponent from "../components/doctors/header.component";

class DoctorsPage {

    constructor() {
        this.doctorsHeaderCompnent = new DoctorsHeaderComponent;
    }

    async open() {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors")
    }



}

export default DoctorsPage;
