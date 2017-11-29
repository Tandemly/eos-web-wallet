import profileReducer from "./profile-reducer";
import localforage from "localforage";
import { hardSet } from "redux-persist/lib/stateReconciler/hardSet";
import { persistReducer } from "redux-persist";

export const createReducer = key =>
  persistReducer(
    {
      key: `${key}-profile`,
      stateReconciler: hardSet,
      storage: localforage
    },
    profileReducer
  );
