
describe('ENV tests', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should succeed when mapboxToken is available', () => {
    process.env.PUBLIC_MAPBOX_TOKEN = 'test-token-value';

    const { ENV } = require('../env');
    expect(ENV.mapboxToken).toBe('test-token-value');
  });

  it('should throw an error if the mapboxToken is missing', () => {
    delete process.env.PUBLIC_MAPBOX_TOKEN;

    const importEnvModule = () => require('../env');
    expect(importEnvModule).toThrow(
      'Missing PUBLIC_MAPBOX_TOKEN env'
    );
  });
});
