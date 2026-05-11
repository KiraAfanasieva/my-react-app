import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RoomCard from '../components/RoomCard';

const Catalog = ({ cartItems, onToggleCart }) => {
  const [rooms, setRooms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    axios.get('http://localhost:8000/api/rooms')
      .then(res => setRooms(res.data))
      .catch(err => console.error("Помилка завантаження номерів:", err));

    axios.get('http://localhost:8000/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error("Помилка завантаження категорій:", err));
  }, []);

  const filteredRooms = selectedCategory === 'all' 
    ? rooms 
    : rooms.filter(room => room.room_type === selectedCategory);

  return (
    <main className="main-content">
      <div className="filter-bar d-flex justify-content-center gap-2 mb-5">
  <button 
    className={`btn ${selectedCategory === 'all' ? 'btn-pink' : 'btn-outline-pink'}`} 
    onClick={() => setSelectedCategory('all')}
  >
    ВСІ
  </button>
  {categories.map(cat => (
    <button 
      key={cat} 
      className={`btn ${selectedCategory === cat ? 'btn-pink' : 'btn-outline-pink'}`}
      onClick={() => setSelectedCategory(cat)}
    >
      {cat.toUpperCase()}
    </button>
  ))}
</div>

      <div className="rooms-container">
        {filteredRooms.map(room => (
          <RoomCard 
            key={room.room_id}
            id={room.room_id}
            name={room.room_type.toUpperCase() + " №" + room.room_number}
            price={room.room_price}
            description={`Місткість: ${room.room_capacity} осіб. Комфортний номер готелю.`}
            image={"https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"} 
            isSelected={cartItems.includes(room.room_id)} 
            onToggle={onToggleCart}
          />
        ))}
      </div>
    </main>
  );
};

export default Catalog;