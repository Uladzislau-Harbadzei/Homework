import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';
test.describe('index.page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/src/index.html');
  });
  test('Проверка отображения элементов навигации', async ({ page }) => {
    await expect.soft(page.getByRole('link', { name: 'Dinosaur' })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'REGISTRATION' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Find out anything else' })).toBeVisible();
    await expect.soft(page.getByText('Name:')).toBeVisible();
    await expect.soft(page.getByRole('textbox', { name: 'Name:' })).toBeVisible();
    await expect.soft(page.getByText('Email:')).toBeVisible();
    await expect.soft(page.getByRole('textbox', { name: 'Email:' })).toBeVisible();
    await expect.soft(page.getByText('Password:')).toBeVisible();
    await expect.soft(page.getByRole('textbox', { name: 'Password:' })).toBeVisible();
    await expect.soft(page.getByText('Year of birth:')).toBeVisible();
    await expect.soft(page.getByRole('combobox')).toBeVisible();
    await expect.soft(page.getByText('Sex')).toBeVisible();
    await expect.soft(page.getByRole('radio', { name: 'Sex' })).toBeVisible();
    await expect.soft(page.locator('#radio1')).toBeVisible();
    await expect.soft(page.locator('#radio2')).toBeVisible();
    await expect.soft(page.getByText('I agree with the rules')).toBeVisible();
    await expect.soft(page.getByRole('checkbox', { name: 'I agree with the rules' })).toBeVisible();
    await expect.soft(page.getByText('Load photo')).toBeVisible();
    await expect.soft(page.getByRole('button', { name: 'Choose File' })).toBeVisible();
    await expect
      .soft(page.getByRole('heading', { name: 'Choose Your Favorite Dinosaur' }))
      .toBeVisible();
    await expect
      .soft(page.getByRole('textbox', { name: 'Name your favorite dinosaur' }))
      .toBeVisible();
    await expect.soft(page.getByRole('button', { name: 'Enter' })).toBeVisible();
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
