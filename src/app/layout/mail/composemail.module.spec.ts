import { ComposemailModule } from './composemail.module';

describe('ComposemailModule', () => {
  let mailModule: ComposemailModule;

  beforeEach(() => {
    mailModule = new ComposemailModule();
  });

  it('should create an instance', () => {
    expect(mailModule).toBeTruthy();
  });
});
