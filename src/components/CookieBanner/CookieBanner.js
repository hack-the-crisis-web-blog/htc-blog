import React, { useState } from 'react'
import Section from '../Section/Section'
import Button from '../Button/Button'
import styles from './CookieBanner.module.scss'
import { Link } from 'gatsby'

export const COOKIE_NAME = 'the-global-hack-google-analytics'

const CookieBanner = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false)

  const acceptCookies = () => {
    const date = new Date()
    date.setTime(date.getTime() + 10 * 24 * 60 * 60 * 1000)
    const expires = '; expires=' + date.toUTCString()

    document.cookie = COOKIE_NAME + '=' + 'true' + expires + '; path=/'
    setCookiesAccepted(true)
  }

  return cookiesAccepted ? null : (
    <div className={styles.cookie}>
      <Section>
        <div className="columns">
          <div className="column  is-7">
            <div className={styles.row}>
              <div className={styles.bubble} />
              <p className="has-text-white">
                This site uses cookies. We care about your data, and the cookies
                are used only to improve your experience.{' '}
                <Link to="/terms-and-conditions">
                  Privacy settings & policy
                </Link>
              </p>
            </div>
          </div>
          <div className="column">
            <Button
              onClick={acceptCookies}
              className={styles.btn}
              btnStyle="outline"
            >
              Accept Cookies
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default CookieBanner
