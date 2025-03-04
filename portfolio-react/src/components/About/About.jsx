import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/shaffi_img1.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                    <p>JavaScript</p><hr style={{width:"60%"}}/>
                </div>
                <div className="about-skill">
                    <p>MongoDB</p><hr style={{width:"50%"}}/>
                </div>
            </div>
        </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>GDSC</h1>
                <p>Tech Team (2023-2024)</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>WON</h1>
                <p>Advitiya Hackathon - 2k24</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>MADE</h1>
                <p>Various Practice Projects</p>
            </div>
        </div>
    </div>
  )
}

export default About
