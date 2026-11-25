const { expect } = require("@playwright/test");

const { test } = require("../../fixtures/testFixtures");

const repositoryData = require("../../test-data/repositories");

test.describe("GitHub Repository UI Tests", () => {

    test.beforeEach(async ({ repositoryPage }) => {

        await repositoryPage.open();

    });

    test("Verify Microsoft Playwright repository", async ({
        page,
        repositoryPage
    }, testInfo) => {

        // 1. Verify repository URL
        await expect(page).toHaveURL(repositoryData.url);

        // 2. Verify page title
        const title = await repositoryPage.getPageTitle();

        expect(title.toLowerCase()).toContain("playwright");

        // 3. Capture screenshot
        const screenshot = await page.screenshot({
            path: testInfo.outputPath("repository-page.png"),
            fullPage: true
        });

        // 4. Attach screenshot to HTML report
        await testInfo.attach("Repository Screenshot", {
            body: screenshot,
            contentType: "image/png"
        });

        // 5. Display execution details
        console.log("Repository URL:", page.url());
        console.log("Page title:", title);
        console.log("Screenshot captured successfully");

    });

});

