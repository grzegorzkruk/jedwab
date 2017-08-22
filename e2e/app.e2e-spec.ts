import { JedwabPage } from './app.po';

describe('jedwab App', () => {
  let page: JedwabPage;

  beforeEach(() => {
    page = new JedwabPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
