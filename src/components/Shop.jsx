import {useState, useEffect} from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import {GoodsList} from './GoodsList';
import {Cart} from './Cart';
import {BasketList} from './BasketList';
import {Alert} from './Alert';

function Shop(){
const [goods, setGoods] = useState([])
const [loading, setLoading] = useState(true)
const [order, setOrder]=useState([])
const [isBasketShow, setIsBasketShow] = useState(false)
const [alertName, setAlertName]=useState('')

useEffect(function getGoods(){
fetch(API_URL, {
        headers: {
            Authorization: API_KEY,
        },
    }
    )
    .then((response)=>response.json())
    .then((data)=>{
        data.featured && setGoods(data.featured);
        setLoading(false);
    });
}, [])


const addItemToBasketList =(id)=>{
    const newOrder = order.map((el)=>{
        if(el.id===id){
            const newQuantity=el.quantity+1;
            
            return  {
                ...el,
                quantity:newQuantity,
            };
        }else{
            return el;
        }
    })
    setOrder(newOrder)
}
const decQuantity = (id) =>{
    const newOrder = order.map(el=>{
        if(el.id===id){
            const newQuantity = el.quantity-1;
            return {
                ...el,
                quantity: newQuantity>=0? newQuantity:0,
            }
        } else 
        return el;
    });
    setOrder(newOrder)
}

    const addToBasket =(item)=>{
        const itemIndex=order.findIndex(orderItem=> orderItem.id===item.id)
        if(itemIndex<0){
        const newItem={
            ...item,
            quantity:1,
        }
        setOrder([
            ...order,
            newItem
        ]
        )
    }else{
        const newOrder = order.map((orderItem, index)=>{
            if(index === itemIndex){
                return{
                    ...orderItem,
                    quantity:orderItem.quantity + 1,
                }
            }else{
                return orderItem;
            }
        })
        setOrder(newOrder)
    }
    setAlertName(item.name);

    }

    const handleBasketShow = () =>{
        setIsBasketShow(!isBasketShow)
    }

    const removeFromBasket=(id)=>{
        const newOrder = order.filter(el=>el.id!==id)
        setOrder(newOrder)
    }
const closeAlert =()=>{
    setAlertName('')
}

    return <main className="container content" >
        <Cart quantity ={order.length} handleBasketShow={handleBasketShow}/>
        {loading? <Preloader />:<GoodsList goods={goods} addToBasket={addToBasket}/>}
        {
            isBasketShow && <BasketList order={order}
             handleBasketShow={handleBasketShow}
             removeFromBasket={removeFromBasket}
             addItemToBasketList={addItemToBasketList}
             decQuantity={decQuantity} />
        }
        {alertName && <Alert displayName={alertName} closeAlert={closeAlert} />}

    </main>
}

export {Shop}