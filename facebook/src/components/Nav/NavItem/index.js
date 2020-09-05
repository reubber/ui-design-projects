import React from 'react'
import { IconButton } from '@material-ui/core'

function NavItem({ icon }) {
  return (
    <li className='nav-item'>
      <a href="##" className='icon-button'>
        <IconButton>
          {icon}
        </ IconButton>
        
      </a>      
    </li>
  )
}

export default NavItem
