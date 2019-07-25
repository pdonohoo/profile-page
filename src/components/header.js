import React from 'react'

import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {

  return (
    <nav>
      <ul style={{display:'flex', listStyleType:'none', margin:0,}} >
        <li  >
          <Link className={headerStyles.nav} style={{textDecoration:'none'}} to='/'>Home</Link>
        </li>
        <li >
          <Link className={headerStyles.nav} style={{textDecoration:'none', }} to='/blog'>Blog</Link>
        </li>
        <li >
          <Link className={headerStyles.nav} style={{textDecoration:'none',}} to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header