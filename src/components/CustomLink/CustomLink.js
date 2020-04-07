import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import styles from "./CustomLink.module.scss";
import checkIfInternalLink from "../checkIfInternalLink";

const CustomLink = ({ children, to, light, className, reversed }) => {
  const isInternal = checkIfInternalLink(to);

  const linkContent = (
    <>
      {reversed && <span className={styles.arrow}>&lt;</span>}
      <span className={styles.text}>{children}</span>
      {!reversed && <span className={styles.arrow}>&gt;</span>}
    </>
  );

  const linkClasses = classnames(
    styles.customLink,
    {
      [styles["light"]]: light,
      [styles.reversed]: reversed,
    },
    className
  );

  return isInternal ? (
    <Link className={linkClasses} to={to}>
      {linkContent}
    </Link>
  ) : (
    <a className={linkClasses} href={to}>
      {linkContent}
    </a>
  );
};

export default CustomLink;
