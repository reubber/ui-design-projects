import React from 'react'
import { Avatar } from '@material-ui/core'

import './styles.css'

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon /> /* eslint-disable-next-line */}
      <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow
