import React from 'react'
import '../../all.sass'
import FooterCopyright from './FooterCopyright/FooterCopyright'
import FooterSocialLinks from './FooterSocialLinks/FooterSocialLinks'
import styles from './FooterSocialRow.module.scss'

const FooterSocialRow = () => (
  <div className={`columns is-flex-touch is-desktop ${styles.row}`}>
    <div className="column is-half-desktop">
      <FooterCopyright />
    </div>
    <div className="column is-half-desktop">
      <FooterSocialLinks />
    </div>
  </div>
)

export default FooterSocialRow
