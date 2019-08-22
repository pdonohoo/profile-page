import React from 'react'

import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from '../styles/blog.module.scss'
import Img from 'gatsby-image'


const Blog = () => {

  const blog = useStaticQuery(graphql`
  query{
    allMarkdownRemark{
      edges{ 
        node{
          fields{
            slug
          }
          excerpt (pruneLength: 70)
          frontmatter{
            title
            date
            image {
              childImageSharp  {
                fluid (maxHeight: 200, maxWidth: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          } 
        } 
      }
    }
  }
  `)


  return (
    <Layout>
      <div className={blogStyles.title} >
        <h1> Donohoo Family Blog </h1>
        <p>My Journey</p>
        <div className={blogStyles.layout} >
          <ol className={blogStyles.posts} >
            {
              blog.allMarkdownRemark.edges.map(post =>
                <li  style={{ marginRight: 20,  }}  >
                  <Link to={`/blog/${post.node.fields.slug}`}>
                    <Img fluid={post.node.frontmatter.image.childImageSharp.fluid} />
                  </Link>
                  <div className={blogStyles.post} style={{justifyContent:'flex-end'}}>
                    <Link to={`/blog/${post.node.fields.slug}`} className={blogStyles.posts}>
                      <div  style={{ display: 'flex', flexDirection: 'column',}}>
                        <div>
                          <h2 style={{ marginBotton: 5, textAlign: 'center' }}>
                            {post.node.frontmatter.title}
                          </h2>
                        </div>
                        <div>
                          <p style={{textAlign:'center',}}>
                            Publish Date: {post.node.frontmatter.date}
                          </p>
                          <p>
                            {post.node.excerpt}
                            <Link className={blogStyles.link}  to={`/blog/${post.node.fields.slug}`}>
                                Read More!
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </li>
              )
            }
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export default Blog