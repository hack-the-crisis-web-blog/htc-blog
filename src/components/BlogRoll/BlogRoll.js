import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import BlogPostCard from "../BlogPostCard/BlogPostCard";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionDescription from "../SectionDescription/SectionDescription";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div id="blogRoll" className="has-background-success">
        <Section>
          <div className={"container has-text-primary"}>
            <SectionTitle title="Latest blog posts:" />
            <SectionDescription
              text={
                "The tracks are inspired by the UN sustainability goals that cover the majority of our future challenges. These are the areas most likely to see the biggest challenges."
              }
            />
            <div className={"columns is-multiline is-mobile"}>
              {posts &&
                posts.map(({ node: post }) => {
                  return (
                    <div
                      key={post.id}
                      className="column is-full-mobile is-half-tablet is-one-third-desktop"
                    >
                      <BlogPostCard
                        title={post.frontmatter.title}
                        image={post.frontmatter.featuredimage}
                        alt={post.frontmatter.title}
                        link={post.fields.slug}
                        date={post.frontmatter.date}
                        intro={post.excerpt}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
