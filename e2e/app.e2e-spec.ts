import { MoviesAppPage } from './app.po';

describe('movies-app App', () => {
  let page: MoviesAppPage;

  beforeEach(() => {
    page = new MoviesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
