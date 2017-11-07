import * as React from "react";
import renderer from "react-test-renderer";
import { StaticRouter } from "react-router";
import Profile from "./";

describe("<Profile />", () => {
  it("renders without crashing", () => {
    const staticContext = {};
    const profile = {
      imageUrl: "src",
      currentLocation: "Friday Harbor, WA",
      displayName: "Rick Sanchez",
      status: "active"
    };

    const tree = renderer
      .create(
        <StaticRouter location="/" context={staticContext}>
          <Profile {...profile} />
        </StaticRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
