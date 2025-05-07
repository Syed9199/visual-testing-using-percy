#!/bin/bash

rm -rf test-results
rm -rf playwright-report
npm run test
npx playwright show-report
read -p "Press any key to continue..."