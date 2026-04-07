const RoomCard = ({ name, price, description }) => {
  return (
    <div className="room-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="room-price">Ціна: <span>{price}</span></div>
      <button className="book-btn">Забронювати</button>
    </div>
  );
};

export default RoomCard;
