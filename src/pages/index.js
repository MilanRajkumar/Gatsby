import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

const IndexPage = ({data}) => (
  <div>
    <div>hhhhhhhhh</div>
    <Img resolutions={data.file.childImageSharp.resolutions} />
  </div>
)

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "main_bg.jpg" }) {
      childImageSharp {
        resolutions(width: 500, height: 500) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;
export default IndexPage
