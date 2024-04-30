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
      </div>
    )
}

export default Item;