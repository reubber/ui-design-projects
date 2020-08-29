import React from 'react'

import './styles.css'

import SidebarRow from '../SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { ExpandMoreOutlined } from '@material-ui/icons'

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://avatars3.githubusercontent.com/u/16036604?s=460&u=a978028c402bf7ab0002eb08b99677cc03cc16da&v=4"
        title='Reubber Sousa'
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title='Covid-19 information center' 
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messager"/>
      <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>

    </div>
  )
}

export default Sidebar
