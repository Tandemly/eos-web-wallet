import configureMockStore from "redux-mock-store";
import middlewares from "middleware";
import { connectEosAccount } from "thunks/connect-eos-accounts";
import {
  tryPostEOSAccount,
  succeedPostEOSAccount
} from "redux-modules/eos-signup/actions";

const mockStore = configureMockStore(middlewares);

describe("connectEosAccount", () => {
  it("on successful network call, dispatches succeedPostEOSAccount action", async () => {
    const store = mockStore({
      login: {
        isAuthenticated: true
      },
      "eos-account": {
        account: {
          accountName: "testeos"
        }
      }
    });

    const accountName = "inita";
    const ownerKey = "abcdefghijklmnop";
    const activeKey = "wafefewfavbrfr";

    fetch.mockResponse("", { status: 200 });

    const expectedActions = [
      tryPostEOSAccount({
        account_name: accountName,
        owner_key: ownerKey,
        active_key: activeKey
      }),
      succeedPostEOSAccount()
    ];

    await store.dispatch(connectEosAccount(accountName, ownerKey, activeKey));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
