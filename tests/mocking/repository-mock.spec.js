const { test, expect } = require("@playwright/test");

test("Mock repository API response", async ({ page }) => {

    // Intercept the browser request
    await page.route("**/mock-api/repository", async (route) => {

        await route.fulfill({
            status: 200,
            contentType: "application/json",

            body: JSON.stringify({
                name: "playwright",
                owner: "microsoft",
                stars: 999
            })
        });

    });

    // Open production website
    await page.goto("https://github.com/microsoft/playwright");

    // Send a browser request to the mocked endpoint
    const result = await page.evaluate(async () => {

        const response = await fetch(
            `${window.location.origin}/mock-api/repository`
        );

        return await response.json();

    });

    // Verify mocked data
    expect(result.name).toBe("playwright");
    expect(result.owner).toBe("microsoft");
    expect(result.stars).toBe(999);

    console.log("Mock API response validated");
});
