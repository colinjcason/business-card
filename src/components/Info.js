import React from 'react'
import profile from '../profile.jpg'

const Info = () => {
  return (
    <div className='info-container'>
      <img src={profile} alt='profile' />
      <h1>Colin Cason</h1>
      <h4>Frontend Developer</h4>
      <p>colinjames.website</p>

      <div className='info-button-container'>
        <button>Email</button>
        <button>LinkedIn</button>
      </div>

    </div>
  )
}

export default Info