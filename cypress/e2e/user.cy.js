/// <reference types="Cypress"/>

describe("User can successfully create another user account", () => {

    beforeEach(function () {
        cy.fixture('/locators/user.json').then(function (user) {
            this.user = user
        })
        cy.fixture('/data/new_user.json').then(function (new_user) {
            this.new_user = new_user
        })
    })
    it('Go to the User section and click on new button', function() {
        cy.get(this.user.locationBTN).click({ force: true })
        cy.contains("New").click()
    });
})