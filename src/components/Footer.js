import React from 'react'
import Facebook from '../Facebook Icon.png'
import GitHub from '../GitHub Icon.png'
import Instagram from '../Instagram Icon.png'
import Linkedin from '../Linkedin Icon.png'
import Twitter from '../Twitter Icon.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={Twitter} alt='twitter' />
      <img src={Facebook} alt='facebook' />
      <img src={Instagram} alt='instagram' />
      <img src={Linkedin} alt='linkedin' />
      <img src={GitHub} alt='github' />
    </footer>
  )
}

export default Footer