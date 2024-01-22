import React from 'react'
import { useState } from 'react'

const ChangeProfile = () => {
    const [newUserName, setNewUsername] = useState("");
  return (
    <div>
      <input onChange={(event) => {
        setNewUsername(event.target.value)
      }}></input>
      <button>Change username</button>
    </div>
  )
}

export default ChangeProfile
