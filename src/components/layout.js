import React from 'react'

import Header from './header'
import Footer from './footer'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      
        <div className={layoutStyles.topBar}>
          {/* <h4> Preston Donohoo</h4> */}
          <Header />
        </div>
        <div className={layoutStyles.content}>
          
          {props.children}
        </div>
      
      <Footer />
    </div>
  )
}

export default Layout