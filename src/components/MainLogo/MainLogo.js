import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import logoWhiteText from "../../img/logoWhiteText.svg";
import logoBlackText from "../../img/logoBlackText.svg";
import styles from "./MainLogo.module.scss";

const getLogo = (color) => {
  switch (color) {
    case "black":
      return logoBlackText;
    case "white":
    default:
      return logoWhiteText;
  }
};
const MainLogo = ({ color = "white" }) => (
  <img
    className={classnames(styles.mainLogo)}
    src={getLogo(color)}
    alt="logo"
  />
);

MainLogo.propTypes = { color: PropTypes.string };

export default MainLogo;
