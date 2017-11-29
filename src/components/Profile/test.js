import * as React from "react";
import renderer from "react-test-renderer";
import { StaticRouter } from "react-router";
import Profile from "./";

describe("<Profile />", () => {
  it("renders without crashing", () => {
    const staticContext = {};
    const profile = {
      imageUrl: "src",
      location: "Friday Harbor, WA",
      displayName: "Rick Sanchez",
      about: "active",
      website: "http://mywebsite.com/me"
    };

    const tree = renderer
      .create(
        <StaticRouter location="/" context={staticContext}>
          <Profile userProfile={profile} />
        </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
