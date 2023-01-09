/// <reference types="Cypress"/>

describe('User successfully logged out from the portal', () => {
    beforeEach(function () {
        cy.fixture('/locators/logout.json').then(function (logout) {
            this.logout = logout
        })
    })

    it('Open the user info panel and click on logout',function() {
        cy.wait(2000)
        cy.get(this.logout.userinfoBTN).click() 
        cy.get(this.logout.logoutBTN).click()
    });

    it('Confirm the logout', function() {
        cy.contains("Yes").click()
    });
});