import { test, expect } from '@playwright/test';

test('Валидация кнопки', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/index.html');

  const submitButton = page.locator('#submit');
  const dropdown = page.locator('#year');
  const checkbox = page.locator('#checkbox');

  await expect(submitButton).toBeDisabled();

  await page.fill('input#name', 'testuser');
  await page.fill('input#email', 'testpassword123');
  await page.fill('input#password', 'test123@test.by');
  await dropdown.selectOption('0');
  await checkbox.check();

  await expect(submitButton).toBeEnabled();

  await submitButton.click();
  await expect(page).toHaveURL('http://127.0.0.1:5500/src/page2.html');
});
