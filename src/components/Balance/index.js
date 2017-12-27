import Balance from "./Balance";
import {
  withCurrentEOSBalance,
  withEOSBalanceForAccount
} from "../../containers/balance";

export const UserEOSBalance = withEOSBalanceForAccount(Balance);

export const CurrentEOSBalance = withCurrentEOSBalance(Balance);

export default Balance;
