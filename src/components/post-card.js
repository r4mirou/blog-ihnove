import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostCard = ({ data }) => (
  <article style={{
    background:"linear-gradient(150deg, rgba(255,255,255,1) 26%, rgba(191,239,255,1) 70%, rgba(0,155,255,1) 100%)",
   borderRadius:"12px",}}>
    <div className="post-card">
      {data.frontmatter.featuredImage ?
        (
          <Link to={data.frontmatter.slug}>
            <Img
              fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={data.frontmatter.title + ' - Featured image'}
              className="featured-image"
            />
          </Link>
        ) : ""
      }
      <div class="post-content">
        <h2 className="title" style={{textAlign:"center"}}><Link to={data.frontmatter.slug}>{data.frontmatter.title}</Link></h2>
        <p className="meta"><time>{data.frontmatter.date}</time></p>
      </div>
    </div>
  </article>
)

export default PostCard