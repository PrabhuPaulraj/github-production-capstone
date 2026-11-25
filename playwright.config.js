//cofig.js
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({

    testDir: "./tests",

    fullyParallel: false,

    workers: 1,

    reporter: [
        ["list"],
        ["html", { open: "never" }]
    ],

    use: {

        baseURL: "https://github.com",

        browserName: "chromium",

        headless: false,

        screenshot: "on",

        trace: "on",

        video: "on",
    }

});
