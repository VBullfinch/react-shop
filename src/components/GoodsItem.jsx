function GoodsItem(props){
    const{
        addToBasket=Function.prototype,
        mainId,
        displayName,
        displayDescription,
        price:{finalPrice},
        displayAssets:{0:{
            full_background}},
       
    }=props;
    return <div className="card" >
    <div className="card-image">
      <img src={full_background} alt={full_background} />
    </div>
    <div className="card-content">
    <span className="card-title">{displayName}</span>
      <p>{displayDescription}</p>
    </div>
    <div className="card-action">
          <button 
          className="btn" 
          onClick={()=>addToBasket({
              mainId,
              displayName,
              finalPrice
              })}>Купить</button>
          <span className='right'>{finalPrice}</span>
        </div>
  </div>

}
export {GoodsItem}