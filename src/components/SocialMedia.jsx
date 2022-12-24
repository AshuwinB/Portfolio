import React from 'react'
import {BsTwitter, BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div onClick={() => window.open('https://twitter.com/ashucoc98765')}>
        <BsTwitter/>
      </div >
      <div onClick={() => window.open('https://www.linkedin.com/in/ayushmaan-bose-7261a4220/')}>
        <BsLinkedin/>
      </div>
      <div onClick={() => window.open('https://www.instagram.com/ashu_codeguru/')}>
        <BsInstagram/>
      </div>
      <div onClick={() => window.open('https://github.com/AshuwinB')}>
        <BsGithub/>
      </div>
    </div>
  )
}

export default SocialMedia
