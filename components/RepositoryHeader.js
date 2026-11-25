class RepositoryHeader {

    constructor(page) {
        this.page = page;

        this.repositoryLink = page.locator(
            "a[href='/microsoft/playwright']"
        ).first();
    }

    async isRepositoryLinkVisible() {
        return await this.repositoryLink.isVisible();
    }

}

module.exports = { RepositoryHeader };