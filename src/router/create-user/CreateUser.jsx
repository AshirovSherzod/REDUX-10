import React, { useState } from 'react'
import "./CreateUser.css"
import useStore from '../../zustend/store'

function CreateUser() {
  const [name, setName] = useState("")
  const [proffession, setProffesion] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")

  let addUsers = useStore(state => state.addUsers)
  let users = useStore(state => state.users)

  const handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      id: new Date().getTime(),
      name,
      proffession,
      age: +age,
      gender
    }

    addUsers(newUser)
  }

  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className='create__user-form' action="">
        <input type="text" placeholder='name' value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type="text" placeholder='profession' value={proffession} onChange={(e)=> setProffesion(e.target.value)}/>
        <input type="number" placeholder='age' value={age} onChange={(e)=> setAge(e.target.value)}/>
        <select name="" id="" value={gender} onChange={(e)=> setGender(e.target.value)}>
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser