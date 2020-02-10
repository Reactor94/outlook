import { Selector } from 'testcafe';

export default class HomePage {
  static profileData = profileCredentials =>
    Selector('[data-bi-id="home.banner.profile.column-title"]').withText(profileCredentials);
}
