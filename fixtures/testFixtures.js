const { test: base } = require("@playwright/test");

const { RepositoryPage } = require("../pages/RepositoryPage");

const test = base.extend({

    repositoryPage: async ({ page }, use) => {

        const repositoryPage = new RepositoryPage(page);

        await use(repositoryPage);

    }

});

module.exports = { test };