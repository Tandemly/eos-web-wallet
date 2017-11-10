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

    const payload = {
      email: "test@eafe.com",
      password: "xyz20171424"
    };

    const profile = {
      email: payload.email
    };

    fetch.mockResponse(JSON.stringify(profile), {
      status: 200,
      headers: {
        "content-type": "application/json"
      }
    });

    const expectedActions = [
      tryPostLogin(payload),
      unsetNotification(),
      succeedPostLogin({ profile }),
      push("/")
    ];

    await store.dispatch(doLogin(payload.email, payload.password));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
