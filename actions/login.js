import { t } from 'testcafe';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

/**
 * Attempt to login with the provided details.
 * @param {string} email Email to login with
 * @param {string} password Password of user
 */
export async function loginAs(email, password) {
  await t.typeText(LoginPage.emailInput, email);
  await t.click(LoginPage.nextButton);
  await t.typeText(LoginPage.passwordInput, password);
  await t.click(LoginPage.signInButton);
}

/**
 * Assert that the current user is logged into the mail
 * @param {string} profileName profile name that should be visible
 * @param {boolean} [result=true] Result to assert, set to false to assert user is not logged in
 */
export async function assertUserLoggedIn(profileName, result = true) {
  const profileCredentials = HomePage.profileData(profileName);
  await t
    .expect(profileCredentials.visible)
    .eql(
      result,
      `User is not logged, Could not find an element in the home page`,
    );
}
