import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>HOTEL</Link>
        
        <nav className="header-nav">
          <ul className="nav-menu">
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/about">Про нас</Link></li>
            <li><Link to="/contacts">Контакти</Link></li>
          </ul>

          <div className="cart-icon">
            🛒 Кошик: {cartCount}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;