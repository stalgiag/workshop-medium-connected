import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Logo() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div id="logo-container">
      <Img
        className="logo"
        fluid={data.file.childImageSharp.fluid}
        alt="A black square with a white fill, a black X through the middle, and the word LOGO"
      />
    </div>
  );
}
