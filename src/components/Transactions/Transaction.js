import * as React from "react";
import css from "./styles.module.scss";
import cx from "classnames";

const Transaction = ({ key, date, image, name, memo, amount, kind }) => (
  <li className="box is-mobile" key={key}>
    <div className="columns is-variable is-2 is-mobile">
      <div className="column is-narrow">
        <div className={css.date}>
          <p className={cx("heading", css.heading)}>{date.month}</p>
          <p className={cx("title", css.title)}>{date.day}</p>
        </div>
      </div>
      <div className="column is-narrow">
        <div className="thumb-wrapper">
          <img
            className="user-thumb"
            src="/images/male_2.jpg"
            alt="Placeholder avatar thumbnail"
          />
        </div>
      </div>
      <div className="column">
        <div>
          <p className="username">
            <a>{name}</a>
          </p>
          <p className="memo">
            {memo}
          </p>
        </div>
      </div>
      <div className="column is-narrow">
        <p className="subtitle is-6">
          {amount}
          <span
            className={cx(
              kind === "withdrawal"
                ? `icon-transfer_to ${css.iconTransferTo}`
                : `icon-transfer_from ${css.iconTransferFrom}`,
              "u-ml1"
            )}
          />
        </p>
      </div>
    </div>
  </li>
);

export default Transaction;
