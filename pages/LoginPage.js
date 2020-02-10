import { Selector } from 'testcafe';

export default class LoginPage {
  // Sign in view
  static emailInput = Selector('[name="loginfmt"]');

  static createOneButton = Selector('#signup');

  static signInWithSecurity = Selector('#idA_PWD_SwitchToFido');

  static signInOptions = Selector('#idA_PWD_SwitchToCredPicker');

  static nextButton = Selector('#idSIButton9');

  // Password view
  static passwordInput = Selector('[name="passwd"]');

  static keepMeSignIn = Selector('#idChkBx_PWD_KMSI0Pwd');

  static forgotPassword = Selector('#idA_PWD_ForgotPassword');

  static signInButton = Selector('#idSIButton9');
}
