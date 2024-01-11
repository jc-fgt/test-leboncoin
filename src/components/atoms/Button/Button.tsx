"use strict";
import React from "react";
import { OrangeButton, GreenButton, GreyButton } from "./Button.styled"


export const BUTTON_VALIDATE = "validate";
export const BUTTON_ADD = "add";
export const BUTTON_DISABLED = "disabled";

interface Props {
  onValidate: (e) => {};
  theme: string | null;
  label: string;
}

const Button = ({ onValidate, theme, label }: Props) => {
  switch (theme) {
    case "validate":
      return (
        <GreenButton data-testid="toggleButton" onClick={(e) => onValidate(e)}>{label}</GreenButton>
      )

    case "add":
      return (
        <OrangeButton data-testid="toggleButton" onClick={(e) => onValidate(e)}>{label}</OrangeButton>
      )

    default:
      return (
        <GreyButton data-testid="toggleButton" disabled="disabled">{label}</GreyButton>
      )
  }
}

export default Button;