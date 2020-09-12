import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"

import Layout from "../components/layout"
import SEO from '../components/seo';

const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""
  const { previous, next } = pageContext

  let props = {
    previous,
    next
  }

  return (
    <Layout className="page">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description ? frontmatter.description : excerpt}
        image={Image}
        article={true}
      />
      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
            <div style={{ fontSize: "12px", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center" }}>
            <time>{frontmatter.date} - {frontmatter.author}</time>
            </div>
          </section>
          {Image ? (
            <Img
              fluid={Image}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={frontmatter.title + ' - Featured image'}
              className="featured-image"
            />
          ) : ""}
        </header>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <Link to={"/"}><RiArrowLeftLine /> Voltar para listagem</Link>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark( 
      id: { eq: $id }
    ) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1980, maxHeight: 768, quality: 80, srcSetBreakpoints: [350, 700, 1050, 1400]) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
            sizes {
              src
            }
          }
        }
      }
    }
  }
`