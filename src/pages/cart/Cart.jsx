import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { addAmount, decrementProduct, deleteItems, giftWrap, incrementProduct, nogiftWrap, removeItem, subtractAmount } from '../../redux/reducer/cartSlice'
import Footer from '../../components/Footer/Footer'


const Cart = () => {
  const { cartItems, quantity, amount, once, gift } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let value = Number((Number(amount * 10) + 100) / 10).toFixed(2);
  const increment = (item) => {
    dispatch(addAmount(item))
    dispatch(incrementProduct(item.id));
  }
  const decrement = (item) => {
    dispatch(subtractAmount(item));
    dispatch(decrementProduct(item.id));
  }
  const deleteItem = (item) => {
    dispatch(deleteItems(item));
    dispatch(removeItem(item.id));
  }

  return (<>
  
    <h1 className='name'>Shopping Cart</h1>
    {cartItems.length !== 0 ? (
      <div className='cart_container'>
        {cartItems.map(item => (
          <div className='cart_items' key={item.id}>
            <img src={item.image} />
            <div className='cart_items_info'>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <h5>Category: {item.category}</h5>
              <h5>Ratings: {item.rating.rate} {" ⭐".repeat(item.rating.rate)}</h5>
              <h5>Counts: {item.rating.count}</h5>
              <h5><input type="checkbox" name="" id="" onClick={() => gift[item.id] === 4 ? dispatch(nogiftWrap(item)) : dispatch(giftWrap(item))} /> This is a gift(Extra Charges 4$)</h5>
              <h5>Quantity:


                <div className='cart_items_button'>
                  <button onClick={() => decrement(item)}><AiOutlineMinusCircle /></button>
                  <span>{quantity[item.id]}</span>
                  <button onClick={() => increment(item)}><AiOutlinePlusCircle /></button>
                </div>
              </h5>
              <div><button className='btn btn-danger' onClick={() => deleteItem(item)}>Delete</button></div>
            </div>
            <div className='cart_items_price'>
              <h2>Price</h2>
              <h3>{item.price}$</h3>
            </div>
          </div>
        ))}
        <div className='fix_amount'>
          <div className='fix_amount_items'>
            <h4>Shipping Charges: <div id='one'>10$</div></h4>
            <h4>Gift Charges: <div id='two'>{once}$</div></h4>
            <hr />
            <h4>Total amount: <div id='three'>{amount === 0 ? amount : value}$</div></h4>
            <div className='but'>
              <button className='btn btn-outline-primary '>CheckOut</button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className='cart_no_item'>
        <div className='cart_no_items'>
        <img id='firstIMG' src="https://s3.gifyu.com/images/face-wow-unscreen.gif" width={"200px"} height={"200px"} alt="" />
        <img id='secondIMG' src="https://i.ibb.co/n7xgXbG/empty-cart.png" alt="empty-cart" border="0"/>
        <h3>Cart is Empty</h3>
        </div>
      </div>
    )}

    <Footer />
  </>
  )
}

export default Cart

















