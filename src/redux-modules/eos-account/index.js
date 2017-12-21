import localforage from "localforage";
import { persistReducer } from "redux-persist";
import { hardSet } from "redux-persist/lib/stateReconciler/hardSet";
import createEncryptor from "@tandem.ly/redux-persist-transform-encrypt";
import accountReducer from "./account-reducer";

export const createReducer = (key, secret) => {
  const encryptor = createEncryptor({ secretKey: secret });

  return persistReducer(
    {
      key: `${key}-account`,
      storage: localforage,
      stateReconciler: hardSet,
      transforms: [encryptor]
    },
    accountReducer
  );
};
