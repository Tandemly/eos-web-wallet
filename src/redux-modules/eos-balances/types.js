
export type AccountBalance = {
  account: string,
  total: number,
  difference?: number,
  staked?: number,
  unstaked?: number
};

export type BalanceState = AccountBalance & {
  loading: boolean,
  balances: Array<AccountBalance>
};