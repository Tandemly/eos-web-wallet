import profileReducer from "./profile-reducer";
import localforage from "localforage";
import { persistReducer } from "redux-persist";

export const createReducer = key =>
  persistReducer(
    {
      key: `${key}-profile`,
      storage: localforage
    },
    profileReducer
  );
