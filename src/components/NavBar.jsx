import logo from "../assets/imagenes/logo stanley.svg";
import CartWidget from "./CartWidget";

const NavBar = () => {

    return (
   <div className="container fluid">
    <div className="row bg-dark-subtle p-3">
        <div className="col"></div>
        <div className="col-md text-center">
         <a href="">
            <img src={logo} alt="STANLEY" width={340} />
         </a>
        </div>
          <div className="col d-flex align-items-center justify-content-end">
            <CartWidget />
          </div>
     </div>
      <div className="row">
        <div className="col">
          <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Termo</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">Mate</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark"  href="#">Hidratacion</a>
            </li>
          </ul>
        </div>
     </div>
   </div>
    )
}

export default NavBar;
