const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {}
        <div className="logo">Hotel</div>
        
        {}
        <nav>
          <ul className="nav-menu">
            <li><a href="#">Головна</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Про нас</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;