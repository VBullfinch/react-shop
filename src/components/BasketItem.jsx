function BasketItem (props){
    const{
        id,
        name,
        price,
        quantity,
        removeFromBasket=Function.prototype,
        addItemToBasketList=Function.prototype,
        decQuantity=Function.prototype
    }=props;
    return  ( 
     <li className="collection-item">
         {name} {' '}
         <i 
         onClick={()=>addItemToBasketList(id)} 
         className="material-icons basket-quantity"
         >
             add</i>{' '}

          x{quantity} {' '}
          <i 
          onClick={()=>decQuantity(id)} 
          className="material-icons basket-quantity">
              remove
              </i>

          ={price*quantity}руб.
     <span className="secondary-content"  onClick={()=>removeFromBasket(id)}><i className="material-icons">close</i></span>
     </li>)

}
export {BasketItem};