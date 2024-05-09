<<<<<<< HEAD
import { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({stock}) => {
   const [contador, setContador ]= useState(1);
   const [itemStock, setItemStock] = useState(stock)

   const incrementar = () => {
       if (contador < itemStock)
       setContador(contador + 1);
   }

   const decrementar = () => {
    if (contador > 1)
    setContador(contador - 1);
}

    const onAdd = () => {
        if (contador <= itemStock) {
=======
import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const OnAdd = () => {
    if (contador <= itemStock) {
>>>>>>> segunda-entrega
        setItemStock(itemStock - contador);
        setContador(1);
        console.log("Agregaste " + contador + "Productos al Carrito!");
      }
    }

<<<<<<< HEAD
    useEffect(() =>{
     setItemStock(stock);
    },  [stock])
 
=======
    useEffect(() => {
        setItemStock(stock);
    },[stock])
    
>>>>>>> segunda-entrega


    return (
        <div className="container">
<<<<<<< HEAD
             <div className="row">
                <div className="col">            
                <div className="btn-group" role="group" aria label="Basic example">
                <button type="button" className="btn bg-black text-white" onClick={decrementar}> - </button>
                <button type="button" className="btn bg-black text-white">{contador}</button>
                <button type="button" className="btn bg-black text-white " onClick={incrementar}> + </button>
             </div>
         </div>
      </div>
     <div className="row my-1">
        <div className="col">
            <button type="button" className="btn bg-black text-white text-uppercase" onClick={onAdd}>Agregar al Carrito</button>
        </div>
     </div>

        </div>
    
=======
        <div className="row">
            <div className="col text-center">
                <div className="btn-group" role="group" aria-label="Basic Example">
                    <button type="button" className="btn bg-black text-white" onClick={decrementar}> - </button>
                    <button type="button" className="btn bg-black text-white" >{contador}</button>
                    <button type="button" className="btn bg-black text-white" onClick={incrementar}> + </button>
                  </div>   
                </div>
            </div>
            <div className="row my-1">
                <div className="col text-center">
                <button type="button" className="btn bg-black text-white text-uppercase" onClick={OnAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
>>>>>>> segunda-entrega
    )
}

export default ItemCount;