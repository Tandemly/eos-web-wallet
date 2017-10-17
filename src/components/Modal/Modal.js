import * as React from "react";
import _Modal from "react-modal";
import { withRouter } from "react-router-dom";

import "./Modal.scss";

const Modal = ({ renderRoute, isOpen, ...props }) => (
  !isOpen ? null :
  <_Modal isOpen {...props}>
    {renderRoute()}
  </_Modal>
);

export default withRouter(Modal);