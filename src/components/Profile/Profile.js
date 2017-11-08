//@flow
import * as React from "react";
import cx from "classnames";
import css from "./styles.module.scss";

type Props = {
  imageUrl?: string,
  currentLocation?: string,
  displayName?: string,
  status?: string
};

const Profile = ({
  imageUrl = "/images/user.png",
  currentLocation = "Unknown",
  displayName = "Display Name",
  status = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  websiteUrl = "http://twitter.com/"
}: Props) => (
  <div className={cx("box", css.profile)}>
    <div className="level">
      <div className="level-left">
        <div className="level-item">
          <img src={imageUrl} className={css.thumbnail} alt={displayName} />
        </div>
        <div className="level-item">
          <div>
            <div className={cx("heading is-6", css.heading)}>{displayName}</div>
            <div className={cx("title", css.title)}>{currentLocation}</div>
            <a href={websiteUrl}>{websiteUrl}</a>
          </div>
        </div>
      </div>
    </div>
    <div className="u-mt2">
      <p>{status}</p>
    </div>
  </div>
);

export default Profile;
