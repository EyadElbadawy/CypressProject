//cypress.config.js

const { defineConfig } = require("cypress");


module.exports = defineConfig({

    reporter: 'cypress-mochawesome-reporter',

    e2e: {

        setupNodeEvents(on, config) {

            require('cypress-mochawesome-reporter/plugin')(on);

        },
        "include": ["./node_modules/cypress", "cypress/**/*.js"],
         baseUrl:"https://opensource-demo.orangehrmlive.com/"

    },

});