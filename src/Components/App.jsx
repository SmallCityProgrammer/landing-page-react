import Navbar from "./Navbar"
import Teamwork from "../assets/teamwork.svg"
import "./App.css"
import PlayBtn from "../assets/playbtn.svg"
import "./Responsive.css"

function App() {
  return (
    <><Navbar />
    <img className="main-image" src={Teamwork} />
      <div className="welcome-message">
      <h1 className='main-message' >Venha causar impacto</h1>
          <p className="second-message">Lorem ipsum dolor sit, amet consectetur adipisicing elit
            Iste consequuntur sunt quos<br /> quisquam facere eius est!
            Est quas facere consequatur debitis!
            </p>
            <ul className="links">
          <li className="start-link"><a className="links-text" href="#">Comece!</a></li>
          <li className="video-link"><a className="links-text" href="#"><img className="play-img" src={PlayBtn} /> Assita ao Video</a></li>
        </ul>
        </div>  
    </>
  )
}

export default App