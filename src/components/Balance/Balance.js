import * as React from "react";
import numeral from "numeral";
import css from "./styles.module.scss";
import cx from "classnames";
import ScaleText from "react-scale-text";

const Balance = ({ total, difference }) => (
  <div className="-is-logged-in">
    <div className={cx("financials u-p3", css.financials)}>
      <ScaleText>
        <p className={cx(css.balance)}>{numeral(total).format("0.00a")}</p>
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

export default Balance;
