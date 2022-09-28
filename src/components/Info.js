import React from 'react'
import profile from '../profile.jpg'
import Linkedin from '../Linkedin.png'
import mail from '../Mail.png'

const Info = () => {
  return (
    <div className='info-container'>
      <img src={profile} alt='profile' />
      <h1>Colin Cason</h1>
      <h4>Frontend Developer</h4>
      <p>colinjames.website</p>

      <div className='button-container'>
        <button className='email-button'>
          <img src={mail} alt='mail' />
          Email
        </button>

        <button className='social-button'>
          <img src={Linkedin} alt='social icon' />
          LinkedIn
        </button>
      </div>

    </div>
  )
}

export default Info