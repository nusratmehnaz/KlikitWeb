/// <reference types="Cypress"/>

describe('User login successfully and redirects to the order dashboard', () => {

  beforeEach(function () {
    Cypress.session.clearCurrentSessionData()
    cy.fixture('/data/url').then(function (url) {
      this.url = url
    })

    cy.fixture('/data/credentials').then(function (credentials) {
      this.credentials = credentials
    })

    cy.fixture('locators/login').then(function (login) {
      this.login = login
    })
  })

  it('Visit URL', function () {
    cy.visit(this.url.qa.cloud)
  })
  it('Enter email and password', function () {
    cy.get(this.login.emailFLD).type(this.credentials.email)
    cy.get(this.login.passwordFLD).type(this.credentials.password)
  });

  it('Click on the login button', function () {
    cy.get(this.login.loginBTN).click()
  });
})