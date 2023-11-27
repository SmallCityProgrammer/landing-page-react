import "./Navbar.css"

function Navbar() {
  return(
    <>
    <div className="pre-nav"></div>
    <ul className="links-ul">
      <li className="link-li"><a className="navegation-link" href="#">Inicio</a></li>
      <li className="link-li"><a className="navegation-link" href="#">Sobre</a></li>
      <li className="link-li"><a className="navegation-link" href="#">Contato</a></li>
      <li className="link-li"><a className="navegation-link" href="#">Serviços</a></li>

    </ul>
    </>
  )
}

export default Navbar;