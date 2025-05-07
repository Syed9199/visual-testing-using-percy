import { defineConfig } from '@playwright/test';

export default defineConfig
({
    testDir: 'tests',
    use: {
        headless: false,
        baseURL: 'https://test.secureship.ca/',
        
        },
    reporter: [['html'],["line"],],
    workers:1,

});
