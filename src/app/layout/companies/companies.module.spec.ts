import { CompaniesModule } from './companies.module';

describe('MailModule', () => {
  let companiesModule: CompaniesModule;

  beforeEach(() => {
    companiesModule = new CompaniesModule();
  });

  it('should create an instance', () => {
    expect(companiesModule).toBeTruthy();
  });
});
