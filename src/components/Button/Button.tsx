import React from "react";
import "./button.scss";

export interface Props {
  text?: string;
  url?: string;
  className: string;
  action?: () => void;
  isLoading?: boolean;
  size?: string;
  isDark?: boolean;
  targetBlank?: boolean;
}

const getParentClass = (props: Props) => {
  const { className, isLoading, isDark } = props;
  const disableClass = isLoading ? `${className}__disable` : "";
  const darkClass = isDark ? `${className}​​​​​​​​Dark` : `${className}Light`;
  return `${className} ${darkClass} ${disableClass}`;
};

const getButtonClass = (props: Props) => {
  const { className, size } = props;
  let buttonSize = "";
  let sizeClass = "";
  switch (size) {
    case "medium":
      sizeClass = "button-primary-m ";
      buttonSize = `${className}__medium `;
      break;
    case "small":
      sizeClass = "button-primary-s ";
      buttonSize = `${className}__small `;
      break;
    default:
      sizeClass = "button-primary-l";
  }
  return `${className}__button ${sizeClass} ${buttonSize}`;
};

export const Button = (props: Props) => {
  const { action, text, url, targetBlank } = props;
  const buttonEl = (
    <button onClick={action} className={getButtonClass(props)} type="button">
      {text}
    </button>
  );
  const hrefEl = (
    <a href={url} target={targetBlank ? "_blank" : "_self"} rel="noreferrer">
      <button onClick={action} className={getButtonClass(props)} type="button">
        {text}
      </button>
    </a>
  );
  return (
    <div className={getParentClass(props)}>{!url ? buttonEl : hrefEl}</div>
  );
};
