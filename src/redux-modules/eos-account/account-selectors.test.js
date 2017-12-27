//@flow
/* global describe, it, expect */
import randomize from "randomatic";
import type { AccountState, KeyPair } from "./types";
import {
  selectEOSAccountName,
  selectEOSActiveKeys,
  selectEOSOwnerKeys
} from "./account-selectors";

describe("EOS Account Selectors", () => {
  const accountName = randomize("*", 10);
  const ownerKeys: KeyPair = {
    publicKey: randomize("aA0", 64),
    privateKey: randomize("aA0", 64)
  };
  const activeKeys: KeyPair = {
    publicKey: randomize("aA0", 64),
    privateKey: randomize("aA0", 64)
  };

  const eosState: AccountState = {
    accountName,
    ownerKeys,
    activeKeys
  };

  const state = {
    eosAccount: eosState
  };

  describe("account name selector", () => {
    it("should return the account name", () => {
      const actual = selectEOSAccountName(state);

      expect(actual).toEqual(accountName);
    });
  });

  describe("owner keys selector", () => {
    it("should return the owner keys", () => {
      const actual = selectEOSOwnerKeys(state);

      expect(actual).toEqual(ownerKeys);
    });
  });

  describe("active keys selector", () => {
    it("should return the active keys", () => {
      const actual = selectEOSActiveKeys(state);

      expect(actual).toEqual(activeKeys);
    });
  });
});
