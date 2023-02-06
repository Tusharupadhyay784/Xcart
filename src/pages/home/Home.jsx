import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import './home.css'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeItem, addAmount, deleteItems } from '../../redux/reducer/cartSlice';
import { toast } from 'react-hot-toast';
import Footer from '../../components/Footer/Footer';



const Home = () => {
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products/');
      const data = await res.json();
      toast.success("Fetching Data Successfully")
      console.log(data);
      setProduct(data);
      setLoading(false);
    }
    fetchProducts();
  }, [])

  const Addme = (item) => {
    toast.success("Item Added Successfully");
    dispatch(addProduct(item))
    dispatch(addAmount(item));
  }
  const removeitem = (item) => {
    dispatch(deleteItems(item)); // paise bhi hatane ke liye
    dispatch(removeItem(item.id)); // sirf item hatane ke liye
  }
  return (
    <>
    <div className='Home_Container'>

      {
        loading ? (
          <Spinn />
        ) : (

          Product.map(item => (
            <div key={item.id} className='item_box'>
              <div className='image_box_div'>
                <img src={item.image} className='image_box' alt="" />
              </div>
              <h1>{item.title}</h1>
              <div>
                <div className='second_div'>
                  <span>Category: {item.category}</span>
                  <span className='price'>{item.price}$</span>
                </div>
                <div className='third_div'>
                  <div>Rate: {item.rating.rate}
                    {" ⭐".repeat(item.rating.rate)}
                  </div>

                  <div>Count: {item.rating.count}
                    <div className='btn_upper'>
                      {/* cart.some is a function which returns a boolean value and it checks whether an array consist a particular type of value or not you can search more on google */}
                      {cartItems.some((i) => i.id === item.id) ? (
                        <Button variant="primary" className='btn text-end mx-5' children="Remove Item" onClick={() => removeitem(item)} />
                      ) : (
                        <Button variant="outline-primary" className='btn text-end mx-5' children="Add to Cart" onClick={() => Addme(item)} />

                      )}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )
      }
      
    </div>
    {loading !== false ? "":<Footer />}
    </>
  )
}
const Spinn = () => (
  <div class="d-flex justify-content-center mt-4">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
)
export default Home














