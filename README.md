# qa

## Installation

- install node

- in project folder, run: npm install

- to run tests, run npm run e2e

## Page Objects

Actual Pages are coded as \<DescriptiveName\>Page.

## Actions

Higher order functions such as `loginAs()` will perform multiple actions. Actions beginning with assert, eg `assertUserLoggedIn()` performs an actual assert.

## Specs

- Should never reference css selectors eg. `await t.click('.sign_in_button');`

- Should never reference Page Object items eg. `await t.click(LoginPage.loginButton);`
- Should call actions eg. `await login.loginAs('vitaliktest@outlook.com', 'Asdfgh1!');`
# outlook
