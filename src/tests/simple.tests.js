describe('Doctors page', () => {
    beforeEach(async() => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard")
    })

    it('Check page title', async () => {
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App')
    })

    it('Open model window for adding a new doctor', async() => {
        //Click on doctor item in side menu
        const doctorItem = await $('[routerlink="/doctors"]')
        await doctorItem.click() // Click on doctor item on sidebar

        //Click on button to add doctor

        const addDoctorButton = await $('.specialization-types button.e-control')
        await addDoctorButton.click()


        //Check if modal window is visible
        const doctorDialog = await $('.new-doctor-dialog')
        await expect(doctorDialog).toBeDisplayed()
    })

    it('Add a new doctor', async() => {
        //Click on doctor item in side menu
        const doctorItem = await $('[routerlink="/doctors"]')
        await doctorItem.click() // Click on doctor item on sidebar

        //Click on button to add doctor

        const addDoctorButton = await $('.specialization-types button.e-control')
        await addDoctorButton.click()

        //Get doctor add modal selector

        const doctorDialog = await $('.new-doctor-dialog')

        // Wait while doctor dialog window will be opened

        await doctorDialog.waitForDisplayed();


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

        await expect(doctorDialog).not.toBeDisplayed()


        const addedDoctor = await $('#Specialist_8') // Get the last item directly as a single element

        await expect(addedDoctor.$('.name')).toHaveText('Dr. John Doe', {ignoreCase: true});
        await expect(addedDoctor.$('.education')).toHaveText('Medical University'  ,{ignoreCase: true});

    })
 
    it('Closing add new doctar modal window with a cross button', async() => {
        const doctorItem = await $('[routerlink="/doctors"]')
        await doctorItem.click() // Click on doctor item on sidebar

        //Click on button to add doctor

        const addDoctorButton = await $('.specialization-types button.e-control')
        await addDoctorButton.click()


        //Check if modal window is visible
        const doctorDialog = await $('.new-doctor-dialog')
        await expect(doctorDialog).toBeDisplayed()


        //Close modal

        const closeModalButton = await $('.e-dlg-closeicon-btn')

        await closeModalButton.click()

        await expect(doctorDialog).not.toBeDisplayed()
    })
})