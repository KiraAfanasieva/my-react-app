import RoomCard from './RoomCard';

const Main = () => {
  const rooms = [
    { id: 1, name: "Стандарт", price: "1500 грн", description: "Затишний номер для двох з усіма зручностями." },
    { id: 2, name: "Люкс", price: "3500 грн", description: "Просторий номер з видом на море та власною терасою." },
    { id: 3, name: "Президентський", price: "8500 грн", description: "Найкращий вибір: 3 кімнати, джакузі та персональний сервіс." }
  ];

  return (
    <main className="main-content">
      <h1>Ласкаво просимо до нашого готелю!</h1>
      <p>Оберіть свій ідеальний відпочинок:</p>

      {}
      <div className="rooms-container">
        {rooms.map((room) => (
          <RoomCard 
            key={room.id} 
            name={room.name} 
            price={room.price} 
            description={room.description} 
          />
        ))}
      </div>
    </main>
  );
};

export default Main;