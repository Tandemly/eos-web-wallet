import balanceReducer from "./balance-reducer";
import localforage from "localforage";
import { persistReducer } from "redux-persist";

export default persistReducer(
  {
    key: `eos-balances`,
    storage: localforage
  },
  balanceReducer
);
