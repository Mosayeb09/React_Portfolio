
import './App.css'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Experience from './Component/Experience/Experience'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Portfolio from './Component/Portfolio/Portfolio'
import SocialLink from './Component/SocialLink/SocialLink'

function App() {
 

  return (
    <>
      <div>
        
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>



      <SocialLink></SocialLink>


      
      </div>
      
    </>
  )
}

export default App
