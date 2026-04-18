import React from 'react';

const RoomCard = ({ id, name, price, description, image, isSelected, onToggle }) => {

  return (
    <div className="room-card">
      <div className="room-image-container">
        <img src={image} alt={name} className="room-image" />
      </div>
      
      <div className="room-details">
        <h3 style={{ color: '#ff69b4' }}>{name}</h3>
        <p>{description}</p>
        
        <div className="price-info" style={{ margin: '15px 0' }}>
          <span style={{ 
            fontSize: '1.4rem', 
            fontWeight: 'bold', 
            color: '#ff69b4' 
          }}>
            Ціна: {price} грн
          </span>
        </div>

        <button 
          className={isSelected ? "remove-btn" : "book-btn"} 
          onClick={() => onToggle(id)}
        >
          {isSelected ? "Видалити" : "Забронювати"}
        </button>
      </div>
    </div>
  );
};

export default RoomCard;