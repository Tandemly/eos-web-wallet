import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';

// TODO integrate after API integration
// import middlewares from 'middleware';

import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as account } from 'containers/Balance/reducer';
import { reducer as app } from 'containers/App/reducer';
import { reducer as login } from 'containers/Login/reducer';
import { reducer as notification } from 'containers/Notifications/reducer';
import { reducer as transactions } from 'containers/Transactions/reducer';
import { reducer as user } from 'containers/User/reducer';
import { reducer as users } from 'containers/Users/reducer';

const reducers = combineReducers({
  app,
  account,
  form: reduxFormReducer,
  login,
  notification,
  transactions,
  user,
  users,
});

function configureStoreAsync() {
  return new Promise((resolve, reject) => {
    try {
      const store = 
        createStore(
          reducers,
          undefined,
          compose(
            autoRehydrate(),
          ),
        );

      persistStore(
        store,
        { },
        () => resolve(store)
      );
    } catch (e) {
      reject(e);
    }
  });
}

function configureStore(preloadState) {
  return createStore(
    reducers,
    preloadState
  );
}

export {
  configureStoreAsync,
  configureStore
};
