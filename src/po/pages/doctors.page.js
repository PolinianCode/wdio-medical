import DoctorsHeaderComponent from "../components/doctors/header.component";
import AddDoctorModalComponent from "../components/doctors/add-doctor.component"

class DoctorsPage {

    constructor() {
        this.doctorsHeaderCompnent = new DoctorsHeaderComponent;
        this.addDoctorModal = new AddDoctorModalComponent;
    }

    async open() {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors")
    }



}

export default DoctorsPage;
