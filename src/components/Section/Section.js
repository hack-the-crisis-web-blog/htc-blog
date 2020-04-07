import React from 'react'

const Section = ({ children }) => (
  <div className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">{children}</div>
      </div>
    </div>
  </div>
)

export default Section
