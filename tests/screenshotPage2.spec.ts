import { test, expect } from '@playwright/test';

test.describe('screenshot', () => {
  test('make screenshot', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/src/page2.html');
    // Сохранение скриншота в файл
    await page.screenshot({ path: 'screenshotPage2.png', fullPage: true });
  });

  test('comparison with standard', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/src/page2.html');
    // Сравнение скриншота с сохраненным ранее эталоном
    await expect(page).toHaveScreenshot('screenshotPage2.png');
  });

  test('Enter data and validation', async ({ page }) => {
    // Открываем страницу с формой
    await page.goto('http://127.0.0.1:5500/src/page2.html');
    await page.screenshot({ path: 'screenshots/01-form-opened.png', fullPage: true });

    const submitButton = page.locator('#createTask');
    const dropdown = page.locator('#taskcomps');
    //const progressInput = page.locator('#comp');

    // Вводим данные в поля формы
    //page.locator("hashtag#username").fill("JohnDoe");
    page.locator('input#start').fill('2000-01-01');
    //await page.fill('input#start', '2000-01-01');
    page.locator('input#finish').fill('2000-01-02');
    //await page.fill('input#finish', '02.01.2020');
    page.locator('input#taskname').fill('test');
    //await page.fill('input#taskname', 'test');
    page.locator('input#comp').fill('In progress');
    //await page.fill('input#comp', 'In progress');
    //await page.pause();
    await page.screenshot({ path: 'screenshots/02-form-filled.png', fullPage: true });

    //await dropdown.selectOption('In progress');
    // await progressInput.fill();
    //await page.screenshot({ path: 'screenshots/03-dropdown-selected.png', fullPage: true });

    // Нажимаем кнопку валидации/отправки
    await submitButton.click();
    await page.screenshot({ path: 'screenshots/06-form-submitted.png', fullPage: true });

    // Проверяем успешную валидацию (например, появление сообщения)
    const tableRow = await page.locator('table tr', { hasText: 'test' });
    //await expect(tableRow).toBeVisible();
  });
});
