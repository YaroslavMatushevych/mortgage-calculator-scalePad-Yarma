import logger from './';

jest.mock('@/constant/env', () => ({
  get showLogger() {
    return true;
  },
}));

describe('logger', () => {
  let consoleSpy: jest.SpyInstance;

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockClear();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it('should log when showLogger is true', () => {
    const comment = 'Test Comment';
    const testObject = { key: 'value' };

    logger(testObject, comment);

    expect(consoleSpy).toHaveBeenCalledWith(
      '%c ============== INFO LOG \n',
      'color: #22D3EE',
      expect.any(String),
      `=== ${comment}\n`,
      testObject
    );
  });
});
