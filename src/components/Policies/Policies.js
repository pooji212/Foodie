import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { BsList } from 'react-icons/bs'
import './Policies.css'
import BrandImg from '../../images/brand-img.png'
function Policies() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-white bg-white sticky-top">
        <div className="container-fluid p-1">
          <a
            data-bs-toggle="offcanvas"
            className="navbar-toggler"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <span className="icon">
              <BsList />
            </span>
          </a>
          <span
            className="navbar-brand me-5"
            style={{ paddingTop: '0', marginRight: '8px' }}
          >
            <img src={BrandImg} className="brand-img" alt=''/>
          </span>
          <span></span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item p-0">
                <NavLink className="nav-link" to="general">
                  General
                </NavLink>
              </li>
              <li className="nav-item p-0">
                <NavLink className="nav-link" to="online-ordering">
                  Online Ordering
                </NavLink>
              </li>
              <li className="nav-item p-0">
                <NavLink className="nav-link" to="zomato-dining">
                  Zomato Dining
                </NavLink>
              </li>
              <li className="nav-item p-0">
                <NavLink className="nav-link" to="instant-food">
                  Instant Food
                </NavLink>
              </li>
              <li className="nav-item p-0">
                <NavLink className="nav-link" to="zpl">
                  ZPL
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <img src={BrandImg} className="brand-img" alt=''/>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav me-auto">
            <li className="nav-item p-0">
              <NavLink className="nav-link" to="general">
                General
              </NavLink>
            </li>
            <li className="nav-item p-0">
              <NavLink className="nav-link" to="online-ordering">
                Online Ordering
              </NavLink>
            </li>
            <li className="nav-item p-0">
              <NavLink className="nav-link" to="zomato-dining">
                Zomato Dining
              </NavLink>
            </li>
            <li className="nav-item p-0">
              <NavLink className="nav-link" to="instant-food">
                Instant Food
              </NavLink>
            </li>
            <li className="nav-item p-0">
              <NavLink className="nav-link" to="zpl">
                ZPL
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default Policies
