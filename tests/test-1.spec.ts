import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

const elements = [
  {
    locator: (page) => page.getByRole('link', { name: 'Dinosaur' }),
    name: 'Dinosaur img',
  },
  {
    locator: (page) => page.getByRole('heading', { name: 'REGISTRATION' }),
    name: 'Header REGISTRATION',
  },
  {
    locator: (page) => page.getByRole('link', { name: 'Find out anything else' }),
    name: 'link Found',
  },
  {
    locator: (page) => page.getByRole('textbox', { name: 'Name:' }),
    name: 'text Name',
  },
  {
    locator: (page) => page.getByRole('textbox', { name: 'Email:' }),
    name: 'text Email',
  },
  {
    locator: (page) => page.getByRole('textbox', { name: 'Password:' }),
    name: 'text Password',
  },
  {
    locator: (page) => page.getByRole('radio', { name: 'Sex' }),
    name: 'radio button',
  },
  {
    locator: (page) => page.getByRole('checkbox', { name: 'I agree with the rules' }),
    name: 'checkbox',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Choose File' }),
    name: 'button Choose file',
  },
  {
    locator: (page) => page.getByRole('button', { name: 'Enter' }),
    name: 'button Enter',
  },
  {
    locator: (page) => page.getByText('Name:'),
    name: 'text Name',
  },
  {
    locator: (page) => page.getByText('Email:'),
    name: 'text Email',
  },
  {
    locator: (page) => page.getByText('Password:'),
    name: 'text Password',
  },
  {
    locator: (page) => page.getByText('Year of birth:'),
    name: 'text Year',
  },
  {
    locator: (page) => page.getByText('Sex'),
    name: 'text Sex',
  },
  {
    locator: (page) => page.getByText('I agree with the rules'),
    name: 'text checkbox',
  },
  {
    locator: (page) => page.getByText('Load photo'),
    name: 'text Load photo',
  },
];

test.describe('index.page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/src/index.html');
  });
  test('Проверка отображения элементов ${name}', async ({ page }) => {
    elements.forEach(({ locator, name }) => {
      test.step(`Проверка отображения изображения Динозавр`, async () => {
        await expect.soft(locator(page)).toBeVisible();
      });
    });
  });

  test('Проверка названия элементов навигации', async ({ page }) => {
    await expect
      .soft(page.getByRole('heading', { name: 'REGISTRATION' }))
      .toContainText('REGISTRATION');
    await expect.soft(page.locator('body')).toContainText('Find out anything else');
    await expect.soft(page.getByRole('textbox', { name: 'Name:' })).toContainText('Name:');
    await expect.soft(page.getByRole('textbox', { name: 'Email:' })).toContainText('Email:');
    await expect.soft(page.getByRole('textbox', { name: 'Password:' })).toContainText('Password:');
    await expect.soft(page.getByRole('group')).toContainText('Year of birth:');
    await expect
      .soft(page.getByRole('combobox'))
      .toContainText(
        'Choose your year of birthday 2000 2001 2002 2003 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025'
      );
    await expect.soft(page.getByRole('group')).toContainText('Sex');
    await expect.soft(page.getByRole('group')).toContainText('Man Woman Dinosaur');
    await expect
      .soft(page.getByRole('checkbox', { name: 'I agree with the rules' }))
      .toContainText('I agree with the rules');
    await expect.soft(page.locator('#form')).toContainText('Load photo');
    await expect
      .soft(page.getByRole('heading', { name: 'Choose Your Favorite Dinosaur' }))
      .toContainText('Choose Your Favorite Dinosaur');
  });

  test('Проверка атрибута href', async ({ page }) => {
    await expect
      .soft(page.getByRole('link', { name: 'Find out anything else' }))
      .toHaveAttribute('href', 'https://www.google.com');
  });
});
