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

    it('Go to the User section and click on new button', function () {
        cy.get(this.user.userBTN).click({ force: true })
        cy.contains("New").click()
    });

    xit('Enter all required informations', function () {
        cy.get(this.user.firstnameFLD).type(this.new_user.first_name);
        cy.get(this.user.lastnameFLD).type(this.new_user.last_name);
        cy.get(this.user.emailFLD).type(this.new_user.email);
        cy.get(this.user.phoneFLD).type(this.new_user.phone);
    });

    it('Upload user image and verify the success toast messages', function () {
        cy.get(this.user.addBTN).selectFile('cypress/fixtures/images/user_image.jpg', { force: true })
        cy.get(this.user.toastMSG).should('have.text', 'Profile image uploaded successfully!');
    });
})