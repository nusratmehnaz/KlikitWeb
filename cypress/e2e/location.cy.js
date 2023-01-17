/// <reference types="Cypress"/>

const edit = 'Edit'
const faker = require('faker')
const branchName = 'Automation Branch'
let phoneNumber = `${Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000)}`
let cityName = faker.address.cityName()
let latitude = faker.address.latitude()
let longitude = faker.address.longitude()
let address = faker.address.streetAddress()

describe('User can successfully create a location', () => {

    beforeEach(function () {
        cy.fixture('/locators/location.json').then(function (location) {
            this.location = location
        })
    })

    it('Go to the Location section and click on new button', function () {
        cy.get(this.location.locationBTN).click({ force: true })
        cy.contains("New").click()
    });

    it('Enter all required informations', function () {
        cy.get(this.location.branchNameFLD).type(branchName + ' ' + cityName)
        cy.get(this.location.phoneFLD).type(phoneNumber)
        cy.get(this.location.addressFLD).type(address)
        cy.get(this.location.latitudeFLD).type(latitude)
        cy.get(this.location.longitudeFLD).type(longitude)
    });

    it('Select time and days', function () {
        cy.get(this.location.opentimeDPDW).click()
        cy.get(this.location.selectOpenTime).click()
        cy.get(this.location.closetimeDPDW).click()
        cy.get(this.location.selectCloseTime).click()
        cy.contains("Select All").click()
    });

    xit('Select Kitchen Equipments', function () {
        cy.get(this.location.equipmentEditIcon).click();
        cy.get(this.location.equipmentCHKBX).check({ force: true });
        cy.contains('Done').click();
    });

    it('Select option from the dropdowns', function () {
        cy.get(this.location.printerDPDW).click()
        cy.get(this.location.printerSLCT).click();
        cy.get(this.location.cityDPDW).click()
        cy.get(this.location.citySLCT).click();
        cy.get(this.location.brandDPDW).click()
        cy.get(this.location.brandSLCT).click();
    });

    it('Click on Save button and verify the success toast message', function () {
        cy.contains('Save').click({ force: true })
        cy.get(this.location.toastMSG).should('have.text', 'Branch created successfully');
        cy.wait(2000);
    });
})

describe('User can successfully update any location', function () {

    beforeEach(function () {
        cy.fixture('/locators/location.json').then(function (location) {
            this.location = location
        })
    })

    it('Search and select the location', function () {
        cy.get(this.location.searchBX).type(branchName)
        cy.get(this.location.selectLocation).click()
        cy.wait(2000);
    });

    xit('Update the necessary informations', function () {
        cy.get(this.location.branchNameFLD).clear().type(branchName + ' ' + cityName + ' ' + edit)
        cy.get(this.location.phoneFLD).clear().type(phoneNumber)
        cy.get(this.location.addressFLD).clear().type(address + ' ' + edit)
        cy.get(this.location.latitudeFLD).clear().type(latitude)
        cy.get(this.location.longitudeFLD).clear().type(longitude)
    });

    it('Click on Update button and verify the success toast message', function () {
        cy.contains('Update').click({ force: true });
        cy.get(this.location.toastMSG).should('have.text', 'Branch updated successfully');
        cy.wait(2000);
    });
});