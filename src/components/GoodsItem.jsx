function GoodsItem(props){
    const{
        addToBasket=Function.prototype,
        id,
        name,
        description,
        price,
        full_background,
       
    }=props;
    return <div className="card" >
    <div className="card-image">
      <img src={full_background} alt={full_background} />
    </div>
    <div className="card-content">
    <span className="card-title">{name}</span>
      <p>{description}</p>
    </div>
    <div className="card-action">
          <button 
          className="btn" 
          onClick={()=>addToBasket({
              id,
              name,
              price
              })}>Купить</button>
          <span className='right'>{price}</span>
        </div>
  </div>

}
export {GoodsItem}