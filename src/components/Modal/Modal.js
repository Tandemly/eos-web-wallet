import * as React from "react";
import _Modal from "react-modal";
import { withRouter } from "react-router-dom";

const Modal = ({ renderRoute, isOpen, ...props }) => (
  isOpen ? null :
    <_Modal {...props}>
      {renderRoute()}
    </_Modal>
);

export default withRouter(Modal);