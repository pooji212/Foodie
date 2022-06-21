import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Recommended from './Recommended'
import FamilyJumboPacks from './Family_jumbo_packs'
import RiceBiryani from './Rice_biryani'
import Pizza from './Pizza'
import Burgers from './Burgers'
import Sandwiches from './Sandwiches'
import Shawarma from './Shawarma'
import Puff from './Puff'
import Cakes from './Cakes'
import Pastries from './Pastries'
import PremiumCakes from './Premium_cakes'
import Biscuits from './Biscuits'
import Deserts from './Deserts'
import Beverages from './Beverages'
import Checkout from '../../Checkout.js/Checkout';
import ShahGhouseHotelAndRestaurant from './ShahGhouseHotelAndRestaurant.json'
function OrderOnline({ cart, addToCart, removeItem }) {
    return (
        <div className='orderonline'>
            <div className='row'>
                <div className='col col-sm-5 col-md-3'>
                    <ul className="wrapper_left list-group">
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='recommended'>Recommended ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Recommended).length})</NavLink>
                        </li>
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='family_jumbo_packs'>Family & Jumbo Packs ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Family_jumbo_packs).length})</NavLink>
                        </li>
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='rice_biryani'>Rice & Biryani ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Rice_biryani).length})</NavLink>
                        </li>
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='pizza'>Pizza ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Pizza).length})</NavLink>
                        </li>
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='burgers'>Burgers ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Burgers).length})</NavLink>
                        </li>
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='sandwiches'>Sandwiches ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Burgers).length})</NavLink>
                        </li>
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='shawarma'>Shawarma ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Shawarma).length})</NavLink>
                        </li>
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='puff'>Puff ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Puff).length})</NavLink>
                        </li>
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='cakes'>Cakes ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Cakes).length})</NavLink>
                        </li>
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='pastries'>Pastries ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Pastries).length})</NavLink>
                        </li>
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='premium_cakes'>Premium Cakes ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Premium_cakes).length})</NavLink>
                        </li>
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='biscuits'>Biscuits ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Biscuits).length})</NavLink>
                        </li>
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='deserts'>Deserts ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Deserts).length})</NavLink>
                        </li>
                        <li className="menu">
                            <NavLink className='navlink list-group-item' to='beverages'>Beverages ({Object.keys(ShahGhouseHotelAndRestaurant.foodMenu[0].Beverages).length})</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='col col-sm-7 col-md-9 wrapper_right'>
                    <Routes>
                        <Route path='recommended' element={<Recommended addToCart={addToCart} />} />
                        <Route path='' element={<Navigate replace to="recommended" />} />
                        <Route path='family_jumbo_packs' element={<FamilyJumboPacks addToCart={addToCart} />} />
                        <Route path='rice_biryani' element={<RiceBiryani addToCart={addToCart} />} />
                        <Route path='pizza' element={<Pizza addToCart={addToCart} />} />
                        <Route path='burgers' element={<Burgers addToCart={addToCart} />} />
                        <Route path='sandwiches' element={<Sandwiches addToCart={addToCart} />} />
                        <Route path='shawarma' element={<Shawarma addToCart={addToCart} />} />
                        <Route path='puff' element={<Puff addToCart={addToCart} />} />
                        <Route path='cakes' element={<Cakes addToCart={addToCart} />} />
                        <Route path='pastries' element={<Pastries addToCart={addToCart} />} />
                        <Route path='premium_cakes' element={<PremiumCakes addToCart={addToCart} />} />
                        <Route path='biscuits' element={<Biscuits addToCart={addToCart} />} />
                        <Route path='deserts' element={<Deserts addToCart={addToCart} />} />
                        <Route path='beverages' element={<Beverages addToCart={addToCart} />} />
                    </Routes>
                </div>

                {
                    cart.length !== 0 &&
                    <div>
                        <Checkout cart={cart} removeItem={removeItem} />
                    </div>
                }

            </div>

        </div>
    );
}

export default OrderOnline;