import React from "react";
import "./button.scss";

export interface Props {
  text?: string;
  url?: string;
  action?: () => void;
  disabled?: boolean;
  size?: string;
  targetBlank?: boolean;
  rightArrow?: boolean;
  leftArrow?: boolean;
  primary?: boolean;
  secondary?: boolean;
  linkButton?: boolean;
  fab?: boolean;
}

let className = "";

const getParentClass = (props: Props) => {
  const { disabled } = props;
  const disableClass = disabled ? `${className}__disable` : "";
  return `${className} ${disableClass}`;
};

const getButtonClass = (props: Props) => {
  const { primary, secondary, linkButton, fab } = props;
  if (primary) className = "Button";
  if (secondary) className = "SecondaryButton";
  if (linkButton) className = "LinkButton";
  if (fab) className = "Fab";
  return `${className}__button button-primary-l `;
};

export const Button = (props: Props) => {
  const { action, text, url, targetBlank, rightArrow, leftArrow } = props;
  const buttonEl = (
    <button onClick={action} className={getButtonClass(props)} type="button">
      {text}
    </button>
  );
  const hrefEl = (
    <div>
      <a href={url} target={targetBlank ? "_blank" : "_self"} rel="noreferrer">
        <button
          onClick={action}
          className={getButtonClass(props)}
          type="button"
        >
          {leftArrow && <img src="" />}
          {text}
          {rightArrow && <img src="" />}
        </button>
      </a>
    </div>
  );
  return (
    <div className={getParentClass(props)}>{!url ? buttonEl : hrefEl}</div>
  );
};

Button.defaultProps = {
  primary: true,
};
