import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AssureAppComponent } from '../app/assure.component';

beforeEachProviders(() => [AssureAppComponent]);

describe('App: Assure', () => {
  it('should create the app',
      inject([AssureAppComponent], (app: AssureAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'assure works!\'',
      inject([AssureAppComponent], (app: AssureAppComponent) => {
    expect(app.title).toEqual('assure works!');
  }));
});
