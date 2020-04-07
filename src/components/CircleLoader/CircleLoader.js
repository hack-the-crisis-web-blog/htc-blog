import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './CircleLoader.module.scss'

export function CircleLoader({ size, color }) {
  const classList = classNames(styles.loader, {
    [styles[size]]: size,
    [styles[color]]: color,
  })

  return (
    <div className={classList}>
      {[...Array(10).keys()].map(index => (
        <div key={index} className={styles.dot}></div>
      ))}
    </div>
  )
}

CircleLoader.propTypes = {
  size: PropTypes.oneOf(['small']),
  color: PropTypes.oneOf(['light']),
}

export default CircleLoader
