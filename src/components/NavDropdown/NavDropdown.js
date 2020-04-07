import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./NavDropdown.module.scss";

class NavDropdown extends React.Component {
  state = { open: false };

  toggleOpen = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { buttonClassName, buttonText, children } = this.props;
    const { open } = this.state;

    return (
      <div
        className={classnames(
          styles.button,
          buttonClassName,
          {
            [styles.buttonClosed]: !open,
          },
          { "cancel-effect": open }
        )}
        onClick={this.toggleOpen}
      >
        <div
          className={classnames(styles.background, {
            [styles.closed]: !open,
          })}
        ></div>
        <span>
          <span>{buttonText}</span>
          <span
            className={classnames(styles.indicator, {
              [styles.closed]: open,
            })}
          >
            {" "}
            ▾
          </span>
          <span
            className={classnames(styles.indicator, styles.thickDash, {
              [styles.closed]: !open,
            })}
          >
            {" "}
            -
          </span>
        </span>
        <div
          className={classnames(styles.dropdown, { [styles.closed]: !open })}
        >
          {children}
        </div>
      </div>
    );
  }
}

NavDropdown.propTypes = {
  buttonClassName: PropTypes.string,
  buttonText: PropTypes.string,
  children: PropTypes.node,
};

export default NavDropdown;
