import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const cities = [
    "Chennai",
    "Bangalore",
    "Mumbai",
    "Hyderabad",
    "Pune",
    "Coimbatore",
    "Kochi",
    "Madurai",
    "Trichy",
    "Salem",
    "Vellore",
    "Tirunelveli",
  ];

  return (
    <footer className="bg-light text-dark pt-5 pb-4 px-4">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center gap-2">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "30%",
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
            <p className="mt-3 text-secondary">
              India's leading platform for booking mandapams, marriage halls,
              and event venues. Find, compare, and book the perfect venue for
              your special day.
            </p>
            <p>
              <FaPhoneAlt className="me-2" />
              +91 9876543210
            </p>
            <p>
              <FaEnvelope className="me-2" />
              support@mandapambook.com
            </p>
            <p>
              <FaMapMarkerAlt className="me-2" />
              Chennai, Tamil Nadu, India
            </p>
            <div className="d-flex gap-2 mt-3">
              <button className="btn btn-outline-secondary btn-sm">
                <FaFacebookF />
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <FaTwitter />
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <FaInstagram />
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <FaLinkedinIn />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6>
              <p>Quick Links</p>
            </h6>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">Browse Venues</li>
              <li className="mb-2">Wedding Halls</li>
              <li className="mb-2">Banquet Halls</li>
              <li className="mb-2">Party Venues</li>
              <li className="mb-2">Conference Halls</li>
            </ul>
          </div>

          {/* For Venue Owners */}
          <div className="col-md-3 mb-4">
            <h6>
              <p>For Venue Owners</p>
            </h6>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">List Your Venue</li>
              <li className="mb-2">Vendor Dashboard</li>
              <li className="mb-2">Pricing Plans</li>
              <li className="mb-2">Marketing Tools</li>
              <li className="mb-2">Support</li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h6>
              <p>Support</p>
            </h6>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Booking Guide</li>
              <li className="mb-2">Cancellation Policy</li>
              <li className="mb-2">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div
          className="row align-items-center my-4 py-3 rounded-2"
          style={{ border: "1px solid #f2efe9" }}
        >
          <div className="col-md-6">
            <h6>
              <strong>Stay Updated</strong>
            </h6>
            <p>Get the latest venue deals and offers directly in your inbox</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control me-2 h-25 w-75"
              />
              <button
                className="btn text-white h-25"
                style={{
                  background: "linear-gradient(to right, #f3904f, #ffb75e)",
                }}
              >
                Subscribe →
              </button>
            </div>
          </div>
        </div>

        {/* Cities */}
        <div>
          <h6>
            <p>We're Available In</p>
          </h6>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {cities.map((city) => (
              <span
                key={city}
                className="badge bg-light border text-dark px-3 py-2"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-top pt-3 mt-4 d-flex flex-column flex-md-row justify-content-between align-items-center text-muted ">
          <small>© 2024 MandapamBook. All rights reserved.</small>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <a href="#" className="text-decoration-none text-muted">
              Privacy Policy
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Terms of Service
            </a>
            <a href="#" className="text-decoration-none text-muted">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
