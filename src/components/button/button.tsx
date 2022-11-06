
import React, { FC, MouseEventHandler, ReactNode } from "react";
import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

/** returns a button accoring map value. baseButton retuned by default */
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

type ButtonProps = {
  buttonType?: string;
  children: ReactNode;
  type?: "submit" | "button";
  onClick?: MouseEventHandler;
};

const Button: FC<ButtonProps> = ({ buttonType, children, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
