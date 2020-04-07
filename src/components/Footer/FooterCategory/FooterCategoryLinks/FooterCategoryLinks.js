import React from "react";
import { Link } from "gatsby";
import styles from "./FooterCategoryLinks.module.scss";

const FooterCategoryLinks = ({ links }) =>
  links ? (
    <ul>
      {links.map(({ title, url }, index) => (
        <Link key={index} to={url} className={styles.link} title={title}>
          {title}
        </Link>
      ))}
    </ul>
  ) : null;

export default FooterCategoryLinks;
