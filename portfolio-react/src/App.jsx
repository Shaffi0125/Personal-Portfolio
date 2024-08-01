import About from "./components/About/About"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import MyProjects from "./components/MyProjects/MyProjects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyProjects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
