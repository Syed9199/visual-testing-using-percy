import { test } from '@playwright/test';
import { percySnapshot } from '@percy/playwright';

test('Landing Page', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(5000);
    await percySnapshot(page, 'Landing Page Snapshot', {
        widths: [1280], 
    });
});

test('Login Page', async ({ page }) => {
    await page.goto('/sign-in');
    await page.waitForTimeout(5000);

    await percySnapshot(page, 'Login Page', {
        widths: [1280], 
    });
});
