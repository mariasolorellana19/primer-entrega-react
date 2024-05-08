import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/Productos.json";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = ({mensaje}) => {
  const [item, setItem] = useState ([ ]);
  const {id} = useParams();

  useEffect (() => {
    const promesa = new Promise (resolve => {
      setTimeout(() => {
        const producto = arrayProductos.find(item => item.id == parseInt(id))
      resolve(producto);
      } , 2000)
    });

    promesa.then(respuesta => {
      setItem(respuesta);
    })
  }, [id])
  
    return(
   <div className="container">
    <div className="row">
        
        <ItemDetail item={item} />
         </div>
      </div>
  
    )
}

export default ItemDetailContainer;