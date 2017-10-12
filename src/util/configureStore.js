import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
// import middlewares from './middleware';
// import { reducers } from './containers';

const initialState = {};

function blankReducer(state = initialState) {
  return state;
}

function configureStoreAsync() {
  return new Promise((resolve, reject) => {
    try {
      const store = 
        createStore(
          blankReducer,
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
    blankReducer,
    preloadState
  );
}

export {
  configureStoreAsync,
  configureStore
};
