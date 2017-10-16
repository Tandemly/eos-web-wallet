import * as React from "react";
import "./Loading.scss";

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
  minHeight: "100vh"
};
const Loading = () => (
  <div className="Loading">
    <div className="Loading-div-img u-mb4">
      <img alt="" className="Loading-img" src="/images/logo.svg" />
    </div>
    <span className="icon-loader" />
  </div>
);

export default Loading;