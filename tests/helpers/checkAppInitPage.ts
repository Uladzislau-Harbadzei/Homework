import { Page } from '@playwright/test';

interface Params {
  page: Page;
}

export const checkAppInitPage = async ({ page }: Params) => {
  await page.goto('http://127.0.0.1:5500/src/index.html');
};
