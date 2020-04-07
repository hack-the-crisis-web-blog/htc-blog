import React from 'react'
import facebookWhiteIcon from '../../img/social/facebookWhite.svg'
import facebookBlackIcon from '../../img/social/facebookBlack.svg'
import twitterWhiteIcon from '../../img/social/twitterWhite.svg'
import twitterBlackIcon from '../../img/social/twitterBlack.svg'
import garage48BlackIcon from '../../img/social/garage48Black.svg'
import slackBlackIcon from '../../img/social/slackBlack.svg'
import guaanaBlackIcon from '../../img/social/guaanaBlack.svg'
import slackWhiteIcon from '../../img/social/slackWhite.svg'
import guaanaWhiteIcon from '../../img/social/guaanaWhite.svg'
import redditWhiteIcon from '../../img/social/redditWhite.svg'
import redditBlackIcon from '../../img/social/redditBlack.svg'

import styles from './SocialIconLink.module.scss'

const getFacebookIcon = color => {
  switch (color) {
    case 'black':
      return facebookBlackIcon
    case 'white':
    default:
      return facebookWhiteIcon
  }
}

const getTwitterIcon = color => {
  switch (color) {
    case 'black':
      return twitterBlackIcon
    case 'white':
    default:
      return twitterWhiteIcon
  }
}

const getGarage48Icon = color => {
  switch (color) {
    case 'black':
      return garage48BlackIcon
    case 'white':
    default:
      return garage48BlackIcon
  }
}

const getSlackIcon = color => {
  switch (color) {
    case 'black':
      return slackBlackIcon
    case 'white':
    default:
      return slackWhiteIcon
  }
}

const getGuaanaIcon = color => {
  switch (color) {
    case 'black':
      return guaanaBlackIcon
    case 'white':
    default:
      return guaanaWhiteIcon
  }
}

const getRedditIcon = color => {
  switch (color) {
    case 'black':
      return redditBlackIcon
    case 'white':
    default:
      return redditWhiteIcon
  }
}

const getImgPropsForIconType = (type, color) => {
  switch (type) {
    case 'slack':
      return {
        alt: 'slack',
        src: getSlackIcon(color),
        width: '46px',
        height: '11px',
      }
    case 'reddit':
      return {
        alt: 'reddit',
        src: getRedditIcon(color),
        width: '20px',
        height: '20px',
      }
    case 'guaana':
      return {
        alt: 'guaana',
        src: getGuaanaIcon(color),
        width: '49px',
        height: '11px',
      }
    case 'garage48':
      return {
        alt: 'garage48',
        src: getGarage48Icon(color),
        width: '60px',
        height: '18px',
      }
    case 'facebook':
      return {
        alt: 'facebook',
        src: getFacebookIcon(color),
        width: '20px',
        height: '20px',
      }
    case 'twitter':
      return {
        alt: 'twitter',
        src: getTwitterIcon(color),
        width: '20px',
        height: '20px',
      }
    default:
      return {}
  }
}

const SocialIconLink = ({ type, href, color = 'white' }) => {
  const { alt, src, width, height } = getImgPropsForIconType(type, color)
  return (
    <a className={styles.noDecoration} href={href} target="_blank">
      <img alt={alt} src={src} style={{ width, height, display: 'block' }} />
    </a>
  )
}

export default SocialIconLink
