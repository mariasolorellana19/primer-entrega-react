import Item from "./Item";

<<<<<<< HEAD
const ItemList = ({Items}) => {
    return (
         <>
         {Items.map(produ => {
          <Item key={produ.id} item={item} />
          })}
         </>

         
    )
}

export default ItemList;
=======
const Itemlist = ({items}) => {
    return (
   <>
   {items. map(produ=> (
   <Item key={produ.id} item={produ} />
   ))} 

   </>
   
    )
}

export default Itemlist;

>>>>>>> segunda-entrega
