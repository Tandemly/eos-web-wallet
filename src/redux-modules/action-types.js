import type { BalanceActions } from "./balance/actions";
import type { ConnectEosAccountActions } from "./connect-eos-accounts/actions";

export type Action = BalanceActions | ConnectEosAccountActions | LoginActions;
