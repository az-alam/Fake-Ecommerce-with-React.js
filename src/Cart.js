import React, { useContext } from 'react'
import { ecommerceContext } from './Home'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css';


function Cart() {
    const {cart, setCart}=useContext(ecommerceContext)

    function handleDeleteFromCart(e, itemDelete){
        e.preventDefault()
        setCart(cart.filter(cartItem=>cartItem.id!==itemDelete.id))
    }
  return (
    <section className='cart'>
        <h1>Cart</h1>
        <div className='cart-list'>
            {
                cart.map((item, index)=>{
                    return (
                        <div key={index} className='cart-item'>
                            <div className='image-div'>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className='context-div'>
                                <h3>{item.title}</h3>
                                <p>$:{item.price}</p>
                                <Link onClick={(e)=>handleDeleteFromCart(e, item)}><DeleteIcon/></Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Cart