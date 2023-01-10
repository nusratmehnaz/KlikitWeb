/// <reference types="Cypress"/>

describe('User can successfully update his/her own information', () => {

    beforeEach(function () {
        cy.fixture('/locators/profile.json').then(function (profile) {
            this.profile = profile
        })
        cy.fixture('/data/updated_user_info.json').then(function (updated_data) {
            this.updated_data = updated_data
        })
    })

    it('Open the user info panel and click on profile', function () {
        cy.wait(2000)
        cy.get(this.profile.userinfoBTN).click()
        cy.get(this.profile.profileBTN).click()
    });

    xit('Enter the updated information', function () {
        cy.get(this.profile.firstnameFLD).clear().type(this.updated_data.first_name)
        cy.get(this.profile.lastnameFLD).clear().type(this.updated_data.last_name)
        cy.get(this.profile.phoneFLD).clear().type(this.updated_data.phone)
    });

    it('Click on Update button', function () {
        cy.contains('Update').click();
    });

    it('Verify the success toast message', function () {
        cy.get(this.profile.toastMSG).should('have.text', 'User updated successfully');
    });
})

// describe('Change the password',()=>{
//     beforeEach(function () {
//         cy.fixture('/locators/profile.json').then(function (profile) {
//           this.profile = profile
//         })
//       })
//       it('blah blah', () => {
//         console.log("Print hoy")
//       });
// })

// describe('Verify the email id with the logged in email credential',()=>{
//     beforeEach(function () {
//         cy.fixture('/locators/profile.json').then(function (profile) {
//           this.profile = profile
//         })
//       })
//       it('blah blah', () => {
//         console.log("Print hoy")
//       });
// })