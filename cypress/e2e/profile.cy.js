/// <reference types="Cypress"/>

describe('Go to Profile and update the user information', () => {
    beforeEach(function () {
        cy.fixture('/locators/profile.json').then(function (profile) {
            this.profile = profile
        })
    })

    it('Open the profile module', () => {
        cy.contains("Profile").click()
    });
    // it('Change the user information', () => {

    // });
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