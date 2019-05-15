import React from 'react'
import CartItems from './CartItems'
export default function CartList(cartValue) {
    const {cart} = cartValue.value;
    console.log(cartValue.value,cart)
  return (
    <div className="container-fluid">
    {
      cart.map(item=>{
        return  <CartItems key={item.id} item={item} value={cartValue.value}/>
      })
    }
     
    </div>
  )
}
