import configureMockStore from 'redux-mock-store';
import { _middlewares } from '../';
import { getBalance } from './';
import { succeedGetBalance } from 'containers/Balance/reducer';

const mockStore = configureMockStore(_middlewares);

describe('async balance middleware', () => {
  it('on successful network call, dispatches succeedGetBalance action', () => {
    const store = mockStore({ balance: [] });
    const payload = { account_name: 'inita' };
    const response = {
      account: {
        total: "999995.5819 EOS",
        staked: "0.0000 EOS",
      },
    };
    const expectedActions = [
      succeedGetBalance(response),
    ];

    fetch.mockResponse(JSON.stringify(response));

    return getBalance(payload, store.dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

