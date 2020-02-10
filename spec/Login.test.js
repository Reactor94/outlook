import { loginAs, assertUserLoggedIn } from '../actions/login';
import { ROOT_URL } from '../config/config';

fixture`Login tests`.page(ROOT_URL).beforeEach(async t => {
  await t.maximizeWindow();
});

test('Should check that user can login', async () => {
  await loginAs('vitaliktest@outlook.com', 'Asdfgh1!');
  await assertUserLoggedIn('Vitalii Pylypets');
});
