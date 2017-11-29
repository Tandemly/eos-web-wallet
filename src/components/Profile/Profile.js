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
    imageUrl = "/images/user.png",
    location = "Unknown",
    displayName,
    about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    website
  }
}: Props) => (
  <div className={cx("box", css.profile)}>
    <div className="columns is-variable is-2 is-vcentered">
      <div className="column is-narrow">
        <img
          src={imageUrl === "" ? "/images/user.png" : imageUrl}
          className={css.thumbnail}
          alt={displayName || userId}
        />
      </div>
      <div className="column">
        <div>
          <div className={cx("heading is-6", css.heading)}>
            {displayName || userId}
          </div>
          <div className={cx("title", css.title)}>{location}</div>
          {website && (
            <a href={website} target="_blank">
              {website}
            </a>
          )}
        </div>
      </div>
    </div>
    <div>
      <p>{about}</p>
    </div>
  </div>
);

export default Profile;
