import MockAdapter from 'axios-mock-adapter';
import {api, saveToken} from '@api';
describe('API middleware', () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(api);
  });

  afterEach(() => {
    mockAxios.restore();
  });

  it('should attach token to request headers', async () => {
    const token = 'test-token';
    saveToken(token); // Assuming getToken fetches the token from localStorage
    mockAxios.onGet('/test-endpoint').reply(200);

    const response = await api.get('/test-endpoint');

    expect(response.config.headers['X-Token']).toBe(token);
  });

  it('should pass through successful requests and responses', async () => {
    mockAxios.onGet('/test-endpoint').reply(200, { data: 'test-data' });

    const response = await api.get('/test-endpoint');

    expect(response.status).toBe(200);
    expect(response.data).toEqual({ data: 'test-data' });
  });
});
