import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Footer from '../Footer/Footer'
// import { MdFastfood } from 'react-icons/md'
import { BsList } from 'react-icons/bs'
import './Header.css'
import LOGIN from '../Login/Login'
import SIGNUP from '../SignUp/SignUp'
import Home from '../Home/Home'
import ShahGhouseHotelAndRestaurant from '../Restaurants/ShahGhouseHotelAndRestaurant/ShahGhouseHotelAndRestaurant'
import CornerBakers from '../Restaurants/CornerBakers/CornerBakers'
import Mehfil from '../Restaurants/Mehfil/Mehfil'
import LuckyRestaurant from '../Restaurants/Lucky_Restaurant/Lucky_Restaurant'
import Cart from '../Cart/Cart'
import { useState } from 'react'
import BrandImg from '../../images/brand-img.png'

function Header() {
  const [cart, setCart] = useState([])
  const addToCart = (item) => {
    //if item not present in the cart then the item is added
    if (cart.indexOf(item) === -1) {
      setCart([...cart, item])
    }
  }

  const removeItem = (id) => {
    const arr = cart.filter((obj) => obj.id !== id)
    setCart(arr)
  }

  return (
    <div>
      {/* Links to routes */}

      <nav className="navbar navbar-expand-sm navbar-white bg-white">
        <div className="container">
          <span
            className="navbar-brand"
            style={{ paddingTop: '0', marginRight: '8px' }}
          >
            <img src={BrandImg} className="brand-img" alt=''/>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon">
              <BsList />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <input
              type="search"
              className="form-control search-box"
              placeholder="Search here.."
            />
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <span
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Login
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                >
                  Sign Up
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* login modal */}
      <div
        className="modal animate__animated animate__fadeIn animate__faster"
        id="loginModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          style={{ maxWidth: '450px' }}
        >
          <div className="modal-content">
            <div className="modal-body">
              <LOGIN />
            </div>
          </div>
        </div>
      </div>

      {/* signup modal */}
      <div
        className="modal animate__animated animate__fadeIn animate__faster"
        id="signupModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          style={{ maxWidth: '450px' }}
        >
          <div className="modal-content">
            <div className="modal-body">
              <SIGNUP />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {/* define routes  for its children */}

        <Routes className="">
          <Route path="" element={<Home />} />
          <Route
            path="/Shah-Ghouse-Hotel-And-Restaurant/*"
            element={
              <ShahGhouseHotelAndRestaurant
                cart={cart}
                addToCart={addToCart}
                removeItem={removeItem}
              />
            }
          />
          <Route
            path="/Lucky-Restaurant/*"
            element={
              <LuckyRestaurant
                cart={cart}
                addToCart={addToCart}
                removeItem={removeItem}
              />
            }
          />
          <Route
            path="/Corner-Bakers/*"
            element={
              <CornerBakers
                cart={cart}
                addToCart={addToCart}
                removeItem={removeItem}
              />
            }
          />
          <Route
            path="/Mehfil/*"
            element={
              <Mehfil
                cart={cart}
                addToCart={addToCart}
                removeItem={removeItem}
              />
            }
          />
          <Route
            path="/Cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Header
