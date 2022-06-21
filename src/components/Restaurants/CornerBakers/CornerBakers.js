import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import '../Restaurants.css'
import OrderOnline from './OrderOnline';
import Overview from './Overview'
import Review from './Review'
import Photos from './Photos'
import Menu from './Menu'
import CB from './CornerBakers.json'

function CornerBakers({ cart, addToCart, removeItem }) {
    return (
        <div className='container bg-white'>
            <div className='sticky-top bg-white'>
                <h1 className='mt-3'>{CB.restaurantName}</h1>
                <div className="m-0 text-muted">{CB.foodStyle}</div>
                <div className="m-0 text-muted">{CB.location}</div>
                <div><span className="m-0 text-danger" style={{ marginLeft: '10px' }}>Open Now : </span>{CB.openingTime} - {CB.closingTime} (Today)</div>

                <nav className="pb-1">
                    <div className="p-0 container-fluid">
                        <ul className="main_menu">
                            <li className="main_menu_item" >
                                <NavLink className='nav_link' to='overview'>Overview</NavLink>
                            </li>
                            <li className="main_menu_item" >
                                <NavLink className='nav_link' to='orderonline'>Order Online</NavLink>
                            </li>
                            <li className="main_menu_item" >
                                <NavLink className='nav_link' to='review'>Review</NavLink>
                            </li>
                            <li className="main_menu_item" >
                                <NavLink className='nav_link' to='photos'>Photos</NavLink>
                            </li>
                            <li className="main_menu_item" >
                                <NavLink className='nav_link' to='menu'>Menu</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <Routes className=''>
                <Route path='overview' element={<Overview />} />
                <Route path='orderonline/*' element={<OrderOnline cart={cart} addToCart={addToCart} removeItem={removeItem} />} />
                <Route path='' element={<Navigate replace to="orderonline/" />} />
                <Route path='review' element={<Review />} />
                <Route path='photos' element={<Photos />} />
                <Route path='menu' element={<Menu />} />
            </Routes>

        </div>
    );
}

export default CornerBakers