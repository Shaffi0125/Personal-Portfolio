/* eslint-disable react/no-unescaped-entities */
import './Hero.css'
import profile_img from '../../assets/shaffi_img1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Shaffi_Resume from '../../assets/Shaffi_Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Shaffi,</span> frontend developer based in India.</h1>
      <p>I am a frontend developer from Punjab, India. I have gained experience by working on various projects.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">
        <a href={Shaffi_Resume} download="Shaffi_Resume.pdf">My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
