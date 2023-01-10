/// <reference types="Cypress"/>

describe('User can successfully create a location', () => {

    beforeEach(function () {
        cy.fixture('/locators/location.json').then(function (location) {
            this.location = location
        })
        cy.fixture('/data/new_location.json').then(function (new_location) {
            this.new_location = new_location
        })
    })

    it('Go to the Location section and click on new button', function () {
        cy.get(this.location.locationBTN).click({ force: true })
        cy.contains("New").click()
    });

    it('Enter all required informations', function () {
        cy.get(this.location.branchNameFLD).type(this.new_location.branchName)
        cy.get(this.location.phoneFLD).type(this.new_location.phoneNumber)
        cy.get(this.location.addressFLD).type(this.new_location.address)
        cy.get(this.location.latitudeFLD).type(this.new_location.latitude)
        cy.get(this.location.longitudeFLD).type(this.new_location.longitude)
        cy.get(this.location.opentimeDPDW).click({ multiple: true })
        cy.get(this.location.selectTime).click()
        cy.contains("Select All").click()
    });

    it('Select Kitchen Equipments', function () {
        cy.get(this.location.equipmentEditIcon).click();
        cy.get(this.location.equipmentCHKBX).check({ force: true });
        cy.contains('Done').click();
    });

    xit('Click on Save button and verify the success toast message', function () {
        cy.contains('Save').click()
        cy.get(this.location.toastMSG).should('have.text', 'Brand created successfully');
    });
})