// @ts-check
const { test, expect } = require('@playwright/test');

test('Check Milk Price', async ({ page }) => {
    await page.goto('https://www.meijer.com/');

    await page.click('button[data-testid="store-flyout-button"]')

    await page.getByRole('textbox', { name: 'Zip or City, State' }).fill('48813');

    await page.keyboard.press('Enter');

    await page.getByRole('checkbox', { name: /Charlotte/ }).check();

    await page.getByRole('button', { name: 'Save and Continue' }).click();
});
