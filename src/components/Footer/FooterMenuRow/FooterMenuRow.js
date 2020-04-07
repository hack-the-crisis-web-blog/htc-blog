import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import "../../all.sass";
import ContactInfo from "../ContactInfo/ContactInfo";
import FooterCategory from "../FooterCategory/FooterCategory";
import styles from "./FooterMenuRow.module.scss";
import MainLogo from "../../MainLogo/MainLogo";

const transformData = (data) => {
  const titlesArray = data.map((item) => item.node.frontmatter.title);
  const linksWithSlugs = titlesArray.map((title) => ({
    title,
    url: title
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-"),
  }));

  const numberOfItemsInColumn = 4;
  const groupedCategories = [];

  linksWithSlugs.forEach((element, index) => {
    const innerArrayIndex = Math.floor(index / numberOfItemsInColumn);
    if (!groupedCategories[innerArrayIndex]) {
      groupedCategories[innerArrayIndex] = [];
    }

    groupedCategories[innerArrayIndex].push(element);
  });

  return groupedCategories;
};

const FooterMenuRow = ({ data }) => (
  <div className={`columns is-flex-touch is-desktop ${styles.menuRow}`}>
    <div className="column is-one-third-desktop is-one-quarter-widescreen">
      <Link to="/" className={styles.homeLink} title="Global Hack">
        <MainLogo color="black" />
      </Link>
      <ContactInfo />
    </div>
    <div className="column is-one-quarter-widescreen" />
    <div className="column is-one-third-desktop is-one-quarter-widescreen">
      <FooterCategory
        title="Global Hack"
        linkColumns={[
          [
            { title: "Home", url: "/" },
            { title: "About", url: "/about" },
            { title: "Join us", url: "/join" },
            { title: "Agenda", url: "/agenda" },
            { title: "FAQ", url: "/faq" },
          ],
        ]}
      />
      <FooterCategory
        title="Generals"
        linkColumns={[
          [
            { title: "Press", url: "/press" },
            { title: "Privacy Policy", url: "/privacy-policy" },
            { title: "Code of Conduct", url: "/code-of-conduct" },
            { title: "Terms of Service", url: "/terms-and-conditions" },
          ],
        ]}
      />
    </div>
    <div className="column is-one-third-desktop is-one-quarter-widescreen">
      <FooterCategory title="Tracks" linkColumns={transformData(data)} />
    </div>
  </div>
);

export default () => (
  <StaticQuery
    query={graphql`
      query FooterMenuRow {
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
    render={(data) => <FooterMenuRow data={data.allMarkdownRemark.edges} />}
  />
);
