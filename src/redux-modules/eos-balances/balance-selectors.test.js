//@flow
/* global describe, it, expect */
import randomize from "randomatic";
import type { EOSAccountState, KeyPair } from "./types";
import {
  selectEOSAccountBalance,
  selectEOSBalanceForAccount
} from "../eos-balances/balance-selectors";

describe("EOS Balance Selectors", () => {
  const account = randomize("*", 10);
  const otherAccount = randomize("*", 10);
  const email = randomize("*", 10);
  const total = Math.random() * 100;
  const difference = Math.random() * 100;
  const balance = {
    account,
    total,
    difference
  };
  const otherBalance = {
    account: otherAccount,
    total,
    difference
  };

  const state = {
    eosAccount: {
      accountName: account
    },
    profile: {
      profiles: [{ email, eosAccount: account }]
    },
    eosBalances: {
      loading: false,
      balances: [balance, otherBalance]
    }
  };


  describe("current account balance selector", () => {
    it("should return the correct balance", () => {
      const actual = selectEOSAccountBalance(state);

      expect(actual).toEqual(balance);
    });
  });

  describe("account balance selector", () => {
    it("should return the correct balance", () => {
      const actual = selectEOSBalanceForAccount(otherAccount)(state);

      expect(actual).toEqual(otherBalance);
    });
  });
});
