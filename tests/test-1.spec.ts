import { test, expect } from '@playwright/test';

test('Проверка отображения элементов навигации', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/index.html');
  await expect(page.getByRole('link', { name: 'Dinosaur' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'REGISTRATION' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Find out anything else' })).toBeVisible();
  await expect(page.getByText('Name:')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Name:' })).toBeVisible();
  await expect(page.getByText('Email:')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Email:' })).toBeVisible();
  await expect(page.getByText('Password:')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password:' })).toBeVisible();
  await expect(page.getByText('Year of birth:')).toBeVisible();
  await expect(page.getByRole('combobox')).toBeVisible();
  await expect(page.getByText('Sex')).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Sex' })).toBeVisible();
  await expect(page.locator('#radio1')).toBeVisible();
  await expect(page.locator('#radio2')).toBeVisible();
  await expect(page.getByText('I agree with the rules')).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'I agree with the rules' })).toBeVisible();
  await expect(page.getByText('Load photo')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Choose File' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Choose Your Favorite Dinosaur' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Name your favorite dinosaur' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Enter' })).toBeVisible();
});

test('Проверка названия элементов навигации', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/index.html');
  await expect(page.getByRole('heading', { name: 'REGISTRATION' })).toContainText('REGISTRATION');
  await expect(page.locator('body')).toContainText('Find out anything else');
  await expect(page.getByRole('textbox', { name: 'Name:' })).toContainText('Name:');
  await expect(page.getByRole('textbox', { name: 'Email:' })).toContainText('Email:');
  await expect(page.getByRole('textbox', { name: 'Password:' })).toContainText('Password:');
  await expect(page.getByRole('group')).toContainText('Year of birth:');
  await expect(page.getByRole('combobox')).toContainText(
    'Choose your year of birthday 2000 2001 2002 2003 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025'
  );
  await expect(page.getByRole('group')).toContainText('Sex');
  await expect(page.getByRole('group')).toContainText('Man Woman Dinosaur');
  await expect(page.getByRole('checkbox', { name: 'I agree with the rules' })).toContainText(
    'I agree with the rules'
  );
  await expect(page.locator('#form')).toContainText('Load photo');
  await expect(page.getByRole('heading', { name: 'Choose Your Favorite Dinosaur' })).toContainText(
    'Choose Your Favorite Dinosaur'
  );
});

test('Проверка атрибута href', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/index.html');
  await expect(page.getByRole('link', { name: 'Find out anything else' })).toHaveAttribute(
    'href',
    'https://www.google.com'
  );
});
