import { useState } from 'react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home'); // Default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <div className="container-fluid">
        {/* Logo Replaced with "Personal Finance Dashboard" */}
        <a className="navbar-brand" href="#">
          Personal Finance Dashboard
        </a>

        {/* Navbar Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'Home' ? 'active' : ''}`}
                onClick={() => handleTabClick('Home')}
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'Features' ? 'active' : ''}`}
                onClick={() => handleTabClick('Features')}
                href="#"
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'Pricing' ? 'active' : ''}`}
                onClick={() => handleTabClick('Pricing')}
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'FAQs' ? 'active' : ''}`}
                onClick={() => handleTabClick('FAQs')}
                href="#"
              >
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'About' ? 'active' : ''}`}
                onClick={() => handleTabClick('About')}
                href="#"
              >
                About
              </a>
            </li>
          </ul>

          {/* Search Bar, Login, and Sign-up Buttons */}
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="btn btn-outline-light me-2" type="button">
              Login
            </button>
            <button className="btn btn-warning btn-signup" type="button">
              Sign-up
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
