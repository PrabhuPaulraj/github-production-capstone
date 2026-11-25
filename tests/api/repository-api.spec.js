const { test, expect } = require("@playwright/test");

const repositoryData = require("../../test-data/repositories");

test.describe("GitHub Repository API Tests", () => {

    test("Verify repository API response", async ({ request }) => {

        // Send GET request
        const response = await request.get(repositoryData.apiUrl);

        // Verify status code
        expect(response.status()).toBe(200);

        // Extract JSON response
        const data = await response.json();

        // Validate response data
        expect(data.name).toBe(repositoryData.repository);

        expect(data.full_name).toBe(repositoryData.fullName);

        expect(data.owner.login).toBe(repositoryData.owner);

        console.log("Repository:", data.full_name);
        console.log("Owner:", data.owner.login);
        console.log("API validation successful");

    });

});
