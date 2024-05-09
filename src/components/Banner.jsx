<<<<<<< HEAD
const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="" alt="" />
=======
import { Link } from "react-router-dom"
import BannerBar from "../assets/imagenes/banner-bar.webp"
import BannerHidratacion from "../assets/imagenes/banner-hidratacion.webp"
import BannerTermo from "../assets/imagenes/banner-termo.webp"

const Banner = () => {
    return(
        <div className="container">
            <div className="row">
               <div className="col text-center">
                <Link to={"/category/bar"}>
                    <img src={BannerBar} alt="Banner Bar" className="img-fluid" />
                </Link>
                </div>
                 <div className="col text-center">
                 <Link to={"/category/hidratacion"}>
                    <img src={BannerHidratacion} alt="Banner Hidratacion" className="img-fluid"  />
                </Link>
                </div>
                <div className="col text-center">
                <Link to={"/category/termo"}>
                    <img src={BannerTermo} alt="Banner Termo" className="img-fluid"   />
             </Link>
>>>>>>> segunda-entrega
                </div>
            </div>
        </div>
    )
<<<<<<< HEAD
}
=======
}

export default Banner;
>>>>>>> segunda-entrega
