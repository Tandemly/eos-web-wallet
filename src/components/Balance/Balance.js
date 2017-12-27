import * as React from "react";
import numeral from "numeral";
import css from "./styles.module.scss";
import cx from "classnames";
import ScaleText from "react-scale-text";

const Balance = ({ total, difference }) => {
  let totalBalance = numeral(total).format("0.00a");
  let balanceSuffix;
  if (totalBalance.slice(-1).match(/[a-zA-Z]/)) {
    balanceSuffix = totalBalance.slice(-1);
    totalBalance = totalBalance.slice(0, totalBalance.length - 1);
  }

  return (
    <div className="-is-logged-in">
      <div className={cx("financials", css.financials)}>
        <ScaleText widthOnly>
          <p className={cx(css.balance)}>
            {totalBalance}
            {balanceSuffix && (
              <span className={css.balance_suffix}>{balanceSuffix}</span>
            )}
          </p>
        </ScaleText>
        <p className={cx("full_balance is-6", css.full_balance)}>
          {numeral(total).format("0,0.0000")}
        </p>
        {!!difference && (
          <div
            className={cx("tag change", css.tag, {
              [css.minus]: difference < 0
            })}
          >
            {difference > 0 && "+"}
            {difference.toFixed(4)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Balance;
