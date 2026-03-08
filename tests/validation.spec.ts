import { test, expect } from '@playwright/test';
import { checkAppInitPage } from './helpers/checkAppInitPage.ts';
import { error } from 'node:console';

test.describe('autorization', () => {
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

  test('autorization negative - name field is empty', async ({ page }) => {
    await checkAppInitPage({ page });

    const submitButton = page.locator('#submit');
    const dropdown = page.locator('#year');
    const checkbox = page.locator('#checkbox');
    const radio = page.locator('#radio');
    const error = page.locator('#name_error');

    await page.fill('input#name', '');
    await page.fill('input#email', 'test123@test.by');
    await page.fill('input#password', 'testpassword123');
    await dropdown.selectOption('2000');
    await radio.check();
    await checkbox.check();

    await submitButton.click();
    await expect(error).toBeVisible();
    await expect(error).toHaveText('Enter name');
  });

  test('autorization negative - email field is empty', async ({ page }) => {
    await checkAppInitPage({ page });

    const submitButton = page.locator('#submit');
    const dropdown = page.locator('#year');
    const checkbox = page.locator('#checkbox');
    const radio = page.locator('#radio');
    const error = page.locator('#email_error');

    await page.fill('input#name', 'testuser');
    await page.fill('input#email', '');
    await page.fill('input#password', 'testpassword123');
    await dropdown.selectOption('2000');
    await radio.check();
    await checkbox.check();

    await submitButton.click();
    await expect(error).toBeVisible();
    await expect(error).toHaveText('Enter correct email');
  });

  test('autorization negative - email is incorrect', async ({ page }) => {
    await checkAppInitPage({ page });

    const submitButton = page.locator('#submit');
    const dropdown = page.locator('#year');
    const checkbox = page.locator('#checkbox');
    const radio = page.locator('#radio');
    const error = page.locator('#email_error');

    await page.fill('input#name', 'testuser');
    await page.fill('input#email', 'invalid-email');
    await page.fill('input#password', 'testpassword123');
    await dropdown.selectOption('2000');
    await radio.check();
    await checkbox.check();

    await submitButton.click();
    await expect(error).toBeVisible();
    await expect(error).toHaveText('Enter correct email');
  });

  test('autorization negative - password field is empty', async ({ page }) => {
    await checkAppInitPage({ page });

    const submitButton = page.locator('#submit');
    const dropdown = page.locator('#year');
    const checkbox = page.locator('#checkbox');
    const radio = page.locator('#radio');
    const error = page.locator('#password_error');

    await page.fill('input#name', 'testuser');
    await page.fill('input#email', 'test123@test.by');
    await page.fill('input#password', '');
    await dropdown.selectOption('2000');
    await radio.check();
    await checkbox.check();

    await submitButton.click();
    await expect(error).toBeVisible();
    await expect(error).toHaveText('he password must be at least 6 characters long.');
  });

  test('autorization negative - password is incorrect', async ({ page }) => {
    await checkAppInitPage({ page });

    const submitButton = page.locator('#submit');
    const dropdown = page.locator('#year');
    const checkbox = page.locator('#checkbox');
    const radio = page.locator('#radio');
    const error = page.locator('#password_error');

    await page.fill('input#name', 'testuser');
    await page.fill('input#email', 'test123@test.by');
    await page.fill('input#password', 'test1');
    await dropdown.selectOption('2000');
    await radio.check();
    await checkbox.check();

    await submitButton.click();
    await expect(error).toBeVisible();
    await expect(error).toHaveText('he password must be at least 6 characters long.');
  });
});
