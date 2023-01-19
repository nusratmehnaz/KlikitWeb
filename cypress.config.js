const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "civash",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Klikit Website',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/all.cy.js', // If want to run only a specific spec file
    // specPattern: 'cypress/e2e/*/**.cy.js' // If want to run all spec files
    testIsolation: false
  }
});
