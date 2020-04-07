import React from 'react'
import classNames from 'classnames'
import styles from './FooterCreditsRow.module.scss'
import '../../all.sass'

const FooterCreditsRow = () => (
  <div className={classNames('has-background-danger', 'has-text-grey')}>
    <div className={classNames(styles.creditsContainer)}>
      <div className={classNames(styles.creditsInnerContainer)}>
        <div className={classNames(styles.creditsContent)}>
          <p>Designed by</p>
          <a href="https://thebrandmanual.com/" target="_blank" rel="noopener">
            <p className={classNames(styles.brandManual)}>Brand Manual</p>
          </a>
        </div>
        <div className={classNames(styles.creditsContent)}>
          <p>Developed by</p>
          <a href="https://mooncascade.com/" target="_blank" rel="noopener">
            <p className={classNames(styles.mooncascade)}>Mooncascade</p>
          </a>
        </div>
        <div className={classNames(styles.creditsContent)}>
          <p>Domain by</p>
          <a href="https://www.veebimajutus.ee/" target="_blank" rel="noopener">
            <p className={classNames(styles.veebimajutus)}>Veebimajutus</p>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default FooterCreditsRow
