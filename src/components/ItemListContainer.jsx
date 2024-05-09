import { useEffect, useState } from "react";
<<<<<<< HEAD
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
=======
import { useParams } from "react-router-dom";
import arrayProductos from "./json/Productos.json";
import Itemlist from "./ItemList";


const ItemListContainer = ({mensaje}) => {
  const [items, setItems] = useState ([ ]);
  const {id} = useParams();

  useEffect (() => {
    const promesa = new Promise (resolve => {
      setTimeout(() => {
      resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
      } , 2000)
>>>>>>> segunda-entrega
    });

    promesa.then(respuesta => {
      setItems(respuesta);
<<<<<<< HEAD
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
=======
    })
  }, [id])
  
    return(
   <div className="container">
    <div className="row">
        
        <Itemlist items={items} />
         </div>
      </div>
  
>>>>>>> segunda-entrega
    )
}

export default ItemListContainer;