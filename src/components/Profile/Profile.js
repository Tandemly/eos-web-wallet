//@flow
import * as React from "react";
import cx from "classnames";
import css from "./styles.module.scss";
import type { UserProfile } from "../../types/UserProfile";

type Props = {
  userId: string,
  userProfile: UserProfile
};

const Profile = ({
  userId,
  userProfile: {
    eosAccount,
    imageUrl = "/images/user.png",
    location,
    displayName,
    about,
    website
  }
}: Props) => (
  <div className={cx("columns is-variable is-2 is-mobile", css.profile)}>
    <div className="column is-narrow">
      <img
        src={imageUrl === "" ? "/images/user.png" : imageUrl}
        className={css.thumbnail}
        alt={displayName || userId}
      />
    </div>
    <div className="column u-mt1">
      <div className={cx("heading is-6", css.heading)}>
        {eosAccount ? `@${eosAccount}` : userId}
      </div>
      <div className={cx("title", css.title)}>{location}</div>
      {website && (
        <a href={website} target="_blank">
          {website}
        </a>
      )}
      <p className="is-hidden-mobile">{about}</p>
    </div>
  </div>
);

export default Profile;
