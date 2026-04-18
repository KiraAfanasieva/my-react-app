import React from 'react';
import { useParams, Link } from 'react-router-dom';

const RoomDetail = () => {
  const { id } = useParams();

  const roomNames = {
    "1": "Стандарт",
    "2": "Люкс",
    "3": "Президентський"
  };

  const name = roomNames[id] || "Кімната не знайдена";

  return (
    <main className="main-content">
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2 style={{ color: '#ff69b4', fontSize: '2rem' }}>Ви обрали номер: {name}</h2>
        <p style={{ margin: '20px 0' }}>Тут ви можете побачити детальні характеристики для ID: {id}</p>
        <Link to="/catalog" className="book-btn" style={{ textDecoration: 'none', display: 'inline-block', width: 'auto', padding: '10px 30px' }}>
          Назад до каталогу
        </Link>
      </div>
    </main>
  );
};

export default RoomDetail;