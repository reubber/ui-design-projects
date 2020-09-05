import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import NavItem from './NavItem'
import Navbar from './Navbar'

function Nav() {
  return (
    <Navbar>
      <NavItem
        icon = {<ExpandMoreIcon />}
      />
    </Navbar>
        
  )
}

export default Nav
