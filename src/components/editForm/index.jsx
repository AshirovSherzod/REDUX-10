import React from 'react'

const EditForm = () => {
  return (
    <>
    <div className="overlay"></div>
    <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <select name="" id="">
            <option disabled value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </form>
    </>
  )
}

export default EditForm