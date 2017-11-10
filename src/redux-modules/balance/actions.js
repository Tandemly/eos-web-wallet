export const TRY_GET_BALANCE = "TRY_GET_BALANCE";
export const SUCCESS_GET_BALANCE = "SUCCESS_GET_BALANCE";
export const FAIL_GET_BALANCE = "FAIL_GET_BALANCE";

export function succeedGetBalance({ account }) {
  return {
    type: SUCCESS_GET_BALANCE,
    account
  };
}

export function failGetBalance({ errors }) {
  return {
    type: FAIL_GET_BALANCE,
    errors
  };
}

export function tryGetBalance({ account_name }) {
  return {
    type: TRY_GET_BALANCE,
    account_name
  };
}
