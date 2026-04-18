const RoomCard = ({ id, name, price, description, image, isSelected, onToggle }) => {
  return (
    <div className={`room-card ${isSelected ? 'selected' : ''}`}>
      <div className="room-image-container">
        <img src={image} alt={name} className="room-image" />
      </div>
      
      <div className="room-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="room-price">Ціна: {price}</div>
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