import './MyProjects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import myprojects_data from '../../assets/myprojects_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyProjects = () => {
  return (
    <div id='projects' className='myprojects'>
      <div className="myproject-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="myproject-container">
        {myprojects_data.map((projects,index)=>{
          return <img key={index} src={projects.w_img} alt="" />
        })}
      </div>
      <div className="myproject-showmore">
        <p>Show more</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyProjects
