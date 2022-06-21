import React,{useState,useEffect} from 'react'
import './Cart.css'
import EmptyCart from '../../images/empty_cart.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart({cart,setCart}) 
{
  const [TotalCost, setTotalCost] = useState(0);
  // const [quantity, setQuantity] = useState('1');
  const DeleteItem = (id) =>
  {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    TotalPrice();
  }

  const changeQuantity = (item,digit) =>
  {
    const index = cart.indexOf(item)
    const arr = cart;
    arr[index].quantity += digit;

    if (arr[index].quantity === 0) arr[index].quantity = 1;
    setCart([...arr]);    
  }

  const TotalPrice = () => {
    let totalPrice = 0;
    cart.map((item) => (totalPrice=totalPrice + item.quantity*item.cost));
    setTotalCost(totalPrice);    
  };

  useEffect(() => {
    TotalPrice();
  });

  const orderNow = ()=>
  {    
    toast.success('Ordered Successfully', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className='container mt-3'>
      <table className='table table-responsive table-borderless'>
        <tbody>
          <tr>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>          
          {            
            cart.map((item)=>(
              <tr key={item.id}>
                <td><img src={item.image} alt=''/></td>
                <td>{item.name}</td>
                <td>₹{item.cost}</td>
                <td>
                  <div className='quantity'>
                    <button className='btn' onClick={()=>changeQuantity(item,-1)}>-</button>
                    <span className='count'> {item.quantity} </span>
                    <button className='btn' onClick={() => changeQuantity(item,1)}>+</button>
                  </div>
                </td>
                <td><button className='btn btn-danger' onClick={()=>DeleteItem(item.id)}>Remove</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {
        cart.length === 0 ? 
        <div className='text-center'>
          <img src={EmptyCart} className="empty-cart-img mt-2" alt=''/>
          <h3 className='text-danger mt-3'>Cart is Empty</h3>
        </div>
        :
      <div className='px-5'>
        <hr />
        <div className='d-flex justify-content-between'>
          <h4>Total cost</h4>
          <h4>₹{ TotalCost }</h4>
        </div>
        <div className='mt-4 text-center'>
          <button className='btn btn-success' onClick={()=>orderNow()}>Order Now</button>
        </div>
      </div>
      }
      

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
          rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  )
}

export default Cart


