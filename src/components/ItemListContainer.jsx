import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";

const ItemListContainer = ({mensaje}) => {
   const [items, setItems] = useState([]);

   useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {  
      resolve(arrayProductos);
      }, 2000 )
    });

    promesa.then(respuesta => {
      setItems(respuesta);
     })  
   }, [])

 return(          
    <div className="container py-5">
    <div className="row">
        <div className="col text-center">
          <ItemList items={items} />
          <ItemCount stock={10}/>
        </div>
    </div>
   </div>
    )
}

export default ItemListContainer;