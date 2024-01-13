import React from 'react'

const Header = ({ handlToggle}) => {
  return (
    <div className='header'>
    <h1>Notes</h1>
    <button onClick={()=>handlToggle((prev)=>!prev)} className='save'>Toggle Mode</button>
      
    </div>
  )
}

export default Header
