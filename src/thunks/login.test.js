import configureMockStore from "redux-mock-store";
import { push } from "react-router-redux";
import middlewares from "middleware";
import { tryPostLogin, succeedPostLogin } from "redux-modules/login/actions";
import { unsetNotification } from "redux-modules/notifications/actions";
import { doLogin } from "thunks/login";

const mockStore = configureMockStore(middlewares);

describe("doLogin", () => {
  it("on login success, dispatch succeedPostLogin", async () => {
    const store = mockStore({
      login: {
        isAuthenticated: false,
        user: {
          email: ""
        }
      }
    });

    const email = "test@eafe.com";
    const password = "xyz20171424";

    const profile = {
      email
    };

    fetch.mockResponse(JSON.stringify(profile), {
      status: 200,
      headers: {
        "content-type": "application/json"
      }
    });

    const expectedActions = [
      tryPostLogin(email, password),
      unsetNotification(),
      succeedPostLogin({ profile }),
      push("/")
    ];

    await store.dispatch(doLogin(email, password));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
