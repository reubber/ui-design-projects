import React, {useEffect, useState} from 'react'
import StoryReel from '../StoryReel'
import MessageSender from '../MessageSender'
import Post from '../Postes'
import db from '../../firebase'

import './styles.css'


function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))) //real time connect map to state
    ))
  }, [])

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  )
}

export default Feed
