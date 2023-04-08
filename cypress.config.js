const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    codeCoverage: {
      url: 'http://localhost:3000/__coverage__',
    },
  },
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
  },
});

// ORIGINAL CONFIGURATION
// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
