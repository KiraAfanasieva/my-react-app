import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import PromoBanner from './components/PromoBanner';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleCart = (id) => {
    setCartItems(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="app-container">
      <Header cartCount={cartItems.length} />
      <PromoBanner />
      <Main cartItems={cartItems} onToggleCart={toggleCart} />
      <Footer />
    </div>
  );
}

export default App;