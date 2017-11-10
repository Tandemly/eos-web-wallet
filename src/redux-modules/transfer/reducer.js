import {
  FAIL_POST_TRANSACTION,
  SUCCESS_POST_TRANSACTION,
  TRY_POST_TRANSACTION
} from "./actions";

// TODO move memo = ' ' upstream
const initialState = {
  transaction: {
    amount: 0,
    to: "",
    memo: ""
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TRY_POST_TRANSACTION:
      return {
        ...state,
        transaction: {
          amount: action.amount,
          to: action.to,
          memo: action.memo
        }
      };
    case FAIL_POST_TRANSACTION:
      return {
        ...state
      };
    case SUCCESS_POST_TRANSACTION:
      return {
        ...state,
        transaction: {
          amount: "",
          to: "",
          memo: ""
        }
      };
    default:
      return state;
  }
}
