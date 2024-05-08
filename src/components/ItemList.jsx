import Item from "./Item";

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

