import React from 'react'
import classNames from 'classnames'
import FooterMenuRow from './FooterMenuRow/FooterMenuRow'
import FooterSocialRow from './FooterSocialRow/FooterSocialRow'
import styles from './Footer.module.scss'
import FooterCreditsRow from './FooterCreditsRow/FooterCreditsRow'

class Footer extends React.Component {
  render() {
    return (
      <footer className={classNames('footer', styles.footerWrapper)}>
        <div className={`${styles.footerInfoContainer}`}>
          <FooterMenuRow />
          <FooterSocialRow />
        </div>
        <FooterCreditsRow />
      </footer>
    )
  }
}

export default Footer
