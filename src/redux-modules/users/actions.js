export const TRY_GET_USERS = "TRY_GET_USERS";

export function tryGetUser() {
  const action = {
    type: TRY_GET_USERS
  };

  return async dispatch => {
    dispatch(action);

    /* TODO complete logic after API resolved */
    return fetch("/users");
  };
}
