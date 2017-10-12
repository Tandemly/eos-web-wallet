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

    <h3 className="Loading-header">Loading EOS Wallet App</h3>
  </div>
);

export default Loading;