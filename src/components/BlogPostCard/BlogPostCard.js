import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import Button from "../Button/Button";
import styles from "./BlogPostCard.module.scss";

const BlogPostCard = ({ link, image, title, alt, date, intro }) => (
  <Link className={classnames(styles.card, "hover-effect")} to={link}>
    {image && (
      <img
        src={image.publicURL}
        alt={`featured image thumbnail for post ${alt}`}
      />
    )}
    {!!date && <p className={styles.date}>{date}</p>}
    {!!title && <p className={styles.title}>{title}</p>}
    {!!intro && <p className={styles.content}>{intro}</p>}
    <Button>Read more</Button>
  </Link>
);

export default BlogPostCard;
