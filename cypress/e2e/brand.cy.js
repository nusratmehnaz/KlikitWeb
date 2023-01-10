/// <reference types="Cypress"/>

describe("User can successfully create a brand", () => {

    beforeEach(function () {
        cy.fixture('/locators/brand.json').then(function (brand) {
            this.brand = brand
        })
        cy.fixture('/data/new_brand.json').then(function (new_brand) {
            this.new_brand = new_brand
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
        cy.get(this.brand.brandNameFLD).type(this.new_brand.brand_name);
        cy.get(this.brand.QRLabelFLD).type(this.new_brand.QR_label);
        cy.get(this.brand.QRurlFLD).type(this.new_brand.QR_URL)
    });

    it('Select cuisines', function () {
        cy.get(this.brand.cuisineEditIcon).click();
        cy.get(this.brand.cuisineCHKBX).check({ force: true });
        cy.contains('Done').click();
    });

    it('Click on Save button and verify the success toast message', function () {
        cy.contains('Save').click();
        cy.get(this.brand.toastMSG).should('have.text', 'Brand created successfully');
    });
})

describe('User can successfully update any brand', () => {

    beforeEach(function () {
        cy.fixture('/locators/brand.json').then(function (brand) {
            this.brand = brand
        })
        cy.fixture('/data/new_brand.json').then(function (new_brand) {
            this.new_brand = new_brand
        })
        cy.fixture('/data/update_brand_info.json').then(function (update_brand_info) {
            this.update_brand_info = update_brand_info
        })
    })

    it('Search and select the brand', function () {
        cy.get(this.brand.searchBX).type(this.new_brand.brand_name)
        cy.get(this.brand.selectBrand).click()
        cy.wait(2000);
    });

    xit('Update the necessary informations', function () {
        cy.get(this.brand.brandNameFLD).clear().type(this.update_brand_info.brand_name);
        cy.get(this.brand.QRLabelFLD).clear().type(this.update_brand_info.QR_label);
        cy.get(this.brand.QRurlFLD).clear().type(this.update_brand_info.QR_URL)
    });

    it('Click on Update button and verify the success toast message', function () {
        cy.contains('Update').click();
        cy.get(this.brand.toastMSG).should('have.text', 'Brand updated successfully');
    });
})