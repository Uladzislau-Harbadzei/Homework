import { test, expect } from '@playwright/test';

test('главная страница открывается', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/index.html');
  await expect(page).toHaveTitle('Dinosaur Main');
});

test('Изображение присутствует на странице', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/index.html');
  const img = await page.locator('images/scale_1200.png');
  await expect(img).toBeVisible();
});

test('Чекбокс ', async ({ page }) => {
  await page.getByRole('checkbox').check();
});
