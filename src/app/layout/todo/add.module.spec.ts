import { ComposemailModule } from './add.module';

describe('AddModule', () => {
  let mailModule: AddModule;

  beforeEach(() => {
    mailModule = new AddModule();
  });

  it('should create an instance', () => {
    expect(todoModule).toBeTruthy();
  });
});
