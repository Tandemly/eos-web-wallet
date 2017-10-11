import * as React from "react";

const Transaction = ({
  key,
  date,
  image,
  name,
  amount,
  kind
}) => (
  <li className="level box is-mobile" key={key}>
    <div className="level-left">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">{date.month}</p>
          <p className="title">{date.day}</p>
        </div>
      </div>
      <div className="level-item">
        <img className="image" src="/images/male_2.jpg" />
      </div>
      <div className="level-item">
        <p className="subtitle is-6"><a>{name}</a></p>
      </div>
    </div>
    <div className="level-right">
      <div className="level-item">
        <p className="subtitle is-6">
          {date.amount}
          <span className={`icon-transfer${kind === "deposit" ? "_to" : "_from"} u-ml1`}></span>
        </p>
      </div>
    </div>
  </li>
);

export default Transaction;