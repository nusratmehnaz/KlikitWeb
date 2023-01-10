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

    it('Upload brand banner and logo', function () {
        cy.get(this.brand.addBannerBTN).selectFile('cypress/fixtures/images/banner.jpg', { force: true })
        cy.get(this.brand.addLogoBTN).selectFile('cypress/fixtures/images/logo.png', { force: true })
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

    it('Click on Save button', function () {
        cy.contains('Save');
    });
})