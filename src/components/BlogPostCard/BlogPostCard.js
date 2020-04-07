import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import Button from "../Button/Button";
import styles from "./BlogPostCard.module.scss";

const BlogPostCard = ({ link, image, title, alt, date, intro }) => (
  <Link className={classnames(styles.card, "hover-effect")} to={link}>
    {image && (
      <div
        className={styles.image}
        style={
          image.publicURL
            ? { backgroundImage: `url('${image.publicURL}')` }
            : {}
        }
      />
    )}
    {!!date && <p className={styles.date}>{date}</p>}
    {!!title && <p className={styles.title}>{title}</p>}
    {!!intro && <p className={styles.content}>{intro}</p>}
    <div className={styles.buttonWrapper}>
      <Button>Read more</Button>
    </div>
  </Link>
);

export default BlogPostCard;
