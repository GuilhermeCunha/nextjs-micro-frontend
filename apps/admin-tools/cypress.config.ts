import { defineConfig } from "cypress";
// Populate process.env with values from .env file
require("dotenv").config();

export default defineConfig({
  env: {},
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
