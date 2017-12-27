//@flow
/* global describe, it, expect */
import reducer, {
  initialState as reducerInitialState
} from "./balance-reducer";
import type { BalanceState } from "./types";
import {
  tryGetBalance,
  succeedGetBalance,
  failGetBalance
} from "./balance-actions";
import randomize from "randomatic";

describe("EOS Balance Reducer", () => {
  it("should return the initial state if no state is provided", () => {
    const actualState = reducer(undefined, { type: "JUNK_ACTION" }); //$FlowFixMe

    expect(actualState).toEqual(reducerInitialState);
  });

  it("should set loading to true when the try get balance action is received", () => {
    const initialState: BalanceState = {
      loading: false,
      balances: []
    };

    const expectedState: BalanceState = {
      ...initialState,
      loading: true
    };

    const actualState: BalanceState = reducer(initialState, tryGetBalance());

    expect(actualState).toEqual(expectedState);
  });

  it("should set loading to false when the fail get balance action is received", () => {
    const initialState: BalanceState = {
      loading: true,
      balances: []
    };

    const expectedState: BalanceState = {
      ...initialState,
      loading: false
    };

    const actualState: BalanceState = reducer(initialState, failGetBalance());

    expect(actualState).toEqual(expectedState);
  });

  it("should update state appropriately when new balances are received", () => {
    const account = randomize("aA0", 10);
    const balance = {
      account,
      total: Math.random() * 100
    };
    const initialState: BalanceState = {
      loading: true,
      balances: [balance]
    };

    const newBalance = {
      account,
      total: Math.random() * 100,
      staked: Math.random() * 100,
      unstaked: Math.random() * 100
    };

    const difference = newBalance.total - balance.total;

    const expectedState: BalanceState = {
      ...initialState,
      balances: [
        {
          ...newBalance,
          difference
        }
      ],
      loading: false
    };

    const actualState: BalanceState = reducer(
      initialState,
      succeedGetBalance(newBalance)
    );

    expect(actualState).toEqual(expectedState);
  });

  it("should add a balance with difference equal to total if a previous balance did not exist for an account", () => {
    const account = randomize("aA0", 10);
    const balance = {
      account,
      total: Math.random() * 100
    };

    const initialState: BalanceState = {
      loading: true,
      balances: []
    };

    const expectedState: BalanceState = {
      ...initialState,
      balances: [
        {
          ...balance,
          difference: balance.total
        }
      ],
      loading: false
    };

    const actualState: BalanceState = reducer(
      initialState,
      succeedGetBalance(balance)
    );

    expect(actualState).toEqual(expectedState);
  });

  it("should add return the same state, with loading false if the balance has not changed", () => {
    const account = randomize("aA0", 10);
    const balance = {
      account,
      total: Math.random() * 100,
      difference: Math.random() * 100
    };

    const initialState: BalanceState = {
      loading: true,
      balances: [balance]
    };

    const expectedState: BalanceState = {
      ...initialState,
      loading: false
    };

    const actualState: BalanceState = reducer(
      initialState,
      succeedGetBalance(balance)
    );

    expect(actualState).toEqual(expectedState);
  });
});
