import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibaryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from '../../contextApi/StateProvider'
import firebase from 'firebase'
import db from '../../firebase'


import './styles.css'

function MessageSender() {
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [{user}, dispatch] = useStateValue()

  const handleSubmit = (e) => {
    e.preventDefault()

    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.
      serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    })
    setInput('')
    setImageUrl('')
  }

  return (

    <div className='messageSender'>
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            type="text"
            placeholder={`What's on your mind,${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder='Image URL (Optional)'
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{color: 'red'}} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibaryIcon style={{color: 'green'}} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmotionIcon style={{color: 'orange'}} />
          <h3>Feeling/Activity</h3>
        </div>

      </div>
    </div>
  )
}

export default MessageSender
