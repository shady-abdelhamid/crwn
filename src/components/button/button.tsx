import "./button.scss";

import React, { FC, MouseEventHandler, ReactNode } from "react";

const BUTTON_TYPE_CLASSES = {
  google: "button--google",
  inverted: "button--inverted",
};

type ButtonProps = {
  buttonType?: "google" | "inverted";
  children: ReactNode;
  type?: "submit" | "button";
  onClick?: MouseEventHandler;
};

const Button: FC<ButtonProps> = ({ buttonType, children, ...otherProps }) => (
  <button
    className={`button ${buttonType && BUTTON_TYPE_CLASSES[buttonType]}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;