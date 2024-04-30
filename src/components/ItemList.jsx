import Item from "./Item";

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