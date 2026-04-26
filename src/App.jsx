import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';
import Spinner from './components/Spinner';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import AboutUs from './pages/AboutUs';
import RoomDetail from './pages/RoomDetail';
import Contacts from './pages/Contacts'; 

import './App.css';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('hotel_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('hotel_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleCart = (id) => {
    setCartItems(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  if (isLoading) return <Spinner />;

  return (
    <Router>
      <div className="app-container">
        <Header cartCount={cartItems.length} />
        <PromoBanner />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog cartItems={cartItems} onToggleCart={toggleCart} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/room/:id" element={<RoomDetail />} />
          <Route path="/contacts" element={<Contacts />} /> 
        </Routes>

        <Footer />
      </div>
    </Router>
  );
} 

export default App;
