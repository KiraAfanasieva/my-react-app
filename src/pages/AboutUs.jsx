import React from 'react';

const AboutUs = () => {
  return (
    <main className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div style={{ 
        textAlign: 'center', 
        color: '#ff69b4', 
        maxWidth: '800px', 
        padding: '20px',
        lineHeight: '1.6'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>✨ Ваш найкращий готель ✨</h1>
        
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Ласкаво просимо до HOTEL - місця, де мрії стають реальністю! 🌸
        </p>
        
        <div style={{ fontSize: '1.2rem', marginTop: '20px' }}>
          <p> Ми створили цей простір для тих, хто цінує комфорт, стиль та магічну атмосферу.</p>
          <p> Кожен наш номер - це окремий всесвіт затишку, наповнений любов'ю до деталей.</p>
          <p> Наша місія: перетворити вашу відпустку на незабутню казку, де ви - головний герой.</p>
        </div>

        <p style={{ fontSize: '2rem', marginTop: '30px' }}>
          ✨💖🏩✨
        </p>
      </div>
    </main>
  );
};

export default AboutUs;