import { test, expect } from '@playwright/test';

test.describe('screenshot', () => {
  test('make screenshot', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/src/index.html');
    // Сохранение скриншота в файл
    await page.screenshot({ path: 'screenshot.png' });
  });

  test('comparison with standard', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/src/index.html');
    // Сравнение скриншота с сохраненным ранее эталоном
    await expect(page).toHaveScreenshot({ path: 'screenshot.png' });
  });

  test('Enter data and validation', async ({ page }) => {
    // Открываем страницу с формой
    await page.goto('http://127.0.0.1:5500/src/index.html');
    await page.screenshot({ path: 'screenshots/01-form-opened.png', fullPage: true });

    const submitButton = page.locator('#submit');
    const dropdown = page.locator('#year');
    const checkbox = page.locator('#checkbox');
    const radio = page.locator('#radio');

    // Вводим данные в поля формы
    await page.fill('input#name', '');
    await page.fill('input#email', 'test123@test.by');
    await page.fill('input#password', 'testpassword123');
    await page.screenshot({ path: 'screenshots/02-form-filled.png', fullPage: true });

    // Открываем дропдаун и выбираем значение
    await dropdown.selectOption('2000');
    await page.screenshot({ path: 'screenshots/03-dropdown-selected.png', fullPage: true });

    // Ставим чекбокс
    await radio.check();
    await page.screenshot({ path: 'screenshots/04-checkbox-checked.png', fullPage: true });

    // Выбираем радиокнопку
    await checkbox.check();
    await page.screenshot({ path: 'screenshots/05-radio-selected.png', fullPage: true });

    // Нажимаем кнопку валидации/отправки
    await submitButton.click();
    await page.screenshot({ path: 'screenshots/06-form-submitted.png', fullPage: true });

    // Проверяем успешную валидацию (например, появление сообщения)
    await expect(page).toHaveURL('http://127.0.0.1:5500/src/index.html');
    const successHeader = page.locator('h1');
    await expect(successHeader).toHaveText('REGISTRATION');
  });
});
