import { test, expect } from '@playwright/test';

test('главная страница открывается', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/index.html');
  await expect(page).toHaveTitle('Dinosaur Main');
});
