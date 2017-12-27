import * as React from "react";
import { Link } from "react-router-dom";
import css from "./styles.module.scss";
import cx from "classnames";
import numeral from "numeral";

const Transaction = ({
  profile,
  key,
  date,
  image = "/images/user.png",
  name,
  memo,
  amount,
  kind
}) => (
  <li className="box" key={key}>
    <div className="columns is-variable is-2">
      <div className="column">
        <div className="columns is-mobile">
          <div className={cx("column is-narrow", css.date_wrapper)}>
            <div className={css.date}>
              <p className={cx("heading", css.heading)}>{date.month}</p>
              <p className={cx("title", css.title)}>{date.day}</p>
            </div>
          </div>
          <div className="column is-narrow">
            <div className="thumb-wrapper">
              {profile ? (
                <Link to={profile}>
                  <img
                    className="user-thumb"
                    src={image}
                    alt="Placeholder avatar thumbnail"
                  />
                </Link>
              ) : (
                <img
                  className="user-thumb"
                  src={image}
                  alt="Placeholder avatar thumbnail"
                />
              )}
            </div>
          </div>
          <div className="column">
            <div className={css["user-info"]}>
              <p className="username">
                {profile ? <Link to={profile}>{name}</Link> : <a>{name}</a>}
              </p>
              <p className="memo">{memo}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-narrow">
        <p className="subtitle is-6">
          {numeral(amount / 10000).format("0.0000")}
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
