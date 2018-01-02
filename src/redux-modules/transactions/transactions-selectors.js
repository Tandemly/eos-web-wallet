import { createSelector } from "reselect";
import dateFormat from "dateformat";
import { selectEOSAccountName } from "../eos-account/account-selectors";
import { selectProfileForEOSAccountMap } from "../profile/profile-selectors";

const selectTransactionsState = state => state.transactions || {};

const selectRecentTransactionState = createSelector(
  selectTransactionsState,
  state => state.recents || {}
);

const filterAndTransformTransactionForAccount = eosAccountName => (
  transactions,
  profileMap
) =>
  (transactions[eosAccountName] || [])
    // .filter(item => item && item.scope && item.scope.includes(eosAccountName))
    .filter(
      transaction =>
        transaction.messages &&
        transaction.messages[0] &&
        transaction.messages[0].type === "transfer" &&
        transaction.messages[0].data &&
        (transaction.messages[0].data.to === eosAccountName ||
          transaction.messages[0].data.from === eosAccountName)
    )
    .map(transaction => {
      const created = Date.parse(transaction.createdAt);
      const date = {
        month: dateFormat(created, "mmm"),
        day: dateFormat(created, "d")
      };
      let to = transaction.messages[0].data.to;
      let from = transaction.messages[0].data.from;
      const kind = to === eosAccountName ? "deposit" : "withdrawal";
      let image;
      let profile;
      if (kind === "deposit") {
        profile = profileMap[from];
        from = (profile && profile.displayName) || from;
        image = profile && profile.imageUrl;
      } else {
        profile = profileMap[to];
        to = (profile && profile.displayName) || to;
        image = profile && profile.imageUrl;
      }
      const name = kind === "deposit" ? from : to;
      const amount = transaction.messages[0].data.amount;
      const memo = transaction.messages[0].data.memo;
      return {
        profile: profile
          ? `/users/${profile.email}`
          : kind === "deposit" ? `/users/@${from}` : `/users/@${to}`,
        key: transaction.id,
        date,
        name,
        memo,
        amount,
        kind,
        image
      };
    });

export const selectRecentTransactionsByAccount = eosAccountName =>
  createSelector(
    selectRecentTransactionState,
    selectProfileForEOSAccountMap,
    filterAndTransformTransactionForAccount(eosAccountName)
  );

export const selectRecentTransactions = createSelector(
  selectEOSAccountName,
  selectRecentTransactionState,
  selectProfileForEOSAccountMap,
  (eosAccountName, transactions, profileMap) =>
    filterAndTransformTransactionForAccount(eosAccountName)(
      transactions,
      profileMap
    )
);

export const selectRecentTransactionAccounts = createSelector(
  selectEOSAccountName,
  selectRecentTransactionState,
  (eosAccountName, transactions) =>
    transactions[eosAccountName]
      ? transactions[eosAccountName].reduce(
          (users, transaction) =>
            users.concat(
              transaction.scope.filter(
                user => user !== eosAccountName && !users.includes(user)
              )
            ),
          []
        )
      : []
);
