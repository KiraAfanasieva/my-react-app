import React from 'react';

const Home = () => {
  return (
    <main className="main-content" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '70vh',
      textAlign: 'center' 
    }}>
      <h1 style={{ 
        color: '#ffffff', 
        fontSize: '4.5rem', 
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        textShadow: '0 4px 15px rgba(255, 105, 180, 0.4), 0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '10px'
      }}>
        Вітаємо у нашому готелі!
      </h1>

      <p style={{ 
        color: '#ffffff', 
        fontSize: '1.8rem', 
        fontWeight: '700',
        letterSpacing: '1px',
        textShadow: '0 2px 8px rgba(255, 105, 180, 0.3)',
        marginTop: '0'
      }}>
        Знайдіть свій ідеальний відпочинок у нас.
      </p>
    </main>
  );
};

export default Home;