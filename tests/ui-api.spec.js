const { test, expect } = require("@playwright/test");

const { RepositoryPage } = require("../pages/RepositoryPage");

const repositoryData = require("../test-data/repositories");

test("Compare GitHub UI and API information", async ({
    page,
    request
}) => {

    // Get repository details from API
    const response = await request.get(repositoryData.apiUrl);

    expect(response.status()).toBe(200);

    const apiData = await response.json();

    // Open repository in browser
    const repositoryPage = new RepositoryPage(page);

    await repositoryPage.open();

    // Get page title
    const uiTitle = await repositoryPage.getPageTitle();

    // Compare UI title with API repository name
    expect(uiTitle.toLowerCase()).toContain(apiData.name.toLowerCase());

    console.log("UI title:", uiTitle);
    console.log("API repository:", apiData.full_name);
    console.log("UI and API comparison passed");

});

