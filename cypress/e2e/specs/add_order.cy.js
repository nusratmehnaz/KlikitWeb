/// <reference types="Cypress"/>

const main = 'Main'

describe('User can successfully place an order', () => {

    beforeEach(function () {
        cy.fixture('/locators/add_order.json').then(function (order) {
            this.order = order
        })
    });

    it('Go to the Add Order section', function () {
        cy.get(this.order.addOrderBTN).click({ force: true })
    });

    it('Select the branch and brand from the dropdowns', function () {
        cy.get(this.order.branchDPDW).click()
        cy.get(this.order.branchSLCT).contains(main).click()

        cy.get(this.order.brandDPDW).click()
        cy.get(this.order.brandSLCT).contains(main).click()
    });

    it('Select the menu, category and item', function () {
        cy.get(this.order.menuSLCT).eq(0).click()
        cy.get(this.order.categorySLCT).eq(0).click()
        cy.get(this.order.itemSLCT).eq(1).click()
        cy.get(this.order.modifierSLCT).check({ force: true })
        cy.wait(2000);
        cy.contains('Add to order').click({ force: true })
    })
});