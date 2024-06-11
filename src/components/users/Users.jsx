import React, { useState } from 'react'
import "./Users.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"
import useStore from '../../zustend/store'

function Users() {
  let users = useStore(state => state.users)
  let removeUser = useStore(state => state.removeUser)

  let card = users?.map(users => (
    <div key={users.id} className="users__card">
      <img src={users.gender === "male" ? male : female} alt="" />
      <h2>{users.name}</h2>
      <p>{users.proffession}</p>
      <p>{users.age}</p>
      <button onClick={()=> removeUser(users.id)}>Remove</button>
      <button onClick={()=> {
      }}>Edit</button>
    </div>
  ))
  return (
    <div className='users__wrapper'>
      {card}
    </div>
  )
}

export default Users