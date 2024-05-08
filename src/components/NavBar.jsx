import { Link ,NavLink } from "react-router-dom";
import logo from "../assets/imagenes/logo stanley.svg";
import CartWidget from "./CartWidget";

const NavBar = () => {

    return (
   <div className="container fluid">
    <div className="row bg-dark-subtle p-3">
        <div className="col"></div>
        <div className="col-md text-center">
         <Link to={"/"}>
            <img src={logo} alt="STANLEY" width={340} />
         </Link>
        </div>
          <div className="col d-flex align-items-center justify-content-end">
            <CartWidget />
          </div>
     </div>
      <div className="row">
        <div className="col">
          <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link text-dark text-uppercase" to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark text-uppercase" to={"/category/termo"}>Termo</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark text-uppercase" to={"/category/mate"}>Mate</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark text-uppercase" to={"/category/hidratacion"}>Hidratacion</NavLink>
            </li>
          </ul>
        </div>
     </div>
   </div>
    )
}

export default NavBar;
