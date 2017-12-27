/* global describe, it, expect */
import configureMockStore from "redux-mock-store";
import middlewares from "../middleware";
import { unsetNotification } from "../redux-modules/notifications/notifications-actions";
import {
  failGetProfile,
  failUpdateProfile,
  updateProfiles,
  succeedGetProfile,
  succeedUpdateProfile,
  tryGetProfile,
  tryUpdateProfile
} from "../redux-modules/profile/profile-actions";
import randomizer from "randomatic";
import {
  getProfile,
  updateProfile,
  updateProfileWithEOSAccountIfNeeded
} from "./profile";

const mockStore = configureMockStore(middlewares);

describe("profile thunks", () => {
  describe("getProfile", () => {
    it("dispatches the appropriate actions if the call is successful", async () => {
      const store = mockStore({
        user: {
          isAuthenticated: true
        },
        profile: {
          profiles: []
        }
      });

      const email = "test@eafe.com";
      const profile = {
        email
      };

      fetch.resetMocks();
      fetch.mockResponseOnce(JSON.stringify(profile), {
        status: 200,
        headers: {
          "content-type": "application/json"
        }
      });

      const expectedActions = [
        tryGetProfile(),
        unsetNotification(),
        succeedGetProfile(),
        updateProfiles([profile])
      ];

      await store.dispatch(getProfile());

      expect(store.getActions()).toEqual(expectedActions);
    });

    it("dispatches the appropriate actions if the call fails", async () => {
      const store = mockStore({
        user: {
          isAuthenticated: true
        },
        profile: {
          profiles: []
        }
      });

      const message = `Something bad happened ${randomizer("aA0", 10)}`;
      const error = { message };

      fetch.resetMocks();
      fetch.mockResponseOnce(JSON.stringify(error), {
        status: 400,
        headers: {
          "content-type": "application/json"
        }
      });

      const expectedActions = [tryGetProfile(), failGetProfile(error)];

      await store.dispatch(getProfile());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("updateProfile", () => {
    it("dispatches the appropriate actions if the call is successful", async () => {
      const displayName = randomizer("aA0", 15);
      const store = mockStore({
        user: {
          isAuthenticated: true
        },
        profile: {
          profiles: []
        }
      });

      const email = "test@eafe.com";

      const profile = {
        email,
        displayName
      };

      fetch.resetMocks();
      fetch.mockResponseOnce(JSON.stringify(profile), {
        status: 200,
        headers: {
          "content-type": "application/json"
        }
      });

      const expectedActions = [
        tryUpdateProfile(),
        unsetNotification(),
        succeedUpdateProfile(),
        updateProfiles([profile])
      ];

      await store.dispatch(updateProfile({ ...profile }));

      expect(store.getActions()).toEqual(expectedActions);
    });

    it("dispatches the appropriate actions if the call fails", async () => {
      const store = mockStore({
        user: {
          isAuthenticated: true
        },
        profile: {
          profiles: []
        }
      });

      const message = `Something bad happened ${randomizer("aA0", 10)}`;
      const error = { message };

      fetch.resetMocks();
      fetch.mockResponseOnce(JSON.stringify(error), {
        status: 400,
        headers: {
          "content-type": "application/json"
        }
      });

      const expectedActions = [tryUpdateProfile(), failUpdateProfile(error)];

      await store.dispatch(updateProfile({}));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("updateProfileWithEOSAccountIfNeeded", () => {
    it("if profile does not have eos account that matches local eos account, the profile should be updated", async () => {
      const accountName = randomizer("aA0", 10);
      const email = randomizer("aA0", 10);
      const store = mockStore({
        user: {
          email,
          isAuthenticated: true
        },
        eosAccount: {
          accountName
        },
        profile: {
          profiles: []
        }
      });

      const profile = {
        email
      };

      fetch.resetMocks();
      fetch.mockResponseOnce(JSON.stringify(profile), {
        status: 200,
        headers: {
          "content-type": "application/json"
        }
      });

      fetch.mockResponseOnce(
        JSON.stringify({ ...profile, eos_account: accountName }),
        {
          status: 200,
          headers: {
            "content-type": "application/json"
          }
        }
      );

      const expectedActions = [
        tryGetProfile(),
        unsetNotification(),
        succeedGetProfile(),
        updateProfiles([profile]),
        tryUpdateProfile(),
        unsetNotification(),
        succeedUpdateProfile(),
        updateProfiles([
          {
            ...profile,
            eosAccount: accountName
          }
        ])
      ];

      await store.dispatch(updateProfileWithEOSAccountIfNeeded());

      expect(store.getActions()).toEqual(expectedActions);
    });

    it("if profile has eos account that matches local eos account, no additional actions should happen", async () => {
      const accountName = randomizer("aA0", 10);
      const email = randomizer("aA0", 10);

      const store = mockStore({
        user: {
          email,
          isAuthenticated: true
        },
        eosAccount: {
          accountName
        },
        profile: {
          profiles: [
            {
              email,
              eosAccount: accountName
            }
          ]
        }
      });

      const profile = {
        email,
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
        tryGetProfile(),
        unsetNotification(),
        succeedGetProfile(),
        updateProfiles([profile])
      ];

      await store.dispatch(updateProfileWithEOSAccountIfNeeded());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
