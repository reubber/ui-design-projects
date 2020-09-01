import React from 'react'
import StoryReel from '../StoryReel'
import MessageSender from '../MessageSender'
import Post from '../Postes'

import './styles.css'


function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX3vojZliGWre95XPjgdwQr3q2kKEMxJk89w&usqp=CAU" 
        message="wow this works"
        timestamp="this is a timestamp"
        username="@reubbers"
        image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9db3186a-9d13-438b-9f7a-7af36d5e6707/dbvwc9a-b42ecfc3-e1d4-4ddb-b841-af938521e5e9.jpg/v1/fill/w_1024,h_592,q_75,strp/songoku_vs_vegeta_by_inhyuklee_dbvwc9a-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOWRiMzE4NmEtOWQxMy00MzhiLTlmN2EtN2FmMzZkNWU2NzA3XC9kYnZ3YzlhLWI0MmVjZmMzLWUxZDQtNGRkYi1iODQxLWFmOTM4NTIxZTVlOS5qcGciLCJoZWlnaHQiOiI8PTU5MiIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzlkYjMxODZhLTlkMTMtNDM4Yi05ZjdhLTdhZjM2ZDVlNjcwN1wvaW5oeXVrbGVlLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.QDrAOv6TCrL-Non2Fw09M0MaV_UgeuW5nm0B_N-PcpE"
      />

      <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX3vojZliGWre95XPjgdwQr3q2kKEMxJk89w&usqp=CAU" 
        message="wow this works!"
        timestamp="this is a timestamp"
        username="@reubbers"
      />

    </div>
  )
}

export default Feed
