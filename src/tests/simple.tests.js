import DashboardPage from "./../po/pages/dashboard.page.js";
import DoctorsPage from "../po/pages/doctors.page.js";

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();


describe('Doctors page', () => {
    beforeEach(async() => {
        await dashboardPage.open()
    })

    it('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
    })

    it('Open model window for adding a new doctor', async() => {
        await dashboardPage.sideMenu.item('doctors').click()
        await doctorsPage.doctorsHeaderCompnent.addNewDoctorButton.click()
        await expect(doctorsPage.addDoctorModal.rootEl).toBeDisplayed()
    })

    it('Add a new doctor', async() => {
        await dashboardPage.sideMenu.item('doctors').click()
        await doctorsPage.doctorsHeaderCompnent.addNewDoctorButton.click()
        await doctorsPage.addDoctorModal.rootEl.waitForDisplayed()

        //Fill in the data to inputs

        await $('[name="Name"]').setValue('John Doe')
        await $('#DoctorMobile').setValue('1111111111')
        await $('[name="Email"]').setValue('johndoe@doctor.pl')
        await $('[name="Education"]').setValue('Medical University')
        await $('[name="Designation"]').setValue('Junior Specialist')
        await $('[name="Email"]').setValue('johndoe@doctor.pl')

        // Click add button in the modal window

        const addDoctorButtonModel = await $('.e-footer-content button.e-primary')
        await addDoctorButtonModel.click()

        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed()


        const addedDoctor = await $('#Specialist_8') // Get the last item directly as a single element

        await expect(addedDoctor.$('.name')).toHaveText('Dr. John Doe', {ignoreCase: true});
        await expect(addedDoctor.$('.education')).toHaveText('Medical University'  ,{ignoreCase: true});

    })
 
    it('Closing add new doctar modal window with a cross button', async() => {
        await dashboardPage.sideMenu.item('doctors').click()
        await doctorsPage.doctorsHeaderCompnent.addNewDoctorButton.click()
        await doctorsPage.addDoctorModal.rootEl.waitForDisplayed()


        //Close modal

        const closeModalButton = await $('.e-dlg-closeicon-btn')

        await closeModalButton.click()

        await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed()
    })
})