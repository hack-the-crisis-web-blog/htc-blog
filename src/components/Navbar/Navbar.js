import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'

import SocialIconLink from '../SocialIconLink/SocialIconLink'
import MainLogo from '../MainLogo/MainLogo'
import NavLink from '../NavLink/NavLink'
import CountDownWidget from '../CountDownWidget/CountdownWidget'
import NavTracklist from '../NavTracklist/NavTracklist'
import styles from './Navbar.module.scss'
import '../all.sass'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    const eventDate = new Date('9 April 2020 10:00 UTC')
    const navLinkClassnames = classnames(
      'navbar-item',
      'hover-effect-small',
      styles.navItem
    )
    const subnavLinkClassnames = classnames(
      navLinkClassnames,
      styles.subnavItem
    )
    return (
      <nav
        className={classnames('navbar', 'is-transparent', styles.nav)}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className={classnames('navbar-brand', styles.brand)}>
            <Link
              to="/"
              className="navbar-item hover-effect-small"
              title="Logo"
            >
              <MainLogo />
            </Link>
            <CountDownWidget
              className={'is-hidden-desktop'}
              eventTime={eventDate.toISOString()}
            />
            <div
              className={classnames(
                'navbar-burger',
                'burger',
                styles.burger,
                this.state.navBarActiveClass
              )}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={classnames(
              'navbar-menu',
              this.state.navBarActiveClass,
              styles.hoverMenu
            )}
          >
            <div
              className={classnames(
                'navbar-start',
                'has-text-right',
                'has-text-centered-desktop',
                styles.spaceRight
              )}
            >
              <NavLink to="/" className={navLinkClassnames}>
                Home
              </NavLink>
              <NavTracklist
                buttonClassName={navLinkClassnames}
                subnavButtonClassname={subnavLinkClassnames}
              />
              <NavLink to="/agenda" className={navLinkClassnames}>
                Agenda
              </NavLink>
              <NavLink to="/about" className={navLinkClassnames}>
                About
              </NavLink>
              <NavLink to="/join" className={navLinkClassnames}>
                Join the team
              </NavLink>
              <NavLink to="/faq" className={navLinkClassnames}>
                FAQ
              </NavLink>
            </div>
            <div
              className={classnames(
                'navbar-end',
                'has-text-right',
                styles.spaceRight
              )}
            >
              <CountDownWidget
                className="is-hidden-touch"
                eventTime={eventDate.toISOString()}
              />
              <div className="navbar-item is-hidden-desktop">
                <SocialIconLink
                  type="slack"
                  href="http://theglobalhack.com/slack"
                />
              </div>
              <div className="navbar-item">
                <SocialIconLink
                  type="facebook"
                  href="https://www.facebook.com/events/164922557944001/"
                />
              </div>
              <div className="navbar-item">
                <SocialIconLink
                  type="twitter"
                  href="https://twitter.com/garage48"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
