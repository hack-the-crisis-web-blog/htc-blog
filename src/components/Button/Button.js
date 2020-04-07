import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import CircleLoader from "../CircleLoader/CircleLoader";
import styles from "./Button.module.scss";
import checkIfInternalLink from "../checkIfInternalLink";

const Button = ({
  btnStyle,
  isLoading,
  children,
  href,
  className,
  block,
  size,
  external,
  align,
  ...buttonProps
}) => {
  const isExternal = external || !checkIfInternalLink(href);
  const Element = isExternal ? "a" : href ? Link : "button";
  const to = isExternal ? { href } : href ? { to: href } : {};
  const loaderColor = btnStyle === "primary" ? "light" : undefined;

  const classList = classNames(styles.button, "hover-effect", {
    [styles.disabled]: buttonProps.disabled,
    [styles.loading]: isLoading,
    [styles.block]: block,
    [styles[btnStyle]]: btnStyle,
    [styles[size]]: size,
    [styles[align]]: align,
    [className]: className,
  });

  return (
    <Element {...buttonProps} {...to} className={classList}>
      {isLoading && (
        <div className="button__loader">
          <CircleLoader size="small" color={loaderColor} />
        </div>
      )}

      <div className="button__text">{children}</div>
    </Element>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  btnStyle: PropTypes.oneOf(["primary", "outline"]),
  size: PropTypes.oneOf(["small", "large"]),
  block: PropTypes.bool,
  align: PropTypes.oneOf(["left", "center", "right"]),
  external: PropTypes.bool,
};

Button.defaultProps = {
  btnStyle: "primary",
  block: false,
};

export default Button;
