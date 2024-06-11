import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import useStore from '../../zustend/store'

function Navbar() {

  let users = useStore(state => state.users)

  return (
    <div className='navbar'>
        <h2>Zustand</h2>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/create-user"}>Create user</NavLink>
        <NavLink to={"/all-users"}>All users <sup>{users.length}</sup></NavLink>
    </div>
  )
}

export default Navbar