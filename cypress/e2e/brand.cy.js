/// <reference types="Cypress"/>

const faker = require('faker')
const brandName = 'Automation Brand'
const label = 'QR Label'
const url = 'QR URL'
const edit = 'Edit'
let city = faker.address.cityName()

describe("User can successfully create a brand", () => {

    beforeEach(function () {
        cy.fixture('/locators/brand.json').then(function (brand) {
            this.brand = brand
        })
    })

    it('Go to the Brand section and click on new button', function () {
        cy.get(this.brand.brandBTN).click({ force: true })
        cy.contains("New").click()
    });

    it('Upload brand banner & logo and verify the success toast messages', function () {
        cy.get(this.brand.addBannerBTN).selectFile('cypress/fixtures/images/banner.jpg', { force: true })
        cy.get(this.brand.toastMSG).should('have.text', 'Banner added successfully');
        cy.wait(5000);
        cy.get(this.brand.addLogoBTN).selectFile('cypress/fixtures/images/logo.png', { force: true })
        cy.get(this.brand.toastMSG).should('have.text', 'Logo added successfully');
    });

    it('Enter all required informations', function () {
        cy.get(this.brand.brandNameFLD).type(brandName + ' ' + city);
        cy.get(this.brand.QRLabelFLD).type(brandName + ' ' + label);
        cy.get(this.brand.QRurlFLD).type(brandName + ' ' + url)
    });

    xit('Select cuisines', function () {
        cy.get(this.brand.cuisineEditIcon).click();
        cy.get(this.brand.cuisineCHKBX).check({ force: true });
        cy.contains('Done').click();
    });

    it('Click on Save button and verify the success toast message', function () {
        cy.contains('Save').click();
        cy.get(this.brand.toastMSG).should('have.text', 'Brand created successfully');
        cy.wait(2000);
    });
})

describe('User can successfully update any brand', () => {

    beforeEach(function () {
        cy.fixture('/locators/brand.json').then(function (brand) {
            this.brand = brand
        })
    })

    it('Search and select the brand', function () {
        cy.get(this.brand.searchBX).type(brandName)
        cy.get(this.brand.selectBrand).click()
        cy.wait(2000);
    });

    xit('Update the necessary informations', function () {
        cy.get(this.brand.brandNameFLD).clear().type(brandName + ' ' + city + ' ' + edit);
        cy.get(this.brand.QRLabelFLD).clear().type(brandName + ' ' + label + ' ' + edit);
        cy.get(this.brand.QRurlFLD).clear().type(brandName + ' ' + url + ' ' + edit)
    });

    it('Click on Update button and verify the success toast message', function () {
        cy.contains('Update').click();
        cy.get(this.brand.toastMSG).should('have.text', 'Brand updated successfully');
        cy.wait(2000);
    });
})