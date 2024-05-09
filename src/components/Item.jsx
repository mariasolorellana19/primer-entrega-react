<<<<<<< HEAD
const Item = ({Item}) => {
    return (
        <div className="col-md-4 text-center">
             <div className="card border-0">
        <img src={Item.imagen} className="img-fluid" alt={Item.nombre}>
        <div className="card-body">
          <p className="card-text text-uppercase">{Item.nombre}</p>
          <p className="card-text"><b>{Item.precio}</b></p>
          </div>
        </div>
=======
import { Link } from "react-router-dom";

const item =  ({item}) => {
    return(
        <div className="col-md-3 text-center"> 
        <Link to={"/item/" + item.id} className="text-decoration-none">
         <div className="card border-0">
         <img src={item.imagen} className="img-fluid" alt={item.nombre} />
         <div className="card-body">
          <p className="card-text text-uppercase">{item.nombre}</p>
          <p className="card-text"><b>${item.precio}</b></p>
          </div>
        </div>
        </Link>
>>>>>>> segunda-entrega
      </div>
    )
}

<<<<<<< HEAD
export default Item;
=======
export default item;
>>>>>>> segunda-entrega
