import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Logo Section */}
        <div className="d-flex align-items-center gap-2">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "40px",
              height: "40px",
              borderRadius:"30%",
              background: "linear-gradient(to right, #f3904f, #ffb75e)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              className="bi bi-calendar4"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
            </svg>
          </div>
          <span className="fw-bold fs-5 text-orange">MandapamBook</span>
        </div>

        {/* Nav Links */}
        <ul className="navbar-nav flex-row gap-4 align-items-center mb-0">
          <li className="nav-item">
            <Link className="nav-link text-secondary fw-medium" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary fw-medium" to="/browse">Browse Venues</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary fw-medium" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary fw-medium" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary fw-medium" to="/contact">Contact</Link>
          </li>

          {/* Favorites with Icon */}
          <li className="nav-item d-flex align-items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.81 2.834 3.993 6.286 6.357 3.452-2.364 5.365-4.547 6.286-6.357.955-1.885.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
            <Link className="nav-link text-dark fw-medium" to="/favorites">Favorites</Link>
          </li>

          {/* Login with Icon */}
          <li className="nav-item d-flex align-items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" className="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path fillRule="evenodd" d="M8 9a5 5 0 0 0-4.546 2.916C2.383 13.59 3.918 15 8 15s5.617-1.41 4.546-3.084A5 5 0 0 0 8 9z"/>
            </svg>
            <Link className="nav-link text-dark fw-medium" to="/login">Login</Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div>
          <Link
            to="/list-venue"
            className="btn text-white fw-semibold"
            style={{
              background: "linear-gradient(to right, #f3904f, #ffb75e)",
              borderRadius: "10px",
              padding: "8px 16px"
            }}
          >
            List Your Venue
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
