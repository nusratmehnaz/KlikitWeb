const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "civash",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/all.cy.js', // If want to run only a specific spec file
    // specPattern: 'cypress/e2e/*/**.cy.js' // If want to run all spec files
    testIsolation: false
  }
});
