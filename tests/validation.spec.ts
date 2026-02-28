import { test, expect } from '@playwright/test';
import { checkAppInitPage } from './helpers/checkAppInitPage.ts';

test('autorization positive', async ({ page }) => {
  await checkAppInitPage({ page });

  const submitButton = page.locator('#submit');
  const dropdown = page.locator('#year');
  const checkbox = page.locator('#checkbox');
  const radio = page.locator('#radio');

  await page.fill('input#name', 'testuser');
  await page.fill('input#email', 'test123@test.by');
  await page.fill('input#password', 'testpassword123');
  await dropdown.selectOption('2000');
  await radio.check();
  await checkbox.check();

  await submitButton.click();
  await expect(page).toHaveURL('http://127.0.0.1:5500/src/page2.html?username=testuser');
});
