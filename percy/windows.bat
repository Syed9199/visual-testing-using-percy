@echo off
del /q test-results
del /q playwright-report
npm run test
npx playwright show-report
pause