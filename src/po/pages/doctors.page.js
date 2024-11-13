import DoctorsHeaderComponent from "../components/doctors/header.component";
import AddDoctorModalComponent from "../components/doctors/add-doctor.component"
import BasePage from "./base.page";
import SpecialistCardComponent from "../components/doctors/specialist-card.component";

class DoctorsPage extends BasePage {

    constructor() {
        super("/showcase/angular/appointmentplanner/#/doctors")
        this.doctorsHeaderCompnent = new DoctorsHeaderComponent;
        this.addDoctorModal = new AddDoctorModalComponent;
    }

    specialist(id) {
        return new SpecialistCardComponent(8)
    }
}

export default DoctorsPage;
