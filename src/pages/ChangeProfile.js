import React from 'react'
import { useState } from 'react'

const ChangeProfile = (props) => {
    const [newUserName, setNewUsername] = useState("");
  return (
    <div>
      <input onChange={(event) => {
        setNewUsername(event.target.value)
      }}></input>
      <button onClick={() => {props.setUser(newUserName)}}>Change Username</button>
    </div>
  )
}

export default ChangeProfile
