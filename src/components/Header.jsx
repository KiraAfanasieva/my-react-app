const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">HOTEL</div>
        
        <nav className="header-nav">
          <ul className="nav-menu">
            <li><a href="#">Головна</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Про нас</a></li>
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