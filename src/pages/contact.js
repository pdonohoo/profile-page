import React from 'react'

import Layout from '../components/layout'
import contactStyles from '../styles/contact.module.scss'

const Contact = () => {
  return (
    <Layout style={{margin: 0}}>
      <div className={contactStyles.layout}>
      <h1>Preston Donohoo</h1>
      <h4>
        You an reach me at any of the following.
      </h4>
      <ul>
        <li>
         Check me out on <a href='www.linkedin.com/in/prestonscottdonohoo' >LinkedIn</a>!
        </li>
      </ul>
      </div>
    </Layout>
  )
}

export default Contact