//@flow
/* global describe, it, expect */
import configureMockStore from "redux-mock-store";
import { push } from "react-router-redux";
import ecc from "eosjs-ecc";
import randomize from "randomatic";
import middlewares from "../middleware";
import {
  addEOSAccount,
  removeEOSAccount,
  createEOSAccount
} from "./eos-account";
import {
  setNotification,
  unsetNotification
} from "../redux-modules/notifications/notifications-actions";
import {
  disconnectEOSAccount,
  setEOSAccountName,
  setEOSActiveKeys,
  setEOSOwnerKeys,
  succeedCreateEOSAccount,
  tryCreateEOSAccount
} from "../redux-modules/eos-account/account-actions";
import {
  updateProfiles,
  succeedGetProfile,
  tryGetProfile
} from "../redux-modules/profile/profile-actions";
import { apiClient } from "../util/apiClient";

jest.mock("../util/apiClient");

const mockStore = configureMockStore(middlewares);

describe("eos-account thunks", () => {
  describe("addEOSAccount", () => {
    it("should dispatch appropriate error action if the provided active key is invalid", async () => {
      const accountName = randomize("aA0", 10);
      const store = mockStore({
        user: {
          isAuthenticated: true
        },
        eosAccount: {
          account: {
            accountName: undefined
          }
        },
        profile: {
          profile: {}
        }
      });

      const ownerKey = ecc.randomKey();
      const activeKey = randomize("aA0", 64);

      const expectedActions = [
        setNotification("Invalid Active Key (Private)", "error")
      ];

      await store.dispatch(addEOSAccount(accountName, ownerKey, activeKey));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it("should dispatch appropriate error action if the provided owner key is invalid", async () => {
      const accountName = randomize("aA0", 10);
      const store = mockStore({
        user: {
          isAuthenticated: true
        },
        eosAccount: {
          account: {
            accountName: undefined
          }
        },
        profile: {
          profile: {}
        }
      });

      const ownerKey = randomize("aA0", 64);
      const activeKey = ecc.randomKey();

      const expectedActions = [
        setNotification("Invalid Owner Key (Private)", "error")
      ];

      await store.dispatch(addEOSAccount(accountName, ownerKey, activeKey));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it("should dispatch appropriate actions if both keys are valid", async () => {
      const accountName = randomize("aA0", 10);
      const store = mockStore({
        user: {
          isAuthenticated: true
        },
        eosAccount: {
          accountName
        },
        profile: {
          profiles: [
            {
              eosAccount: accountName
            }
          ]
        }
      });

      const ownerKey = ecc.randomKey();
      const activeKey = ecc.randomKey();

      const profile = {
        email: "some@email.com",
        eosAccount: accountName
      };

      fetch.resetMocks();
      fetch.mockResponseOnce(JSON.stringify(profile), {
        status: 200,
        headers: {
          "content-type": "application/json"
        }
      });

      const expectedActions = [
        setEOSAccountName(accountName),
        setEOSActiveKeys({
          publicKey: ecc.privateToPublic(activeKey),
          privateKey: activeKey
        }),
        setEOSOwnerKeys({
          publicKey: ecc.privateToPublic(ownerKey),
          privateKey: ownerKey
        }),
        tryGetProfile(),
        unsetNotification(),
        succeedGetProfile(),
        updateProfiles([profile]),
        push("/accounts")
      ];

      await store.dispatch(addEOSAccount(accountName, ownerKey, activeKey));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe("removeEOSAccount", () => {
    it("should dispatch appropriate actions if remove is dispatched", async () => {
      const email = randomize("aA0", 10);
      const store = mockStore({
        user: {
          isAuthenticated: true
        },
        eosAccount: {
          account: {
            accountName: undefined
          }
        },
        profile: {
          profile: {}
        }
      });

      fetch.resetMocks();
      fetch.mockResponseOnce(JSON.stringify({ email }), {
        status: 200,
        headers: {
          "content-type": "application/json"
        }
      });

      const expectedActions = [
        unsetNotification(),
        disconnectEOSAccount(),
        tryGetProfile(),
        unsetNotification(),
        succeedGetProfile(),
        updateProfiles([{ email }])
      ];

      await store.dispatch(removeEOSAccount());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe("createEOSAccount", () => {
    it("should dispatch appropriate error action if the provided active key is invalid", async () => {
      const accountName = randomize("aA0", 10);
      const store = mockStore({
        user: {
          isAuthenticated: true
        },
        eosAccount: {
          account: {
            accountName: undefined
          }
        },
        profile: {
          profile: {}
        }
      });

      apiClient.post.mockReset();
      apiClient.post.mockReturnValue({ eosAccount: accountName });

      const expectedActions = [
        tryCreateEOSAccount(),
        unsetNotification(),
        succeedCreateEOSAccount(),
        setEOSAccountName(accountName),
        expect.objectContaining(
          setEOSOwnerKeys(
            //$FlowFixMe
            expect.objectContaining({
              privateKey: expect.anything(),
              publicKey: expect.anything()
            })
          )
        ),
        expect.objectContaining(
          setEOSActiveKeys(
            //$FlowFixMe
            expect.objectContaining({
              privateKey: expect.anything(),
              publicKey: expect.anything()
            })
          )
        ),
        setNotification(
          `EOS Account "${
            accountName
          }" created. Your keys should be copied and stored offline for security.`,
          "success"
        ),
        push("/accounts")
      ];

      await store.dispatch(createEOSAccount(accountName, true));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
