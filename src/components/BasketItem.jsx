function BasketItem (props){
    const{
        mainId,
        displayName,
        finalPrice,
        price,
        quantity,
        removeFromBasket=Function.prototype,
        addItemToBasketList=Function.prototype,
        decQuantity=Function.prototype
    }=props;
    return  ( 
     <li className="collection-item">
         {displayName} {' '}
         <i 
         onClick={()=>addItemToBasketList(mainId)} 
         className="material-icons basket-quantity"
         >
             add</i>{' '}

          x{quantity} {' '}
          <i 
          onClick={()=>decQuantity(mainId)} 
          className="material-icons basket-quantity">
              remove
              </i>

          ={finalPrice*quantity}руб.
     <span className="secondary-content"  onClick={()=>removeFromBasket(mainId)}><i className="material-icons">close</i></span>
     </li>)

}
export {BasketItem};