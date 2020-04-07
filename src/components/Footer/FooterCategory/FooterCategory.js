import React from 'react'
import FooterCategoryTitle from './FooterCategoryTitle/FooterCategoryTitle'
import FooterCategoryLinks from './FooterCategoryLinks/FooterCategoryLinks'
import styles from './FooterCategory.module.scss'

const FooterCategory = ({ title, linkColumns }) => (
  <div className={styles.menu}>
    <div className={styles.menuColumn}>
      <FooterCategoryTitle title={title} />
      <FooterCategoryLinks links={linkColumns[0]} />
    </div>
    {linkColumns.length > 1 &&
      linkColumns.map((column, index) =>
        index === 0 ? null : (
          <div className={styles.menuColumn} key={index}>
            <FooterCategoryTitle title="&nbsp;" />
            <FooterCategoryLinks links={column} />
          </div>
        )
      )}
  </div>
)

export default FooterCategory
