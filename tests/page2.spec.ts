import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/page2.html');
  await page.getByRole('heading', { name: 'Hello my friend http://127.0.' }).click();
  await expect(page.locator('#greeting')).toContainText(
    'Hello my friend http://127.0.0.1:5500/src/page2.html'
  );
  await expect(page.locator('h1')).toContainText('Welcome to the amazing dinosaur world!');
  await expect(page.getByRole('group')).toContainText('Start Task Date');
  await expect(page.getByRole('group')).toContainText('Finish Task Date');
  await expect(page.getByRole('group')).toContainText('Task Name');
  await expect(page.getByRole('group')).toContainText('Status');
  await page.getByRole('combobox', { name: 'Status' }).click();
  await page.getByRole('combobox', { name: 'Status' }).click();
  await expect(page.locator('#createTask')).toContainText('SAVE');
  await expect(page.getByRole('row')).toContainText('#');
  await expect(page.getByRole('row')).toContainText('Start Task Date');
  await expect(page.getByRole('row')).toContainText('Finish Task Date');
  await expect(page.getByRole('row')).toContainText('Task Name');
  await expect(page.getByRole('row')).toContainText('Task Completed');
  await expect(page.getByRole('row')).toContainText('Remove');
});
