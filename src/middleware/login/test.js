import configureMockStore from 'redux-mock-store';
import { _middlewares } from '../';
import { getUser } from './';
import { succeedPostLogin } from 'containers/Login/reducer';

const mockStore = configureMockStore(_middlewares);
const mockHistory = {
  push: jest.fn(),
};

describe('async login middleware', () => {
  it('on successful network call, dispatches succeedPostLogin action', () => {
    const store = mockStore({ user: [] });
    const payload = { account_name: 'inita', owner_key: 'abcdefghijklmnop' };
    const response = {
      user: {
        account_name: 'inita',
        auth: {},
        display_name: '',
        image_url: '',
        website: '',
      },
    };
    const expectedActions = [
      { type: 'UNSET_NOTIFICATION' },
      succeedPostLogin(response),
    ];

    fetch.mockResponse(JSON.stringify(response));

    return getUser(payload, store.dispatch, mockHistory).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

