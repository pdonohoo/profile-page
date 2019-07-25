import React from 'react'

import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from '../styles/blog.module.scss'

const Blog = () => {

  const blog = useStaticQuery(graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          fields{
            slug
          }
          frontmatter{
            title
            date
          }
        }
      }
    }
  }
  `)
  console.log(blog)

  return (
    <Layout>
      <div className={blogStyles.title} >
        <h1> Donohoo Family Blog </h1>
        <p>My Journey</p>
        <div className={blogStyles.layout}>
          <ol className={blogStyles.posts}>
            {
              blog.allMarkdownRemark.edges.map(post =>
                <li className={blogStyles.post}>
                  <Link to={`/blog/${post.node.fields.slug}`} className={blogStyles.posts}>
                    <h2>
                      {post.node.frontmatter.title}
                    </h2>
                    <p>
                      Publish Date: {post.node.frontmatter.date}
                    </p>
                  </Link>
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