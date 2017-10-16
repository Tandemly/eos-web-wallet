import * as React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'util/configureStore';
import BalanceContainer from './';

describe('<BalanceContainer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = configureStore({
      login: {
        user: {
          account_name: 'inita',
        },
      },
      account: {
        total: 0,
        staked: '',
        unstaked: '',
        difference: 0,
        symbol: '',
      },
    });

    ReactDOM.render(
      <Provider store={store}>
        <BalanceContainer />
      </Provider>,
      div,
    );
  });
})

