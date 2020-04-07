import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import NavDropdown from '../NavDropdown/NavDropdown'
import NavLink from '../NavLink/NavLink'

const NavTracklist = ({ data, buttonClassName, subnavButtonClassname }) => {
  if (!data || data.length === 0) {
    return null
  }
  return (
    <NavDropdown buttonClassName={buttonClassName} buttonText="Tracklist">
      {data.map(
        ({
          node: {
            frontmatter: { title },
          },
        }) => {
          const path = title
            .toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-')
          return (
            <NavLink to={path} className={subnavButtonClassname} key={path}>
              {title}
            </NavLink>
          )
        }
      )}
    </NavDropdown>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query NavTracklist {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "tracklists" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <NavTracklist data={data.allMarkdownRemark.edges} {...props} />
    )}
  />
)
