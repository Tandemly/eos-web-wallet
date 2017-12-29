//@flow
/* global describe, it, expect */
import randomize from "randomatic";
import type { AccountState, KeyPair } from "../eos-account/types";
import { selectRecentTransactionAccounts } from "./transactions-selectors";

describe("EOS Transaction Selectors", () => {
  const accountName = randomize("aA0", 10);
  const ownerKeys: KeyPair = {
    publicKey: randomize("aA0", 64),
    privateKey: randomize("aA0", 64)
  };
  const activeKeys: KeyPair = {
    publicKey: randomize("aA0", 64),
    privateKey: randomize("aA0", 64)
  };
  const total = Math.random() * 100;
  const difference = Math.random() * 100;

  const eosState: AccountState = {
    accountName,
    ownerKeys,
    activeKeys
  };
  const duplicateName = randomize("aA0", 10);
  const testName = randomize("aA0", 10);
  const otherTestName = randomize("aA0", 10);
  const state = {
    eosAccount: eosState,
    transactions: {
      recents: {
        [accountName]: [
          {
            scope: [accountName, duplicateName],
            messages: [
              {
                type: "transfer",
                data: {
                  to: accountName,
                  from: duplicateName
                }
              }
            ]
          },
          {
            scope: [duplicateName, accountName],
            messages: [
              {
                type: "transfer",
                data: {
                  to: duplicateName,
                  from: accountName
                }
              }
            ]
          },
          {
            scope: [testName, accountName],
            messages: [
              {
                type: "transfer",
                data: {
                  to: testName,
                  from: accountName
                }
              }
            ]
          },
          {
            scope: [accountName, otherTestName],
            messages: [
              {
                type: "transfer",
                data: {
                  to: accountName,
                  from: otherTestName
                }
              }
            ]
          }
        ]
      }
    }
  };

  describe("recent transaction accounts selector", () => {
    it("should return correct names", () => {
      const actual = selectRecentTransactionAccounts(state);

      expect(actual).toEqual([duplicateName, testName, otherTestName]);
    });
  });
});
