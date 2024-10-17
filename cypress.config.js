const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.spec.js", // Ensure this matches the location of your spec files
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});
