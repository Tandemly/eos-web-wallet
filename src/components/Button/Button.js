// @flow
import * as React from "react";
import cx from "classnames";

type Props = {
  /** the text label on the button */
  children?: React.Node,
  /** an alternate way to pass a label to display on the button (overrides `children`) */
  text?: string,
  /** classnames to add to the rendered component */
  className?: string,
  /** onClick handler method **/
  onClick?: () => mixed,
  /** style object from react-styleable */
  css?: { [key: string]: any }
};

/**
 * A basic button component.
 */
const Button = ({ children, text, className, onClick }: Props) => (
  <button className={cx("button", className)} onClick={onClick}>
    {(text || children) && <span>{text || children}</span>}
  </button>
);

export default Button;
