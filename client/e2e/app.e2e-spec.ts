import { AngulartwocrudPage } from './app.po';

describe('angulartwocrud App', () => {
  let page: AngulartwocrudPage;

  beforeEach(() => {
    page = new AngulartwocrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
