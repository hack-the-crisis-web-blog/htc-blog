import React from 'react'
import styles from './ContactInfo.module.scss'

const ContactInfo = () => (
  <div className={styles.contact}>
    <a className={styles.link} href="mailto:hello@theglobalhack.com">
      hello@theglobalhack.com
    </a>
  </div>
)

export default ContactInfo
