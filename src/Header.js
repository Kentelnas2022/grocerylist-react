import React, { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import "./App.css";

export default function Header({ cartCount, onSearch }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="profile-icon-container">
          <FaUser className="icon" onClick={toggleDropdown} />
          {isDropdownVisible && (
            <div className="dropdown-menu">
              <a href="Logout">Logout</a>
            </div>
          )}
        </div>
      </div>
      <div className="header-center">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          onChange={handleInputChange}
        />
      </div>
      <div className="header-right">
        <div className="cart-icon-container">
          <FaShoppingCart className="icon" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
}
