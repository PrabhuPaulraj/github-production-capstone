const { RepositoryHeader } = require("../components/RepositoryHeader");

class RepositoryPage {

    constructor(page) {

        this.page = page;

        this.header = new RepositoryHeader(page);

        this.readme = page.locator("#readme");

    }

    async open() {

        await this.page.goto("/microsoft/playwright");

    }

    async getPageTitle() {

        return await this.page.title();

    }

    async isReadmeVisible() {

        return await this.readme.isVisible();

    }

    async isHeaderVisible() {

        return await this.header.isRepositoryLinkVisible();

    }

}

module.exports = { RepositoryPage };
