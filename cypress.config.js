const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // specPattern: 'cypress/integration/*/**.cy.js' // If the specs are written in any customized folder
  testIsolation: false
  }
});
