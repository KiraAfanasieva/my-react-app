import React from 'react';
import RoomCard from '../components/RoomCard';

const Catalog = ({ cartItems, onToggleCart }) => {
  const rooms = [
    { 
      id: 1, 
      name: "Стандарт", 
      price: 1500,
      description: "Затишний номер для двох з усіма зручностями.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 2, 
      name: "Люкс", 
      price: 3500,
      description: "Просторий номер з видом на море та власною терасою.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 3, 
      name: "Президентський", 
      price: 8500,
      description: "Розкішні 3 кімнати, джакузі та персональний сервіс.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <main className="main-content">
      <div className="rooms-container">
        {rooms.map(room => (
          <RoomCard 
            key={room.id} 
            {...room} 
            isSelected={cartItems.includes(room.id)} 
            onToggle={onToggleCart}
          />
        ))}
      </div>
    </main>
  );
};

export default Catalog;