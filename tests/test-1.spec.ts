import { test, expect, Page, Locator } from '@playwright/test';
import { beforeEach } from 'node:test';

interface Elements {
  locator: (page: Page) => Locator;
  name: string;
  text?: string;
  attribute?: {
    type: string;
    value: string;
  };
}

const elements: Elements[] = [
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Dinosaur' }),
    name: 'Dinosaur img',
  },
  {
    locator: (page: Page): Locator => page.getByRole('heading', { name: 'REGISTRATION' }),
    name: 'Header REGISTRATION',
    text: 'REGISTRATION',
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Find out anything else' }),
    name: 'link Found',
    text: 'Find out anything else',
    attribute: {
      type: 'href',
      value: 'https://www.google.com',
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole('textbox', { name: 'Name:' }),
    name: 'text Name',
    text: 'Name',
  },
  {
    locator: (page: Page): Locator => page.getByRole('textbox', { name: 'Email:' }),
    name: 'text Email',
    text: 'Email',
  },
  {
    locator: (page: Page): Locator => page.getByRole('textbox', { name: 'Password:' }),
    name: 'text Password',
    text: 'Password',
  },
  {
    locator: (page: Page): Locator => page.getByRole('combobox', { name: 'Year of birth:' }),
    name: 'dropdown',
    text: 'Year of birth',
  },
  {
    locator: (page: Page): Locator => page.getByRole('radio', { name: 'Sex' }),
    name: 'radio button',
  },
  {
    locator: (page: Page): Locator =>
      page.getByRole('checkbox', { name: 'I agree with the rules' }),
    name: 'checkbox',
    text: 'I agree with the rules',
  },
  {
    locator: (page: Page): Locator => page.getByRole('button', { name: 'Choose File' }),
    name: 'button Choose file',
  },
  {
    locator: (page: Page): Locator => page.getByRole('button', { name: 'Enter' }),
    name: 'button Enter',
  },
  {
    locator: (page: Page): Locator => page.getByText('Load photo'),
    name: 'text Load photo',
  },
];

test.describe('index.page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/src/index.html');
  });
  test('Проверка отображения элементов ${name}', async ({ page }) => {
    elements.forEach(({ locator, name }) => {
      test.step(`Проверка отображения элемента ${name}`, async () => {
        await expect.soft(locator(page)).toBeVisible();
      });
    });
  });

  test('Проверка названия элементов навигации', async ({ page }) => {
    elements.forEach(({ locator, name, text }) => {
      if (text) {
        test.step(`Проверка названия элемента ${name}`, async () => {
          await expect.soft(locator(page)).toContainText(text);
        });
      }
    });
  });

  test('Проверка атрибута href', async ({ page }) => {
    elements.forEach(({ locator, name, attribute }) => {
      if (attribute) {
        test.step(`Проверка аттрибутов href элемента ${name}`, async () => {
          await expect.soft(locator(page)).toHaveAttribute(attribute?.type, attribute?.value);
        });
      }
    });
  });
});
