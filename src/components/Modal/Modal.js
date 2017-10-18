import * as React from "react";
import _Modal from "react-modal";
import { withRouter } from "react-router-dom";

const Modal = ({ handleClose, isOpen, renderRoute, ...props }) => (
  !isOpen ? null :
  <_Modal isOpen {...props}>
    {renderRoute({ handleClose })}
  </_Modal>
);

export default withRouter(Modal);