import React, { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Ім'я обов'язкове";
    if (!formData.email.includes('@')) {
      newErrors.email = "Email має містити символ '@'";
    }
    
    if (formData.message.length < 10) {
      newErrors.message = "Повідомлення має бути не коротшим за 10 символів";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validate()) {
      console.log("Дані відправлено:", formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main className="main-content" style={{ padding: '50px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#ff69b4', textAlign: 'center' }}>Зворотний зв'язок</h2>
      
      {isSubmitted ? (
        <div style={{ color: 'green', textAlign: 'center', fontSize: '1.2rem' }}>
          ✨ Дякуємо! Ваше повідомлення надіслано.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label>Ваше ім'я:</label>
            <input 
              type="text" name="name" value={formData.name} onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            {errors.name && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.name}</span>}
          </div>

          <div>
            <label>Email:</label>
            <input 
              type="email" name="email" value={formData.email} onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            {errors.email && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email}</span>}
          </div>

          <div>
            <label>Повідомлення:</label>
            <textarea 
              name="message" value={formData.message} onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px' }}
            />
            {errors.message && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.message}</span>}
          </div>

          <button type="submit" className="book-btn" style={{ cursor: 'pointer' }}>Відправити</button>
        </form>
      )}
    </main>
  );
};

export default Contacts;