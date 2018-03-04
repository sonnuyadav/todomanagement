import { EditModule } from './edit.module';

describe('EditModule', () => {
  let mailModule: EditModule;

  beforeEach(() => {
    mailModule = new EditModule();
  });

  it('should create an instance', () => {
    expect(mailModule).toBeTruthy();
  });
});
