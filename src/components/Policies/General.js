import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { BsList } from 'react-icons/bs'
import './Policies.css'
function General() {
  return (
    <div>
      <div
        className="offcanvas offcanvas-top h-100"
        tabIndex="-1"
        id="CollapsedContent"
        aria-labelledby="CollapsedContentLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="CollapsedContentLabel">General</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="general mt-2">
            <li>
              <NavLink to="guidelines-policies">
                Guidelines and Policies
              </NavLink>
            </li>
            <li>
              <NavLink to="privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="terms-of-service">Terms of Service</NavLink>
            </li>
            <li>
              <NavLink to="api-policy">API Policy</NavLink>
            </li>
            <li>
              <NavLink to="csr">CSR</NavLink>
            </li>
            <li>
              <NavLink to="licence-and-registration">
                License and Registration
              </NavLink>
            </li>
            <li>
              <NavLink to="security">Security</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="row m-0 p-0">
        <div
          className="col-lg-3 col-md-3 navbar-expand-md"
          style={{ borderRight: '1px solid #ddd' }}
        >
          <div className="">
            <a
              data-bs-toggle="offcanvas"
              className="navbar-toggler toggler"
              href="#CollapsedContent"
              role="button"
              aria-controls="CollapsedContent"
            >
              <span className="icon">
                <BsList />
              </span>
            </a>
            <ul className="general mt-2 d-md-inline d-none list">
              <li>
                <NavLink to="guidelines-policies">
                  Guidelines and Policies
                </NavLink>
              </li>
              <li>
                <NavLink to="privacy-policy">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="terms-of-service">Terms of Service</NavLink>
              </li>
              <li>
                <NavLink to="api-policy">API Policy</NavLink>
              </li>
              <li>
                <NavLink to="csr">CSR</NavLink>
              </li>
              <li>
                <NavLink to="licence-and-registration">
                  License and Registration
                </NavLink>
              </li>
              <li>
                <NavLink to="security">Security</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="row col-lg-9 col-md-12 ">
          <div className="container content-data">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default General
