import React from 'react'

import Layout from '../components/layout'
import contactStyles from '../styles/contact.module.scss'

const Contact = () => {
  return (
    <Layout>
      <div >
        <div className={contactStyles.header}>
          <h1 >Preston Donohoo</h1>
          <h4>
            You can reach me at any of the following.
        </h4>
        </div>
        <ul>
          <li>
            Check me out on <a href='https://www.linkedin.com/in/prestondonohoo/' target='_blank' >LinkedIn</a>!
        </li>
        <li>
          Send me an email at preston.s.donohoo@gamil.com
        </li>
        <li>
          Check out my stuff on <a href='https://github.com/pdonohoo' target='_blank' >github</a>
        </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Contact